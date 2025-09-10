import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";


export default function Courses() {
  
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Courses</h1>
        <Link className={buttonVariants()} href="/admin/courses/create">
          Create course
        </Link>
      </div>

      <div>
        <h1>Here you will see all the courses</h1>
      </div>
    </>
  );
}
