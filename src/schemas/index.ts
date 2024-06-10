import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Correo inválido",
  }),
  password: z.string().min(1, {
    message: "Contraseña inválida",
  }),
});

export const RegisterSchema = z
  .object({
    name: z.string().min(1, {
      message: "Nombre inválido",
    }),
    email: z.string().email({
      message: "Correo inválido",
    }),
    password: z.string().min(6, {
      message:
        "La contraseña es demasiado débil. Por favor, elige una contraseña más segura con al menos seis caracteres.",
    }),
    repassword: z.string().min(6, {
      message:
        "La contraseña es demasiado débil. Por favor, elige una contraseña más segura con al menos seis caracteres.",
    }),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Las contraseñas no coinciden",
    path: ["repassword"],
  });

const today = new Date();
const eighteenYearsAgo = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate()
);

export const profileSchema = z.object({
  dni: z
    .string()
    .min(1, {
      message: "DNI inválido",
    })
    .regex(/^\d+$/, {
      message: "El DNI debe contener solo números",
    }),
  birthday: z.date().refine((date) => date <= eighteenYearsAgo, {
    message: "Debes ser mayor de 18 años",
  }),
  country: z.string().min(1, {
    message: "País inválido",
  }),
  province: z.string().min(1, {
    message: "Provincia inválida",
  }),
  address: z.string().min(1, {
    message: "Dirección inválida",
  }),
  addressNumber: z
    .string()
    .min(1, {
      message: "Número de dirección inválido",
    })
    .regex(/^\d+$/, {
      message: "El número de dirección debe contener solo números",
    }),
  apartment: z.string().optional(),
  dniFront: z
    .instanceof(File)
    .refine((file) => file.type.startsWith("image/"), {
      message: "Solo se permiten imágenes",
    }),
  dniBack: z.instanceof(File).refine((file) => file.type.startsWith("image/"), {
    message: "Solo se permiten imágenes",
  }),
});

export const ResetSchema = z.object({
    email: z.string().email({ 
        message: "El correo es requerido" 
    }),
});

export const NewPasswordSchema = z.object({
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
