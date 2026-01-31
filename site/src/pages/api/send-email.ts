import type { APIRoute } from 'astro';
import sgMail from '@sendgrid/mail';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Check if SendGrid API key is available
    if (!process.env.SENDGRID_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'SendGrid API key is not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Set the API key at runtime (not build time)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const formData = await request.formData();
    
    // Extract form data
    const address = formData.get('address') as string;
    const situation = formData.get('situation') as string;
    const timeline = formData.get('timeline') as string;
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const consent = formData.get('consent') as string;

    // Validate required fields
    if (!address || !consent) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate consent is explicitly "on"
    if (consent !== 'on') {
      return new Response(
        JSON.stringify({ error: 'Consent is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!phone && !email) {
      return new Response(
        JSON.stringify({ error: 'Please provide either phone or email' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create email message with configurable env vars
    const msg = {
      to: process.env.TO_EMAIL || 'aaron@aprkc.com',
      from: process.env.FROM_EMAIL || 'info@acepropertieskc.com',
      subject: `New Contact Form Submission - ${address}`,
      text: `
New contact form submission from ACE Properties KC website:

Property Address: ${address}
Situation: ${situation || 'Not specified'}
Timeline: ${timeline || 'Not specified'}

Contact Information:
Name: ${name || 'Not provided'}
Phone: ${phone || 'Not provided'}
Email: ${email || 'Not provided'}

Consent: ${consent === 'on' ? 'Yes' : 'No'}

---
This message was sent from the ACE Properties KC contact form.
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Property Address:</strong> ${address}</p>
<p><strong>Situation:</strong> ${situation || 'Not specified'}</p>
<p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>

<h3>Contact Information:</h3>
<p><strong>Name:</strong> ${name || 'Not provided'}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<p><strong>Email:</strong> ${email || 'Not provided'}</p>
<p><strong>Consent:</strong> ${consent === 'on' ? 'Yes' : 'No'}</p>

<hr>
<p><em>This message was sent from the ACE Properties KC contact form.</em></p>
      `,
    };

    // Send email
    await sgMail.send(msg);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
