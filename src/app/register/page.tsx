"use client";

import AnimatedTitle from "@/components/form/AnimatedTitle";
import CustomButton from "@/components/form/CustomButton";
import InputField from "@/components/form/InputField";
import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <section className="max-w-6xl md:mx-auto mt-2 mb-8 md:my-28 mx-6">
      <AnimatedTitle title="Registrarse" />
      <form className="space-y-6">
        <InputField
          type="text"
          id="name"
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="email"
          id="email"
          label="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          id="password"
          label="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type="password"
          id="re-password"
          label="Confirmar Contraseña"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
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
