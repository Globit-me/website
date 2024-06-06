"use client";

//Custom Components
import {
  AnimatedTitle,
  CustomButton,
  InputField,
  ToastError,
  ToastSuccess,
} from "@/components";

//Schemas
import { NewPasswordSchema } from "@/schemas";

//Actions
import { newPassword } from "@/actions";

//Hooks
import { useAuthMessageWithToken, useNewPasswordForm } from "@/hooks";

//dependencies
import { z } from "zod";
import Link from "next/link";
import { Suspense, useTransition } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";


const NewPasswordForm = () => {
  const { register, errors, handleSubmit } = useNewPasswordForm();
  const { successMessage, errorMessage, handleResponse } = useAuthMessageWithToken();
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = async (values: z.infer<typeof NewPasswordSchema>) => {
    startTransition(() => {
      handleResponse(values, newPassword, token);
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="relative max-w-6xl md:mx-auto mt-32 md:mt-56 mb-56 mx-6 grid grid-cols-1 md:grid-cols-2">
        <div className="border-4 p-6 flex flex-col justify-center">
          <ToastError message={errorMessage} />
          <ToastSuccess message={successMessage} />
          <AnimatedTitle title="Ingrese su nueva contraseña" />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField
              type="password"
              id="password"
              label="Contraseña"
              register={register("password")}
              disabled={isPending}
              error={errors.password?.message}
            />
          <InputField
              type="password"
              id="re-password"
              label="Confirmar Contraseña"
              register={register("repassword")}
              error={errors.repassword?.message}
            />
            <CustomButton type="submit">Reestablecer Contraseña</CustomButton>
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

export default NewPasswordForm;
