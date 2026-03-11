// components/dashboard/DashboardTopbar.tsx
// ✅ SERVER COMPONENT

export function DashboardTopbar() {
    return (
        <header className="flex items-center justify-between px-6 py-4 shrink-0"
            style={{ borderBottom: "1px solid var(--border)", background: "rgba(10,10,15,0.6)", backdropFilter: "blur(12px)" }}>

            <div>
                <h1 className="font-display font-bold text-lg" style={{ letterSpacing: "-0.02em" }}>
                    Club Dashboard
                </h1>
                <p className="text-xs font-light" style={{ color: "var(--muted)" }}>
                    Manage your club, events and analytics
                </p>
            </div>

            <div className="flex items-center gap-3">
                {/* Verification badge */}
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: "rgba(255,193,7,0.12)", border: "1px solid rgba(255,193,7,0.25)", color: "#ffc107" }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#ffc107" }} />
                    Pending Verification
                </div>

                {/* New event CTA */}
                <a href="/dashboard/events/create"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200 hover:brightness-110"
                    style={{ background: "#ff6584", textDecoration: "none" }}>
                    <span>+</span> New Event
                </a>
            </div>
        </header>
    );
}