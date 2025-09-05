import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function firstOrNull(inputString: string | null | undefined): string | null {
  if (inputString === null || inputString === undefined || inputString.length === 0) {
    return null;
  }
  return inputString[0];
}