
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaEye, FaStar } from "react-icons/fa";

const getCourses = async () => {
    const res = await fetch("http://localhost:3000/courses.json");

    if (!res.ok) {
        throw new Error("Failed to fetch courses");
    }

    return res.json();
};

export default async function CoursesPage() {
    const courses = await getCourses();
    console.log(courses, 'all courses');

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8">All Courses</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="border rounded-2xl p-4 shadow-sm"
                    >
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-48 object-cover rounded-xl mb-4"
                        />

                        <h2 className="text-xl font-semibold">{course.title}</h2>
                        <p className="text-gray-600">{course.instructor}</p>
                        <p className="text-sm text-gray-500">{course.duration}</p>
                        <p className="text-sm text-yellow-600 flex gap-1">
                            <FaStar size={18}></FaStar>  {course.rating}
                        </p>
                        <p className="text-sm text-blue-600">
                            Level: {course.level}
                        </p>
                        <p className="mt-2 text-sm text-gray-700">
                            {course.description}
                        </p>
                        <div>
                            <Link href={`/courses/${course.id}`}><Button>Details</Button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}