import { getCourses } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";



export default async function TopInstructor() {
    const courses = await getCourses();

    const topInstructors = courses
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Top Instructors</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topInstructors.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
                    >
                        {/* <Image src={instructorImages(course.instructor)}
                            alt={course.instructor}
                            width={100}
                            height={100}
                            className="rounded-full" >
                        </Image> */}

                        <div className="p-4 space-y-2">
                            <h3 className="text-lg font-semibold">
                                {course.instructor}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {course.title}
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
}

