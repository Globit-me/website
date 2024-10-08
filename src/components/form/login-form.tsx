"use client";

//Custom Components
import {
  AnimatedTitle,
  CustomButton,
  InputField,
  Social,
  ToastError,
  ToastSuccess,
  Separator,
} from "@/components";


//Schemas
import { LoginSchema } from "@/schemas";

//Actions
import { login } from "@/actions";

//Hooks
import { useAuthMessage, useOAuthError, useLoginForm } from "@/hooks";

//dependencies
import { z } from "zod";
import Link from "next/link";
import { Suspense, useTransition } from "react";
import Image from "next/image";



const LoginForm = () => {
  const { successMessage, errorMessage, handleResponse } = useAuthMessage();
  //const errorParam = useOAuthError(); //This is not used, try to fix it later
  const { register, errors, handleSubmit } = useLoginForm();
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      await handleResponse(values, login);
      window.location.href = "/"; // Esto recarga completamente la página principal
    });
  };
  

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="relative max-w-6xl md:mx-auto mt-40 mb-40 md:mt-56 md:mb-56 mx-6 grid grid-cols-1 md:grid-cols-2">
        <div className="border-4 p-6">
          <ToastError message={errorMessage} />
          <ToastSuccess message={successMessage} />
          <AnimatedTitle title="Iniciar sesión" />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputField
              type="email"
              id="email"
              label="Correo Electrónico"
              register={register("email")}
              error={errors.email?.message}
              disabled={isPending}
            />
            <InputField
              type="password"
              id="password"
              label="Contraseña"
              register={register("password")}
              disabled={isPending}
              error={errors.password?.message}
            />

            <div className="flex items-center justify-end">
              <Link
                href="/reset"
                className="font-medium text-custom-blue hover:text-custom-blue-dark text-sm"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <CustomButton type="submit">Iniciar Sesión</CustomButton>
          </form>
          <div className="mt-3 text-center">
            <Separator />
            <Social />
            <p className="text-sm text-gray-700 mt-3">
              ¿No tienes una cuenta?
              <Link
                href="/register"
                className="ml-1 font-medium text-custom-blue hover:text-custom-blue-dark"
              >
                Regístrate
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden md:block ml-20">
          <Image
            src="/gif/login.gif"
            alt=""
            width={500}
            height={500}
            unoptimized
          />
        </div>
      </section>
    </Suspense>
  );
};

export default LoginForm;
