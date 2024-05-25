import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({ 
        message: "Correo inválido" 
    }),
    password: z.string().min(1, { 
        message: "Contraseña inválida" 
    }),
});

export const RegisterSchema = z.object({
    name: z.string().min(1, {
        message: "Nombre inválido"
    }),
    email: z.string().email({ 
        message: "Correo inválido" 
    }),
    password: z.string().min(6, { 
        message: "La contraseña es demasiado débil. Por favor, elige una contraseña más segura con al menos seis caracteres." 
    }),
    repassword: z.string().min(6, {
        message: "La contraseña es demasiado débil. Por favor, elige una contraseña más segura con al menos seis caracteres."
    })
}).refine(data => data.password === data.repassword, {
    message: "Las contraseñas no coinciden",
    path: ['repassword']
});