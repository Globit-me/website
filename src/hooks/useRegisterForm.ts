import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";

/**
 * Custom hook to manage and validate a registration form.
 *
 * @returns {object} - An object containing form methods and state.
 * @property {function} register - A function to register an input.
 * @property {object} errors - An object containing form errors.
 * @property {function} handleSubmit - A function to handle form submission.
 */
export const useRegisterForm = () => { 
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

    return { register, errors, handleSubmit };
};
