// components/landing/CtaSection.tsx
// ✅ SERVER COMPONENT

import Link from "next/link";

export default function CtaSection() {
    return (
        <section
            className="relative text-center px-6 py-32 overflow-hidden"
            aria-label="Call to action"
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(108,99,255,0.1) 0%, transparent 70%)" }}
                aria-hidden="true"
            />
            <h2
                className="font-display font-extrabold relative mb-4 text-neutral-300"
                style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.03em" }}
            >
                Your campus is{" "}
                <span
                    style={{
                        background: "linear-gradient(135deg,#6c63ff,#ff6584)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    waiting for you
                </span>
            </h2>
            <p className="text-base font-light relative mb-10" style={{ color: "#7a7a9a" }}>
                Join thousands of students already discovering their campus life on UniClub.
            </p>
            <Link
                href="/signup"
                className="relative inline-block px-10 py-4 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                style={{ background: "#6c63ff" }}
            >
                Get started — it&apos;s free
            </Link>
        </section>
    );
}