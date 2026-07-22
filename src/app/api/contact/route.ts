import { NextResponse } from 'next/server';
import { getResendClient } from '@/lib/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_NOTIFICATION_EMAIL || 'contact@therapinc.com';
    const sender = process.env.SENDER_EMAIL || 'website@therapinc.com';
    const resend = getResendClient();

    if (process.env.RESEND_API_KEY) {
      const { error } = await resend.emails.send({
        from: `Therapinc Contact Form <${sender}>`,
        to: [recipient],
        subject: `New Contact Inquiry from ${name}`,
        replyTo: email,
        html: `
          <h2>New Website Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${company || 'N/A'}</p>
          <hr/>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      });

      if (error) {
        console.error('Resend Email Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    } else {
      console.log('Mocking contact email dispatch (RESEND_API_KEY not configured):', {
        name,
        email,
        company,
        message,
      });
    }

    return NextResponse.json({ success: true, message: 'Message received successfully!' });
  } catch (err: unknown) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
