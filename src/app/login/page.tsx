"use client";

import InputField from "@/components/form/InputField";
import AnimatedTitle from "@/components/form/AnimatedTitle";
import CustomButton from "@/components/form/CustomButton";

import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {  useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";
import toast from "react-hot-toast";
import Social from "@/components/social/social";

const LoginPage = () => {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values).then((response) => {
        if (response?.success) {
          toast.success(response.success);
        }
        if (response?.error) {
          toast.error(response.error);
        }
      });
    });
  };

  return (
    <section className="max-w-6xl md:mx-auto mt-28 mb-8 mx-6 h-screen">
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
  );
};

export default LoginPage;
