// app/(student)/layout.tsx
// ✅ SERVER COMPONENT

import type { Metadata } from "next"
import { StudentNavbar } from "@/components/student/StudentNavbar"

export const metadata: Metadata = {
    title: "Feed — UniClub",
}

export default function StudentLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Syne', sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up   { animation: fadeUp 0.4s ease both; }
        .delay-1   { animation-delay: 0.05s; }
        .delay-2   { animation-delay: 0.10s; }
        .delay-3   { animation-delay: 0.15s; }
        .delay-4   { animation-delay: 0.20s; }
        .delay-5   { animation-delay: 0.25s; }
        .delay-6   { animation-delay: 0.30s; }
        .logo-gradient {
          background: linear-gradient(135deg, #6c63ff, #ff5f82);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

            <div className="min-h-screen" style={{ background: "#09090f", color: "#ededf5", fontFamily: "'DM Sans', sans-serif" }}>
                <StudentNavbar />
                <main className="max-w-5xl mx-auto px-4 py-6">
                    {children}
                </main>
            </div>
        </>
    )
}