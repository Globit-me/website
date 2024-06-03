import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";

/**
 * Custom hook to manage and validate a registration form.
 *
 * @returns {object} - An object containing form methods and state.
 * @property {function} register - A function to register an input.
 * @property {object} errors - An object containing form errors.
 * @property {function} handleSubmit - A function to handle form submission.
 */
export const useLoginForm = () => {
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

  return { register, handleSubmit, errors };
};