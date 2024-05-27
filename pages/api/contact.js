import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, username, phone, message } = req.body;

    console.log(firstName, lastName, username, phone, message);

    // Configure the transporter
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: "simbadev30@gmail.com",
    //     pass: "atOncemedia2023!",
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 993,
      auth: {
        user: "simbacoderoar.com",
        pass: "atOncemedia2023!",
      },
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error.message);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    // Configure the email options
    const mailOptions = {
      from: "simbacoderoar.com",
      to: "simbdev30@gmail.com",
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
