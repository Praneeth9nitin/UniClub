// app/(auth)/login/page.tsx
// ✅ SERVER COMPONENT — metadata shell only

import type { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";

export const metadata: Metadata = {
    title: "Login — UniClub",
    description: "Sign in to UniClub to discover clubs and events across your college.",
    robots: { index: false },
};

export default function LoginPage() {
    return <AuthPage mode="login" />;
}