import { useSearchParams } from "next/navigation";

export const useOAuthError = () => {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get("error") === "OAuthAccountNotLinked" 
    ? "Este correo electrónico ya está en uso." : ""; 

  return errorParam
};