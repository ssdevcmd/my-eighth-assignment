import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";
import { Button } from "@heroui/react";
import { getCourses } from "@/lib/data";


const TrendingCourses = async () => {
    const courses = await getCourses();

    // Top 3 highest-rated courses
    const trendingCourses = courses
        .sort((a, b) => parseInt(a.duration) - parseInt(b.duration))
        .slice(0, 3);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
                <FaFire  className="text-orange-500" />
                Trending Courses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trendingCourses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white border rounded-2xl shadow-sm overflow-hidden flex flex-col"
                    >
                        <Image
                            src={course.image}
                            alt={course.title}
                            width={600}
                            height={300}
                            className="w-full h-48 object-cover"
                        ></Image>

                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="text-xl font-semibold mb-2">
                                {course.title}
                            </h3>

                            <p className="text-gray-600 mb-1">
                                {course.instructor}
                            </p>

                            <p className="text-yellow-600 flex items-center gap-1 mb-4">
                                <FaClock></FaClock>
                                {course.duration}
                            </p>

                            <div className="mt-auto">
                                <Link href={`/courses/${course.id}`}>
                                    <Button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl cursor-pointer">
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendingCourses;