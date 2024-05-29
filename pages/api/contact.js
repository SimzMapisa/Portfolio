import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;

    console.log(firstName, lastName, email, phone, message);

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      auth: {
        user: "simba@simbacoderoar.com",
        pass: "atOncemedia2023!",
      },
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log("================= This is the error =================");
        console.log(error);
        console.log("================= This is the error =================");
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    const mailOptions = {
      from: "simba@simbacoderoar.com",
      to: "simba@simbacoderoar.com, simbadev30@gmail.com",
      subject: `Email from contact Form - ${firstName} ${lastName}. `,
      html: `<h3>It's ${firstName} - contact me on ${phone} </h3><h4>${email}</h4><p>${message}</p>`,
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
