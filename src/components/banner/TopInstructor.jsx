import { getCourses } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";



const TopInstructor = async () => {
    const courses = await getCourses();

    const topInstructors = courses
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Top Instructors</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">
                {topInstructors.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden"
                    >
                        <Image src={course.instructor_image}
                            alt={course.instructor}
                            width={100}
                            height={100}
                            className="rounded-full" >
                        </Image>

                        <div className="p-4 space-y-2">
                            <h3 className="text-lg font-semibold">
                                {course.instructor}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                <span className="font-semibold text-teal-500">Expert in : </span>   {course.title}
                            </p>

                            <p className="text-sm text-yellow-600 flex gap-1">
                                <FaStar size={18}></FaStar>  {course.rating}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopInstructor;

