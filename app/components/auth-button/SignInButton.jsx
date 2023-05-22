"use client";

import "./SignInButton.css";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="profile-container">
          <Link href={"/profile"}>
            {session?.user?.image ? (
              <div className="relative h-10 w-10">
                <Image src={session.user.image} alt={session.user.name} className="profile-image" width={50} height={50} />
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="profile-icon"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            )}
          </Link>
        </div>
      ) : (
        <button className="signin-button" name="Sign In Button" onClick={() => signIn("google")}>
          Sign In
        </button>
      )}
    </>
  );
};

export default SignInButton;
