import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import "./profile.css";

const Page = async () => {
  const session = await getServerSession(authOptions);
  // protected page
  if (!session) {
    redirect("/");
  }

  return (
    <div className="profile-main">
      <h1>Profile</h1>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
    </div>
  );
};

export default Page;
