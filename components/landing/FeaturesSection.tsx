// components/landing/FeaturesSection.tsx
// ✅ SERVER COMPONENT

const features = [
    { icon: "🔍", color: "bg-violet-500/15", title: "Discover Clubs", desc: "Browse clubs from your college and beyond. Filter by category — tech, cultural, sports, arts, and more." },
    { icon: "📅", color: "bg-rose-500/15", title: "Event Feed", desc: "See upcoming events from clubs you follow in one clean feed. No more missing out on announcements." },
    { icon: "🔔", color: "bg-emerald-500/15", title: "Instant Notifications", desc: "Get notified the moment a club you follow posts a new event. Never be the last to know." },
    { icon: "✅", color: "bg-amber-500/15", title: "Verified Clubs", desc: "Clubs go through a verification process so you always know you're following the real deal." },
    { icon: "🏛️", color: "bg-cyan-500/15", title: "Multi-College", desc: "UniClub unifies clubs from colleges across India. Cross-college events, collaborations, and more." },
    { icon: "📊", color: "bg-orange-500/15", title: "Club Dashboard", desc: "Club leaders get a powerful dashboard to post events, manage members, and track engagement." },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="max-w-6xl mx-auto px-6 py-24" aria-label="Features">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6c63ff" }}>
                Features
            </p>
            <h2
                className="font-display font-bold mb-3"
                style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}
            >
                Everything you need to<br />stay in the loop
            </h2>
            <p className="text-base font-light max-w-md mb-14" style={{ color: "#7a7a9a" }}>
                Built specifically for the Indian college ecosystem — no noise, just what matters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f) => (
                    <div
                        key={f.title}
                        className="feature-card relative rounded-2xl p-8 transition-all duration-300 cursor-default overflow-hidden group"
                        style={{ background: "#13131a", border: "1px solid #1e1e2e" }}
                    >
                        {/* hover glow — CSS only */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: "radial-gradient(circle at top left, rgba(108,99,255,0.08), transparent 60%)" }}
                            aria-hidden="true"
                        />
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 ${f.color}`}>
                            {f.icon}
                        </div>
                        <h3 className="font-display font-semibold text-base mb-2">{f.title}</h3>
                        <p className="text-sm leading-relaxed font-light" style={{ color: "#7a7a9a" }}>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}