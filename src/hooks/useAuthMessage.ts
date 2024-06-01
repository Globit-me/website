import { LoginSchema, RegisterSchema } from "@/schemas";
import { useState } from "react";
import { z } from "zod";

/**
 * Custom hook to manage authentication messages.
 *
 * @returns {object} - An object containing success and error messages, and a function to handle responses.
 * @property {string} successMessage - The success message.
 * @property {string} errorMessage - The error message.
 * @property {function} handleResponse - A function to handle responses. It accepts two parameters:
 *                                      'values' which are the values to be passed to the auth function,
 *                                      and 'loginFunction' which is the function to be called for auth.
 */


export const useAuthMessage = () => {
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleResponse = async (values: any, authFunction: any) => {
        setSuccessMessage("");
        setErrorMessage("");

        const response = await authFunction(values);

        if (response?.success) {
            setSuccessMessage(response.success);
        }

        if (response?.error) {
            setErrorMessage(response.error);
        }
    };

    return { successMessage, errorMessage, handleResponse }; 
}