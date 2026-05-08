
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            SkillSphere
                        </h2>

                        <p className="text-sm leading-6 text-gray-400">
                            Learn modern web development, programming, and digital skills
                            with SkillSphere. Build your future with practical learning.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Contact Info
                        </h3>

                        <div className="space-y-2 text-sm">
                            <p>Email: support@skillsphere.com</p>
                            <p>Phone: +880 1234-567890</p>
                            <p>Location: Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <Link
                                href="/terms"
                                className="hover:text-white transition duration-200"
                            >
                                Terms & Conditions
                            </Link>

                            <Link
                                href="/privacy"
                                className="hover:text-white transition duration-200"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-5">
                    <p className="text-sm text-gray-400 text-center md:text-left">
                        © 2026 SkillSphere. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4 text-xl">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            className="hover:text-white transition duration-200"
                        >
                            <FaFacebook />
                        </a>

                        <a
                            href="https://github.com"
                            target="_blank"
                            className="hover:text-white transition duration-200"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            className="hover:text-white transition duration-200"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://youtube.com"
                            target="_blank"
                            className="hover:text-white transition duration-200"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
