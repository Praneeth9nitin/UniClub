// app/(student)/feed/page.tsx
// ✅ SERVER COMPONENT — zero event handlers, CSS hover only

import Link from "next/link"
import { middleware } from "@/app/api/student/protect"
import { FollowButton } from "@/components/student/FollowButton"
import { getClub, getEvents } from "@/services/student.services"
import z from "zod"
import { Club } from "../clubs/page"

// ── Types ────────────────────────────────────────────────────────
type Event = {
    id: string
    title: string
    date: string
    venue: string
    mode: "ONLINE" | "OFFLINE" | "HYBRID"
    category: string
    registrationFee: number
    registrationDeadline: string | null
    banner: string | null
    club: { id: string; name: string; logoUrl: string | null; college: string }
    registrations: { id: string }[]
}

// ── Mock data ─────────────────────────────────────────────────────
async function getFeedData(studentId: string) {
    const suggestedClubs: Club[] = await getClub(studentId)
    const followedClubs = await getEvents(studentId)
    return { events: followedClubs.events, suggestedClubs, hasFollowedClubs: followedClubs.followedId.length > 0 }
}

const MODE_STYLE: Record<string, { bg: string; color: string }> = {
    OFFLINE: { bg: "rgba(108,99,255,0.12)", color: "#a09dff" },
    ONLINE: { bg: "rgba(61,214,140,0.12)", color: "#3dd68c" },
    HYBRID: { bg: "rgba(245,166,35,0.12)", color: "#f5a623" },
}

function ClubAvatar({ name, logoUrl, size = 28 }: {
    name: string; logoUrl: string | null; size?: number
}) {
    if (logoUrl) {
        return (
            <img src={logoUrl} alt={name}
                className="rounded-full object-cover shrink-0"
                style={{ width: size, height: size }} />
        )
    }
    return (
        <div className="rounded-full flex items-center justify-center font-display font-bold shrink-0"
            style={{
                width: size, height: size,
                background: "rgba(108,99,255,0.18)",
                color: "#a09dff", fontSize: size * 0.4,
            }}>
            {name.charAt(0)}
        </div>
    )
}

// ── Page ──────────────────────────────────────────────────────────
export default async function FeedPage() {
    const session = await middleware()
    const { events, suggestedClubs, hasFollowedClubs } = await getFeedData(session.id)

    return (
        <>
            {/* ── CSS hover states — no JS needed ───────────────── */}
            <style>{`
        .club-row:hover     { border-color: rgba(108,99,255,0.3) !important; }
        .event-card:hover   { border-color: rgba(108,99,255,0.25) !important; transform: translateY(-2px); }
        .event-card         { transition: border-color 0.15s, transform 0.15s; }
        .explore-btn:hover  { filter: brightness(1.1); }
      `}</style>

            <div>
                {/* Header */}
                <div className="fade-up mb-6">
                    <h1 className="font-display font-bold text-xl mb-1"
                        style={{ letterSpacing: "-0.02em" }}>
                        Your Feed
                    </h1>
                    <p className="text-sm" style={{ color: "#6b6b8a" }}>
                        {hasFollowedClubs
                            ? `${events.length} upcoming events from clubs you follow`
                            : "Follow clubs to see their events here"}
                    </p>
                </div>

                {/* ── Empty state ──────────────────────────────────── */}
                {!hasFollowedClubs && (
                    <div>
                        {/* Banner */}
                        <div className="fade-up delay-1 rounded-2xl p-10 text-center mb-8 relative overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, rgba(108,99,255,0.08), rgba(255,95,130,0.05))",
                                border: "1px solid rgba(108,99,255,0.15)",
                            }}>
                            <div className="absolute rounded-full pointer-events-none"
                                style={{
                                    width: 280, height: 280, background: "#6c63ff",
                                    filter: "blur(90px)", opacity: 0.06,
                                    top: -100, left: "50%", transform: "translateX(-50%)",
                                }} />
                            <div className="relative z-10">
                                <div className="text-4xl mb-3">🎯</div>
                                <h2 className="font-display font-bold text-lg mb-2"
                                    style={{ letterSpacing: "-0.02em" }}>
                                    Your feed is empty
                                </h2>
                                <p className="text-sm mb-5 leading-relaxed" style={{ color: "#6b6b8a" }}>
                                    Follow clubs to see their events here.<br />
                                    Start by exploring popular clubs below.
                                </p>
                                <Link href="/clubs"
                                    className="explore-btn inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                                    style={{ background: "#6c63ff", textDecoration: "none" }}>
                                    Explore all clubs →
                                </Link>
                            </div>
                        </div>

                        {/* Suggested clubs */}
                        <div className="fade-up delay-2">
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-display font-semibold text-sm">Popular Clubs</span>
                                <Link href="/clubs" className="text-xs font-medium hover:underline"
                                    style={{ color: "#6c63ff", textDecoration: "none" }}>
                                    See all →
                                </Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                {suggestedClubs.map((club, i) => (
                                    <Link key={club.id} href={`/clubs/${club.id}`}
                                        className="club-row flex items-center gap-3 px-4 py-3 rounded-xl"
                                        style={{
                                            background: "#111118",
                                            border: "1px solid #1a1a2a",
                                            textDecoration: "none",
                                            transition: "border-color 0.15s",
                                            animation: `fadeUp 0.35s ease ${0.05 * i}s both`,
                                        }}>
                                        <ClubAvatar name={club.name} logoUrl={club.logoUrl} size={40} />
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-medium mb-0.5 truncate">{club.name}</div>
                                            <div className="text-xs truncate" style={{ color: "#6b6b8a" }}>
                                                {club.followers.length} followers · {club.events.length} events
                                            </div>
                                        </div>
                                        <FollowButton clubId={club.id} initialFollowing={club.isFollowing} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Feed grid ─────────────────────────────────────── */}
                {hasFollowedClubs && events.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {events.map((event, i) => {
                            const date = new Date(event.date)
                            const deadline = event.registrationDeadline
                                ? new Date(event.registrationDeadline) : null
                            const isFree = !event.registrationFee || event.registrationFee === 0
                            const modeS = MODE_STYLE[event.mode] ?? MODE_STYLE.OFFLINE

                            return (
                                <Link key={event.id} href={`/events/${event.id}`}
                                    className="event-card flex flex-col rounded-2xl overflow-hidden"
                                    style={{
                                        background: "#111118",
                                        border: "1px solid #1a1a2a",
                                        textDecoration: "none",
                                        animation: `fadeUp 0.4s ease ${0.05 * i}s both`,
                                    }}>

                                    {/* Banner */}
                                    <div className="relative shrink-0" style={{
                                        height: 120,
                                        background: event.banner
                                            ? `url(${event.banner}) center/cover`
                                            : "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(255,95,130,0.1))",
                                    }}>
                                        {/* Date chip */}
                                        <div className="absolute top-2.5 left-2.5 text-center rounded-lg px-2 py-1"
                                            style={{ background: "rgba(9,9,15,0.85)", backdropFilter: "blur(8px)", minWidth: 40 }}>
                                            <div className="font-display font-extrabold leading-none"
                                                style={{ fontSize: "1rem", color: "#ff5f82" }}>
                                                {date.getDate()}
                                            </div>
                                            <div className="uppercase" style={{ fontSize: "0.6rem", color: "#6b6b8a" }}>
                                                {date.toLocaleString("default", { month: "short" })}
                                            </div>
                                        </div>

                                        {/* Mode pill */}
                                        <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                                            style={{ background: modeS.bg, color: modeS.color }}>
                                            {event.mode}
                                        </div>

                                        {/* Category */}
                                        <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-full text-xs font-medium"
                                            style={{ background: "rgba(9,9,15,0.7)", color: "#ededf5" }}>
                                            {event.category}
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="flex flex-col flex-1 gap-2.5 p-4">

                                        {/* Club row */}
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-1.5 min-w-0">
                                                <ClubAvatar name={event.club.name} logoUrl={event.club.logoUrl} size={20} />
                                                <span className="text-xs truncate" style={{ color: "#6b6b8a" }}>
                                                    {event.club.name}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-display font-bold"
                                            style={{
                                                fontSize: "0.92rem", lineHeight: 1.3,
                                                letterSpacing: "-0.01em",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                            }}>
                                            {event.name}
                                        </h3>

                                        {/* Meta */}
                                        <div className="flex flex-col gap-1 mt-auto">
                                            <div className="flex items-center gap-1.5 text-xs" style={{ color: "#6b6b8a" }}>
                                                <span>🕙</span>
                                                <span>{date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}</span>
                                                <span style={{ color: "#2a2a3a" }}>·</span>
                                                <span className="truncate">📍 {event.venue}</span>
                                            </div>
                                            {deadline && (
                                                <div className="flex items-center gap-1 text-xs" style={{ color: "#f5a623" }}>
                                                    <span>⏰</span>
                                                    <span>
                                                        Register by {deadline.toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-2.5"
                                            style={{ borderTop: "1px solid #1a1a2a" }}>
                                            <span className="text-sm font-semibold"
                                                style={{ color: isFree ? "#3dd68c" : "#ededf5" }}>
                                                {isFree ? "Free" : `₹${event.registrationFee}`}
                                            </span>
                                            <span className="text-xs" style={{ color: "#6b6b8a" }}>
                                                {event.registrations.length} registered
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                )}

                {/* ── Has clubs but no events ───────────────────────── */}
                {hasFollowedClubs && events.length === 0 && (
                    <div className="fade-up delay-1 text-center py-20 rounded-2xl"
                        style={{ background: "#111118", border: "1px solid #1a1a2a" }}>
                        <div className="text-4xl mb-3">📭</div>
                        <h2 className="font-display font-bold text-base mb-2">No upcoming events</h2>
                        <p className="text-sm mb-5" style={{ color: "#6b6b8a" }}>
                            The clubs you follow haven&apos;t posted any events yet.
                        </p>
                        <Link href="/clubs"
                            className="explore-btn inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                            style={{ background: "#6c63ff", textDecoration: "none" }}>
                            Discover more clubs →
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}