import { auth } from "@/auth";
import Navbar from "./Navbar";

const NavSession  = async () => {
  const session = await auth();

  return (
    <Navbar session={session} />
  )
}

export default NavSession