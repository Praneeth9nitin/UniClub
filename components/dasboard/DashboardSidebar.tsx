
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV = [
    { href: "/dashboard", icon: "⚡", label: "Overview" },
    { href: "/dashboard/events", icon: "📅", label: "Events" },
    { href: "/dashboard/analytics", icon: "📊", label: "Analytics" },
    { href: "/dashboard/settings", icon: "⚙️", label: "Settings" },
];

export function DashboardSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    function handleLogout() {
        // 🔌 Clear your JWT token here
        document.cookie = "token=; Max-Age=0; path=/";
        router.push("/club/login");
    }

    return (
        <aside className="hidden md:flex flex-col w-56 shrink-0 relative left-0 top-0"
            style={{ background: "var(--surface)", borderRight: "1px solid var(--border)", padding: "10px" }}>

            {/* Subtle orb */}
            <div className="absolute pointer-events-none rounded-full"
                style={{ width: 300, height: 300, background: "#ff6584", filter: "blur(120px)", opacity: 0.05, top: -100, left: -100 }} />

            {/* Logo */}
            <div className="px-5 py-5 relative z-10" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="font-display font-extrabold text-xl"
                    style={{ background: "linear-gradient(135deg,#6c63ff,#ff6584)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    UniClub
                </div>
                <div className="text-xs mt-0.5 font-light" style={{ color: "var(--muted)" }}>Club Dashboard</div>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 relative z-10 flex flex-col gap-1">
                {NAV.map((item) => {
                    const active = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href}
                            className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium"
                            style={{
                                background: active ? "rgba(255,101,132,0.12)" : "transparent",
                                color: active ? "#ff6584" : "var(--muted)",
                                border: active ? "1px solid rgba(255,101,132,0.2)" : "1px solid transparent",
                                textDecoration: "none",
                            }}>
                            <span className="text-base">{item.icon}</span>
                            {item.label}
                            {active && <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: "#ff6584" }} />}
                        </Link>
                    );
                })}
            </nav>

            {/* Club info + logout */}
            <div className="px-3 py-4 relative z-10" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg mb-2"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm shrink-0"
                        style={{ background: "rgba(255,101,132,0.2)", color: "#ff6584" }}>R</div>
                    <div className="min-w-0">
                        <div className="text-xs font-medium truncate">Robotics Club</div>
                        <div className="text-xs font-light truncate" style={{ color: "var(--muted)" }}>VIT Chennai</div>
                    </div>
                </div>
                <button onClick={handleLogout}
                    className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium"
                    style={{ background: "transparent", border: "none", color: "var(--muted)", cursor: "pointer", textAlign: "left" }}>
                    <span>🚪</span> Sign out
                </button>
            </div>
        </aside>
    );
}