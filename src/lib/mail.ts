import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/new-verification?token=${token}`;

    await resend.emails.send({
        from: "contact@globit.me",
        to: email,
        subject: "Confirma tu correo",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h1>¡Bienvenido a Globit!</h1>
                <p>Gracias por registrarte. Por favor confirma tu correo haciendo clic en el siguiente enlace:</p>
                <a href="${confirmLink}" style="color: #007bff; text-decoration: none;">Confirmar correo</a>
                <br><br>
                <p>Si no has solicitado esta acción, puedes ignorar este correo.</p>
                <p>Atentamente,</p>
                <p>El equipo de Globit</p>
            </div>
        `,
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