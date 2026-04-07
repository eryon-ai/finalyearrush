import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, projectType, description } = body;

    // Basic validation
    if (!fullName || !email || !projectType || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('📋 [CONTACT — SMTP not configured, logging only]', {
        fullName, email, phone, projectType, description,
        receivedAt: new Date().toISOString(),
      });
      // Simulate success if env vars are missing so the UI isn't broken locally
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 32px 40px;">
          <p style="margin: 0; font-size: 13px; color: #00b4d8; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">New Project Inquiry</p>
          <h1 style="margin: 8px 0 0; font-size: 24px; color: #f8fafc; font-weight: 800;">Final Year Rush</h1>
        </div>
        <div style="padding: 32px 40px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; width: 140px;">
                <p style="margin: 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">Name</p>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                <p style="margin: 0; font-size: 15px; color: #0f172a; font-weight: 600;">${fullName}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                <p style="margin: 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">Email</p>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                <a href="mailto:${email}" style="margin: 0; font-size: 15px; color: #0066ff; font-weight: 600; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                <p style="margin: 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">Phone</p>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                <p style="margin: 0; font-size: 15px; color: #0f172a;">${phone}</p>
              </td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                <p style="margin: 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">Project Type</p>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
                <p style="margin: 0; font-size: 15px; color: #0f172a; font-weight: 600;">${projectType}</p>
              </td>
            </tr>
          </table>

          <!-- Message -->
          <div style="margin-top: 24px; background: #f8fafc; border-radius: 10px; padding: 20px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">Project Details</p>
            <p style="margin: 0; font-size: 15px; color: #374151; line-height: 1.7;">${description.replace(/\n/g, '<br/>')}</p>
          </div>
          
          <!-- Reply CTA -->
          <div style="margin-top: 28px; text-align: center;">
             <a href="mailto:${email}?subject=Re: Your Inquiry to Final Year Rush"
                style="display: inline-block; background: linear-gradient(135deg, #F2613F, #F5A623); color: #fff; font-weight: 700; font-size: 14px; padding: 13px 28px; border-radius: 10px; text-decoration: none;">
                Reply to ${fullName}
             </a>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Final Year Rush Form" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_TO_EMAIL || 'connect@eryonai.com',
      replyTo: email,
      subject: `🚀 New Lead: ${projectType} — ${fullName}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Mail send error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
