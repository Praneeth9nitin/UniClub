// app/(dashboard)/dashboard/analytics/page.tsx
// ✅ SERVER COMPONENT

import { middleware } from "@/app/api/club/authMiddleware";
import { getClub, getRegistrations } from "@/services/club.services";

export default async function AnalyticsPage() {
    const session = await middleware()
    const { registrations, events } = await getRegistrations(session.clubId)
    const club = await getClub(session.clubId)
    const upcomingEvents = events.filter((event) => event.status === "UPCOMING").length;
    const monthly: { month: string, registrations: number }[] = [];
    const marks = new Map([
        [0, "Jan"],
        [1, "Feb"],
        [2, "Mar"],
        [3, "Apr"],
        [4, "May"],
        [5, "Jun"],
        [6, "Jul"],
        [7, "Aug"],
        [8, "Sep"],
        [9, "Oct"],
        [10, "Nov"],
        [11, "Dec"],
    ])
    for (let i = 5; i >= 0; i--) {
        const curMonth = new Date().getMonth() - i;
        const createdAt = registrations.filter((registration) => registration.createdAt.getMonth() === curMonth);
        monthly.push({ month: marks.get((curMonth + 12) % 12)!, registrations: createdAt.length })
    }

    const topEvents = events.sort((a, b) => b.registrations.length - a.registrations.length).slice(0, 5);

    const maxReg = Math.max(...monthly.map(m => m.registrations));

    return (
        <div className="max-w-4xl flex flex-col gap-6 mx-auto" style={{ padding: "10px" }}>

            {/* Header */}
            <div className="fade-up mb-6">
                <h2 className="font-display font-bold text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>Analytics</h2>
                <p className="text-sm font-light" style={{ color: "var(--muted)" }}>Last 6 months performance</p>
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                    { label: "Total Followers", value: club?.followers.length, change: "All Time", color: "#ff6584" },
                    { label: "Total Registrations", value: registrations.length, change: "All time", color: "#6c63ff" },
                    { label: "Events Published", value: events.length, change: `${upcomingEvents} upcoming`, color: "#43e97b" },
                    { label: "Avg Registrations", value: Math.round(registrations.length / events.length), change: "Per event", color: "#ffc107" },
                ].map((s, i) => (
                    <div key={s.label} className={`stat-card fade-up fade-up-${i + 1} rounded-xl p-5`}
                        style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "5px" }}>
                        <div className="font-display font-bold text-2xl mb-1" style={{ color: s.color }}>{s.value}</div>
                        <div className="text-xs font-medium mb-0.5">{s.label}</div>
                        <div className="text-xs font-light" style={{ color: "var(--muted)" }}>{s.change}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* Registrations chart */}
                <div className="fade-up fade-up-2 rounded-xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "5px" }}>
                    <div className="font-display font-semibold text-sm mb-4">Registrations by Month</div>
                    <div className="flex items-end gap-2 h-32">
                        {monthly.map((m) => (
                            <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                                <div className="text-xs font-medium" style={{ color: "#6c63ff" }}>
                                    {m.registrations}
                                </div>
                                <div className="w-full rounded-t-md transition-all duration-500"
                                    style={{
                                        height: `${(m.registrations / maxReg) * 100}%`,
                                        background: "linear-gradient(180deg, #6c63ff, rgba(108,99,255,0.3))",
                                        minHeight: 4,
                                    }} />
                                <div className="text-xs" style={{ color: "var(--muted)" }}>{m.month}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top events */}
                <div className="fade-up flex flex-col gap-2 fade-up-4 lg:col-span-2 rounded-xl p-5"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "5px" }}>
                    <div className="font-display font-semibold text-sm mb-4">Top Events by Registrations</div>
                    <div className="flex flex-col gap-4">
                        {topEvents.map((event, i) => (
                            <div key={event.name}>
                                <div className="flex justify-between items-center mb-1.5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold w-4" style={{ color: "var(--muted)" }}>{i + 1}</span>
                                        <span className="text-sm font-medium">{event.name}</span>
                                    </div>
                                    <span className="text-xs font-semibold" style={{ color: "#ff6584" }}>
                                        {event.registrations.length}
                                    </span>
                                </div>
                                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                                    <div className="h-full rounded-full transition-all duration-700"
                                        style={{
                                            width: `${event.registrations.length / events.length * 100}%`,
                                            background: i === 0
                                                ? "linear-gradient(90deg,#ff6584,#6c63ff)"
                                                : "rgba(255,101,132,0.5)",
                                        }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}