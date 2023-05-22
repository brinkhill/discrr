"use client";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div>
          <button>
            {session?.user?.image ? (
              <div className="relative h-10 w-10">
                <Image src={session.user.image} alt={session.user.name} className="inline-block rounded-full" width={50} height={50} />
              </div>
            ) : (
              <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100">
                <svg className="h-full w-full text-stone-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            )}
          </button>
        </div>
      ) : (
        <button className="rounded-md border border-stone-300 px-3 py-1 text-sm dark:border-stone-600" onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </>
  );
};

export default SignInButton;
