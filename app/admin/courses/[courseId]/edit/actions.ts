"use server"


import { requireAdmin } from "@/app/data/admin/require-admin";
import prisma from "@/lib/db";
import { ApiResponse } from "@/lib/types";
import { courseSchema, CourseSchemaType } from "@/lib/zod-schema";

// Server Actions
export async function EditCourse(data: CourseSchemaType, courseId: string): Promise<ApiResponse> {
    const session = await requireAdmin()
    try {
        const validation = courseSchema.safeParse(data)

        if(!validation.success){
            return {
                status: "error",
                message: "Invalid form data"
            }
        }

        await prisma.course.update({
            where: {
                id: courseId,
                userId: session.user.id
            },
            data: {
                ...validation.data,
            }
        })
    
        return {
            status: "success",
            message: "Course updated successfully"
        }
    } catch {
        return {
            status: "error",
            message: "Failed to create course"
        }
    }
    
}