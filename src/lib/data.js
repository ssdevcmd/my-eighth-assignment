// export async function getCourses() {
//     const res = await fetch("http://localhost:3000/courses.json");

//     if (!res.ok) {
//         throw new Error("Failed to fetch courses");
//     }

//     return res.json();
// }

// src/lib/data.js

// Best solution for local JSON data:
// Import directly from the public folder instead of using fetch()

import courses from "../../public/courses.json";

export function getCourses() {
  return courses;
}

export function getCourseById(id) {
  return courses.find(
    (course) => course.id.toString() === id.toString()
  );
}