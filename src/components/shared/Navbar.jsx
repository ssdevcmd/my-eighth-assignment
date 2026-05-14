"use client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import userAvatar from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";
import { Button, Spinner } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(session, 'session data');
  console.log(user);

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data, 'google signin');
  }

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 md:h-16 md:py-0">

          {/* logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-blue-600"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              S
            </div>
            <span className="sm:inline">SkillSphere</span>
          </Link>

          {/* links */}
          <div className="order-3 w-full md:order-2 md:w-auto">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-8 font-medium text-gray-700">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/courses">Courses</NavLink>
              <NavLink href="/profile">My Profile</NavLink>
            </div>
          </div>

          {/* authentication */}
          <div className="order-2 md:order-3 flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
            {isPending ? (
              <Spinner color="warning" size="lg" />
            ) : user ? (
              <>
                <h2 className="hidden lg:block font-semibold text-sm">
                  Welcome, {user?.name}!
                </h2>

                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src={user?.image || userAvatar}
                    alt={"User Avatar"}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* logout */}
                <Button
                  onClick={async () => await authClient.signOut()}
                  className="bg-red-500 text-white"
                  size="sm"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                {/* login */}
                <Link href="/login">
                  <Button
                    size="sm"
                    color="primary"
                  >
                    Login
                  </Button>
                </Link>

                {/* google login */}
                <Button
                  onClick={handleGoogleSignin}
                  size="sm"
                  variant="bordered"
                  className="flex items-center gap-2"
                >
                  <FcGoogle size={18} />
                  <span className="hidden sm:inline">
                    Login with Google
                  </span>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;