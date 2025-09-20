"server only"

import prisma from "@/lib/db";
import { requireAdmin } from "./require-admin";
import { notFound } from "next/navigation";


export async function adminGetCourse(id: string) {
    await requireAdmin()

    const data = await prisma.course.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            title: true,
            smallDescription: true,
            description: true,
            duration: true,
            level:true,
            status: true,
            price: true,
            fileKey: true,
            slug: true,
            category: true,
            chapters: {
                select: {
                    id: true,
                    title: true,
                    position: true,
                    lessons: {
                        select: {
                            id: true,
                            title: true,
                            position: true,
                            description: true,
                            thumbnailKey: true,
                            videoKey: true,
                        }
                    }
                }
            }
        }
    })
    if(!data){
        return notFound();
    }
    return data
}

export type AdminCourseSingularType = Awaited<ReturnType<typeof adminGetCourse>>