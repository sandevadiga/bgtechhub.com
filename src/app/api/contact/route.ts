import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Owner email (fixed)
const CONTACT_EMAIL = 'rajeshwariy202@gmail.com';

export async function POST(request: Request) {
  try {
    // 1. Connect to Database
    await connectDB();

    const data = await request.json();
    const { name, email, message, type, phone, budget } = data;

    // 2. Save to MongoDB
    const newContact = await Contact.create({
      name,
      email,
      message,
      type,
      phone,
      budget,
    });

    // 3. Send email to OWNER via Resend
    const { data: emailData, error: sendError } =
      await resend.emails.send({
        from: 'BG THUB Form <onboarding@resend.dev>',
        to: [CONTACT_EMAIL],              // ✅ Always send to owner
        replyTo: email,                  // ✅ Owner can reply to user
        subject: `New ${type || 'Contact'} Submission - ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #0f5c20;">New Form Submission</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Type:</strong> ${type || 'General Contact'}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
            <hr style="border: 0; border-top: 1px solid #eee;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">${message}</p>
            <hr style="border: 0; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #999;">
              Submitted on: ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      });

    if (sendError) {
      console.error('Resend API Error:', sendError);

      if (
        sendError.name === 'validation_error' &&
        sendError.message.includes('own email address')
      ) {
        return NextResponse.json(
          {
            error:
              'Resend free plan only allows sending to your own email. Please verify rajeshwariy202@gmail.com in Resend dashboard.',
            savedData: newContact, // Data is still saved even if email fails
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