"use client";

import React, { useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { BeatLoader } from "react-spinners";
import AnimatedTitle from './AnimatedTitle';
import Link from 'next/link';
import { newVerification } from '@/actions';
import { useAuthMessage } from '@/hooks';
import { ToastError, ToastSuccess } from "@/components"

const NewVerificationForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const { successMessage, errorMessage, handleResponse } = useAuthMessage();

    const onSubmit = useCallback(() => {
        if (!token || successMessage !== "" || errorMessage !== "") return;
        handleResponse(token, newVerification);
    }, [token, successMessage, errorMessage]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);
    

  return (
    <section className="relative max-w-6xl md:mx-auto mt-32 md:mt-56 mb-56 mx-6">
        <ToastSuccess message={successMessage} />
        {!successMessage && (<ToastError message={errorMessage} />)}
        <div className="p-6">
          <AnimatedTitle title="Confirmando tu verificación" />
          <div className="mt-3 text-center">
            {!successMessage && !errorMessage && (
                <BeatLoader color="#385CE3" />    
            )}
          </div>
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-700">
              Volver a la página de
              <Link
                href="/login"
                className="ml-1 font-medium text-custom-blue hover:text-custom-blue-dark"
              >
                Iniciar Sesión
              </Link>
            </p>
          </div>
        </div>
      </section>
  )
}

export default NewVerificationForm