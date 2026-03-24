import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})
export async function sendotp(email: string, otp: string) {
    const mailOption = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "your OTP don't share this with anyone",
        text: `Your OTP is ${otp}`
    }
    transporter.sendMail(mailOption)
}