// components/landing/Footer.tsx
// ✅ SERVER COMPONENT

export default function Footer() {
    return (
        <footer
            className="flex items-center justify-between px-6 md:px-16 py-6 flex-wrap gap-3"
            style={{ borderTop: "1px solid #1e1e2e" }}
        >
            <div
                className="font-display font-extrabold text-xl"
                style={{
                    background: "linear-gradient(135deg,#6c63ff,#ff6584)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                UniClub
            </div>
            <p className="text-xs" style={{ color: "#7a7a9a" }}>
                © {new Date().getFullYear()} UniClub. Made for Indian college students.
            </p>
        </footer>
    );
}