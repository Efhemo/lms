# 🚀 Learning Management System (LMS)

A **feature-rich Learning Management System** built from the ground up with **Next.js (TypeScript)**.  
This platform enables creators to build and sell online courses while providing students with a seamless and engaging learning experience.  

---

## ✨ Features

- **Landing Page & Course Catalog** – Browse, search, and purchase courses with Stripe integration.  
- **Authentication** – Secure login via **GitHub OAuth** or **email OTP verification**.  
- **Admin Dashboard** – Manage courses, track analytics, and create lessons with a custom rich-text editor.  
- **Course Management** – Intuitive drag-and-drop interface for structuring chapters and lessons.  
- **File Uploads** – Secure uploads with **AWS S3 pre-signed URLs** and drag-and-drop support.  
- **Student Dashboard** – Track enrolled courses and learning progress.  
- **Course Player** – Modern video player with progress tracking and lesson navigation.  
- **Security** – Protection against bots, XSS, SQL injection, and abuse with **Arcjet**.  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (TypeScript), Shadcn UI, TailwindCSS  
- **Backend:** Next.js API routes, Node.js  
- **Database:** PostgreSQL (or your configured DB)  
- **Storage:** AWS S3 for file hosting  
- **Payments:** Stripe  
- **Email Service:** Resend  

---


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

