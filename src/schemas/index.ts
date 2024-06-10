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
    .min(4, { message: "Requerido" })
    .regex(/^\d+$/, { message: "El DNI debe contener solo números" }),
  birthday: z
    .string()
    .transform((str) => new Date(str))
    .refine((date) => !isNaN(date.getTime()), { message: "Requerido" })
    .refine((date) => date <= eighteenYearsAgo, {
      message: "Debes ser mayor de 18 años",
    })
    .refine((date) => date >= new Date(1900, 0, 1), {
      message: "Fecha inválida",
    }),
  country: z.string().min(3, { message: "Requerido" }),
  province: z.string().min(3, { message: "Requerido" }),
  address: z
    .string()
    .min(3, { message: "Requerido" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Dirección inválida",
    }),
  addressNumber: z
    .string()
    .min(1, { message: "Requerido" })
    .regex(/^\d+$/, { message: "Número inválido" }),
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
