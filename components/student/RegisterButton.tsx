// app/(student)/events/[id]/RegisterButton.tsx
// ⚡ CLIENT — register / unregister toggle

"use client"

import { useState } from "react"

export function RegisterButton({
    eventId,
    isRegistered,
    isFull,
    isPast,
    registrationLink,
}: {
    eventId: string
    isRegistered: boolean
    isFull: boolean
    isPast: boolean
    registrationLink: string | null
}) {
    const [registered, setRegistered] = useState(isRegistered)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    // ── External registration link ────────────────────────────────
    if (registrationLink && !registered) {
        return (
            <a href={registrationLink} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all"
                style={{ background: "#6c63ff", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.1)" }}
                onMouseLeave={e => { e.currentTarget.style.filter = "" }}>
                Register Now ↗
            </a>
        )
    }

    // ── Past event ────────────────────────────────────────────────
    if (isPast) {
        return (
            <button disabled className="w-full py-3 rounded-xl text-sm font-semibold"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #1a1a2a", color: "#6b6b8a", cursor: "not-allowed" }}>
                Event Ended
            </button>
        )
    }

    // ── Full and not registered ───────────────────────────────────
    if (isFull && !registered) {
        return (
            <button disabled className="w-full py-3 rounded-xl text-sm font-semibold"
                style={{ background: "rgba(255,95,130,0.08)", border: "1px solid rgba(255,95,130,0.2)", color: "#ff8fa3", cursor: "not-allowed" }}>
                Registrations Full
            </button>
        )
    }

    // ── Register / unregister ─────────────────────────────────────
    async function toggle() {
        setError(""); setLoading(true)
        try {
            // 🔌 Your registration API
            const res = await fetch(`/api/student/events/${eventId}/register`, {
                method: registered ? "DELETE" : "POST",
                credentials: "include",
            })
            const data = await res.json()
            if (!res.ok) { setError(data.message ?? "Something went wrong."); return }
            setRegistered(r => !r)
        } catch {
            setError("Network error. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            {error && (
                <div className="text-xs mb-3 px-3 py-2 rounded-lg"
                    style={{ background: "rgba(255,95,130,0.08)", border: "1px solid rgba(255,95,130,0.2)", color: "#ff8fa3" }}>
                    {error}
                </div>
            )}

            {registered ? (
                // Registered state
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold"
                        style={{ background: "rgba(61,214,140,0.1)", border: "1px solid rgba(61,214,140,0.25)", color: "#3dd68c" }}>
                        ✓ You&apos;re Registered
                    </div>
                    <button onClick={toggle} disabled={loading}
                        className="w-full py-2 rounded-xl text-xs font-medium transition-all"
                        style={{
                            background: "transparent",
                            border: "1px solid #1a1a2a",
                            color: "#6b6b8a",
                            cursor: loading ? "not-allowed" : "pointer",
                            fontFamily: "'DM Sans', sans-serif",
                            opacity: loading ? 0.6 : 1,
                        }}
                        onMouseEnter={e => { if (!loading) { e.currentTarget.style.borderColor = "rgba(255,95,130,0.3)"; e.currentTarget.style.color = "#ff8fa3" } }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a2a"; e.currentTarget.style.color = "#6b6b8a" }}>
                        {loading ? "Cancelling..." : "Cancel Registration"}
                    </button>
                </div>
            ) : (
                // Not registered state
                <button onClick={toggle} disabled={loading}
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all"
                    style={{
                        background: loading ? "#7a3050" : "#ff5f82",
                        border: "none",
                        cursor: loading ? "not-allowed" : "pointer",
                        fontFamily: "'DM Sans', sans-serif",
                        opacity: loading ? 0.7 : 1,
                    }}
                    onMouseEnter={e => { if (!loading) { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,95,130,0.3)" } }}
                    onMouseLeave={e => { e.currentTarget.style.filter = ""; e.currentTarget.style.boxShadow = "none" }}>
                    {loading ? "Registering..." : "Register Now →"}
                </button>
            )}
        </div>
    )
}