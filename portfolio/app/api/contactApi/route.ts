import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export const POST = async (request: Request) => {
    try {
        const {name, email, subject, message} = await request.json()

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Please enter all fields" },
                { status: 400 }
            )
        }

        await resend.emails.send({
            from: `${email}`,
            to: "blundell.gp@gmail.com",
            subject: `${subject}`,
            html: `
                <h1>Portfolio Message</h1>
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
        })

        return NextResponse.json({ success: true})
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        )
    }
}