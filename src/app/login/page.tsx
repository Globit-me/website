import Link from "next/link";
import React from "react";

export const LoginPage = () => {
  return (
    <section className="max-w-6xl md:mx-auto mt-2 mb-8 md:my-28 mx-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Iniciar Sesión</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue sm:text-sm"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-custom-blue focus:ring-custom-blue border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Recuérdenme
            </label>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-custom-blue hover:text-custom-blue-dark">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom-blue hover:bg-custom-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-700">
          ¿No tienes una cuenta? 
          <Link href="/register" className="ml-1 font-medium text-custom-blue hover:text-custom-blue-dark">
            Regístrate
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
