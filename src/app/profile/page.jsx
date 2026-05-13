"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    Button,
    Card,
    CardBody,
    Input,
    Spinner,
    toast,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
// export const metadata = {
//   title: "SkillSphere - my profile",
// };


export default function MyProfilePage() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();

    // Load session and user
    useEffect(() => {
        const fetchSession = async () => {
            const { data } = await authClient.getSession(); // { session, user }
            setUser(data.user);

            // Fill form with existing data
            reset({
                name: data.user.name || "",
                image: data.user.image || "",
            });

            setLoading(false);
        };

        fetchSession();
    }, [router, reset]);

    // Update profile
    const handleUpdateProfile = async (data) => {
        try {
            setLoading(true);

            const { data: res, error } = await authClient.updateUser({
                name: data.name,
                image: data.image,
            });

            if (error) {
                toast.danger(error.message || "Update failed");
                return;
            }

            toast.success("Profile updated successfully!");
            setUser(res.user);
        } catch (err) {
            toast.danger("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Spinner size="lg" color="warning" />
            </div>
        );
    }

    const avatar = user?.image?.trim()
        ? user.image
        : "/default-avatar.png";

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <Card className="shadow-xl rounded-2xl">

                <h1 className="text-3xl font-bold text-center mb-8">
                    My Profile
                </h1>

                {/* Profile Info */}
                <div className="flex flex-col items-center mb-8">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500">
                        <Image
                            src={avatar}
                            alt={user.name || "User"}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <h2 className="text-2xl font-semibold mt-4">
                        {user?.name}
                    </h2>

                    <p className="text-gray-500">{user.email}</p>
                </div>

                {/* Update Form */}
                <form
                    onSubmit={handleSubmit(handleUpdateProfile)}
                    className="space-y-5"
                >
                    <Input
                        label="Name"
                        placeholder="Enter your name"
                        {...register("name", {
                            required: "Name is required",
                        })}
                       
                        
                    />

                    <Input
                        label="Photo URL"
                        placeholder="https://example.com/avatar.jpg"
                        {...register("image")}
                    />

                    <Input
                        label="Email"
                        value={user.email}
                        readOnly
                    />

                    <Button
                        type="submit"
                        color="primary"
                        className="w-full"
                        isLoading={updating}
                    >
                        Update Profile
                    </Button>
                </form>

            </Card>
        </div>
    );
}

