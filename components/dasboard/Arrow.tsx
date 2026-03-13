"use client"
export default function Arrow({ href }: { href: string }) {
    return (
        <a href={href} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            borderRadius: "0.5rem",
            border: "1px solid #1e1e2e",
            color: "#7a7a9a",
            textDecoration: "none",
            fontSize: "0.85rem",
            transition: "all 0.15s",
        }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff6584"; e.currentTarget.style.color = "#ff8fa3"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e2e"; e.currentTarget.style.color = "#7a7a9a"; }}
        >←</a>
    )
}