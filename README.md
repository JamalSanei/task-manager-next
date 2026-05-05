# Task Manager — Next.js Learning Project

A task manager app rebuilt with Next.js to learn SSR, App Router, and full-stack concepts.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Prisma (ORM)
- PostgreSQL / SQLite

## Setup

```bash
npm install
npm run dev
```

## Learning Milestones (Commits)

| #   | Topic                       | What gets added                                      |
| --- | --------------------------- | ---------------------------------------------------- |
| 1   | App Router                  | File structure, layout, page                         |
| 2   | Server vs Client Components | Difference between `use client` and server component |
| 3   | Server Actions              | Add/Delete Tasks Without API                         |
| 4   | Data Fetching               | fetch in server component                            |
| 5   | Loading & Error UI          | loading.tsx، error.tsx                               |
| 6   | Prisma + SQLite             | Real database                                        |
| 7   | Auth (NextAuth)             | login، session، protected routes                     |
| 8   | Deployment                  | deploy on Vercel                                     |

## Project Structure (final)

```
src/
├── app/
│   ├── layout.tsx          ← shared layout
│   ├── page.tsx            ← home page
│   ├── loading.tsx         ← loading UI
│   ├── error.tsx           ← error UI
│   └── tasks/
│       ├── page.tsx
│       └── [id]/
│           └── page.tsx
├── components/
│   ├── TaskCard.tsx
│   └── TaskForm.tsx
├── actions/
│   └── taskActions.ts      ← server actions
└── lib/
    └── db.ts               ← prisma client
```

## Key Differences from React

| React              | Next.js                       |
| ------------------ | ----------------------------- |
| Client-side only   | Server + Client               |
| React Router       | App Router (file-based)       |
| fetch in useEffect | fetch in server component     |
| It has no backend  | API Routes and Server Actions |
