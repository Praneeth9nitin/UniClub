// app/(dashboard)/dashboard/events/[id]/EventActions.tsx
// ⚡ CLIENT COMPONENT — delete + publish toggle buttons only

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { deleteEvent } from "@/services/club.services"

// ── Delete button ──────────────────────────────────────────────
export function DeleteEventButton({ eventId }: { eventId: string }) {
    const [confirm, setConfirm] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function handleDelete() {
        if (!confirm) { setConfirm(true); return }

        setLoading(true)
        const res = await fetch('/api/club/event/delete', {
            method: "DELETE",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ eventId }),
        })
        if (res.ok) {
            router.push("/dashboard/events")
        }
    }

    return (
        <div>
            {confirm && (
                <p style={{ fontSize: "0.7rem", color: "#ff8fa3", marginBottom: "0.5rem", lineHeight: 1.5 }}>
                    Are you sure? This cannot be undone. Click again to confirm.
                </p>
            )}
            <button
                onClick={handleDelete}
                disabled={loading}
                style={{
                    width: "100%",
                    padding: "0.55rem",
                    borderRadius: "0.55rem",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    fontFamily: "'DM Sans', sans-serif",
                    cursor: loading ? "not-allowed" : "pointer",
                    border: "1px solid rgba(255,95,130,0.3)",
                    background: confirm ? "rgba(255,95,130,0.15)" : "transparent",
                    color: "#ff5f82",
                    transition: "all 0.15s",
                }}
                onMouseEnter={e => {
                    if (!loading) {
                        e.currentTarget.style.background = "rgba(255,95,130,0.15)"
                        e.currentTarget.style.borderColor = "rgba(255,95,130,0.5)"
                    }
                }}
                onMouseLeave={e => {
                    if (!confirm) {
                        e.currentTarget.style.background = "transparent"
                        e.currentTarget.style.borderColor = "rgba(255,95,130,0.3)"
                    }
                }}
            >
                {loading ? "Deleting..." : confirm ? "⚠️ Confirm Delete" : "🗑️ Delete Event"}
            </button>
        </div>
    )
}

// ── Publish toggle ─────────────────────────────────────────────
export function PublishToggleButton({
    eventId,
    isPublished,
}: {
    eventId: string
    isPublished: boolean
}) {
    const [published, setPublished] = useState(isPublished)
    const [loading, setLoading] = useState(false)

    async function toggle() {
        setLoading(true)
        try {
            // 🔌 Your publish toggle API
            const res = await fetch(`/api/club/event/${eventId}/publish`, {
                method: "PATCH",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isPublished: !published }),
            })
            if (res.ok) setPublished(p => !p)
        } catch {
            // handle error
        } finally {
            setLoading(false)
        }
    }

    return (
        <button
            onClick={toggle}
            disabled={loading}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "0.5rem 0.9rem",
                borderRadius: "0.55rem",
                fontSize: "0.78rem",
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                cursor: loading ? "not-allowed" : "pointer",
                border: published
                    ? "1px solid rgba(61,214,140,0.3)"
                    : "1px solid rgba(255,255,255,0.1)",
                background: published
                    ? "rgba(61,214,140,0.1)"
                    : "rgba(255,255,255,0.04)",
                color: published ? "#3dd68c" : "#6b6b8a",
                transition: "all 0.15s",
                opacity: loading ? 0.6 : 1,
            }}
        >
            <span style={{
                width: 7, height: 7,
                borderRadius: "50%",
                background: published ? "#3dd68c" : "#6b6b8a",
                display: "inline-block",
                flexShrink: 0,
            }} />
            {loading ? "Updating..." : published ? "Published" : "Draft"}
        </button>
    )
}