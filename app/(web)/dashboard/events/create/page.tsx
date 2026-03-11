// app/(dashboard)/dashboard/events/create/page.tsx
// ⚡ CLIENT COMPONENT — interactive form

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CATEGORIES = ["Workshop", "Hackathon", "Talk", "Bootcamp", "Cultural", "Sports", "Social", "Other"];
const MODES = ["ONLINE", "OFFLINE", "HYBRID"];

export default function CreateEventPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "", description: "", venue: "",
        date: "", time: "", category: "",
        capacity: "", banner: "", mode: "",
        registrationLink: "", registrationFee: "",
        registrationDeadline: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const upd = (k: keyof typeof form) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
            setForm(p => ({ ...p, [k]: e.target.value }));

    async function handleSubmit() {
        setError("");
        const { name, description, venue, date, time, category, mode } = form;
        if (!name || !description || !venue || !date || !time || !category || !mode) {
            setError("Please fill in all required fields."); return;
        }

        setLoading(true);
        try {
            // 🔌 Hook your event creation API here
            const res = await fetch("/api/club/event/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    ...form,
                    date: new Date(`${date}T${time}`),
                    capacity: form.capacity ? parseInt(form.capacity) : null,
                    registrationFee: form.registrationFee ? parseInt(form.registrationFee) : null,
                    registrationDeadline: form.registrationDeadline ? new Date(form.registrationDeadline) : null,
                }),
            });

            if (!res.ok) {
                setError("Failed to create event.");
                return;
            }

            router.push("/dashboard/events?created=true");
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const inputBase: React.CSSProperties = {
        background: "#13131a", border: "1px solid #1e1e2e",
        color: "#f0f0f8", fontFamily: "inherit", width: "100%",
    };
    const inputClass = "px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200";

    const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = "#ff6584";
        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,101,132,0.1)";
    };
    const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = "#1e1e2e";
        e.currentTarget.style.boxShadow = "none";
    };

    return (
        <div className="max-w-2xl mx-auto">

            {/* Header */}
            <div className="fade-up flex items-center gap-3 mb-6">
                <Link href="/dashboard/events"
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all duration-200 hover:border-rose-500"
                    style={{ border: "1px solid var(--border)", color: "var(--muted)", textDecoration: "none" }}>
                    ←
                </Link>
                <div>
                    <h2 className="font-display font-bold text-xl" style={{ letterSpacing: "-0.02em" }}>Create Event</h2>
                    <p className="text-xs font-light" style={{ color: "var(--muted)" }}>Fill in the details below</p>
                </div>
            </div>

            <div className="fade-up fade-up-1 rounded-2xl p-6"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>

                {/* Error */}
                {error && (
                    <div className="rounded-lg px-4 py-2.5 text-xs mb-5"
                        style={{ background: "rgba(255,101,132,0.1)", border: "1px solid rgba(255,101,132,0.25)", color: "#ff8fa3" }}>
                        {error}
                    </div>
                )}

                {/* Section: Basic info */}
                <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
                    Basic Info
                </div>

                <div className="mb-4">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                        Event Title <span style={{ color: "#ff6584" }}>*</span>
                    </label>
                    <input type="text" placeholder="e.g. Robotics Workshop 2025" value={form.name} onChange={upd("name")}
                        className={inputClass} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div className="mb-4">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                        Description <span style={{ color: "#ff6584" }}>*</span>
                    </label>
                    <textarea rows={4} placeholder="Tell students what this event is about, what they'll learn, what to bring..."
                        value={form.description} onChange={upd("description")}
                        className={`${inputClass} resize-none`} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                    <div className="text-right text-xs mt-1"
                        style={{ color: form.description.length > 400 ? "#ff6584" : "var(--muted)" }}>
                        {form.description.length}/500
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                    <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                            Category <span style={{ color: "#ff6584" }}>*</span>
                        </label>
                        <select value={form.category} onChange={upd("category")}
                            className={inputClass} style={{ ...inputBase, appearance: "none" as const }}
                            onFocus={onFocus} onBlur={onBlur}>
                            <option value="" disabled>Select category</option>
                            {CATEGORIES.map(c => <option key={c} value={c} style={{ background: "#13131a" }}>{c}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                            Max Registrations
                        </label>
                        <input type="number" placeholder="Leave empty for unlimited" value={form.capacity}
                            onChange={upd("capacity")} min={1}
                            className={inputClass} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                            Mode <span style={{ color: "#ff6584" }}>*</span>
                        </label>
                        <select value={form.mode} onChange={upd("mode")}
                            className={inputClass} style={{ ...inputBase, appearance: "none" as const }}
                            onFocus={onFocus} onBlur={onBlur}>
                            <option value="" disabled>Select mode</option>
                            {MODES.map(c => <option key={c} value={c} style={{ background: "#13131a" }}>{c}</option>)}
                        </select>
                    </div>
                </div>

                {/* Divider */}
                <div className="mb-5" style={{ borderTop: "1px solid var(--border)" }} />

                {/* Section: When & Where */}
                <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
                    When & Where
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                            Date <span style={{ color: "#ff6584" }}>*</span>
                        </label>
                        <input type="date" value={form.date} onChange={upd("date")}
                            className={inputClass} style={{ ...inputBase, colorScheme: "dark" }}
                            onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                            Time <span style={{ color: "#ff6584" }}>*</span>
                        </label>
                        <input type="time" value={form.time} onChange={upd("time")}
                            className={inputClass} style={{ ...inputBase, colorScheme: "dark" }}
                            onFocus={onFocus} onBlur={onBlur} />
                    </div>
                </div>

                <div className="mb-5" style={{ borderTop: "1px solid var(--border)" }} />

                <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
                    Registration
                </div>

                <div className="mb-6">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                        Registration Link
                    </label>
                    <input type="url" placeholder="https://..." value={form.registrationLink} onChange={upd("registrationLink")}
                        className={inputClass} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div className="mb-6">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                        Venue <span style={{ color: "#ff6584" }}>*</span>
                    </label>
                    <input type="text" placeholder="e.g. Seminar Hall A, VIT Chennai" value={form.venue}
                        onChange={upd("venue")} className={inputClass} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                            Registration Fees
                        </label>
                        <input type="number" placeholder="Leave empty for free" value={form.registrationFee}
                            onChange={upd("registrationFee")} min={1}
                            className={inputClass} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                            Registration Deadline
                        </label>
                        <input type="date" value={form.registrationDeadline} onChange={upd("registrationDeadline")}
                            className={inputClass} style={{ ...inputBase, colorScheme: "dark" }}
                            onFocus={onFocus} onBlur={onBlur} />
                    </div>
                </div>

                {/* Divider */}
                <div className="mb-5" style={{ borderTop: "1px solid var(--border)" }} />

                {/* Section: Media */}
                <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
                    Media
                </div>

                <div className="mb-6">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>
                        Banner Image URL
                    </label>
                    <input type="url" placeholder="https://..." value={form.banner} onChange={upd("banner")}
                        className={inputClass} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                    <p className="text-xs mt-1 font-light" style={{ color: "var(--muted)" }}>
                        Upload to Cloudinary first, paste URL here
                    </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <Link href="/dashboard/events"
                        className="px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:border-rose-500 hover:text-rose-400"
                        style={{ border: "1px solid var(--border)", color: "var(--muted)", textDecoration: "none" }}>
                        Cancel
                    </Link>
                    <button onClick={handleSubmit} disabled={loading}
                        className="flex-1 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200"
                        style={{ background: loading ? "#b34d62" : "#ff6584", border: "none", cursor: loading ? "not-allowed" : "pointer" }}
                        onMouseEnter={e => { if (!loading) { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(255,101,132,0.35)"; } }}
                        onMouseLeave={e => { e.currentTarget.style.filter = ""; e.currentTarget.style.boxShadow = "none"; }}>
                        {loading ? "Creating event..." : "Publish Event →"}
                    </button>
                </div>
            </div>
        </div>
    );
}