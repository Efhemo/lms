"use client";

import Link from "next/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import UserDropdown from "./UserDropdown";
import { authClient } from "@/lib/auth-client";
import { buttonVariants } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95
     backdrop-blur-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto items-center flex min-h-16 px-4 md:px-6 lg:px-8">
        {/* logo */}
        <Link href="/" className="flex items-center space-x-2 mr-4">
          <Image src={Logo} alt="Logo" className="size-9 rounded-4xl" />
          <span className="font-bold">E-LMS.</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link
                className="text-sm font-medium hover:text-primary transition-colors"
                key={item.name}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            {isPending ? null : session ? (
              <UserDropdown
                name={session.user.name}
                email={session.user.email}
                image={session.user.image || ""}
              />
            ) : (
              <Link className={buttonVariants()} href="/login">
                Get Started
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
