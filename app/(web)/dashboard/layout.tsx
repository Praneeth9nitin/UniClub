// app/(dashboard)/dashboard/layout.tsx
// ✅ SERVER COMPONENT — layout shell, sidebar nav

import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/dasboard/DashboardSidebar";
import { DashboardTopbar } from "@/components/dasboard/DashboardTopBar";

export const metadata: Metadata = {
  title: "Dashboard — UniClub",
  robots: { index: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        :root {
          --bg: #0a0a0f;
          --surface: #13131a;
          --surface2: #1a1a24;
          --border: #1e1e2e;
          --accent: #ff6584;
          --accent2: #6c63ff;
          --accent3: #43e97b;
          --muted: #7a7a9a;
          --text: #f0f0f8;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Syne', sans-serif; }

        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 999; opacity: 0.3;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .fade-up   { animation: fadeUp 0.4s ease both; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.1s; }
        .fade-up-3 { animation-delay: 0.15s; }
        .fade-up-4 { animation-delay: 0.2s; }

        .stat-card:hover { border-color: rgba(255,101,132,0.25) !important; transform: translateY(-2px); }
        .stat-card { transition: all 0.25s ease; }
        .event-row:hover { background: rgba(255,255,255,0.03) !important; }
        .event-row { transition: background 0.2s; }
        .nav-item:hover { background: rgba(255,255,255,0.05) !important; color: var(--text) !important; }
        .nav-item { transition: all 0.2s; }
      `}</style>

      <div className="flex min-h-screen" style={{ background: "var(--bg)" }}>
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardTopbar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}