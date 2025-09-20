import { useForm, UseFormReturn } from "react-hook-form";
import { adminGetCourse } from "@/app/data/admin/admin-get-course";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courseSchema, CourseSchemaType } from "@/lib/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";

import CourseForm from "../../_components/CourseForm";
import CourseStructure from "./_components/CourseStructure";

// nextjs 15f
//courseId: i.e dynamic routing and should be same as the dir name - [courseId]
type Params = Promise<{ courseId: string }>;

export default async function EditCourse({ params }: { params: Params }) {
  const { courseId } = await params;
  const data = await adminGetCourse(courseId);

  // const form = useForm<CourseSchemaType>({
  //   resolver: zodResolver(courseSchema),
  //   defaultValues: {
  //     title: data.title,
  //     description: data.description,
  //     fileKey: data.fileKey,
  //     price: data.price,
  //     duration: data.duration,
  //     level: data.level,
  //     category: data.category,
  //     status: data.status,
  //     slug: data.slug,
  //     smallDescription: data.smallDescription,
  //   },
  // });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Edit Course
        <span className="text-primary underline">{data.title}</span>
      </h1>

      <Tabs defaultValue="basic-info" className="w-full">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
          <TabsTrigger value="course-structure">Course Structure</TabsTrigger>
        </TabsList>
        <TabsContent value="basic-info">
          {/* <Card>
            <CardHeader>
              <CardTitle>Basic Info</CardTitle>
              <CardDescription>
                Provide basic information about the course
              </CardDescription>
            </CardHeader>

            <CardContent></CardContent>
          </Card> */}
          {/* <CourseForm formInput={form} callback={() => {}} action="edit" /> */}
        </TabsContent>
        <TabsContent value="course-structure">
          <Card>
            <CardHeader>
              <CardTitle>Course Structure</CardTitle>
              <CardDescription>
                Provide course structure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CourseStructure data={data} />
            </CardContent>
          </Card>

        </TabsContent>

        
      </Tabs>
    </div>
  );
}
