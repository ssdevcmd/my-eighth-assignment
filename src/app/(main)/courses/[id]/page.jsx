import { getCourses } from "@/lib/data";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    console.log(id, "params");
    const courses = await getCourses();
    const course = courses.find(
        (e) => e.id.toString() === id);
    console.log(course, "courses");

    return {
        title: course.title,
        description: course.description,
    }
}


const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;

    const courses = getCourses();

    const course = courses.find(
        (item) => item.id.toString() === id
    );


    // Static curriculum list
    const curriculum = [
        "Introduction and Course Overview",
        "Setting Up the Development Environment",
        "Core Concepts and Fundamentals",
        "Hands-on Project Development",
        "Best Practices and Optimization",
        "Final Project and Deployment",
    ];


    return (
        <div className="max-w-3xl mx-auto p-6">

            {/* course image */}
            <Image
                src={course.image}
                alt={course.title}
                width={800}
                height={400}
                className="w-full h-fit object-cover rounded-xl mb-6"
            />

            {/* course title */}
            <h1 className="text-3xl font-bold mb-2">
                {course.title}
            </h1>

            {/* course instructor */}
            <p className="font-semibold text-gray-700 mb-2">
                Instructor: {course.instructor}
            </p>

            {/* course duration */}
            <p className="font-semibold text-sm text-gray-700 mb-2">
                Duration: {course.duration}
            </p>

            {/* course category */}
            <p className="text-sm font-semibold text-gray-700 mb-2">Category: {course.category}</p>

            {/* course rating */}
            <p className="font-semibold text-yellow-600 mb-2 flex items-center gap-2">
                <FaStar></FaStar> {course.rating}
            </p>


            <p className={`mb-4 font-medium px-3 py-1 inline-block rounded-full text-white ${course.level === "Beginner"
                ? "bg-green-500"
                : course.level === "Intermediate"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}>

                {/* course level */}
                Level: {course.level}
            </p>

            {/* course description */}
            <p className="font-bold text-gray-700">
                {course.description}
            </p>

            {/* course curriculum */}
            <div className="bg-white border rounded-2xl border-dotted p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">
                    Course Curriculum
                </h2>

                <ul className="space-y-3 list-decimal list-inside marker:text-blue-600">
                    {curriculum.map((c, index) => (
                        <li
                            key={index}
                            className="font-semibold items-center gap-3 text-gray-700">
                            {c}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default CourseDetailsPage;

