import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";

// Owner email
const CONTACT_EMAIL = 'rajeshwariy202@gmail.com';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // 1. Connect to Database
    await connectDB();

    const data = await request.json();
    const { name, email, message, type, projectType, phone, budget } = data;

    // 2. Save to MongoDB (projectType included)
    const newContact = await Contact.create({
      name,
      email,
      message,
      type,
      projectType, // <--- Added
      phone,
      budget,
    });

    // 3. Send email to OWNER via Resend
    const { data: emailData, error: sendError } = await resend.emails.send({
      from: 'BG THUB Form <onboarding@resend.dev>',
      to: [CONTACT_EMAIL],
      replyTo: email,
      // Subject now dynamically includes the Project Type
      subject: `New Inquiry: ${projectType || type || 'General'} - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <h2 style="color: #16a34a; border-bottom: 2px solid #f0fdf4; padding-bottom: 10px;">New Form Submission</h2>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
            <p style="margin: 5px 0;"><strong>Project Type:</strong> <span style="background: #f0fdf4; color: #16a34a; padding: 2px 8px; border-radius: 4px; font-weight: bold;">${projectType || 'Not specified'}</span></p>
            <p style="margin: 5px 0;"><strong>Form Source:</strong> ${type || 'General Contact'}</p>
            ${phone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            ${budget ? `<p style="margin: 5px 0;"><strong>Budget:</strong> ${budget}</p>` : ''}
          </div>

          <hr style="border: 0; border-top: 1px solid #eee;">
          
          <h3 style="color: #334155; margin-bottom: 10px;">Message Preview:</h3>
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; color: #475569; line-height: 1.6; white-space: pre-wrap;">
            ${message}
          </div>

          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;">
          
          <p style="font-size: 11px; color: #94a3b8; text-align: center;">
            Submission received on: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    if (sendError) {
      console.error('Resend API Error:', sendError);

      if (sendError.name === 'validation_error' && sendError.message.includes('own email address')) {
        return NextResponse.json(
          {
            error: 'Resend free plan only allows sending to your own email. Please verify rajeshwariy202@gmail.com in Resend dashboard.',
            savedData: newContact,
          },
          { status: 403 }
        );
      }

      return NextResponse.json(
        { error: sendError.message, savedData: newContact },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Success',
      success: true,
      data: newContact
    }, { status: 200 });

  } catch (error: any) {
    console.error('Critical submission error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', success: false },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({
      success: true,
      data: contacts,
    });
  } catch (error: any) {
    console.error('API GET Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}