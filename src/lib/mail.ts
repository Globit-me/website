import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/new-verification?token=${token}`;

    await resend.emails.send({
        from: "contact@globit.me",
        to: email,
        subject: "Confirma tu correo",
        html: `<p>Para confirmar tu correo, haz click en el siguiente enlace: <a href="${confirmLink}">${confirmLink}</a></p>`,
    });
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${domain}/new-password?token=${token}`;
    
    await resend.emails.send({
        from: "contact@globit.me",
        to: email,
        subject: "Reestablece tu contraseña",
        html: `<p>Para reestablecer tu contraseña, haz click en el siguiente enlace: <a href="${resetLink}">${resetLink}</a></p>`,
    });
}