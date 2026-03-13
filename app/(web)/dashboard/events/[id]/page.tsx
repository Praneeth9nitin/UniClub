// app/(dashboard)/dashboard/events/[id]/page.tsx
// ✅ SERVER COMPONENT

import { middleware } from "@/app/api/club/authMiddleware";
import { notFound } from "next/navigation"
import Link from "next/link"
import { DeleteEventButton, PublishToggleButton } from "@/components/dasboard/EventActions"
import { getEvent } from "@/services/club.services";

// 🔌 Replace with real Prisma query
async function getEventById(eventId: string, clubId: string) {
    const event = await getEvent(eventId, clubId)
    if (!event) return null
    return {
        id: eventId,
        title: event.name,
        description: event.description || "",
        venue: event.venue,
        eventDate: event.date,
        category: event.category,
        status: event.status,
        isPublished: event.isPublic,
        bannerUrl: event.banner,
        maxRegistrations: event?.capacity,
        createdAt: event?.createdAt,
        registrations: [
            { id: "r1", student: { id: "s1", firstName: "Arjun", lastName: "Sharma", email: "arjun@vit.ac.in", rollNumber: "21BCE1234" }, createdAt: "2025-02-21T10:00:00Z" },
            { id: "r2", student: { id: "s2", firstName: "Priya", lastName: "Nair", email: "priya@vit.ac.in", rollNumber: "21BCE1235" }, createdAt: "2025-02-22T11:00:00Z" },
            { id: "r3", student: { id: "s3", firstName: "Rahul", lastName: "Verma", email: "rahul@vit.ac.in", rollNumber: "21BCE1236" }, createdAt: "2025-02-23T09:00:00Z" },
            { id: "r4", student: { id: "s4", firstName: "Sneha", lastName: "Patel", email: "sneha@vit.ac.in", rollNumber: "21BCE1237" }, createdAt: "2025-02-24T14:00:00Z" },
            { id: "r5", student: { id: "s5", firstName: "Vikram", lastName: "Reddy", email: "vikram@vit.ac.in", rollNumber: "21BCE1238" }, createdAt: "2025-02-25T10:00:00Z" },
        ],
    }
}

const STATUS_STYLE: Record<string, { bg: string; color: string; label: string }> = {
    upcoming: { bg: "rgba(108,99,255,0.14)", color: "#a09dff", label: "Upcoming" },
    completed: { bg: "rgba(61,214,140,0.14)", color: "#3dd68c", label: "Completed" },
    cancelled: { bg: "rgba(255,95,130,0.14)", color: "#ff8fa3", label: "Cancelled" },
}

export default async function EventDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    const session = await middleware()
    const event = await getEventById(id, session.clubId)

    if (!event) notFound()

    const s = STATUS_STYLE[event.status] ?? STATUS_STYLE.upcoming
    const eventDate = new Date(event.eventDate)
    const createdAt = new Date(event.createdAt)
    const registered = event.registrations.length
    const capacity = event.maxRegistrations
    const fillPercent = capacity ? Math.round((registered / capacity) * 100) : null

    return (
        <>
            <style>{`
        .reg-row { transition: background 0.12s; }
        .reg-row:hover { background: rgba(255,255,255,0.025) !important; }
        .info-card { transition: border-color 0.2s, transform 0.2s; }
        .info-card:hover { border-color: rgba(255,95,130,0.2) !important; transform: translateY(-1px); }
      `}</style>

            {/* Topbar */}
            <header className="topbar">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Link href="/dashboard/events" className="btn-ghost">← Back</Link>
                    <div>
                        <div className="topbar-title font-display">Event Detail</div>
                        <div className="topbar-sub">
                            Created {createdAt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <PublishToggleButton eventId={event.id} isPublished={event.isPublished} />
                    <Link href={`/dashboard/events/${event.id}/edit`} className="btn-accent">
                        ✏️ Edit Event
                    </Link>
                </div>
            </header>

            <div className="dash-body">
                <div className="dash-inner">

                    {/* ── Hero banner ─────────────────────────────── */}
                    <div className="fade-up" style={{
                        borderRadius: "1rem",
                        marginBottom: "1.25rem",
                        padding: "2rem",
                        position: "relative",
                        overflow: "hidden",
                        background: event.bannerUrl
                            ? `linear-gradient(to bottom, rgba(9,9,15,0.4), rgba(9,9,15,0.95)), url(${event.bannerUrl}) center/cover`
                            : "linear-gradient(135deg, rgba(255,95,130,0.1), rgba(108,99,255,0.07))",
                        border: "1px solid rgba(255,95,130,0.15)",
                        minHeight: 180,
                    }}>
                        {/* Orb */}
                        {!event.bannerUrl && (
                            <div style={{
                                position: "absolute", width: 320, height: 320,
                                background: "#ff5f82", filter: "blur(100px)", opacity: 0.07,
                                top: -100, right: -80, borderRadius: "50%", pointerEvents: "none",
                            }} />
                        )}

                        <div style={{ position: "relative", zIndex: 1 }}>
                            {/* Category + status */}
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem", flexWrap: "wrap" }}>
                                <span style={{
                                    fontSize: "0.7rem", fontWeight: 600, padding: "3px 10px",
                                    borderRadius: 999, background: "rgba(255,255,255,0.08)",
                                    border: "1px solid rgba(255,255,255,0.12)", color: "#ededf5",
                                }}>
                                    {event.category}
                                </span>
                                <span className="status-pill" style={{ background: s.bg, color: s.color }}>
                                    {s.label}
                                </span>
                                {!event.isPublished && (
                                    <span style={{
                                        fontSize: "0.7rem", fontWeight: 600, padding: "3px 10px",
                                        borderRadius: 999, background: "rgba(245,166,35,0.12)",
                                        border: "1px solid rgba(245,166,35,0.25)", color: "#f5a623",
                                    }}>
                                        Draft
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="font-display" style={{
                                fontSize: "1.6rem", fontWeight: 800,
                                letterSpacing: "-0.03em", lineHeight: 1.2,
                                marginBottom: "1.25rem", maxWidth: 560,
                            }}>
                                {event.title}
                            </h1>

                            {/* Key info pills */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
                                {[
                                    {
                                        icon: "📅",
                                        text: eventDate.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long", year: "numeric" }),
                                    },
                                    {
                                        icon: "🕙",
                                        text: eventDate.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
                                    },
                                    { icon: "📍", text: event.venue },
                                ].map((item) => (
                                    <div key={item.text} style={{
                                        display: "flex", alignItems: "center", gap: "6px",
                                        fontSize: "0.78rem", color: "#ededf5",
                                        background: "rgba(255,255,255,0.07)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        padding: "0.4rem 0.75rem", borderRadius: "0.5rem",
                                    }}>
                                        <span>{item.icon}</span>
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Main grid ───────────────────────────────── */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "1rem" }}>

                        {/* Left column */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                            {/* Description */}
                            <div className="panel fade-up delay-1">
                                <div className="panel-header">
                                    <span className="panel-title font-display">About this Event</span>
                                </div>
                                <div style={{ padding: "1.25rem" }}>
                                    {event.description.split("\n\n").map((para, i) => (
                                        <p key={i} style={{
                                            fontSize: "0.83rem", lineHeight: 1.7,
                                            color: "#c8c8d8", marginBottom: i < event.description.split("\n\n").length - 1 ? "1rem" : 0,
                                        }}>
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Registrations table */}
                            <div className="panel fade-up delay-2">
                                <div className="panel-header">
                                    <span className="panel-title font-display">
                                        Registrations
                                        <span style={{
                                            marginLeft: "0.5rem", fontSize: "0.7rem", fontWeight: 500,
                                            padding: "2px 8px", borderRadius: 999,
                                            background: "rgba(255,95,130,0.12)", color: "#ff5f82",
                                        }}>
                                            {registered}
                                        </span>
                                    </span>
                                </div>

                                {/* Table header */}
                                <div style={{
                                    display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto",
                                    padding: "0.6rem 1.2rem",
                                    borderBottom: "1px solid #1f1f2e",
                                    fontSize: "0.68rem", fontWeight: 600,
                                    textTransform: "uppercase", letterSpacing: "0.08em",
                                    color: "#6b6b8a",
                                }}>
                                    <span>Student</span>
                                    <span>Roll No.</span>
                                    <span>Registered</span>
                                    <span></span>
                                </div>

                                {event.registrations.length === 0 ? (
                                    <div style={{ padding: "3rem", textAlign: "center", color: "#6b6b8a", fontSize: "0.82rem" }}>
                                        No registrations yet
                                    </div>
                                ) : (
                                    event.registrations.map((reg, i) => (
                                        <div key={reg.id} className="reg-row" style={{
                                            display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto",
                                            alignItems: "center",
                                            padding: "0.75rem 1.2rem",
                                            borderBottom: i < event.registrations.length - 1 ? "1px solid #1f1f2e" : "none",
                                        }}>
                                            {/* Name + email */}
                                            <div>
                                                <div style={{ fontSize: "0.8rem", fontWeight: 500, marginBottom: 2 }}>
                                                    {reg.student.firstName} {reg.student.lastName}
                                                </div>
                                                <div style={{ fontSize: "0.68rem", color: "#6b6b8a" }}>
                                                    {reg.student.email}
                                                </div>
                                            </div>

                                            {/* Roll number */}
                                            <div style={{
                                                fontSize: "0.75rem", fontFamily: "monospace",
                                                color: "#a09dff",
                                            }}>
                                                {reg.student.rollNumber}
                                            </div>

                                            {/* Date */}
                                            <div style={{ fontSize: "0.73rem", color: "#6b6b8a" }}>
                                                {new Date(reg.createdAt).toLocaleDateString("en-IN", {
                                                    day: "numeric", month: "short",
                                                })}
                                            </div>

                                            {/* Avatar */}
                                            <div style={{
                                                width: 28, height: 28, borderRadius: "50%",
                                                background: "rgba(108,99,255,0.15)",
                                                color: "#a09dff",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                fontSize: "0.7rem", fontWeight: 700,
                                                fontFamily: "'Syne', sans-serif",
                                            }}>
                                                {reg.student.firstName.charAt(0)}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Right column */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                            {/* Registration stats */}
                            <div className="panel fade-up delay-1">
                                <div className="panel-header">
                                    <span className="panel-title font-display">Registration</span>
                                </div>
                                <div style={{ padding: "1.25rem" }}>
                                    {/* Big number */}
                                    <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
                                        <div className="font-display" style={{
                                            fontSize: "3rem", fontWeight: 800,
                                            color: "#ff5f82", lineHeight: 1,
                                            marginBottom: 4,
                                        }}>
                                            {registered}
                                        </div>
                                        <div style={{ fontSize: "0.75rem", color: "#6b6b8a" }}>
                                            {capacity ? `of ${capacity} spots filled` : "registered"}
                                        </div>
                                    </div>

                                    {/* Progress bar */}
                                    {capacity && (
                                        <>
                                            <div style={{
                                                height: 6, borderRadius: 999,
                                                background: "#1f1f2e", overflow: "hidden",
                                                marginBottom: "0.5rem",
                                            }}>
                                                <div style={{
                                                    height: "100%", borderRadius: 999,
                                                    width: `${Math.min(fillPercent!, 100)}%`,
                                                    background: fillPercent! > 80
                                                        ? "linear-gradient(90deg,#ff5f82,#ff8fa3)"
                                                        : "linear-gradient(90deg,#ff5f82,#6c63ff)",
                                                    transition: "width 0.6s ease",
                                                }} />
                                            </div>
                                            <div style={{
                                                display: "flex", justifyContent: "space-between",
                                                fontSize: "0.68rem", color: "#6b6b8a",
                                            }}>
                                                <span>{fillPercent}% filled</span>
                                                <span>{capacity - registered} spots left</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Event info */}
                            <div className="panel fade-up delay-2">
                                <div className="panel-header">
                                    <span className="panel-title font-display">Details</span>
                                </div>
                                <div style={{ padding: "1rem" }}>
                                    {[
                                        { label: "Date", value: eventDate.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) },
                                        { label: "Time", value: eventDate.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) },
                                        { label: "Venue", value: event.venue },
                                        { label: "Category", value: event.category },
                                        { label: "Status", value: s.label, color: s.color },
                                        { label: "Capacity", value: capacity ? `${capacity} seats` : "Unlimited" },
                                    ].map((item) => (
                                        <div key={item.label} style={{
                                            display: "flex", justifyContent: "space-between",
                                            alignItems: "flex-start", gap: "0.5rem",
                                            padding: "0.6rem 0.25rem",
                                            borderBottom: "1px solid #1f1f2e",
                                            fontSize: "0.78rem",
                                        }}>
                                            <span style={{ color: "#6b6b8a", flexShrink: 0 }}>{item.label}</span>
                                            <span style={{
                                                color: (item as any).color ?? "#ededf5",
                                                textAlign: "right", fontWeight: 500,
                                            }}>
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Danger zone */}
                            <div className="fade-up delay-3" style={{
                                borderRadius: "0.85rem", padding: "1rem",
                                background: "rgba(255,95,130,0.04)",
                                border: "1px solid rgba(255,95,130,0.15)",
                            }}>
                                <div style={{
                                    fontSize: "0.72rem", fontWeight: 600,
                                    color: "#ff5f82", marginBottom: "0.5rem",
                                    fontFamily: "'Syne', sans-serif",
                                }}>
                                    Danger Zone
                                </div>
                                <p style={{ fontSize: "0.72rem", color: "#6b6b8a", marginBottom: "0.75rem", lineHeight: 1.5 }}>
                                    Deleting this event will remove all registrations permanently.
                                </p>
                                <DeleteEventButton eventId={event.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}