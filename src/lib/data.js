export async function getCourses() {
    const res = await fetch("http://localhost:3000/courses.json");

    if (!res.ok) {
        throw new Error("Failed to fetch courses");
    }

    return res.json();
}