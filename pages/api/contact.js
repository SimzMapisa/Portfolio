import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, username, phone, message } = req.body;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configure the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "simbarashemapisa66@gmail.com",
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nCompany: ${username}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
