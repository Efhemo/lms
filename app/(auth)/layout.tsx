import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Logo from "@/public/logo.png";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link
        href={"/"}
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft className="size-4" /> Go Back
      </Link>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href={"/"}
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image
            src={Logo}
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          LMS.
        </Link>
        {children}

        <div className="text-center text-balance text-muted-foreground text-xs">
          By clicking continue, you agree to our{" "}
          <span className="hover:text-primary underline">Terms of service</span>{" "}
          and{" "}
          <span className="hover:text-primary underline">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
