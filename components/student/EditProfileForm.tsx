// app/(student)/profile/EditProfileForm.tsx
// ⚡ CLIENT — uses createPortal to render modal at body level

"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

type Student = {
    id: string
    firstName: string
    lastName: string
    email: string
    college: string
}

const IS: React.CSSProperties = {
    width: "100%", padding: "0.65rem 0.9rem",
    borderRadius: "0.6rem", background: "#0c0c14",
    border: "1px solid #252535", color: "#ededf5",
    fontSize: "0.83rem", fontFamily: "'DM Sans', sans-serif",
    outline: "none", transition: "border-color 0.15s, box-shadow 0.15s",
}
const onF = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "#6c63ff"
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(108,99,255,0.1)"
}
const onB = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "#252535"
    e.currentTarget.style.boxShadow = "none"
}

// ── Portal modal ──────────────────────────────────────────────────
function Modal({ student, form, setForm, loading, error, success, onClose, onSave }: {
    student: Student
    form: { firstName: string; lastName: string }
    setForm: React.Dispatch<React.SetStateAction<{ firstName: string; lastName: string }>>
    loading: boolean
    error: string
    success: boolean
    onClose: () => void
    onSave: () => void
}) {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => { document.body.style.overflow = "" }
    }, [])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [onClose])

    function upd(k: keyof typeof form) {
        return (e: React.ChangeEvent<HTMLInputElement>) =>
            setForm(p => ({ ...p, [k]: e.target.value }))
    }

    return createPortal(
        <div
            onClick={e => { if (e.target === e.currentTarget) onClose() }}
            style={{
                position: "fixed", inset: 0, zIndex: 9999,
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "1rem",
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(6px)",
            }}>

            <div style={{
                width: "100%", maxWidth: 440,
                borderRadius: "1rem", padding: "1.5rem",
                background: "#111118", border: "1px solid #1a1a2a",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
                animation: "fadeUp 0.2s ease both",
            }}>

                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em", color: "#ededf5", margin: 0 }}>
                        Edit Profile
                    </h3>
                    <button onClick={onClose} style={{
                        width: 28, height: 28, borderRadius: "0.5rem",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "rgba(255,255,255,0.04)", border: "1px solid #1a1a2a",
                        color: "#6b6b8a", cursor: "pointer", fontSize: "1rem",
                        fontFamily: "'DM Sans',sans-serif", transition: "color 0.15s",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.color = "#ff5f82" }}
                        onMouseLeave={e => { e.currentTarget.style.color = "#6b6b8a" }}>
                        ×
                    </button>
                </div>

                {/* Alerts */}
                {error && (
                    <div style={{ background: "rgba(255,95,130,0.08)", border: "1px solid rgba(255,95,130,0.2)", color: "#ff8fa3", borderRadius: "0.6rem", padding: "0.6rem 0.9rem", fontSize: "0.78rem", marginBottom: "1rem" }}>
                        {error}
                    </div>
                )}
                {success && (
                    <div style={{ background: "rgba(61,214,140,0.08)", border: "1px solid rgba(61,214,140,0.2)", color: "#3dd68c", borderRadius: "0.6rem", padding: "0.6rem 0.9rem", fontSize: "0.78rem", marginBottom: "1rem" }}>
                        ✓ Profile updated successfully
                    </div>
                )}

                {/* Fields */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.25rem" }}>
                    {[
                        { label: "First Name", key: "firstName" as const, value: form.firstName, readOnly: false },
                        { label: "Last Name", key: "lastName" as const, value: form.lastName, readOnly: false },
                    ].map(f => (
                        <div key={f.key}>
                            <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 500, color: "#7a7a9a", marginBottom: 6 }}>{f.label}</label>
                            <input type="text" value={f.value} onChange={upd(f.key)} style={IS} onFocus={onF} onBlur={onB} />
                        </div>
                    ))}

                    {[
                        { label: "Email", value: student.email },
                        { label: "College", value: student.college },
                    ].map(f => (
                        <div key={f.label}>
                            <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 500, color: "#7a7a9a", marginBottom: 6 }}>
                                {f.label}
                                <span style={{ marginLeft: 6, fontSize: "0.65rem", color: "#555570" }}>(cannot be changed)</span>
                            </label>
                            <input type="text" value={f.value} readOnly style={{ ...IS, opacity: 0.45, cursor: "not-allowed" }} />
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: "0.65rem" }}>
                    <button onClick={onClose} style={{
                        padding: "0.65rem 1.1rem", borderRadius: "0.6rem",
                        fontSize: "0.82rem", fontWeight: 500,
                        background: "transparent", border: "1px solid #1a1a2a",
                        color: "#6b6b8a", cursor: "pointer",
                        fontFamily: "'DM Sans',sans-serif", transition: "all 0.15s",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff5f82"; e.currentTarget.style.color = "#ff8fa3" }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a2a"; e.currentTarget.style.color = "#6b6b8a" }}>
                        Cancel
                    </button>
                    <button onClick={onSave} disabled={loading} style={{
                        flex: 1, padding: "0.65rem 1.1rem", borderRadius: "0.6rem",
                        fontSize: "0.85rem", fontWeight: 600,
                        background: loading ? "#3a3480" : "#6c63ff",
                        border: "none", cursor: loading ? "not-allowed" : "pointer",
                        color: "#fff", fontFamily: "'DM Sans',sans-serif",
                        transition: "all 0.15s", opacity: loading ? 0.7 : 1,
                    }}
                        onMouseEnter={e => { if (!loading) e.currentTarget.style.filter = "brightness(1.1)" }}
                        onMouseLeave={e => { e.currentTarget.style.filter = "" }}>
                        {loading ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>
        </div>,
        document.body  // ← key fix: renders at body, escapes all stacking contexts
    )
}

// ── Main ──────────────────────────────────────────────────────────
export function EditProfileForm({ student }: { student: Student }) {
    const [open, setOpen] = useState(false)
    const [form, setForm] = useState({ firstName: student.firstName, lastName: student.lastName })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => { setMounted(true) }, [])

    async function handleSave() {
        setError("")
        if (!form.firstName || !form.lastName) { setError("Name fields cannot be empty."); return }
        setLoading(true)
        try {
            const res = await fetch("/api/student/profile", {
                method: "PATCH", credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            const data = await res.json()
            if (!res.ok) { setError(data.message ?? "Failed to update."); return }
            setSuccess(true)
            setTimeout(() => { setOpen(false); setSuccess(false) }, 1200)
        } catch {
            setError("Network error. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <button onClick={() => setOpen(true)} style={{
                display: "flex", alignItems: "center", gap: "0.4rem",
                padding: "0.4rem 0.85rem", borderRadius: "0.6rem",
                fontSize: "0.78rem", fontWeight: 500,
                background: "rgba(255,255,255,0.04)", border: "1px solid #1a1a2a",
                color: "#6b6b8a", cursor: "pointer",
                fontFamily: "'DM Sans',sans-serif", transition: "all 0.15s", flexShrink: 0,
            }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#6c63ff"; e.currentTarget.style.color = "#a09dff" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a2a"; e.currentTarget.style.color = "#6b6b8a" }}>
                ✏️ Edit Profile
            </button>

            {/* Only render portal after client mount */}
            {mounted && open && (
                <Modal
                    student={student}
                    form={form}
                    setForm={setForm}
                    loading={loading}
                    error={error}
                    success={success}
                    onClose={() => { setOpen(false); setError("") }}
                    onSave={handleSave}
                />
            )}
        </>
    )
}