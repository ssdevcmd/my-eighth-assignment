"use client";
import Image from "next/image";
import { Button, Card, Spinner } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import userAvatar from "@/assets/user.png";



const MyProfilePage = () => {
    const { data: session, isLoading } = authClient.useSession();
    const user = session?.user;
    console.log(session, 'session data');
    console.log(user);

    if (isLoading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Spinner size="lg" color="warning" />
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <Card className="shadow-xl rounded-2xl p-6">

                <h1 className="text-3xl font-bold text-center mb-8">
                    My Profile
                </h1>

                <div className="flex flex-col items-center mb-8">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500">
                        <Image
                            src={user?.image || userAvatar}
                            alt={user?.name || "User Avatar"}
                            fill
                            className="rounded"
                        />
                    </div>

                    <h2 className="text-2xl font-semibold mt-4">
                        {user?.name}
                    </h2>

                    <p className="text-gray-500">{user?.email}</p>
                </div>

                <Link href="/profile/update">
                    <Button className="w-full">
                        Update Profile
                    </Button>
                </Link>

            </Card>
        </div>
    );
};
export default MyProfilePage;
