// components/student/StudentNavbar.tsx
// ⚡ CLIENT — usePathname for active state

"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const NAV = [
    { href: "/feed", label: "Feed" },
    { href: "/clubs", label: "Clubs" },
    { href: "/profile", label: "Profile" },
]

export function StudentNavbar() {
    const pathname = usePathname()
    const router = useRouter()

    function logout() {
        document.cookie = "student=; Max-Age=0; path=/"
        router.push("/login")
    }

    return (
        <header className="sticky top-0 z-50 border-b backdrop-blur-md"
            style={{ borderColor: "#1a1a2a", background: "rgba(9,9,15,0.85)" }}>
            <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

                {/* Logo */}
                <Link href="/feed" className="font-display font-extrabold text-lg shrink-0 logo-gradient"
                    style={{ textDecoration: "none", letterSpacing: "-0.03em" }}>
                    UniClub
                </Link>

                {/* Nav */}
                <nav className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                    {NAV.map(item => {
                        const active = pathname === item.href || pathname.startsWith(item.href + "/")
                        return (
                            <Link key={item.href} href={item.href}
                                className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-150 whitespace-nowrap ${active
                                        ? "font-medium text-white"
                                        : "font-normal hover:text-white"
                                    }`}
                                style={{
                                    background: active ? "rgba(255,255,255,0.06)" : "transparent",
                                    color: active ? "#ededf5" : "#6b6b8a",
                                    textDecoration: "none",
                                }}>
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Right */}
                <div className="flex items-center gap-2 shrink-0">
                    {/* Avatar */}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-xs"
                        style={{
                            background: "rgba(108,99,255,0.2)",
                            border: "1px solid rgba(108,99,255,0.3)",
                            color: "#a09dff",
                        }}>
                        P
                    </div>
                    {/* Logout */}
                    <button onClick={logout}
                        className="text-xs transition-colors duration-150 hover:text-rose-400"
                        style={{ background: "none", border: "none", color: "#6b6b8a", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                        Sign out
                    </button>
                </div>
            </div>
        </header>
    )
}