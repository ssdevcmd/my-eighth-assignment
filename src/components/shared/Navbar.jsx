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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-2xl font-bold text-blue-600"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                            S
                        </div>

                        <span>SkillSphere</span>
                    </Link>

                    {/* routes */}
                    <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                        <NavLink href="/">
                            Home
                        </NavLink>

                        <NavLink href="/courses">
                            Courses
                        </NavLink>

                        <NavLink href="/profile">
                            My Profile
                        </NavLink>
                    </div>


                {/* authentication */}
                <div className="flex items-center gap-3">
                    {isPending ? (
                        <Spinner color='accent' size='lg' />
                    ) : user ? (
                        <>
                            <h2 className="font-semibold">Welcome,{user.name}!</h2>
                            
                            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-blue-500">

                                <Image
                                    src={user.image || userAvatar}
                                    alt="User Avatar"
                                    width={60}
                                    height={60}
                                />
                            </div>

                            {/* logout */}
                            <Button
                                onClick={async () => await authClient.signOut()}
                                className="px-4 py-2 rounded-xl bg-red-500  text-white font-medium transition duration-200">
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            {/* login */}
                            <Link
                                href="/login"
                                className="px-4 py-2 rounded-xl border border-blue-600 bg-blue-700 text-white  font-medium">
                                Login
                            </Link>

                            {/* google login */}
                            <Button
                                onClick={handleGoogleSignin}>
                                <Link
                                    href="/login" variant="bordered"
                                    color="default"
                                    className="flex items-center gap-2">
                                    <FcGoogle size={20} />
                                    Login with Google
                                </Link>
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
        </div >
    );
};

export default Navbar;