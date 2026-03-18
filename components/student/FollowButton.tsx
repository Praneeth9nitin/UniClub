// components/student/FollowButton.tsx
// ⚡ CLIENT — follow/unfollow toggle

"use client"

import { useState } from "react"

export function FollowButton({
    clubId,
    initialFollowing,
}: {
    clubId: string
    initialFollowing: boolean
}) {
    const [following, setFollowing] = useState(initialFollowing)
    const [loading, setLoading] = useState(false)
    const [hovered, setHovered] = useState(false)

    async function toggle() {
        setLoading(true)
        try {
            // 🔌 Follow / unfollow API
            const res = await fetch(
                `/api/student/clubs/${clubId}/${following ? "unfollow" : "follow"}`,
                { method: following ? "DELETE" : "POST", credentials: "include" }
            )
            if (res.ok) setFollowing(f => !f)
        } catch {
            // handle silently
        } finally {
            setLoading(false)
        }
    }

    const isUnfollowHover = following && hovered && !loading

    return (
        <button
            onClick={e => { e.preventDefault(); e.stopPropagation(); toggle() }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            disabled={loading}
            className="px-3 py-1 rounded-full text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0"
            style={{
                fontFamily: "'DM Sans', sans-serif",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
                border: isUnfollowHover
                    ? "1px solid rgba(255,95,130,0.4)"
                    : following
                        ? "1px solid rgba(255,255,255,0.12)"
                        : "1px solid rgba(108,99,255,0.4)",
                background: isUnfollowHover
                    ? "rgba(255,95,130,0.08)"
                    : following
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(108,99,255,0.15)",
                color: isUnfollowHover
                    ? "#ff8fa3"
                    : following
                        ? "#6b6b8a"
                        : "#a09dff",
            }}
        >
            {loading
                ? "..."
                : isUnfollowHover
                    ? "Unfollow"
                    : following
                        ? "Following"
                        : "+ Follow"}
        </button>
    )
}