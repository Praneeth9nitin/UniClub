// app/(student)/clubs/[clubId]/page.tsx
// ✅ SERVER COMPONENT

import { notFound } from "next/navigation"
import Link from "next/link"
import { middleware } from "@/app/api/student/protect"
import { FollowButton } from "@/components/student/FollowButton"
import { getClubById } from "@/services/student.services"

// ── Types ────────────────────────────────────────────────────────


type Club = {
    id: string
    name: string
    description: string
    college: string
    category: string
    logoUrl: string | null
    bannerUrl: string | null
    instagram: string | null
    website: string | null
    followersCount: number
    eventsCount: number
    isFollowing: boolean
    events: Event[]
}

// ── Data fetching ─────────────────────────────────────────────────
async function getClubData(clubId: string, studentId: string) {
    const club = await getClubById(clubId)
    if (!club) return null

    return {
        id: club.id,
        name: club.name,
        description: club.description || "",
        college: club.college.name || "",
        category: club.category || "",
        logoUrl: club.logoUrl,
        bannerUrl: null,
        instagram: club.instagramUrl,
        website: club.websiteUrl,
        followersCount: club.followers.length,
        eventsCount: club.events.length,
        isFollowing: club.followers.map((f: any) => f.id).includes(studentId),
        events: club.events.map((event) => {
            return {
                id: event.id,
                title: event.name,
                date: event.date,
                venue: event.venue,
                mode: event.mode,
                category: event.category,
                registrationFee: event.registrationFee,
                registrationDeadline: event.registrationDeadline,
                registrations: event.registrations.length,
            }
        })
    }
}

// ── Helpers ───────────────────────────────────────────────────────
const MODE_STYLE: Record<string, { bg: string; color: string }> = {
    OFFLINE: { bg: "rgba(108,99,255,0.12)", color: "#a09dff" },
    ONLINE: { bg: "rgba(61,214,140,0.12)", color: "#3dd68c" },
    HYBRID: { bg: "rgba(245,166,35,0.12)", color: "#f5a623" },
}

// ── Page ──────────────────────────────────────────────────────────
export default async function ClubProfilePage({
    params,
}: {
    params: Promise<{ clubId: string }>
}) {
    const { clubId } = await params
    const session = await middleware()
    const club = await getClubData(clubId, session.id)

    if (!club) notFound()

    return (
        <>
            <style>{`
        .event-row:hover    { border-color: rgba(108,99,255,0.25) !important; transform: translateY(-1px); }
        .event-row          { transition: border-color 0.15s, transform 0.15s; }
        .social-link:hover  { border-color: rgba(108,99,255,0.4) !important; color: #a09dff !important; }
        .back-btn:hover     { border-color: rgba(255,95,130,0.4) !important; color: #ff8fa3 !important; }
      `}</style>

            <div className="max-w-3xl mx-auto">

                {/* Back */}
                <div className="fade-up mb-5">
                    <Link href="/clubs"
                        className="back-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all"
                        style={{ border: "1px solid #1a1a2a", color: "#6b6b8a", textDecoration: "none" }}>
                        ← All Clubs
                    </Link>
                </div>

                {/* ── Hero ──────────────────────────────────────────── */}
                <div className="fade-up rounded-2xl overflow-hidden mb-4"
                    style={{ border: "1px solid #1a1a2a" }}>

                    {/* Banner */}
                    <div className="relative" style={{
                        height: 160,
                        background: club.bannerUrl
                            ? `url(${club.bannerUrl}) center/cover`
                            : "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(255,95,130,0.1))",
                    }}>
                        <div className="absolute rounded-full pointer-events-none"
                            style={{
                                width: 300, height: 300, background: "#6c63ff",
                                filter: "blur(80px)", opacity: 0.1,
                                top: -80, right: -60,
                            }} />
                        {/* Category pill */}
                        <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                            style={{ background: "rgba(108,99,255,0.2)", color: "#a09dff" }}>
                            {club.category}
                        </div>
                    </div>

                    {/* Club info */}
                    <div className="p-5" style={{ background: "#111118" }}>
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="flex items-center gap-4">
                                {/* Logo */}
                                {club.logoUrl ? (
                                    <img src={club.logoUrl} alt={club.name}
                                        className="rounded-2xl object-cover shrink-0"
                                        style={{ width: 64, height: 64, marginTop: -32, border: "3px solid #111118" }} />
                                ) : (
                                    <div className="rounded-2xl flex items-center justify-center font-display font-bold text-xl shrink-0"
                                        style={{
                                            width: 64, height: 64,
                                            marginTop: -32,
                                            background: "rgba(108,99,255,0.2)",
                                            color: "#a09dff",
                                            border: "3px solid #111118",
                                        }}>
                                        {club.name.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <h1 className="font-display font-bold text-xl mb-0.5"
                                        style={{ letterSpacing: "-0.02em" }}>
                                        {club.name}
                                    </h1>
                                    <p className="text-sm" style={{ color: "#6b6b8a" }}>
                                        {club.college}
                                    </p>
                                </div>
                            </div>
                            <FollowButton clubId={club.id} initialFollowing={club.isFollowing} />
                        </div>

                        {/* Stats row */}
                        <div className="flex items-center gap-4 mt-4 flex-wrap">
                            {[
                                { label: "Followers", value: club.followersCount },
                                { label: "Events", value: club.eventsCount },
                            ].map(s => (
                                <div key={s.label} className="text-center px-4 py-2 rounded-xl"
                                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #1a1a2a" }}>
                                    <div className="font-display font-bold text-lg"
                                        style={{ color: "#a09dff", letterSpacing: "-0.02em" }}>
                                        {s.value.toLocaleString()}
                                    </div>
                                    <div className="text-xs" style={{ color: "#6b6b8a" }}>{s.label}</div>
                                </div>
                            ))}

                            {/* Social links */}
                            <div className="flex items-center gap-2 ml-auto">
                                {club.instagram && (
                                    <a href={`https://instagram.com/${club.instagram}`}
                                        target="_blank" rel="noreferrer"
                                        className="social-link flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all"
                                        style={{ border: "1px solid #1a1a2a", color: "#6b6b8a", textDecoration: "none" }}>
                                        📸 Instagram
                                    </a>
                                )}
                                {club.website && (
                                    <a href={club.website}
                                        target="_blank" rel="noreferrer"
                                        className="social-link flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all"
                                        style={{ border: "1px solid #1a1a2a", color: "#6b6b8a", textDecoration: "none" }}>
                                        🌐 Website
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── About ─────────────────────────────────────────── */}
                <div className="fade-up delay-1 rounded-2xl p-5 mb-4"
                    style={{ background: "#111118", border: "1px solid #1a1a2a" }}>
                    <h2 className="font-display font-semibold text-sm mb-3"
                        style={{ letterSpacing: "-0.01em" }}>
                        About
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "#9999bb" }}>
                        {club.description}
                    </p>
                </div>

                {/* ── Upcoming Events ───────────────────────────────── */}
                <div className="fade-up delay-2 rounded-2xl overflow-hidden"
                    style={{ background: "#111118", border: "1px solid #1a1a2a" }}>

                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4"
                        style={{ borderBottom: "1px solid #1a1a2a" }}>
                        <h2 className="font-display font-semibold text-sm" style={{ letterSpacing: "-0.01em" }}>
                            Upcoming Events
                            <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium"
                                style={{ background: "rgba(255,95,130,0.12)", color: "#ff5f82" }}>
                                {club.events.length}
                            </span>
                        </h2>
                    </div>

                    {/* Events */}
                    {club.events.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-3xl mb-2">📭</div>
                            <p className="text-sm" style={{ color: "#6b6b8a" }}>
                                No upcoming events right now
                            </p>
                        </div>
                    ) : (
                        club.events.map((event, i) => {
                            const date = new Date(event.date)
                            const deadline = event.registrationDeadline
                                ? new Date(event.registrationDeadline) : null
                            const isFree = !event.registrationFee || event.registrationFee === 0
                            const modeS = MODE_STYLE[event.mode] ?? MODE_STYLE.OFFLINE

                            return (
                                <Link key={event.id} href={`/events/${event.id}`}
                                    className="event-row flex items-center gap-4 px-5 py-4"
                                    style={{
                                        borderBottom: i < club.events.length - 1 ? "1px solid #1a1a2a" : "none",
                                        textDecoration: "none",
                                        display: "flex",
                                    }}>

                                    {/* Date block */}
                                    <div className="text-center shrink-0" style={{ width: 36 }}>
                                        <div className="font-display font-bold leading-none"
                                            style={{ fontSize: "1.1rem", color: "#ff5f82" }}>
                                            {date.getDate()}
                                        </div>
                                        <div className="uppercase text-xs" style={{ color: "#6b6b8a", fontSize: "0.6rem" }}>
                                            {date.toLocaleString("default", { month: "short" })}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium mb-1 truncate">{event.title}</div>
                                        <div className="flex items-center gap-2 text-xs flex-wrap" style={{ color: "#6b6b8a" }}>
                                            <span>📍 {event.venue}</span>
                                            <span style={{ color: "#2a2a3a" }}>·</span>
                                            <span>🎟️ {event.registrations} registered</span>
                                            {deadline && (
                                                <>
                                                    <span style={{ color: "#2a2a3a" }}>·</span>
                                                    <span style={{ color: "#f5a623" }}>
                                                        ⏰ by {deadline.toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right side */}
                                    <div className="flex items-center gap-2 shrink-0">
                                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                                            style={{ background: modeS.bg, color: modeS.color }}>
                                            {event.mode}
                                        </span>
                                        <span className="text-sm font-semibold"
                                            style={{ color: isFree ? "#3dd68c" : "#ededf5" }}>
                                            {isFree ? "Free" : `₹${event.registrationFee}`}
                                        </span>
                                    </div>
                                </Link>
                            )
                        })
                    )}
                </div>
            </div>
        </>
    )
}