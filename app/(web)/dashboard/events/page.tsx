
import { middleware } from "@/app/api/club/authMiddleware";
import EventAction from "@/components/dasboard/EventAction";
import { getEvents } from "@/services/club.services";
import Link from "next/link";

// 🔌 Replace with real Prisma query
async function getClubEvents(clubId: string) {
    const res = await getEvents(clubId)
    return res
}

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
    UPCOMING: { bg: "rgba(108,99,255,0.15)", color: "#a09dff" },
    COMPLETED: { bg: "rgba(67,233,123,0.15)", color: "#43e97b" },
    CANCELLED: { bg: "rgba(255,101,132,0.15)", color: "#ff8fa3" },
};

export default async function EventsPage() {
    const session = await middleware()
    const events = await getClubEvents(session.clubId)
    const upcoming = events.filter(e => e.status === "UPCOMING");
    const completed = events.filter(e => e.status === "COMPLETED");

    return (
        <div className="max-w-4xl mx-auto flex flex-col gap-6" style={{ padding: "10px" }}>

            {/* Header */}
            <div className="fade-up flex items-center justify-between mb-6 flex-wrap gap-4">
                <div>
                    <h2 className="font-display font-bold text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>Events</h2>
                    <p className="text-sm font-light" style={{ color: "var(--muted)" }}>
                        {upcoming.length} upcoming · {completed.length} completed
                    </p>
                </div>
                <Link href="/dashboard/events/create"
                    className="flex items-center justify-center gap-2 px-5 py-10 w-28 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                    style={{ background: "#ff6584", textDecoration: "none" }}>
                    + Create Event
                </Link>
            </div>

            {/* Upcoming */}
            {upcoming.length > 0 && (
                <div className="fade-up fade-up-1 mb-5">
                    <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>
                        Upcoming
                    </div>
                    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                        {upcoming.map((event, i) => (
                            <EventRow key={event.id} event={event} isLast={i === upcoming.length - 1} />
                        ))}
                    </div>
                </div>
            )}

            {/* Completed */}
            {completed.length > 0 && (
                <div className="fade-up fade-up-2">
                    <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>
                        Completed
                    </div>
                    <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                        {completed.map((event, i) => (
                            <EventRow key={event.id} event={event} isLast={i === completed.length - 1} />
                        ))}
                    </div>
                </div>
            )}

            {events.length === 0 && (
                <div className="fade-up text-center py-20 rounded-xl" style={{ border: "1px dashed var(--border)" }}>
                    <div className="text-4xl mb-4">📅</div>
                    <div className="font-display font-semibold mb-2">No events yet</div>
                    <p className="text-sm font-light mb-6" style={{ color: "var(--muted)" }}>
                        Create your first event and start reaching students.
                    </p>
                    <Link href="/dashboard/events/create"
                        className="inline-block px-6 py-2.5 rounded-lg text-sm font-semibold text-white"
                        style={{ background: "#ff6584", textDecoration: "none" }}>
                        Create your first event →
                    </Link>
                </div>
            )}
        </div>
    );
}

function EventRow({ event, isLast }: { event: any; isLast: boolean }) {
    const s = STATUS_STYLE[event.status];
    return (
        <div className="event-row flex items-center gap-4 px-5 py-4"
            style={{ background: "var(--surface)", borderBottom: isLast ? "none" : "1px solid var(--border)", padding: "5px" }}>
            {/* Date */}
            <div className="w-10 text-center shrink-0">
                <div className="font-display font-bold text-lg leading-none" style={{ color: "#ff6584" }}>
                    {new Date(event.date).getDate()}
                </div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>
                    {new Date(event.date).toLocaleString("default", { month: "short" })}
                </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate mb-0.5">{event.name}</div>
                <div className="text-xs font-light" style={{ color: "var(--muted)" }}>
                    📍 {event.venue} · 🎟️ {event.registrations} registered
                </div>
            </div>

            {/* Category */}
            <span className="hidden sm:block text-xs px-2 py-1 rounded-md font-medium shrink-0"
                style={{ background: "rgba(255,255,255,0.05)", color: "var(--muted)", border: "1px solid var(--border)", padding: "5px" }}>
                {event.category}
            </span>

            {/* Status */}
            <span className="text-xs px-2.5 py-1 rounded-full font-medium shrink-0"
                style={{ background: s.bg, color: s.color, padding: "5px" }}>
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
            </span>

            {/* Actions */}
            <EventAction event={event} />
        </div>
    );
}