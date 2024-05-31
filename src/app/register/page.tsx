"use client";

//Custom Components
import {
  AnimatedTitle,
  CustomButton,
  InputField,
  ToastSuccess,
  ToastError,
} from "@/components"

//Schemas
import { RegisterSchema } from "@/schemas";

//Actions
import { registration } from "@/actions/registration";

//Hooks
import {
  useAuthMessage,
  useRegisterForm,
} from "@/hooks"


//dependencies
import { z } from "zod";
import Link from "next/link";
import { useTransition } from "react";

const RegisterPage = () => {
  const [isPending, startTransition] = useTransition();
  const { successMessage, errorMessage, handleResponse } = useAuthMessage();
  const { register, errors, handleSubmit } = useRegisterForm();
 
  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      handleResponse(values, registration);
    })
  };

  return (
    <section className="flex flex-col max-w-6xl md:mx-auto mt-28 mb-8 md:mb-28 md:mt-56 mx-6">
      <ToastError message={errorMessage} />
      <ToastSuccess message={successMessage} />
      <AnimatedTitle title="Registrarse" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputField
          type="text"
          id="name"
          label="Nombre"
          register={register("name")}
          error={errors.name?.message}
        />
        <InputField
          type="email"
          id="email"
          label="Correo Electrónico"
          register={register("email")}
          error={errors.email?.message}
        />
        <InputField
          type="password"
          id="password"
          label="Contraseña"
          register={register("password")}
          error={errors.password?.message}
        />
        <InputField
          type="password"
          id="re-password"
          label="Confirmar Contraseña"
          register={register("repassword")}
          error={errors.repassword?.message}
        />
        <CustomButton type="submit">Registrarse</CustomButton>
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-700">
          ¿Ya tienes una cuenta?
          <Link
            href="/login"
            className="ml-1 font-medium text-custom-blue hover:text-custom-blue-dark"
          >
            Inicia Sesión
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
