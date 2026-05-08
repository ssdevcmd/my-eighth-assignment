
"use client";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ user, handleLogout }) => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

               {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                   <Link
                     href="/"
                     className="hover:text-blue-600 transition-colors duration-200"
                        >
                        Home
                    </Link>

                <Link
                    href="/courses"
                    className="hover:text-blue-600 transition-colors duration-200"
                        >
                       Courses
                   </Link>

                <Link
                   href="/profile"
                   className="hover:text-blue-600 transition-colors duration-200"
                        >
                      My Profile
                  </Link>
                  </div>

                   {/* Auth Section */}
               <div className="flex items-center gap-3">
                   {user ? (
                        <>
                          {/* Avatar */}
                     <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-blue-500">
                            <Image
                       src={user?.photoURL || "/avatar.png"}
                       alt="User Avatar"
                       fill
                       className="object-cover"
                                   />
                        </div>

                        {/* Logout */}
                          <button
                           onClick={handleLogout}
                           className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition duration-200"
                                >
                             Logout
                          </button>
                            </>
                        ) : (
                            <>
                         {/* Login */}
                          <Link
                           href="/login"
                          className="px-4 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 transition duration-200 font-medium"
                              >
                             Login
                          </Link>

                           {/* Register */}
                           <Link
                             href="/register"
                             className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-200"
                                >
                            Register
                         </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;