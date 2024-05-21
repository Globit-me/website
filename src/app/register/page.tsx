"use client";

import AnimatedTitle from "@/components/form/AnimatedTitle";
import CustomButton from "@/components/form/CustomButton";
import InputField from "@/components/form/InputField";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import { registration } from "@/actions/registration";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      registration(values).then((response) => {
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
    <section className="max-w-6xl md:mx-auto mt-28 mb-8 md:mb-28 md:mt-56 mx-6">
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
