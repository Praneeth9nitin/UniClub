// app/(dashboard)/dashboard/analytics/page.tsx
// ✅ SERVER COMPONENT

export default async function AnalyticsPage() {
    // 🔌 Replace with real Prisma aggregation queries
    const monthly = [
        { month: "Oct", followers: 40, registrations: 120 },
        { month: "Nov", followers: 75, registrations: 189 },
        { month: "Dec", followers: 110, registrations: 95 },
        { month: "Jan", followers: 160, registrations: 234 },
        { month: "Feb", followers: 198, registrations: 310 },
        { month: "Mar", followers: 248, registrations: 156 },
    ];

    const topEvents = [
        { title: "Circuit Design Hackathon", registrations: 203, percent: 100 },
        { title: "Tech Talk — Industry Pros", registrations: 156, percent: 77 },
        { title: "Robotics Workshop 2025", registrations: 124, percent: 61 },
        { title: "AI/ML Bootcamp", registrations: 89, percent: 44 },
        { title: "PCB Design Workshop", registrations: 67, percent: 33 },
    ];

    const maxReg = Math.max(...monthly.map(m => m.registrations));
    const maxFol = Math.max(...monthly.map(m => m.followers));

    return (
        <div className="max-w-4xl mx-auto">

            {/* Header */}
            <div className="fade-up mb-6">
                <h2 className="font-display font-bold text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>Analytics</h2>
                <p className="text-sm font-light" style={{ color: "var(--muted)" }}>Last 6 months performance</p>
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                    { label: "Total Followers", value: "248", change: "+50 this month", color: "#ff6584" },
                    { label: "Total Registrations", value: "1,104", change: "All time", color: "#6c63ff" },
                    { label: "Events Published", value: "12", change: "3 upcoming", color: "#43e97b" },
                    { label: "Avg Registrations", value: "92", change: "Per event", color: "#ffc107" },
                ].map((s, i) => (
                    <div key={s.label} className={`stat-card fade-up fade-up-${i + 1} rounded-xl p-5`}
                        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                        <div className="font-display font-bold text-2xl mb-1" style={{ color: s.color }}>{s.value}</div>
                        <div className="text-xs font-medium mb-0.5">{s.label}</div>
                        <div className="text-xs font-light" style={{ color: "var(--muted)" }}>{s.change}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* Registrations chart */}
                <div className="fade-up fade-up-2 rounded-xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
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

                {/* Followers chart */}
                <div className="fade-up fade-up-3 rounded-xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div className="font-display font-semibold text-sm mb-4">Follower Growth</div>
                    <div className="flex items-end gap-2 h-32">
                        {monthly.map((m) => (
                            <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                                <div className="text-xs font-medium" style={{ color: "#ff6584" }}>
                                    {m.followers}
                                </div>
                                <div className="w-full rounded-t-md transition-all duration-500"
                                    style={{
                                        height: `${(m.followers / maxFol) * 100}%`,
                                        background: "linear-gradient(180deg, #ff6584, rgba(255,101,132,0.3))",
                                        minHeight: 4,
                                    }} />
                                <div className="text-xs" style={{ color: "var(--muted)" }}>{m.month}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top events */}
                <div className="fade-up fade-up-4 lg:col-span-2 rounded-xl p-5"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div className="font-display font-semibold text-sm mb-4">Top Events by Registrations</div>
                    <div className="flex flex-col gap-4">
                        {topEvents.map((event, i) => (
                            <div key={event.title}>
                                <div className="flex justify-between items-center mb-1.5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold w-4" style={{ color: "var(--muted)" }}>{i + 1}</span>
                                        <span className="text-sm font-medium">{event.title}</span>
                                    </div>
                                    <span className="text-xs font-semibold" style={{ color: "#ff6584" }}>
                                        {event.registrations}
                                    </span>
                                </div>
                                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                                    <div className="h-full rounded-full transition-all duration-700"
                                        style={{
                                            width: `${event.percent}%`,
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