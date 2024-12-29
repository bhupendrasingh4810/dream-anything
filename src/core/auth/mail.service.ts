import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
// import * as sendgridTransport from 'nodemailer-sendgrid-transport';
@Injectable()
export class MailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        // Create a transporter using your email service provider settings
        this.transporter = nodemailer.createTransport({
            service: 'gmail', // Use 'gmail' or your desired email service
            auth: {
                user: process.env.EMAIL_USER,  // Your email address
                pass: process.env.EMAIL_PASS,  // Your email password or an app-specific password
            },
        });
        //  SendGrid or Mailgun for production applications. These services provide better email deliverability and features such as email templates, analytics.
        // const transporter = nodemailer.createTransport(sendgridTransport({
        //     auth: {
        //       api_key: process.env.SENDGRID_API_KEY,  // Replace with your SendGrid API key
        //     },
        //   }));

    }

    // Method to send a password reset email
    async sendResetPasswordEmail(email: string, resetUrl: string) {
        const mailOptions = {
            from: process.env.EMAIL_USER,  // Sender's email address
            to: email,                     // Recipient's email address
            subject: 'Password Reset Request', // Subject of the email
            text: `You requested a password reset. Click the link below to reset your password:\n\n${resetUrl}`, // Email body
        };

        // Send the email
        await this.transporter.sendMail(mailOptions);
    }
}
