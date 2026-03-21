// components/landing/RolesSection.tsx
// ✅ SERVER COMPONENT

import Link from "next/link";

const studentPerks = [
    "Follow clubs from any college",
    "Personalized event feed",
    "Instant event notifications",
    "Register for events in one tap",
];

const clubPerks = [
    "Create & manage your club page",
    "Post events in seconds",
    "Reach students across colleges",
    "Member management tools",
];

export default function RolesSection() {
    return (
        <section id="join" className="max-w-6xl mx-auto px-6 py-24" aria-label="Who is it for">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#6c63ff" }}>
                Who&apos;s it for
            </p>
            <h2
                className="font-display font-bold mb-14 text-neutral-300"
                style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}
            >
                Built for students.<br />Powered by clubs.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Student card */}
                <div
                    className="rounded-2xl p-10"
                    style={{
                        background: "linear-gradient(135deg,rgba(108,99,255,0.15),rgba(108,99,255,0.05))",
                        border: "1px solid rgba(108,99,255,0.2)",
                    }}
                >
                    <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
                        style={{ background: "rgba(108,99,255,0.2)", color: "#a09dff" }}
                    >
                        For Students
                    </span>
                    <h3 className="font-display text-2xl font-bold mb-3">
                        Your campus,<br />fully connected
                    </h3>
                    <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "#7a7a9a" }}>
                        Follow clubs, get event updates, and stay plugged into everything happening at your college.
                    </p>
                    <ul className="space-y-3 mb-8">
                        {studentPerks.map((p) => (
                            <li key={p} className="flex items-center gap-3 text-sm">
                                <span
                                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                                    style={{ background: "rgba(108,99,255,0.2)", color: "#6c63ff" }}
                                >
                                    ✓
                                </span>
                                {p}
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/signup"
                        className="inline-block px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                        style={{ background: "#6c63ff" }}
                    >
                        Join as Student →
                    </Link>
                </div>

                {/* Club leader card */}
                <div
                    className="rounded-2xl p-10"
                    style={{
                        background: "linear-gradient(135deg,rgba(255,101,132,0.15),rgba(255,101,132,0.05))",
                        border: "1px solid rgba(255,101,132,0.2)",
                    }}
                >
                    <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
                        style={{ background: "rgba(255,101,132,0.2)", color: "#ff8fa3" }}
                    >
                        For Club Leaders
                    </span>
                    <h3 className="font-display text-2xl font-bold mb-3">
                        Grow your club&apos;s<br />reach instantly
                    </h3>
                    <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "#7a7a9a" }}>
                        Create your club page, post events, and reach thousands of students beyond your college.
                    </p>
                    <ul className="space-y-3 mb-8">
                        {clubPerks.map((p) => (
                            <li key={p} className="flex items-center gap-3 text-sm">
                                <span
                                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                                    style={{ background: "rgba(255,101,132,0.2)", color: "#ff6584" }}
                                >
                                    ✓
                                </span>
                                {p}
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/signup"
                        className="inline-block px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                        style={{ background: "#ff6584" }}
                    >
                        Register your Club →
                    </Link>
                </div>

            </div>
        </section>
    );
}