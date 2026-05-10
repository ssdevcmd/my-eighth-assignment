import Image from "next/image";

async function getCourses() {
    const res = await fetch("http://localhost:3000/courses.json");

    if (!res.ok) {
        throw new Error("Failed to fetch courses");
    }

    return res.json();
}

export default async function CourseDetailsPage({ params }) {
    const { id } = await params;

    const courses = await getCourses();

    const course = courses.find(
        (item) => item.id.toString() === id
    );

    if (!course) {
        return <h2 className="font-bold text-5xl text-red-500 text-center py-10">Course not found</h2>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6">

            <Image
                src={course.image}
                alt={course.title}
                width={800}
                height={400}
                className="w-full h-fit object-cover rounded-xl mb-6"
            />

            <h1 className="text-3xl font-bold mb-2">
                {course.title}
            </h1>

            <p className="text-gray-600 mb-2">
                Instructor: {course.instructor}
            </p>

            <p className="text-sm text-gray-500 mb-2">
                Duration: {course.duration}
            </p>

            <p className="text-yellow-600 mb-2">
                ⭐ {course.rating}
            </p>

            <p
                className={`mb-4 font-medium px-3 py-1 inline-block rounded-full text-white ${course.level === "Beginner"
                        ? "bg-green-500"
                        : course.level === "Intermediate"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
            >
                Level: {course.level}
            </p>

            <p className="text-gray-700 leading-relaxed">
                {course.description}
            </p>
        </div>
    );
}