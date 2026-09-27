const nodemailer = require('nodemailer');

const sendContactNotification = async (contactData) => {
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD, EMAIL_FROM, EMAIL_TO } = process.env;

  if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASSWORD) {
    console.log('ℹ️ Email credentials unconfigured. Skipping email notification dispatch.');
    return { status: 'skipped', reason: 'Unconfigured credentials' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT) || 587,
      secure: Number(EMAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    const recipient = EMAIL_TO || EMAIL_USER;
    const sender = EMAIL_FROM || `"Portfolio Contact Form" <${EMAIL_USER}>`;

    const mailOptions = {
      from: sender,
      to: recipient,
      replyTo: contactData.email,
      subject: `[Portfolio Inquiry] ${contactData.subject} - from ${contactData.name}`,
      text: `
You have received a new contact inquiry from your portfolio website!

Name: ${contactData.name}
Email: ${contactData.email}
Subject: ${contactData.subject}
Date: ${new Date().toLocaleString()}

Message:
--------------------------------------------------
${contactData.message}
--------------------------------------------------
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; borderRadius: 8px;">
          <h2 style="color: #2563eb; margin-top: 0;">New Portfolio Direct Inquiry</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;" />
          <p><strong>From:</strong> ${contactData.name} (&lt;<a href="mailto:${contactData.email}">${contactData.email}</a>&gt;)</p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
          <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap;">${contactData.message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;" />
          <p style="font-size: 12px; color: #6b7280;">This message was submitted via your Personal Portfolio website contact form.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✉️ Email notification sent successfully: ${info.messageId}`);
    return { status: 'sent', messageId: info.messageId };
  } catch (error) {
    console.error(`⚠️ Email dispatch failed: ${error.message}`);
    return { status: 'failed', error: error.message };
  }
};

module.exports = {
  sendContactNotification,
};
