"use client"
import { Event } from "@/app/(web)/(student)/events/[eventId]/page";
import Link from "next/link";

function ClubAvatar({ name, logoUrl, size = 36 }: { name: string; logoUrl: string | null; size?: number }) {
    if (logoUrl) {
        return <img src={logoUrl} alt={name} className="rounded-full object-cover shrink-0" style={{ width: size, height: size }} />
    }
    return (
        <div className="rounded-full flex items-center justify-center font-display font-bold shrink-0"
            style={{ width: size, height: size, background: "rgba(108,99,255,0.18)", color: "#a09dff", fontSize: size * 0.38 }}>
            {name.charAt(0)}
        </div>
    )
}

export function ClubCard({ id, name, logoUrl, college, category, instagram }: { id: string, name: string, logoUrl: string, college: string, category: string, instagram: string }) {
    return (
        <Link href={`/clubs/${id}`}
            className="fade-up delay-2 club-link flex items-center gap-4 p-4 rounded-2xl"
            style={{ background: "#111118", border: "1px solid #1a1a2a", textDecoration: "none" }}>
            <ClubAvatar name={name} logoUrl={logoUrl} size={46} />
            <div className="flex-1 min-w-0">
                <div className="text-sm font-medium mb-0.5">{name}</div>
                <div className="text-xs" style={{ color: "#6b6b8a" }}>
                    {college} · {category}
                </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
                {instagram && (
                    <a href={`https://instagram.com/${instagram}`}
                        target="_blank" rel="noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="social-link px-2.5 py-1.5 rounded-lg text-xs transition-all"
                        style={{ border: "1px solid #1a1a2a", color: "#6b6b8a", textDecoration: "none" }}>
                        📸
                    </a>
                )}
                <span className="text-xs" style={{ color: "#6b6b8a" }}>View Club →</span>
            </div>
        </Link>
    )
}