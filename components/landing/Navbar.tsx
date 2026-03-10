
import Link from "next/link";

const navLinks = ["Features", "How it works", "Join"];

export default function Navbar() {
    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5"
            style={{
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(10,10,15,0.7)",
            }}
        >
            {/* Logo */}
            <div
                className="font-display font-extrabold text-2xl"
                style={{
                    background: "linear-gradient(135deg,#6c63ff,#ff6584)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                UniClub
            </div>

            {/* Nav links — hidden on mobile */}
            <ul className="hidden md:flex gap-10 list-none">
                {navLinks.map((l) => (
                    <li key={l}>
                        <a
                            href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                            className="text-sm font-medium transition-colors duration-200 hover:text-white"
                            style={{ color: "#7a7a9a" }}
                        >
                            {l}
                        </a>
                    </li>
                ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex gap-3">
                <Link
                    href="/login"
                    className="px-5 py-2 rounded-lg text-sm font-medium border transition-all duration-200 hover:border-violet-500 hover:text-violet-400"
                    style={{
                        borderColor: "#1e1e2e",
                        color: "#f0f0f8",
                        background: "transparent",
                    }}
                >
                    Log in
                </Link>
                <Link
                    href="/signup"
                    className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                    style={{ background: "#6c63ff" }}
                >
                    Sign up free
                </Link>
            </div>
        </nav>
    );
}