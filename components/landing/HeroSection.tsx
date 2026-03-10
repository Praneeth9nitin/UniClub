// components/landing/HeroSection.tsx
// ✅ SERVER COMPONENT — static hero content, SEO-friendly H1
// Only imports HeroCounters as a client island for the animation

import Link from "next/link";
// import HeroCounters from "./HeroCounter"; // only client part

const floatingCards = [
    { icon: "🎭", title: "Drama Club Annual Fest", sub: "SRM University · Tomorrow 6PM", style: { top: "25%", left: "5%" }, delay: "0s" },
    { icon: "🚀", title: "Hackathon 2025 — Open Now", sub: "VIT Chennai · This weekend", style: { top: "45%", right: "5%" }, delay: "-2s" },
    { icon: "🎸", title: "Music Night — Live Bands", sub: "Loyola College · Fri 7PM", style: { bottom: "25%", left: "8%" }, delay: "-4s" },
];

export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 pb-16 text-center"
            aria-label="Hero"
        >
            {/* Background orbs — pure CSS, no JS needed */}
            <div className="orb" style={{ width: 600, height: 600, background: "#6c63ff", top: -200, left: -200, animationDelay: "0s" }} />
            <div className="orb" style={{ width: 400, height: 400, background: "#ff6584", bottom: -100, right: -100, animationDelay: "-4s" }} />
            <div className="orb" style={{ width: 300, height: 300, background: "#43e97b", top: "50%", left: "60%", animationDelay: "-2s" }} />

            {/* Floating event cards — CSS animation only, server-safe */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block" aria-hidden="true">
                {floatingCards.map((card, i) => (
                    <div
                        key={i}
                        className="float-card absolute rounded-xl px-4 py-3 flex items-center gap-3"
                        style={{
                            ...card.style,
                            animationDelay: card.delay,
                            background: "#13131a",
                            border: "1px solid #1e1e2e",
                            backdropFilter: "blur(10px)",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <span className="text-base">{card.icon}</span>
                        <div>
                            <div className="text-xs font-medium" style={{ color: "#f0f0f8" }}>{card.title}</div>
                            <div className="text-xs" style={{ color: "#7a7a9a" }}>{card.sub}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hero content */}
            <div className="relative z-10 max-w-3xl">
                {/* Live badge */}
                <div
                    className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8"
                    style={{ background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.3)", color: "#a09dff" }}
                >
                    <span className="pulse-dot w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#43e97b" }} />
                    Now live across Indian colleges
                </div>

                {/* H1 — critical for SEO, rendered on server */}
                <h1
                    className="fade-up fade-up-1 font-display font-extrabold leading-tight tracking-tight mb-6"
                    style={{ fontSize: "clamp(3rem,7vw,5.5rem)", letterSpacing: "-0.03em" }}
                >
                    Every Campus Club,{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg,#6c63ff,#ff6584)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        One Platform
                    </span>
                </h1>

                {/* Description — also SEO-important, rendered on server */}
                <p
                    className="fade-up fade-up-2 text-lg leading-relaxed max-w-xl mx-auto mb-10 font-light"
                    style={{ color: "#7a7a9a" }}
                >
                    Discover clubs, track events, and never miss what&apos;s happening
                    across your college — and colleges near you.
                </p>

                {/* CTAs */}
                <div className="fade-up fade-up-3 flex gap-4 justify-center flex-wrap">
                    <Link
                        href="/signup"
                        className="px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                        style={{ background: "#6c63ff" }}
                    >
                        Get Started Free
                    </Link>
                    <a
                        href="#how-it-works"
                        className="px-8 py-3.5 rounded-xl text-base font-medium flex items-center gap-2 transition-all duration-200 hover:bg-white/5"
                        style={{ border: "1px solid #1e1e2e", color: "#f0f0f8" }}
                    >
                        <span className="text-xs">▶</span> See how it works
                    </a>
                </div>

                {/* Animated counters — client island, rest of page stays server */}
                {/* <HeroCounters /> */}
            </div>
        </section>
    );
}