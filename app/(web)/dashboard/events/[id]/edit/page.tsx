// app/(dashboard)/dashboard/events/[id]/edit/page.tsx
// ✅ SERVER COMPONENT

import { middleware } from "@/app/api/club/authMiddleware";
import { notFound } from "next/navigation";
import { EditEventForm } from "@/components/dasboard/Editeventform";
import { getEvent } from "@/services/club.services";
import Arrow from "@/components/dasboard/Arrow";

// 🔌 Replace with real Prisma query
async function getEventForEdit(eventId: string, clubId: string) {
    const res = await getEvent(eventId, clubId)
    if (!res) return null
    return {
        id: eventId,
        name: res.name,
        description: res.description || "",
        venue: res.venue || "",
        date: res.date,
        category: res.category,
        mode: res.mode,
        capacity: res.capacity,
        registrationLink: res.registrationLink,
        registrationFee: res.registrationFee,
        registrationDeadline: res.registrationDeadline,
        banner: res.banner,
    };
}

export default async function EditEventPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const session = await middleware();
    const event = await getEventForEdit(id, session.clubId);

    if (!event) notFound();

    // Split ISO date → separate date + time strings for the inputs
    const dt = new Date(event.date);
    const date = dt.toISOString().split("T")[0]   // "2025-03-15"
    const time = dt.toTimeString().slice(0, 5)    // "10:00"

    // Registration deadline — could be null
    const registrationDeadline = event.registrationDeadline
        ? new Date(event.registrationDeadline).toISOString().split("T")[0]
        : "";

    return (
        <>
            <header style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.9rem 1.5rem",
                borderBottom: "1px solid #1e1e2e",
                background: "rgba(9,9,15,0.8)",
                backdropFilter: "blur(14px)",
                position: "sticky",
                top: 0,
                zIndex: 10,
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Arrow href="/dashboard/events" />
                    <div>
                        <div style={{
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            letterSpacing: "-0.02em",
                        }}>
                            Edit Event
                        </div>
                        <div style={{ fontSize: "0.71rem", color: "#7a7a9a", marginTop: 1 }}>
                            {event.name}
                        </div>
                    </div>
                </div>
            </header>

            <div className="dash-body">
                <div style={{ maxWidth: 640, margin: "0 auto" }}>
                    <EditEventForm
                        eventId={id}
                        initial={{
                            name: event.name,
                            description: event.description,
                            venue: event.venue,
                            date,
                            time,
                            category: event.category,
                            mode: event.mode,
                            capacity: event.capacity?.toString() ?? "",
                            registrationLink: event.registrationLink ?? "",
                            registrationFee: event.registrationFee?.toString() ?? "",
                            registrationDeadline,
                            banner: event.banner ?? "",
                        }}
                    />
                </div>
            </div>
        </>
    );
}