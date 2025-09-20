import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, ShieldX } from "lucide-react";
import Link from "next/link";

export default function NotAdmin() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full text-center ">
          <CardHeader>
            <div className="bg-destructive/10 text-destructive w-fit p-4 mx-auto rounded-full">
              <ShieldX className="size-16" />
            </div>
            <CardTitle className="text-2xl">Access Restricted</CardTitle>
            <CardDescription className="max-w-sm">
              Hey! You are not an admin, which means you can't create any course
              or stuff like that...
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href={"/"}
              className={buttonVariants({ className: "w-full" })}
            >
              <ArrowLeft className="mr-1 size-4 " /> Back to home
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
