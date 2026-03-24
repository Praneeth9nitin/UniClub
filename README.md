# UniClub

> A platform that centralises college club events across Indian campuses — so students never miss out and clubs get the reach they deserve.

[![Live Demo](https://img.shields.io/badge/Live-Demo-6c63ff?style=for-the-badge)](https://uniclub.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io)

---

## 🎯 The Problem

College clubs announce events on WhatsApp groups and Instagram stories. Students miss them. Potential participants who would have loved the event never find out it happened.

There is no central place where a student can see everything happening across all clubs in their college.

UniClub fixes that.

---

## ✨ Features

### For Club Leaders
- Create and manage club profile
- Post events with full details — venue, date, mode, registration fee, deadline
- Upload event banners via Cloudinary
- View registrations and analytics
- Email verified badge system

### For Students
- Browse and follow clubs across colleges
- Personalised event feed from followed clubs
- Register for events directly on the platform
- Discover clubs by category and college
- Profile with followed clubs and registered events

---

## 🛠️ Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Next.js 16 (App Router) | Server components, SEO, full stack in one |
| Language | TypeScript | Type safety across the entire codebase |
| Database | PostgreSQL (Neon) | Serverless, scales to zero on free tier |
| ORM | Prisma 7 | Type-safe DB queries, clean migrations |
| Auth | Custom JWT + httpOnly cookies | No third party dependency, full control |
| Storage | Cloudinary | Image uploads with CDN |
| Styling | Tailwind CSS + shadcn/ui | Fast, consistent UI |
| Email | Nodemailer | OTP verification emails |
| Deployment | Vercel | Zero config Next.js deployment |

---

## 🏗️ Architecture Decisions

**Why custom JWT auth instead of NextAuth?**
Full control over token structure and cookie handling. Supports two separate roles (club admin + student) with different cookie names and payloads without fighting library conventions.

**Why server components by default?**
Pages that don't need interactivity — feed, club profiles, event details — are server components. This means faster page loads, better SEO for public pages, and direct DB access without an API call.

**Why Neon over Supabase?**
Neon's serverless architecture matches Vercel's serverless functions perfectly. Zero cold start penalties on the free tier for a product still finding users.

**Why store-first OTP verification?**
User record is created unverified before OTP is sent. This handles the edge case where a user closes the tab mid-flow — they can always request a new OTP without losing their data.

---

## 📁 Project Structure

```
uniclub/
├── app/
│   ├── (auth)/              # Login + signup pages
│   ├── (dashboard)/         # Club admin dashboard
│   │   └── dashboard/
│   │       ├── page.tsx     # Overview
│   │       ├── events/      # Event management
│   │       ├── analytics/   # Club analytics
│   │       └── settings/    # Club settings
│   ├── (student)/           # Student facing app
│   │   ├── feed/            # Personalised event feed
│   │   ├── clubs/           # Browse + club profiles
│   │   ├── events/[id]/     # Event detail + register
│   │   └── profile/         # Student profile
│   └── api/
│       ├── club/            # Club admin API routes
│       └── student/         # Student API routes
├── components/
│   ├── dashboard/           # Dashboard UI components
│   └── student/             # Student UI components
├── lib/           
│   ├── singleton.ts         # Prisma client
│   ├── email.ts             # Nodemailer setup
│   └── validator/           # Zod schemas
├── services/
│   ├── club.services.ts     # Club business logic
│   └── student.services.ts  # Student business logic
└── prisma/
    └── schema.prisma        # Database schema
```

---

## 🗄️ Database Schema

Key models and their relationships:

```
Student ──follows──> Club
Student ──registers──> Event
Club ──has many──> Event
Club ──managed by──> ClubAdmin
Event ──has many──> EventRegistration
```

Notable design decisions:
- Soft deletes on events (`deletedAt` field)
- Many-to-many follow system (implicit Prisma relation)
- Unique constraint on `[eventId, studentId]` prevents double registration
- OTP stored directly on student/clubAdmin record with expiry

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database (Neon recommended)
- Cloudinary account
- Gmail account for sending OTPs

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/uniclub.git
cd uniclub

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

### Environment Variables

```bash
# Database
DATABASE_URL="postgresql://..."

# Auth
JWT_SECRET="your-secret-key-min-32-chars"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="your-preset-name"

# Email
EMAIL_USER="your-gmail@gmail.com"
EMAIL_PASS="your-gmail-app-password"
```

### Database Setup

```bash
# Run migrations
npx prisma migrate dev

# Generate Prisma client
npx prisma generate
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

Both roles use separate JWT cookies (`clubAdmin` and `student`) with `httpOnly`, `sameSite: lax` flags.

Route protection is handled at two layers:
1. `middleware.ts` — checks cookie exists before hitting protected routes
2. `middleware()(In api/club)` / `middleware()(In api/student)` — decodes and validates JWT in server components

---

## 📸 Screenshots

> Add screenshots here after deployment

| Club Dashboard | Student Feed | Event Detail |
|---------------|-------------|-------------|
| ![dashboard]() | ![feed]() | ![event]() |

---

## 🗺️ Roadmap

- [x] Club admin dashboard
- [x] Event CRUD
- [x] Student feed
- [x] Follow system
- [x] Event registration
- [x] Analytics dashboard for clubs
- [ ] Email OTP verification
- [ ] Push notifications
- [ ] College admin verification
- [ ] Event ticketing with payment (Razorpay)

---

## 👤 Author

**Praneeth**
- Twitter: [@praneeth__gupta)](https://x.com/praneeth__gupta)
- LinkedIn: [linkedin.com/in/praneethnitin](https://www.linkedin.com/in/praneethnitin/)

Built as a final year project — and a genuine attempt to solve a problem I experienced every semester.

---