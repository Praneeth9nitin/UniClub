// app/(student)/events/[id]/page.tsx
// ✅ SERVER COMPONENT

import { notFound } from "next/navigation"
import Link from "next/link"
import { middleware } from "@/app/api/student/protect"
import { RegisterButton } from "@/components/student/RegisterButton"
import { ClubCard } from "@/components/student/ClubCard"
import { getEvent } from "@/services/student.services"

// ── Types ────────────────────────────────────────────────────────
export type Event = {
    id: string
    title: string
    description: string
    date: string
    venue: string | null
    mode: "ONLINE" | "OFFLINE" | "HYBRID"
    category: string
    registrationFee: number
    registrationDeadline: string | null | undefined
    registrationLink: string | null
    maxRegistrations: number | null
    banner: string | null
    isPublished: boolean
    club: {
        id: string
        name: string
        college: string
        category: string
        logoUrl: string | null
        instagram: string | null
        website: string | null
    }
    registrations: { id: string }[]
    isRegistered: boolean
}

// ── Data fetching ─────────────────────────────────────────────────
async function getEventData(eventId: string, studentId: string): Promise<Event | null> {
    const event = await getEvent(eventId)
    if (!event) {
        return null
    }
    return {
        id: eventId,
        title: event?.name,
        description: event?.description || "something went wrong",
        date: event?.date.toString(),
        venue: event?.venue,
        mode: event.mode,
        category: event.category,
        registrationFee: event?.registrationFee || 0,
        registrationDeadline: event.registrationDeadline?.toString(),
        registrationLink: event.registrationLink,
        maxRegistrations: 60,
        banner: event.banner,
        isPublished: event.isPublic,
        club: {
            id: event.club.id,
            name: event.club.name,
            category: event.club.category,
            college: event.club.college.name,
            logoUrl: event.club.logoUrl,
            instagram: event.club.instagramUrl,
            website: event.club.websiteUrl,
        },
        registrations: Array(47).fill({ id: "" }),
        isRegistered: false,
    }
}

// ── Helpers ───────────────────────────────────────────────────────
const MODE_STYLE: Record<string, { bg: string; color: string; label: string }> = {
    OFFLINE: { bg: "rgba(108,99,255,0.12)", color: "#a09dff", label: "Offline" },
    ONLINE: { bg: "rgba(61,214,140,0.12)", color: "#3dd68c", label: "Online" },
    HYBRID: { bg: "rgba(245,166,35,0.12)", color: "#f5a623", label: "Hybrid" },
}



// ── Page ──────────────────────────────────────────────────────────
export default async function EventDetailPage({
    params,
}: {
    params: Promise<{ eventId: string }>
}) {
    const { eventId } = await params
    const session = await middleware()
    const event = await getEventData(eventId, session.id)

    if (!event) notFound()

    const date = new Date(event.date)
    const deadline = event.registrationDeadline ? new Date(event.registrationDeadline) : null
    const modeS = MODE_STYLE[event.mode] ?? MODE_STYLE.OFFLINE
    const isFree = !event.registrationFee || event.registrationFee === 0
    const registered = event.registrations.length
    const capacity = event.maxRegistrations
    const fillPct = capacity ? Math.min(Math.round((registered / capacity) * 100), 100) : null
    const isFull = capacity ? registered >= capacity : false
    const isPast = date < new Date()

    return (
        <>
            <style>{`
        .back-btn:hover       { border-color: rgba(255,95,130,0.4) !important; color: #ff8fa3 !important; }
        .social-link:hover    { border-color: rgba(108,99,255,0.4) !important; color: #a09dff !important; }
        .club-link:hover      { border-color: rgba(108,99,255,0.3) !important; transform: translateY(-1px); }
        .club-link            { transition: border-color 0.15s, transform 0.15s; }
        .detail-row:hover     { background: rgba(255,255,255,0.02) !important; }
        .detail-row           { transition: background 0.12s; }
      `}</style>

            <div className="max-w-3xl mx-auto">

                {/* Back */}
                <div className="fade-up mb-5">
                    <Link href="/feed"
                        className="back-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all"
                        style={{ border: "1px solid #1a1a2a", color: "#6b6b8a", textDecoration: "none" }}>
                        ← Back to Feed
                    </Link>
                </div>

                {/* ── Hero banner ─────────────────────────────────── */}
                <div className="fade-up rounded-2xl overflow-hidden mb-4 relative"
                    style={{
                        minHeight: 200,
                        background: event.banner
                            ? `linear-gradient(to bottom, rgba(9,9,15,0.3), rgba(9,9,15,0.92)), url(${event.banner}) center/cover`
                            : "linear-gradient(135deg, rgba(108,99,255,0.18), rgba(255,95,130,0.1))",
                        border: "1px solid #1a1a2a",
                    }}>

                    {/* Orb */}
                    {!event.banner && (
                        <div className="absolute rounded-full pointer-events-none"
                            style={{ width: 280, height: 280, background: "#ff5f82", filter: "blur(90px)", opacity: 0.08, top: -80, right: -60 }} />
                    )}

                    <div className="relative z-10 p-6 flex flex-col justify-end" style={{ minHeight: 200 }}>
                        {/* Pills */}
                        <div className="flex items-center gap-2 flex-wrap mb-4">
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                                style={{ background: modeS.bg, color: modeS.color }}>
                                {modeS.label}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                                style={{ background: "rgba(255,255,255,0.08)", color: "#ededf5", border: "1px solid rgba(255,255,255,0.1)" }}>
                                {event.category}
                            </span>
                            {isFull && !isPast && (
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                                    style={{ background: "rgba(255,95,130,0.15)", color: "#ff8fa3" }}>
                                    Full
                                </span>
                            )}
                            {isPast && (
                                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                                    style={{ background: "rgba(255,255,255,0.06)", color: "#6b6b8a" }}>
                                    Ended
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="font-display font-bold mb-2"
                            style={{ fontSize: "1.5rem", lineHeight: 1.2, letterSpacing: "-0.03em" }}>
                            {event.title}
                        </h1>

                        {/* Key info pills */}
                        <div className="flex flex-wrap gap-2">
                            {[
                                { icon: "📅", text: date.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long", year: "numeric" }) },
                                { icon: "🕙", text: date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) },
                                { icon: "📍", text: event.venue },
                            ].map(item => (
                                <div key={item.text}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs"
                                    style={{ background: "rgba(9,9,15,0.6)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.08)", color: "#ededf5" }}>
                                    <span>{item.icon}</span>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Main grid ────────────────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                    {/* Left — description + club ──────────────────── */}
                    <div className="lg:col-span-2 flex flex-col gap-4">

                        {/* Description */}
                        <div className="fade-up delay-1 rounded-2xl p-5"
                            style={{ background: "#111118", border: "1px solid #1a1a2a" }}>
                            <h2 className="font-display font-semibold text-sm mb-3" style={{ letterSpacing: "-0.01em" }}>
                                About this Event
                            </h2>
                            {event.description.split("\n\n").map((para, i) => (
                                <p key={i} className="text-sm leading-relaxed"
                                    style={{ color: "#9999bb", marginBottom: i < event.description.split("\n\n").length - 1 ? "0.85rem" : 0 }}>
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* Club card */}
                        <ClubCard id={event.club.id} name={event.club.name} logoUrl={event.club.logoUrl || ""} college={event.club.college} category={event.category} instagram={event.club.instagram || ""} />

                    </div>

                    {/* Right — registration + details ─────────────── */}
                    <div className="flex flex-col gap-4">

                        {/* Register card */}
                        <div className="fade-up delay-1 rounded-2xl p-5"
                            style={{ background: "#111118", border: "1px solid #1a1a2a" }}>

                            {/* Fee */}
                            <div className="text-center mb-4">
                                <div className="font-display font-bold text-3xl mb-0.5"
                                    style={{ color: isFree ? "#3dd68c" : "#ededf5", letterSpacing: "-0.03em" }}>
                                    {isFree ? "Free" : `₹${event.registrationFee}`}
                                </div>
                                {!isFree && (
                                    <div className="text-xs" style={{ color: "#6b6b8a" }}>Registration fee</div>
                                )}
                            </div>

                            {/* Capacity bar */}
                            {capacity && (
                                <div className="mb-4">
                                    <div className="flex justify-between text-xs mb-1.5" style={{ color: "#6b6b8a" }}>
                                        <span>{registered} registered</span>
                                        <span>{capacity - registered} spots left</span>
                                    </div>
                                    <div className="rounded-full overflow-hidden" style={{ height: 5, background: "#1a1a2a" }}>
                                        <div className="h-full rounded-full transition-all duration-700"
                                            style={{
                                                width: `${fillPct}%`,
                                                background: fillPct! > 80
                                                    ? "linear-gradient(90deg, #ff5f82, #ff8fa3)"
                                                    : "linear-gradient(90deg, #6c63ff, #a09dff)",
                                            }} />
                                    </div>
                                    <div className="text-right text-xs mt-1" style={{ color: "#6b6b8a" }}>
                                        {fillPct}% filled
                                    </div>
                                </div>
                            )}

                            {/* Deadline warning */}
                            {deadline && !isPast && (
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs mb-4"
                                    style={{ background: "rgba(245,166,35,0.08)", border: "1px solid rgba(245,166,35,0.2)", color: "#f5a623" }}>
                                    <span>⏰</span>
                                    <span>
                                        Register by {deadline.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                                    </span>
                                </div>
                            )}

                            {/* Register button — client component */}
                            <RegisterButton
                                eventId={event.id}
                                isRegistered={event.isRegistered}
                                isFull={isFull}
                                isPast={isPast}
                                registrationLink={event.registrationLink}
                            />
                        </div>

                        {/* Event details */}
                        <div className="fade-up delay-2 rounded-2xl overflow-hidden"
                            style={{ background: "#111118", border: "1px solid #1a1a2a" }}>
                            <div className="px-4 py-3 font-display font-semibold text-xs"
                                style={{ borderBottom: "1px solid #1a1a2a", letterSpacing: "-0.01em" }}>
                                Event Details
                            </div>
                            {[
                                { label: "Date", value: date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) },
                                { label: "Time", value: date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) },
                                { label: "Venue", value: event.venue },
                                { label: "Mode", value: modeS.label, color: modeS.color },
                                { label: "Category", value: event.category },
                                { label: "Capacity", value: capacity ? `${capacity} seats` : "Unlimited" },
                            ].map((item, i, arr) => (
                                <div key={item.label}
                                    className="detail-row flex items-start justify-between gap-3 px-4 py-2.5"
                                    style={{ borderBottom: i < arr.length - 1 ? "1px solid #1a1a2a" : "none" }}>
                                    <span className="text-xs shrink-0" style={{ color: "#6b6b8a" }}>{item.label}</span>
                                    <span className="text-xs font-medium text-right"
                                        style={{ color: (item as any).color ?? "#ededf5" }}>
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}