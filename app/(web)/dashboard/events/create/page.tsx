// app/(dashboard)/dashboard/events/create/page.tsx
// ⚡ CLIENT COMPONENT — matches EditEventForm styling exactly

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { uploadToCloudinary } from "@/services/cloudinaryconfig";

const CATEGORIES = ["Workshop", "Hackathon", "Talk", "Bootcamp", "Cultural", "Sports", "Social", "Other"];
const MODES = ["ONLINE", "OFFLINE", "HYBRID"];



const inputBase: React.CSSProperties = {
    background: "#13131a",
    border: "1px solid #1e1e2e",
    color: "#f0f0f8",
    fontFamily: "inherit",
    width: "100%",
    padding: "0.65rem 0.9rem",
    borderRadius: "0.5rem",
    fontSize: "0.83rem",
    outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
};

function onFocus(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    e.currentTarget.style.borderColor = "#ff6584";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,101,132,0.1)";
}
function onBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    e.currentTarget.style.borderColor = "#1e1e2e";
    e.currentTarget.style.boxShadow = "none";
}

function Label({ text, required }: { text: string; required?: boolean }) {
    return (
        <label style={{
            display: "block",
            fontSize: "0.72rem",
            fontWeight: 500,
            color: "#7a7a9a",
            marginBottom: "6px",
        }}>
            {text}
            {required && <span style={{ color: "#ff6584", marginLeft: 2 }}>*</span>}
        </label>
    );
}

function SectionDivider({ title }: { title: string }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            margin: "1.5rem 0 1rem",
        }}>
            <span style={{
                fontSize: "0.67rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#ff6584",
                fontFamily: "'Syne', sans-serif",
                whiteSpace: "nowrap",
            }}>
                {title}
            </span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,101,132,0.15)" }} />
        </div>
    );
}

export default function CreateEventPage() {
    const router = useRouter();
    const [uploadPreview, setUploadPreview] = useState("")
    const [form, setForm] = useState({
        name: "",
        description: "",
        venue: "",
        date: "",
        time: "",
        category: "",
        capacity: "",
        banner: "",
        mode: "",
        registrationLink: "",
        registrationFee: "",
        registrationDeadline: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const upd = (k: keyof typeof form) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
            setForm(p => ({ ...p, [k]: e.target.value }));

    const overLimit = form.description.length > 500;

    async function handleBannerUpload(e: React.ChangeEvent<HTMLInputElement>) {
        setLoading(true);
        const file = e.target.files?.[0]
        if (!file) return
        const secure_url = await uploadToCloudinary(file)
        setForm(p => ({ ...p, banner: secure_url }))
        setUploadPreview(URL.createObjectURL(file))
    }

    async function handleSubmit() {
        setError("");
        const { name, description, venue, date, time, category, mode } = form;
        if (!name || !description || !venue || !date || !time || !category || !mode) {
            setError("Please fill in all required fields."); return;
        }
        if (overLimit) { setError("Description must be under 500 characters."); return; }

        try {
            const res = await fetch("/api/club/event/create", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    date: new Date(`${date}T${time}`),
                    capacity: form.capacity ? parseInt(form.capacity) : null,
                    registrationFee: form.registrationFee ? parseInt(form.registrationFee) : null,
                    registrationDeadline: form.registrationDeadline ? new Date(form.registrationDeadline) : null,
                }),
            });

            const data = await res.json();
            if (!res.ok) { setError(data.message ?? "Failed to create event."); return; }
            router.push("/dashboard/events?created=true");
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {/* ── Topbar ──────────────────────────────── */}
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
                    <a href="/dashboard/events" style={{
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
                    <div>
                        <div style={{
                            fontFamily: "'Syne', sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            letterSpacing: "-0.02em",
                        }}>
                            Create Event
                        </div>
                        <div style={{ fontSize: "0.71rem", color: "#7a7a9a", marginTop: 1 }}>
                            Fill in the details below
                        </div>
                    </div>
                </div>
            </header>

            {/* ── Body ────────────────────────────────── */}
            <div style={{ padding: "1.75rem 1.5rem", overflowY: "auto" }}>
                <div style={{ maxWidth: 640, margin: "0 auto" }}>

                    {/* Card */}
                    <div style={{
                        background: "#13131a",
                        border: "1px solid #1e1e2e",
                        borderRadius: "1rem",
                        padding: "2rem",
                        animation: "fadeUp 0.35s ease both",
                    }}>

                        {/* Error */}
                        {error && (
                            <div style={{
                                background: "rgba(255,101,132,0.08)",
                                border: "1px solid rgba(255,101,132,0.2)",
                                color: "#ff8fa3",
                                borderRadius: "0.55rem",
                                padding: "0.65rem 1rem",
                                fontSize: "0.78rem",
                                marginBottom: "1.5rem",
                            }}>
                                ⚠ {error}
                            </div>
                        )}

                        {/* ── Basic Info ──────────────────── */}
                        <SectionDivider title="Basic Info" />

                        {/* Title */}
                        <div style={{ marginBottom: "1rem" }}>
                            <Label text="Event Title" required />
                            <input type="text" style={inputBase}
                                placeholder="e.g. Robotics Workshop 2025"
                                value={form.name} onChange={upd("name")}
                                onFocus={onFocus} onBlur={onBlur} />
                        </div>

                        {/* Description */}
                        <div style={{ marginBottom: "1rem" }}>
                            <Label text="Description" required />
                            <textarea rows={4} style={{ ...inputBase, resize: "none" }}
                                placeholder="Tell students what this event is about, what they'll learn, what to bring..."
                                value={form.description} onChange={upd("description")}
                                onFocus={onFocus} onBlur={onBlur} />
                            <div style={{
                                textAlign: "right", fontSize: "0.67rem", marginTop: 4,
                                color: overLimit ? "#ff6584" : "#555570",
                            }}>
                                {form.description.length}/500
                            </div>
                        </div>

                        {/* Category / Capacity / Mode */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
                            <div>
                                <Label text="Category" required />
                                <select style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                                    value={form.category} onChange={upd("category")}
                                    onFocus={onFocus} onBlur={onBlur}>
                                    <option value="" disabled style={{ background: "#13131a" }}>Select category</option>
                                    {CATEGORIES.map(c => (
                                        <option key={c} value={c} style={{ background: "#13131a" }}>{c}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <Label text="Max Registrations" />
                                <input type="number" min={1} style={inputBase}
                                    placeholder="Unlimited"
                                    value={form.capacity} onChange={upd("capacity")}
                                    onFocus={onFocus} onBlur={onBlur} />
                            </div>
                            <div>
                                <Label text="Mode" required />
                                <select style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                                    value={form.mode} onChange={upd("mode")}
                                    onFocus={onFocus} onBlur={onBlur}>
                                    <option value="" disabled style={{ background: "#13131a" }}>Select mode</option>
                                    {MODES.map(m => (
                                        <option key={m} value={m} style={{ background: "#13131a" }}>{m}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* ── When & Where ────────────────── */}
                        <SectionDivider title="When & Where" />

                        {/* Date / Time */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
                            <div>
                                <Label text="Date" required />
                                <input type="date" style={{ ...inputBase, colorScheme: "dark" } as React.CSSProperties}
                                    value={form.date} onChange={upd("date")}
                                    onFocus={onFocus} onBlur={onBlur} />
                            </div>
                            <div>
                                <Label text="Time" required />
                                <input type="time" style={{ ...inputBase, colorScheme: "dark" } as React.CSSProperties}
                                    value={form.time} onChange={upd("time")}
                                    onFocus={onFocus} onBlur={onBlur} />
                            </div>
                        </div>

                        {/* Venue */}
                        <div style={{ marginBottom: "1rem" }}>
                            <Label text="Venue" required />
                            <input type="text" style={inputBase}
                                placeholder="e.g. Seminar Hall A, VIT Chennai"
                                value={form.venue} onChange={upd("venue")}
                                onFocus={onFocus} onBlur={onBlur} />
                        </div>

                        {/* ── Registration ────────────────── */}
                        <SectionDivider title="Registration" />

                        {/* Registration Link */}
                        <div style={{ marginBottom: "1rem" }}>
                            <Label text="Registration Link" />
                            <input type="url" style={inputBase}
                                placeholder="https://..."
                                value={form.registrationLink} onChange={upd("registrationLink")}
                                onFocus={onFocus} onBlur={onBlur} />
                            <p style={{ fontSize: "0.67rem", color: "#555570", marginTop: 5 }}>
                                External link if using Google Forms or Unstop
                            </p>
                        </div>

                        {/* Fee / Deadline */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
                            <div>
                                <Label text="Registration Fee (₹)" />
                                <div style={{ position: "relative" }}>
                                    <span style={{
                                        position: "absolute",
                                        left: "0.9rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        fontSize: "0.82rem",
                                        color: "#7a7a9a",
                                        pointerEvents: "none",
                                    }}>₹</span>
                                    <input type="number" min={0} style={{ ...inputBase, paddingLeft: "1.75rem" }}
                                        placeholder="0"
                                        value={form.registrationFee} onChange={upd("registrationFee")}
                                        onFocus={onFocus} onBlur={onBlur} />
                                </div>
                                <p style={{ fontSize: "0.67rem", color: "#555570", marginTop: 5 }}>
                                    Leave empty if free
                                </p>
                            </div>
                            <div>
                                <Label text="Registration Deadline" />
                                <input type="date" style={{ ...inputBase, colorScheme: "dark" } as React.CSSProperties}
                                    value={form.registrationDeadline} onChange={upd("registrationDeadline")}
                                    onFocus={onFocus} onBlur={onBlur} />
                                <p style={{ fontSize: "0.67rem", color: "#555570", marginTop: 5 }}>
                                    Last date to register
                                </p>
                            </div>
                        </div>

                        {/* ── Media ───────────────────────── */}
                        <SectionDivider title="Media" />

                        {/* Banner URL */}
                        <div style={{ marginBottom: "1.75rem" }}>
                            <Label text="Banner Image URL" />
                            {uploadPreview && (
                                <img src={uploadPreview} alt="preview"
                                    style={{
                                        width: "100%", height: 160, objectFit: "cover",
                                        borderRadius: "0.5rem", marginBottom: "0.75rem"
                                    }} />
                            )}
                            <input type="file" multiple={false} style={inputBase}
                                placeholder="https://res.cloudinary.com/..."
                                value={form.banner} onChange={upd("banner")}
                                onFocus={onFocus} onBlur={onBlur} />
                            <p style={{ fontSize: "0.67rem", color: "#555570", marginTop: 5 }}>
                                Upload to Cloudinary first, paste URL here
                            </p>
                        </div>

                        {/* ── Actions ─────────────────────── */}
                        <div style={{ display: "flex", gap: "0.75rem" }}>
                            <a href="/dashboard/events" style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "0.7rem 1.25rem",
                                borderRadius: "0.6rem",
                                fontSize: "0.82rem",
                                fontWeight: 500,
                                color: "#7a7a9a",
                                border: "1px solid #1e1e2e",
                                textDecoration: "none",
                                transition: "all 0.15s",
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff6584"; e.currentTarget.style.color = "#ff8fa3"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e2e"; e.currentTarget.style.color = "#7a7a9a"; }}
                            >
                                Cancel
                            </a>
                            <button onClick={() => { handleBannerUpload; handleSubmit; }} disabled={loading} style={{
                                flex: 1,
                                padding: "0.7rem 1.25rem",
                                borderRadius: "0.6rem",
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                color: "#fff",
                                background: loading ? "#7a3050" : "#ff6584",
                                border: "none",
                                cursor: loading ? "not-allowed" : "pointer",
                                fontFamily: "'DM Sans', sans-serif",
                                transition: "all 0.15s",
                                opacity: loading ? 0.7 : 1,
                            }}
                                onMouseEnter={e => { if (!loading) { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,101,132,0.3)"; } }}
                                onMouseLeave={e => { e.currentTarget.style.filter = ""; e.currentTarget.style.boxShadow = "none"; }}
                            >
                                {loading ? "Publishing..." : "Publish Event →"}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}