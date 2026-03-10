// app/(auth)/signup/page.tsx
// ✅ SERVER COMPONENT — metadata shell only

import type { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";

export const metadata: Metadata = {
    title: "Sign Up — UniClub",
    description: "Create your free UniClub account. Discover clubs and never miss campus events.",
    robots: { index: false },
};

export default function SignupPage() {
    return <AuthPage mode="signup" />;
}