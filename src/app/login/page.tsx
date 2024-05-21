"use client";

import Link from "next/link";
import { useState } from "react";
import InputField from "@/components/form/InputField";
import AnimatedTitle from "@/components/form/AnimatedTitle";
import CustomButton from "@/components/form/CustomButton";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="max-w-6xl md:mx-auto mt-28 mb-8 md:mb-28 md:mt-56 mx-6">
      <AnimatedTitle title="Iniciar sesión" />
      <form className="space-y-6">
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
      </div>
    </section>
  );
};

export default LoginPage;
