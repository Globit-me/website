import { auth, signOut } from "@/auth";

const TestPage = async () => {
  const session = await auth();
  
  const handleSignOut = async () => {
    "use server";
    await signOut({
      redirectTo: "/login"
    });
  }

  return (
    <div className="flex flex-col max-w-6xl md:mx-auto mt-28 mb-8 md:mb-28 md:mt-56 mx-6">
      {JSON.stringify(session)}
      <form action={handleSignOut}>
        <button type="submit" >Cerrar Sesion</button>
      </form>
    </div>
  );
};

export default TestPage;
