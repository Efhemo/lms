import { adminGetCourses } from "@/app/data/admin/admin-get-courses";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import AdminCourseCard from "./_components/AdminCourseCard";

export default async function Courses() {
  const courses = await adminGetCourses();
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Courses</h1>
        <Link className={buttonVariants()} href="/admin/courses/create">
          Create course
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {courses.map((course) => (
          <AdminCourseCard key={course.id} data={course} />
        ))}
      </div>
    </>
  );
}
