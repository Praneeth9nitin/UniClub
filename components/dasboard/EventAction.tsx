"use client"
import Link from "next/link";

function EventAction({ event }: { event: any }) {
    return (
        <div className="flex items-center gap-2 shrink-0">
            <Link href={`/dashboard/events/${event.id}/edit`}
                className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                style={{ border: "1px solid var(--border)", color: "var(--muted)", textDecoration: "none" }}
                onMouseEnter={(e: any) => { e.currentTarget.style.borderColor = "#6c63ff"; e.currentTarget.style.color = "#a09dff"; }}
                onMouseLeave={(e: any) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}>
                Edit
            </Link>
        </div>
    )
}

export default EventAction