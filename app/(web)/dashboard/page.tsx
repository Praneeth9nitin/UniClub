import { middleware } from "@/app/api/club/authMiddleware";
import { getClub, getCollege, getEvents } from "@/services/club.services";
import Link from "next/link";

async function getDashboardData(clubId: string) {
    const events = await getEvents(clubId);
    const club = await getClub(clubId);
    const college = await getCollege(clubId);
    return {
        club,
        stats: { totalEvents: events?.length, upcomingEvents: events?.filter((event) => event.status === "UPCOMING").length, totalRegistrations: events?.reduce((acc, event) => acc + event.registrations.length, 0) || 0, followersCount: club?.followers.length },
        recentEvents: events,
        college
    };
}

const STATUS_STYLE: Record<string, { bg: string; color: string; label: string }> = {
    UPCOMING: { bg: "rgba(108,99,255,0.15)", color: "#a09dff", label: "Upcoming" },
    COMPLETED: { bg: "rgba(67,233,123,0.15)", color: "#43e97b", label: "Completed" },
    CANCELLED: { bg: "rgba(255,101,132,0.15)", color: "#ff8fa3", label: "Cancelled" },
};

export default async function DashboardPage() {
    const session = await middleware()
    const data = await getDashboardData(session.clubId);
    const { club, stats, recentEvents, college } = data;

    const statCards = [
        { icon: "👥", label: "Followers", value: stats.followersCount, color: "#ff6584", change: "All time" },
        { icon: "📅", label: "Total Events", value: stats.totalEvents, color: "#6c63ff", change: `${stats.upcomingEvents} upcoming` },
        { icon: "🎟️", label: "Registrations", value: stats.totalRegistrations, color: "#43e97b", change: "All time" },
        { icon: "📈", label: "Avg per Event", value: Math.round(stats.totalRegistrations / stats.totalEvents), color: "#ffc107", change: "registrations" },
    ];

    return (
        <div className="mx-auto flex flex-col gap-6" style={{ padding: "10px" }}>

            {/* Welcome banner */}
            <div className="fade-up mb-6 rounded-2xl relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(255,101,132,0.12), rgba(108,99,255,0.08))", border: "1px solid rgba(255,101,132,0.2)", padding: "10px" }}>
                <div className="absolute pointer-events-none rounded-full"
                    style={{ width: 300, height: 300, background: "#ff6584", filter: "blur(100px)", opacity: 0.07, top: -100, right: -50 }} />
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h2 className="font-display font-bold text-xl" style={{ letterSpacing: "-0.02em" }}>{club?.name}</h2>
                            {club?.onHold && (
                                <span className="flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium"
                                    style={{ background: "rgba(255,193,7,0.15)", color: "#ffc107", border: "1px solid rgba(255,193,7,0.3)", padding: "3px" }}>
                                    ⏳ Pending
                                </span>
                            )}
                        </div>
                        <p className="text-sm font-light" style={{ color: "var(--muted)" }}>
                            {college?.name} · {club?.category}
                        </p>
                    </div>
                    <Link href="/dashboard/events/create"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                        style={{ background: "#ff6584", textDecoration: "none", padding: "5px" }}>
                        + Create Event
                    </Link>
                </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {statCards.map((s, i) => (
                    <div key={s.label}
                        className={`stat-card fade-up fade-up-${i + 1} rounded-xl p-5`}
                        style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "5px" }}>
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xl">{s.icon}</span>
                            <div className="text-xs px-2 py-0.5 rounded-full font-medium"
                                style={{ background: `${s.color}18`, color: s.color, padding: "5px" }}>
                                {s.change}
                            </div>
                        </div>
                        <div className="font-display font-bold text-2xl mb-0.5" style={{ color: s.color }}>
                            {s.value?.toLocaleString()}
                        </div>
                        <div className="text-xs font-light" style={{ color: "var(--muted)" }}>{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Recent events + Quick actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                {/* Recent events */}
                <div className="lg:col-span-2 fade-up fade-up-3 rounded-xl overflow-hidden"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div className="flex items-center justify-between px-5 py-4"
                        style={{ borderBottom: "1px solid var(--border)", padding: "3px" }}>
                        <div className="font-display font-semibold text-sm">Recent Events</div>
                        <Link href="/dashboard/events" className="text-xs font-medium hover:underline"
                            style={{ color: "#ff6584", textDecoration: "none" }}>
                            View all →
                        </Link>
                    </div>

                    <div>
                        {recentEvents.map((event, i) => {
                            const s = STATUS_STYLE[event.status];
                            return (
                                <div key={event.id}
                                    className="event-row flex items-center gap-4 px-5 py-4"
                                    style={{ borderBottom: i < recentEvents.length - 1 ? "1px solid var(--border)" : "none", padding: "5px" }}>
                                    {/* Date block */}
                                    <div className="w-10 text-center shrink-0">
                                        <div className="font-display font-bold text-lg leading-none" style={{ color: "#ff6584" }}>
                                            {new Date(event.date).getDate()}
                                        </div>
                                        <div className="text-xs font-light" style={{ color: "var(--muted)" }}>
                                            {new Date(event.date).toLocaleString("default", { month: "short" })}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium truncate mb-0.5">{event?.name}</div>
                                        <div className="text-xs font-light" style={{ color: "var(--muted)" }}>
                                            {event?.registrations.length} registrations
                                        </div>
                                    </div>

                                    {/* Status */}
                                    <span className="text-xs px-2.5 py-1 rounded-full font-medium shrink-0"
                                        style={{ background: s.bg, color: s.color, padding: "5px" }}>
                                        {s.label}
                                    </span>

                                    {/* Edit */}
                                    <Link href={`/dashboard/events/${event.id}/edit`}
                                        className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:border-violet-500 hover:text-violet-400 shrink-0"
                                        style={{ border: "1px solid var(--border)", color: "var(--muted)", textDecoration: "none", padding: "5px" }}>
                                        Edit
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Quick actions */}
                <div className="fade-up fade-up-4 flex flex-col gap-4">

                    {/* Actions */}
                    <div className="rounded-xl overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "5px" }}>
                        <div className="px-5 py-4 font-display font-semibold text-sm" style={{ borderBottom: "1px solid var(--border)" }}>
                            Quick Actions
                        </div>
                        <div className="p-3 flex flex-col gap-2">
                            {[
                                { href: "/dashboard/events/create", icon: "📅", label: "Create new event", color: "#ff6584" },
                                { href: "/dashboard/settings", icon: "⚙️", label: "Edit club profile", color: "#6c63ff" },
                                { href: "/dashboard/analytics", icon: "📊", label: "View analytics", color: "#43e97b" },
                            ].map((a) => (
                                <Link key={a.href} href={a.href}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:brightness-110"
                                    style={{ background: `${a.color}10`, border: `1px solid ${a.color}25`, color: a.color, textDecoration: "none", padding: "5px" }}>
                                    <span>{a.icon}</span>
                                    {a.label}
                                    <span className="ml-auto text-xs opacity-60">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Verification status */}
                    <div className="rounded-xl p-5" style={{ background: "rgba(255,193,7,0.06)", border: "1px solid rgba(255,193,7,0.2)", padding: "5px" }}>
                        <div className="flex items-center gap-2 mb-2">
                            <span>⏳</span>
                            <div className="font-display font-semibold text-sm" style={{ color: "#ffc107" }}>Verification Pending</div>
                        </div>
                        <p className="text-xs font-light leading-relaxed" style={{ color: "var(--muted)" }}>
                            Your club is under review. We&apos;ll verify within 24 hours. Events are visible but marked unverified.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}