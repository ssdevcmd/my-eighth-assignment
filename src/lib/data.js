import courses from "../../public/courses.json";

export async function getCourses() {
  return courses;
}

export function getCourseById(id) {
  return courses.find(
    (course) => course.id.toString() === id.toString()
  );
}