import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirma tu correo",
        html: `<p>Para confirmar tu correo, haz click en el siguiente enlace: <a href="${confirmLink}">${confirmLink}</a></p>`,
    });
} 

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `http://localhost:3000/new-password?token=${token}`;
    
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reestablece tu contraseña",
        html: `<p>Para reestablecer tu contraseña, haz click en el siguiente enlace: <a href="${resetLink}">${resetLink}</a></p>`,
    });
}