import { getCourses } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRocket, FaStar } from "react-icons/fa";



const PopularCourses = async() => {
    const courses = await getCourses();

    //  sort by rating and take top 3
    const popularCourses = courses
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
                <FaStar className="text-red-500"/>
                Popular Courses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {popularCourses.map((course) => (
                    <div
                        key={course.id}
                        className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex-1"
                    >
                        <Image
                            src={course.image}
                            alt={course.title}
                            width={600}
                            height={300}
                            className="w-full h-48 object-cover"
                        ></Image>

                        <div className="p-4 flex-1">
                            <h3 className="text-xl font-semibold">{course.title}</h3>
                            <p className="text-gray-600">{course.instructor}</p>
                            <p className="text-sm text-yellow-600 flex gap-1">
                                <FaStar size={18}></FaStar>  {course.rating}
                                </p>

                                <div className="flex-1"></div>
                                <Link href={`/courses/${course.id}`}>
                                    <Button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl cursor-pointer">
                                        View Details
                                    </Button>
                                </Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularCourses;