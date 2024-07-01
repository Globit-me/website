import { showProfile } from "@/actions/profile";
import Pending from "@/components/profile/Pending";
import Approved from "@/components/profile/Approved";

const ProfilePage = async () => {
  const currentUser = await showProfile();

  return (
    <div className="flex">
      <section className="flex-grow relative max-w-6xl md:mx-auto mt-32 mb-56 mx-6">
        {currentUser.status === "approved" ? (
          <Approved />
        ) : (
          <Pending />
        )}
      </section>
    </div>
  );
};

export default ProfilePage;
