// app/(student)/feed/page.tsx
// ✅ SERVER COMPONENT — Tailwind primary, minimal inline styles

import Link from "next/link"
import { middleware } from "@/app/api/student/protect"
import { FollowButton } from "@/components/student/FollowButton"

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

type SuggestedClub = {
    id: string
    name: string
    college: string
    category: string
    logoUrl: string | null
    followersCount: number
    eventsCount: number
}

// ── Mock data ─────────────────────────────────────────────────────
async function getFeedData(studentId: string) {
    const followedClubIds: string[] = []  // 🔌 get from DB

    // 🔌 prisma.event.findMany({
    //   where: { club: { followers: { some: { studentId } } }, isPublished: true },
    //   include: { club: true, registrations: true },
    //   orderBy: { date: 'asc' }
    // })
    const events: Event[] = [
        {
            id: "1", title: "Robotics Workshop 2025",
            date: "2025-03-20T10:00:00Z", venue: "Lab 204, VIT Chennai",
            mode: "OFFLINE", category: "Workshop",
            registrationFee: 0, registrationDeadline: "2025-03-18T00:00:00Z",
            banner: null,
            club: { id: "c1", name: "Robotics Club", logoUrl: null, college: "VIT Chennai" },
            registrations: Array(124).fill({ id: "" }),
        },
        {
            id: "2", title: "AI/ML Bootcamp — Beginners Welcome",
            date: "2025-03-25T09:00:00Z", venue: "Seminar Hall A",
            mode: "HYBRID", category: "Bootcamp",
            registrationFee: 99, registrationDeadline: "2025-03-22T00:00:00Z",
            banner: null,
            club: { id: "c2", name: "AI Club", logoUrl: null, college: "VIT Chennai" },
            registrations: Array(89).fill({ id: "" }),
        },
        {
            id: "3", title: "Photography Walk — Campus Edition",
            date: "2025-03-28T07:00:00Z", venue: "Main Campus",
            mode: "OFFLINE", category: "Social",
            registrationFee: 0, registrationDeadline: null,
            banner: null,
            club: { id: "c3", name: "Photography Club", logoUrl: null, college: "VIT Chennai" },
            registrations: Array(34).fill({ id: "" }),
        },
        {
            id: "4", title: "National Level Hackathon 2025",
            date: "2025-04-05T08:00:00Z", venue: "Innovation Hub",
            mode: "OFFLINE", category: "Hackathon",
            registrationFee: 200, registrationDeadline: "2025-04-01T00:00:00Z",
            banner: null,
            club: { id: "c4", name: "Coding Club", logoUrl: null, college: "VIT Chennai" },
            registrations: Array(203).fill({ id: "" }),
        },
    ]

    // 🔌 prisma.club.findMany({
    //   where: { followers: { none: { studentId } } },
    //   orderBy: { followers: { _count: 'desc' } }, take: 5
    // })
    const suggestedClubs: SuggestedClub[] = [
        { id: "c5", name: "Dance Club", college: "VIT Chennai", category: "Cultural", logoUrl: null, followersCount: 312, eventsCount: 8 },
        { id: "c6", name: "Debate Society", college: "VIT Chennai", category: "Academic", logoUrl: null, followersCount: 198, eventsCount: 5 },
        { id: "c7", name: "Music Club", college: "VIT Chennai", category: "Cultural", logoUrl: null, followersCount: 445, eventsCount: 12 },
        { id: "c8", name: "Entrepreneurship", college: "VIT Chennai", category: "Business", logoUrl: null, followersCount: 267, eventsCount: 6 },
        { id: "c9", name: "NSS", college: "VIT Chennai", category: "Social Svc", logoUrl: null, followersCount: 534, eventsCount: 15 },
    ]

    return { events, suggestedClubs, hasFollowedClubs: followedClubIds.length > 0 }
}

// ── Helpers ───────────────────────────────────────────────────────
const MODE_CLASSES: Record<string, string> = {
    OFFLINE: "text-violet-400",
    ONLINE: "text-emerald-400",
    HYBRID: "text-amber-400",
}
const MODE_BG: Record<string, string> = {
    OFFLINE: "rgba(108,99,255,0.12)",
    ONLINE: "rgba(61,214,140,0.12)",
    HYBRID: "rgba(245,166,35,0.12)",
}

function ClubAvatar({ name, logoUrl, size = 28 }: { name: string; logoUrl: string | null; size?: number }) {
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
                width: size,
                height: size,
                background: "rgba(108,99,255,0.18)",
                color: "#a09dff",
                fontSize: size * 0.4,
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
        <div>

            {/* ── Header ──────────────────────────────────────────── */}
            <div className="fade-up mb-6">
                <h1 className="font-display font-bold text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>
                    Your Feed
                </h1>
                <p className="text-sm" style={{ color: "#6b6b8a" }}>
                    {hasFollowedClubs
                        ? `${events.length} upcoming events from clubs you follow`
                        : "Follow clubs to see their events here"}
                </p>
            </div>

            {/* ── Empty state — no followed clubs ─────────────────── */}
            {!hasFollowedClubs && (
                <div>
                    {/* Banner */}
                    <div className="fade-up delay-1 rounded-2xl p-10 text-center mb-8 relative overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, rgba(108,99,255,0.08), rgba(255,95,130,0.05))",
                            border: "1px solid rgba(108,99,255,0.15)",
                        }}>
                        {/* Orb */}
                        <div className="absolute rounded-full pointer-events-none"
                            style={{
                                width: 280, height: 280,
                                background: "#6c63ff", filter: "blur(90px)", opacity: 0.06,
                                top: -100, left: "50%", transform: "translateX(-50%)",
                            }} />
                        <div className="relative z-10">
                            <div className="text-4xl mb-3">🎯</div>
                            <h2 className="font-display font-bold text-lg mb-2" style={{ letterSpacing: "-0.02em" }}>
                                Your feed is empty
                            </h2>
                            <p className="text-sm mb-5 leading-relaxed" style={{ color: "#6b6b8a" }}>
                                Follow clubs to see their events appear here.<br />
                                Start by exploring popular clubs below.
                            </p>
                            <Link href="/clubs"
                                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-150 hover:brightness-110"
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
                        {/* idar karna hai <3da */}
                    </div>
                </div>
            )}

            {/* ── Feed grid ────────────────────────────────────────── */}
            {hasFollowedClubs && events.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {events.map((event, i) => {
                        const date = new Date(event.date)
                        const deadline = event.registrationDeadline ? new Date(event.registrationDeadline) : null
                        const isFree = !event.registrationFee || event.registrationFee === 0

                        return (
                            <Link key={event.id} href={`/events/${event.id}`}
                                className="flex flex-col rounded-2xl overflow-hidden transition-all duration-150 hover:-translate-y-0.5"
                                style={{
                                    background: "#111118",
                                    border: "1px solid #1a1a2a",
                                    textDecoration: "none",
                                    animation: `fadeUp 0.4s ease ${0.05 * i}s both`,
                                }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(108,99,255,0.25)" }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a2a" }}
                            >
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
                                        <div className="font-display font-extrabold leading-none" style={{ fontSize: "1rem", color: "#ff5f82" }}>
                                            {date.getDate()}
                                        </div>
                                        <div className="uppercase" style={{ fontSize: "0.6rem", color: "#6b6b8a" }}>
                                            {date.toLocaleString("default", { month: "short" })}
                                        </div>
                                    </div>

                                    {/* Mode pill */}
                                    <div className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${MODE_CLASSES[event.mode]}`}
                                        style={{ background: MODE_BG[event.mode] }}>
                                        {event.mode}
                                    </div>

                                    {/* Category */}
                                    <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-full text-xs font-medium"
                                        style={{ background: "rgba(9,9,15,0.7)", color: "#ededf5" }}>
                                        {event.category}
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="flex flex-col flex-1 gap-2.5 p-4">

                                    {/* Club row */}
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-1.5 min-w-0">
                                            <ClubAvatar name={event.club.name} logoUrl={event.club.logoUrl} size={20} />
                                            <span className="text-xs truncate" style={{ color: "#6b6b8a" }}>
                                                {event.club.name}
                                            </span>
                                        </div>
                                        <FollowButton clubId={event.club.id} initialFollowing={false} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-display font-bold line-clamp-2"
                                        style={{ fontSize: "0.92rem", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                                        {event.title}
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
                                                <span>Register by {deadline.toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</span>
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

            {/* ── Has clubs but no events ──────────────────────────── */}
            {hasFollowedClubs && events.length === 0 && (
                <div className="fade-up delay-1 text-center py-20 rounded-2xl"
                    style={{ background: "#111118", border: "1px solid #1a1a2a" }}>
                    <div className="text-4xl mb-3">📭</div>
                    <h2 className="font-display font-bold text-base mb-2">No upcoming events</h2>
                    <p className="text-sm mb-5" style={{ color: "#6b6b8a" }}>
                        The clubs you follow haven&apos;t posted any events yet.
                    </p>
                    <Link href="/clubs"
                        className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white hover:brightness-110 transition-all"
                        style={{ background: "#6c63ff", textDecoration: "none" }}>
                        Discover more clubs →
                    </Link>
                </div>
            )}
        </div>
    )
}