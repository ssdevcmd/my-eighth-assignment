"use client";
import { getCourses } from "@/lib/data";
import { Button, Label, SearchField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaStar } from "react-icons/fa";
import 'animate.css';
import { useState } from "react";


export const metadata = {
    title: "SkillSphere - courses",
};

const CoursesPage = async ({ courses }) => {
    const courses = await getCourses();
    console.log(courses, 'all courses');
    const [searchItem, setSearchItem] = useState("");

    const filteredCourses = courses.filter((course) => {
        const item = searchItem.toLowerCase().trim();

        if (!item) { return courses; }
        else {
            return (
                course.title.toLowerCase().includes(item))
        };
    })
    return (

        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Search Box */}
            <div className="mb-6">
                <SearchField
                    value={searchItem}
                    onChange={setSearchItem}
                    onClear={() => setSearchItem("")}
                >
                    <Label>Search Courses</Label>

                    <SearchField.Group>
                        <SearchField.SearchIcon />

                        <SearchField.Input
                            className="w-full md:w-[320px]"
                            placeholder="Search courses..."
                        />

                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>
            </div>

            {/* No Results */}
            {filteredCourses.length === 0 && (
                <p className="font-bold text-4xl">No courses found.</p>
            )}

            <div className="mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-8">All Courses</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__rotateIn animate__faster">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="border rounded-2xl p-4 shadow-sm flex flex-col h-ful gap-1"
                        >
                            <Image
                                src={course.image || "/placeholder.jpg"}
                                alt={course.title}
                                width={800}
                                height={400}
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />

                            <h2 className="text-xl font-semibold">{course.title}</h2>
                            <p className="text-gray-600">{course.instructor}</p>
                            <p className="text-sm text-gray-500">{course.duration}</p>
                            <p className="text-sm text-yellow-600 flex gap-1">
                                <FaStar size={18}></FaStar>  {course.rating}
                            </p>
                            <p
                                className={`mb-4 font-medium px-3 py-1 rounded-full ${course.level === "Beginner"
                                    ? "text-green-500"
                                    : course.level === "Intermediate"
                                        ? "text-yellow-500"
                                        : "text-red-500"
                                    }`}
                            >
                                Level: {course.level}
                            </p>

                            <div className="p-4 mt-auto">
                                <Link href={`/courses/${course.id}`}>
                                    <Button className="w-full">Details</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            );
};

export default CoursesPage;