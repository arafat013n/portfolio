const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendMail = require("./src/mailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = `
        Name: ${name}\n
        Email: ${email}\n
        Subject: ${subject}\n
        Message: ${message}
    `;

    try {
        const info = await sendMail(
            process.env.RECEIVER_EMAIL,
            subject,
            mailOptions
        );
        console.log("Email sent successfully:", info.messageId);
        res.status(200).json({ message: "Email sent successfully", info });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Error sending email", error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});