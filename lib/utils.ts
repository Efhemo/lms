import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { env } from "./env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function firstOrNull(inputString: string | null | undefined): string | null {
  if (inputString === null || inputString === undefined || inputString.length === 0) {
    return null;
  }
  return inputString[0];
}

export function constructImageUrl(key: string){
  return `https://${env.NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES}.t3.storage.dev/${key}`
}

"https://e-lms-course.t3.storage.dev/bbcca68e-5382-46b3-84e7-38eba2b30d08-simpleimage.webp"
