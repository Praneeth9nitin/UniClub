// components/landing/HowItWorks.tsx
// ✅ SERVER COMPONENT

const steps = [
    { num: "01", title: "Sign up", desc: "Create your account with your college email in under a minute." },
    { num: "02", title: "Find your clubs", desc: "Search clubs at your college or browse across all colleges." },
    { num: "03", title: "Follow & track", desc: "Follow clubs you care about and get their events in your feed." },
    { num: "04", title: "Never miss out", desc: "Get notified instantly when events are posted. Show up." },
];

export default function HowItWorks() {
    return (
        <div
            id="how-it-works"
            style={{ background: "#13131a", borderTop: "1px solid #1e1e2e", borderBottom: "1px solid #1e1e2e" }}
            aria-label="How it works"
        >
            <div className="max-w-6xl mx-auto px-6 py-24">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6c63ff" }}>
                    How it works
                </p>
                <h2
                    className="font-display font-bold mb-14 text-neutral-300"
                    style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}
                >
                    Up and running in minutes
                </h2>

                <div className="relative steps-line grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((s) => (
                        <div key={s.num} className="text-center">
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center font-display text-lg font-bold mx-auto mb-5 relative z-10"
                                style={{ background: "#0a0a0f", border: "1px solid #1e1e2e", color: "#6c63ff" }}
                            >
                                {s.num}
                            </div>
                            <h3 className="font-display font-semibold text-sm mb-2">{s.title}</h3>
                            <p className="text-xs leading-relaxed font-light" style={{ color: "#7a7a9a" }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}