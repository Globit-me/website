import { useState } from "react";


/**
 * Custom hook to manage authentication messages that requires a token.
 *
 * @returns {object} - An object containing success and error messages, and a function to handle responses.
 * @property {string} successMessage - The success message.
 * @property {string} errorMessage - The error message.
 * @property {function} handleResponse - A function to handle responses. It accepts two parameters:
 *                                      'values' which are the values to be passed to the auth function,
 *                                      and 'loginFunction' which is the function to be called for auth.
 */


export const useAuthMessageWithToken = () => {
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleResponse = async (values: any, authFunction: any, token?: string | null) => {
        setSuccessMessage("");
        setErrorMessage("");


        const response = await authFunction(values, token);

        if (response?.success) {
            setSuccessMessage(response.success);
        }

        if (response?.error) {
            setErrorMessage(response.error);
        }
    };

    return { successMessage, errorMessage, handleResponse }; 
}