"use client";

//Custom Components
import {
  AnimatedTitle,
  CustomButton,
  InputField,
  Social,
  ToastError,
  ToastSuccess,
} from "@/components";

//Schemas
import { ResetSchema } from "@/schemas";

//Actions
import { reset } from "@/actions";

//Hooks
import { useAuthMessage, useResetForm } from "@/hooks";

//dependencies
import { z } from "zod";
import Link from "next/link";
import { Suspense, useTransition } from "react";
import Image from "next/image";


const ResetForm = () => {
  const { register, errors, handleSubmit } = useResetForm();
  const { successMessage, errorMessage, handleResponse } = useAuthMessage();
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (values: z.infer<typeof ResetSchema>) => {
    startTransition(() => {
      handleResponse(values, reset);
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="relative max-w-6xl md:mx-auto mt-32 md:mt-56 mb-56 mx-6 grid grid-cols-1 md:grid-cols-2">
        <div className="border-4 p-6 flex flex-col justify-center">
          <ToastError message={errorMessage} />
          <ToastSuccess message={successMessage} />
          <AnimatedTitle title="Olvidaste tu contraseña?" />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputField
              type="email"
              id="email"
              label="Correo Electrónico"
              register={register("email")}
              error={errors.email?.message}
              disabled={isPending}
            />
            <CustomButton type="submit">Enviar Correo</CustomButton>
            <div className="flex items-center justify-center">
              <Link
                href="/login"
                className="font-medium text-custom-blue hover:text-custom-blue-dark text-sm"
              >
                Volver a Iniciar Sesión
              </Link>
          </div>
        </form>
        </div>
        <div className="hidden md:block ml-20">
          <Image
            src="/gif/login.gif"
            alt="Descripción de la imagen"
            width={500}
            height={500}
          />
        </div>
      </section>
    </Suspense>
  );
};

export default ResetForm;
