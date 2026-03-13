// app/(dashboard)/dashboard/events/[id]/edit/EditEventForm.tsx
// ⚡ CLIENT COMPONENT — matches create form, all fields, full inline styles

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const CATEGORIES = ["Workshop", "Hackathon", "Talk", "Bootcamp", "Cultural", "Sports", "Social", "Academic", "Other"]
const MODES = ["OFFLINE", "ONLINE", "HYBRID"]

type FormState = {
    name: string
    description: string
    category: string
    mode: string
    capacity: string
    date: string
    time: string
    venue: string
    registrationLink: string
    registrationFee: string
    registrationDeadline: string
    banner: string
}

// ── Shared input style ─────────────────────────────────────────
const IS: React.CSSProperties = {
    width: "100%", padding: "0.7rem 1rem",
    borderRadius: "0.65rem",
    background: "#0c0c14",
    border: "1px solid #252535",
    color: "#ededf5",
    fontSize: "0.83rem",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
}
function onF(e: React.FocusEvent<any>) {
    e.currentTarget.style.borderColor = "#ff5f82"
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,95,130,0.09)"
}
function onB(e: React.FocusEvent<any>) {
    e.currentTarget.style.borderColor = "#252535"
    e.currentTarget.style.boxShadow = "none"
}

function Field({ label, required, hint, half, children }: {
    label: string; required?: boolean; hint?: string
    half?: boolean; children: React.ReactNode
}) {
    return (
        <div style={{ gridColumn: half ? "span 1" : "span 2" }}>
            <label style={{
                display: "block", fontSize: "0.71rem", fontWeight: 600,
                letterSpacing: "0.02em", color: "#7a7a9a", marginBottom: "7px",
            }}>
                {label}
                {required && <span style={{ color: "#ff5f82", marginLeft: 2 }}>*</span>}
            </label>
            {children}
            {hint && <p style={{ fontSize: "0.67rem", color: "#555570", marginTop: 5 }}>{hint}</p>}
        </div>
    )
}

function Section({ title }: { title: string }) {
    return (
        <div style={{
            gridColumn: "span 2",
            display: "flex", alignItems: "center", gap: "0.75rem",
            margin: "0.5rem 0 0.25rem",
        }}>
            <span style={{
                fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase" as const, color: "#ff5f82",
                fontFamily: "'Syne', sans-serif",
            }}>
                {title}
            </span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,95,130,0.15)" }} />
        </div>
    )
}

export function EditEventForm({
    eventId,
    initial,
}: {
    eventId: string
    initial: FormState
}) {
    const router = useRouter()
    const [form, setForm] = useState<FormState>(initial)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    const isDirty = JSON.stringify(form) !== JSON.stringify(initial)
    const overLimit = form.description.length > 500

    function upd(k: keyof FormState) {
        return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
            setForm(p => ({ ...p, [k]: e.target.value }))
    }

    async function handleSave() {
        setError(""); setSuccess("")
        const { name, description, venue, date, time, category, mode } = form
        if (!name || !description || !venue || !date || !time || !category || !mode) {
            setError("Please fill in all required fields."); return
        }
        if (overLimit) { setError("Description must be under 500 characters."); return }
        if (!isDirty) { setError("No changes to save."); return }

        setLoading(true)
        try {
            const res = await fetch(`/api/club/event/${eventId}`, {
                method: "PATCH", credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    date: new Date(`${form.date}T${form.time}`).toISOString(),
                    capacity: form.capacity ? Number(form.capacity) : null,
                    registrationFee: form.registrationFee ? Number(form.registrationFee) : 0,
                    registrationDeadline: form.registrationDeadline ? new Date(form.registrationDeadline).toISOString() : null,
                }),
            })
            const data = await res.json()
            if (!res.ok) { setError(data.message ?? "Failed to update event."); return }
            setSuccess("Event updated successfully.")
            setTimeout(() => router.push(`/dashboard/events/${eventId}`), 1200)
        } catch {
            setError("Network error. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{
            background: "#111118", border: "1px solid #1a1a2a",
            borderRadius: "1.1rem", padding: "2rem",
            animation: "fadeUp 0.35s ease both",
        }}>

            {/* Alerts */}
            {error && (
                <div style={{
                    background: "rgba(255,95,130,0.08)", border: "1px solid rgba(255,95,130,0.2)",
                    color: "#ff8fa3", borderRadius: "0.6rem",
                    padding: "0.65rem 1rem", fontSize: "0.78rem", marginBottom: "1.5rem",
                }}>⚠ {error}</div>
            )}
            {success && (
                <div style={{
                    background: "rgba(61,214,140,0.08)", border: "1px solid rgba(61,214,140,0.2)",
                    color: "#3dd68c", borderRadius: "0.6rem",
                    padding: "0.65rem 1rem", fontSize: "0.78rem", marginBottom: "1.5rem",
                }}>✓ {success}</div>
            )}

            {/* Two-col grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>

                {/* ── Basic Info ───────────────────── */}
                <Section title="Basic Info" />

                <Field label="Event Title" required>
                    <input type="text" style={IS} value={form.name}
                        onChange={upd("name")} onFocus={onF} onBlur={onB} />
                </Field>

                <Field label="Description" required>
                    <textarea rows={4} style={{ ...IS, resize: "none" }}
                        value={form.description} onChange={upd("description")} onFocus={onF} onBlur={onB} />
                    <div style={{ textAlign: "right", fontSize: "0.67rem", marginTop: 4, color: overLimit ? "#ff5f82" : "#555570" }}>
                        {form.description.length}/500
                    </div>
                </Field>

                <Field label="Category" required half>
                    <select style={{ ...IS, appearance: "none" as const, cursor: "pointer" }}
                        value={form.category} onChange={upd("category")} onFocus={onF} onBlur={onB}>
                        {CATEGORIES.map(c => <option key={c} value={c} style={{ background: "#0c0c14" }}>{c}</option>)}
                    </select>
                </Field>

                <Field label="Mode" required half>
                    <select style={{ ...IS, appearance: "none" as const, cursor: "pointer" }}
                        value={form.mode} onChange={upd("mode")} onFocus={onF} onBlur={onB}>
                        <option value="" disabled style={{ background: "#0c0c14" }}>Select mode</option>
                        {MODES.map(m => (
                            <option key={m} value={m} style={{ background: "#0c0c14" }}>
                                {m.charAt(0).toUpperCase() + m.slice(1)}
                            </option>
                        ))}
                    </select>
                </Field>

                <Field label="Max Registrations" half>
                    <input type="number" min={1} style={IS} placeholder="Unlimited if empty"
                        value={form.capacity} onChange={upd("capacity")} onFocus={onF} onBlur={onB} />
                </Field>

                {/* ── When & Where ─────────────────── */}
                <Section title="When &amp; Where" />

                <Field label="Date" required half>
                    <input type="date" style={{ ...IS, colorScheme: "dark" } as React.CSSProperties}
                        value={form.date} onChange={upd("date")} onFocus={onF} onBlur={onB} />
                </Field>

                <Field label="Time" required half>
                    <input type="time" style={{ ...IS, colorScheme: "dark" } as React.CSSProperties}
                        value={form.time} onChange={upd("time")} onFocus={onF} onBlur={onB} />
                </Field>

                <Field label="Venue" required>
                    <input type="text" style={IS} placeholder="e.g. Seminar Hall A, VIT Chennai"
                        value={form.venue} onChange={upd("venue")} onFocus={onF} onBlur={onB} />
                </Field>

                {/* ── Registration ─────────────────── */}
                <Section title="Registration" />

                <Field label="Registration Link" hint="External link if using Google Forms or Unstop">
                    <input type="url" style={IS} placeholder="https://..."
                        value={form.registrationLink} onChange={upd("registrationLink")} onFocus={onF} onBlur={onB} />
                </Field>

                <Field label="Registration Fee (₹)" half hint="Leave empty if free">
                    <div style={{ position: "relative" }}>
                        <span style={{
                            position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)",
                            fontSize: "0.82rem", color: "#7a7a9a", pointerEvents: "none",
                        }}>₹</span>
                        <input type="number" min={0} style={{ ...IS, paddingLeft: "1.75rem" }}
                            placeholder="0" value={form.registrationFee}
                            onChange={upd("registrationFee")} onFocus={onF} onBlur={onB} />
                    </div>
                </Field>

                <Field label="Registration Deadline" half hint="Last date to register">
                    <input type="date" style={{ ...IS, colorScheme: "dark" } as React.CSSProperties}
                        value={form.registrationDeadline} onChange={upd("registrationDeadline")} onFocus={onF} onBlur={onB} />
                </Field>

                {/* ── Media ────────────────────────── */}
                <Section title="Media" />

                <Field label="Banner Image URL" hint="Upload to Cloudinary first, paste URL here">
                    <input type="url" style={IS} placeholder="https://res.cloudinary.com/..."
                        value={form.banner} onChange={upd("banner")} onFocus={onF} onBlur={onB} />
                </Field>

            </div>{/* end grid */}

            {/* ── Actions ──────────────────────── */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem" }}>
                <a href={`/dashboard/events/${eventId}`} style={{
                    display: "flex", alignItems: "center",
                    padding: "0.7rem 1.25rem", borderRadius: "0.65rem",
                    fontSize: "0.82rem", fontWeight: 500,
                    color: "#7a7a9a", border: "1px solid #252535",
                    textDecoration: "none", transition: "all 0.15s",
                    fontFamily: "'DM Sans', sans-serif",
                }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff5f82"; e.currentTarget.style.color = "#ff8fa3"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#252535"; e.currentTarget.style.color = "#7a7a9a"; }}
                >
                    Cancel
                </a>
                <button onClick={handleSave} disabled={loading || !isDirty} style={{
                    flex: 1, padding: "0.7rem 1.25rem",
                    borderRadius: "0.65rem", fontSize: "0.85rem", fontWeight: 600,
                    color: "#fff", background: loading || !isDirty ? "#7a3050" : "#ff5f82",
                    border: "none", cursor: loading || !isDirty ? "not-allowed" : "pointer",
                    fontFamily: "'DM Sans', sans-serif", transition: "all 0.15s",
                    opacity: loading || !isDirty ? 0.6 : 1,
                }}
                    onMouseEnter={e => { if (!loading && isDirty) { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,95,130,0.3)"; } }}
                    onMouseLeave={e => { e.currentTarget.style.filter = ""; e.currentTarget.style.boxShadow = "none"; }}
                >
                    {loading ? "Saving..." : "Save Changes"}
                </button>
            </div>

            {/* Unsaved indicator */}
            {isDirty && !loading && (
                <p style={{ textAlign: "center", fontSize: "0.7rem", color: "#f5a623", marginTop: "0.85rem" }}>
                    ● Unsaved changes
                </p>
            )}
        </div>
    )
}