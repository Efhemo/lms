"use client";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const features: FeatureProps[] = [
  {
    title: "Comprehensive Courses",
    description:
      "Access a wide range of carefully curated courses designed by industry experts.",
    icon: "📚",
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with interactive content, quizzes, and assignments to enhance your leaning experience.",
    icon: "🎮",
  },
  {
    title: "Progressive Trancking",
    description:
      "Monitor your progress and achievements with detailed analytics and personalized dashboards.",
    icon: "📈",
  },
  {
    title: "Communitive support",
    description:
      "Join a vibrant community of learners and instructors to collaborate and share knowledge.",
    icon: "👥",
  },
];

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-6 ">
          <Badge variant={"outline"}>The Future of Online Education</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elevate your Learning Experience
          </h1>
          <p className="mx-w-[700] text-muted-foreground">
            Discover a new way to learn with our modern, interactive learning
            management system. Access high-quality courses anytime, anywhwere
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href={"/courses"}
            >
              Explore courses
            </Link>
            <Link
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
              href={"/login"}
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card className="hover:shadow-lg transition-shadow" key={index}>
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
