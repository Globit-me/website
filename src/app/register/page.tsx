"use client";

//Custom Components
import {
  AnimatedTitle,
  CustomButton,
  InputField,
  ToastSuccess,
  ToastError,
} from "@/components";

//Schemas
import { RegisterSchema } from "@/schemas";

//Actions
import { registration } from "@/actions";

//Hooks
import { useAuthMessage, useRegisterForm } from "@/hooks";

//dependencies
import { z } from "zod";
import Link from "next/link";
import { Suspense, useTransition } from "react";
import Image from "next/image";

const RegisterPage = () => {
  const [isPending, startTransition] = useTransition();
  const { successMessage, errorMessage, handleResponse } = useAuthMessage();
  const { register, errors, handleSubmit } = useRegisterForm();

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      handleResponse(values, registration);
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="relative max-w-6xl md:mx-auto mt-32 md:mt-56 mb-56 mx-6 grid grid-cols-1 md:grid-cols-2">
        <div className="border-4 p-6">
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
          <div className="mt-3 text-center">
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
        </div>
        <div className="hidden md:block ml-20">
          <Image
            src="/gif/register.gif"
            alt="Descripción de la imagen"
            width={500}
            height={500}
            unoptimized
          />
        </div>
      </section>
    </Suspense>
  );
};

export default RegisterPage;
