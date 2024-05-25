
import { auth } from "@/auth";

const TestPage = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col max-w-6xl md:mx-auto mt-28 mb-8 md:mb-28 md:mt-56 mx-6">
      {JSON.stringify(session)}
    </div>
  );
};

export default TestPage;
