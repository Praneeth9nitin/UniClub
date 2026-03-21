// app/(student)/profile/page.tsx
// ✅ SERVER COMPONENT

import { middleware } from "@/app/api/student/protect"
import Link from "next/link"
import { EditProfileForm } from "@/components/student/EditProfileForm"
import { getMe } from "@/services/student.services"

// ── Types ────────────────────────────────────────────────────────
type Student = {
    id: string
    firstName: string
    lastName: string
    email: string
    college: string
}

type FollowedClub = {
    id: string
    name: string
    category: string
    college: {
        name: string
    }
    logoUrl: string | null
    _count: {
        followers: number
    }
}

type RegisteredEvent = {
    id: string
    event: {
        name: string
        date: Date
        venue: string | null
        mode: string
        registrationFee: number | null
        club: {
            id: string
            name: string
        }
    }
}

type ProfileData = {
    student: Student
    followedClubs: FollowedClub[]
    registeredEvents: RegisteredEvent[]
}

// ── Data fetching ─────────────────────────────────────────────────
async function getProfileData(studentId: string): Promise<ProfileData | null> {
    const me = await getMe(studentId)
    if (!me) {
        return null
    }
    return {
        student: {
            id: me?.id,
            firstName: me.firstName,
            lastName: me.lastName,
            email: me.email,
            college: me.college?.name || "",
        },
        followedClubs: me.followsClub,
        registeredEvents: me.registrations,
    }
}

// ── Helpers ───────────────────────────────────────────────────────
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

const MODE_STYLE: Record<string, { bg: string; color: string }> = {
    OFFLINE: { bg: "rgba(108,99,255,0.12)", color: "#a09dff" },
    ONLINE: { bg: "rgba(61,214,140,0.12)", color: "#3dd68c" },
    HYBRID: { bg: "rgba(245,166,35,0.12)", color: "#f5a623" },
}

// ── Page ──────────────────────────────────────────────────────────
export default async function ProfilePage() {
    const session = await middleware()
    const data = await getProfileData(session.id)
    if (!data) {
        return <div className="flex items-center justify-center h-screen">
            <p className="text-red-500">User not found</p>
        </div>
    }
    const { student, followedClubs, registeredEvents } = data
    const initials = `${student.firstName.charAt(0)}${student.lastName.charAt(0)}`

    return (
        <>
            <style>{`
        .club-card:hover  { border-color: rgba(108,99,255,0.3) !important; transform: translateY(-1px); }
        .club-card        { transition: border-color 0.15s, transform 0.15s; }
        .event-row:hover  { border-color: rgba(108,99,255,0.25) !important; }
        .event-row        { transition: border-color 0.15s; }
      `}</style>

            <div className="max-w-3xl mx-auto">

                {/* ── Profile card ──────────────────────────────────── */}
                <div className="fade-up rounded-2xl p-6 mb-4 relative overflow-hidden"
                    style={{ background: "#111118", border: "1px solid #1a1a2a" }}>

                    {/* Orb */}
                    <div className="absolute rounded-full pointer-events-none"
                        style={{ width: 250, height: 250, background: "#6c63ff", filter: "blur(80px)", opacity: 0.06, top: -80, right: -60 }} />

                    <div className="relative z-10 flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-4">
                            {/* Avatar */}
                            <div className="rounded-2xl flex items-center justify-center font-display font-bold text-xl shrink-0"
                                style={{
                                    width: 64, height: 64,
                                    background: "linear-gradient(135deg, rgba(108,99,255,0.25), rgba(255,95,130,0.15))",
                                    border: "1px solid rgba(108,99,255,0.2)",
                                    color: "#a09dff",
                                }}>
                                {initials}
                            </div>

                            {/* Info */}
                            <div>
                                <h1 className="font-display font-bold text-xl mb-0.5" style={{ letterSpacing: "-0.02em" }}>
                                    {student.firstName} {student.lastName}
                                </h1>
                                <p className="text-sm mb-1" style={{ color: "#6b6b8a" }}>{student.email}</p>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                                        style={{ background: "rgba(108,99,255,0.12)", color: "#a09dff", border: "1px solid rgba(108,99,255,0.2)" }}>
                                        {student.college}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Edit button — triggers client form */}
                        <EditProfileForm student={student} />
                    </div>

                    {/* Stats */}
                    <div className="relative z-10 grid grid-cols-2 gap-3 mt-5">
                        {[
                            { label: "Clubs Following", value: followedClubs.length, color: "#a09dff" },
                            { label: "Events Registered", value: registeredEvents.length, color: "#ff5f82" },
                        ].map(s => (
                            <div key={s.label} className="rounded-xl px-4 py-3 text-center"
                                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #1a1a2a" }}>
                                <div className="font-display font-bold text-2xl mb-0.5" style={{ color: s.color }}>
                                    {s.value}
                                </div>
                                <div className="text-xs" style={{ color: "#6b6b8a" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Followed clubs ────────────────────────────────── */}
                <div className="fade-up delay-1 rounded-2xl overflow-hidden mb-4"
                    style={{ background: "#111118", border: "1px solid #1a1a2a" }}>

                    <div className="flex items-center justify-between px-5 py-4"
                        style={{ borderBottom: "1px solid #1a1a2a" }}>
                        <h2 className="font-display font-semibold text-sm" style={{ letterSpacing: "-0.01em" }}>
                            Following
                            <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium"
                                style={{ background: "rgba(108,99,255,0.12)", color: "#a09dff" }}>
                                {followedClubs.length}
                            </span>
                        </h2>
                        <Link href="/clubs" className="text-xs font-medium hover:underline"
                            style={{ color: "#6c63ff", textDecoration: "none" }}>
                            Explore more →
                        </Link>
                    </div>

                    {followedClubs.length === 0 ? (
                        <div className="text-center py-10">
                            <div className="text-3xl mb-2">🎯</div>
                            <p className="text-sm mb-3" style={{ color: "#6b6b8a" }}>You haven&apos;t followed any clubs yet</p>
                            <Link href="/clubs"
                                className="inline-flex text-sm font-medium px-4 py-2 rounded-lg text-white"
                                style={{ background: "#6c63ff", textDecoration: "none" }}>
                                Explore clubs →
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4">
                            {followedClubs.map((club, i) => (
                                <Link key={club.id} href={`/clubs/${club.id}`}
                                    className="club-card flex flex-col items-center text-center p-4 rounded-xl"
                                    style={{
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid #1a1a2a",
                                        textDecoration: "none",
                                        animation: `fadeUp 0.35s ease ${0.05 * i}s both`,
                                    }}>
                                    <ClubAvatar name={club.name} logoUrl={club.logoUrl} size={44} />
                                    <div className="font-medium text-sm mt-2.5 mb-0.5 truncate w-full">{club.name}</div>
                                    <div className="text-xs truncate w-full" style={{ color: "#6b6b8a" }}>{club.college.name}</div>
                                    <div className="text-xs mt-1.5 px-2 py-0.5 rounded-full"
                                        style={{ background: "rgba(108,99,255,0.1)", color: "#a09dff" }}>
                                        {club.category}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* ── Registered events ─────────────────────────────── */}
                <div className="fade-up delay-2 rounded-2xl overflow-hidden"
                    style={{ background: "#111118", border: "1px solid #1a1a2a" }}>

                    <div className="px-5 py-4" style={{ borderBottom: "1px solid #1a1a2a" }}>
                        <h2 className="font-display font-semibold text-sm" style={{ letterSpacing: "-0.01em" }}>
                            Registered Events
                            <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium"
                                style={{ background: "rgba(255,95,130,0.12)", color: "#ff5f82" }}>
                                {registeredEvents.length}
                            </span>
                        </h2>
                    </div>

                    {registeredEvents.length === 0 ? (
                        <div className="text-center py-10">
                            <div className="text-3xl mb-2">📅</div>
                            <p className="text-sm mb-3" style={{ color: "#6b6b8a" }}>No event registrations yet</p>
                            <Link href="/feed"
                                className="inline-flex text-sm font-medium px-4 py-2 rounded-lg text-white"
                                style={{ background: "#ff5f82", textDecoration: "none" }}>
                                Browse events →
                            </Link>
                        </div>
                    ) : (
                        registeredEvents.map((event, i) => {
                            const date = event.event.date
                            const modeS = MODE_STYLE[event.event.mode] ?? MODE_STYLE.OFFLINE
                            const isFree = !event.event.registrationFee || event.event.registrationFee === 0

                            return (
                                <Link key={event.id} href={`/events/${event.id}`}
                                    className="event-row flex items-center gap-4 px-5 py-4"
                                    style={{
                                        borderBottom: i < registeredEvents.length - 1 ? "1px solid #1a1a2a" : "none",
                                        textDecoration: "none",
                                        display: "flex",
                                    }}>

                                    {/* Date */}
                                    <div className="text-center shrink-0" style={{ width: 36 }}>
                                        <div className="font-display font-bold leading-none"
                                            style={{ fontSize: "1.1rem", color: "#ff5f82" }}>
                                            {date.getDate()}
                                        </div>
                                        <div className="uppercase" style={{ fontSize: "0.6rem", color: "#6b6b8a" }}>
                                            {date.toLocaleString("default", { month: "short" })}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium truncate mb-0.5">{event.event.name}</div>
                                        <div className="flex items-center gap-1.5 text-xs flex-wrap" style={{ color: "#6b6b8a" }}>
                                            <span>{event.event.club.name}</span>
                                            <span style={{ color: "#2a2a3a" }}>·</span>
                                            <span>📍 {event.event.venue}</span>
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <div className="flex items-center gap-2 shrink-0">
                                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                                            style={{ background: modeS.bg, color: modeS.color }}>
                                            {event.event.mode}
                                        </span>
                                        <span className="text-sm font-semibold"
                                            style={{ color: isFree ? "#3dd68c" : "#ededf5" }}>
                                            {isFree ? "Free" : `₹${event.event.registrationFee}`}
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