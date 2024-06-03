"use client";

//Custom Components
import {
  AnimatedTitle,
  CustomButton,
  InputField,
  Social,
  ToastError,
  ToastSuccess,
} from "@/components"

//Schemas
import { LoginSchema } from "@/schemas";

//Actions
import { login } from "@/actions";

//Hooks
import {
  useAuthMessage, 
  useOAuthError, 
  useLoginForm
} from "@/hooks";

//dependencies
import { z } from "zod";
import Link from "next/link";
import { Suspense, useTransition } from "react";


const LoginPage = () => {
  const { successMessage, errorMessage, handleResponse } = useAuthMessage();
  //const errorParam = useOAuthError(); //This is not used, try to fix it later
  const { register, errors, handleSubmit } = useLoginForm();
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      handleResponse(values, login)
    })
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="relative max-w-6xl md:mx-auto mt-56 mb-56 mx-6">
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
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-custom-blue focus:ring-custom-blue border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Recordar
              </label>
            </div>
            <div className="text-sm">
              <Link
                href="#"
                className="font-medium text-custom-blue hover:text-custom-blue-dark"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>
          <CustomButton type="submit">Iniciar Sesión</CustomButton>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            ¿No tienes una cuenta?
            <Link
              href="/register"
              className="ml-1 font-medium text-custom-blue hover:text-custom-blue-dark"
            >
              Regístrate
            </Link>
          </p>
          <div className="flex items-center justify-center my-4">
            <hr className="border-gray-400 border-t w-full relative my-2" />
            <div className="absolute bg-white px-2 text-gray-500">o</div>
          </div>
          <Social />
        </div>
      </section>
    </Suspense>
  );
};

export default LoginPage;
