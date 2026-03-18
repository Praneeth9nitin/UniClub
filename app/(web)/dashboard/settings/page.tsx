// app/(dashboard)/dashboard/settings/page.tsx
// ⚡ CLIENT COMPONENT — form state for profile editing

"use client";

import { useEffect, useState } from "react";

const CATEGORIES = ["Technology", "Cultural", "Sports", "Arts & Music", "Social Service", "Academic", "Photography", "Debate", "Other"];

export default function SettingsPage() {
    useEffect(() => {
        getClub();
    }, []);
    const [form, setForm] = useState({
        name: "VIT Robotics Club",
        description: "We build robots and solve real world problems through technology and innovation.",
        category: "Technology",
        logoUrl: "",
        instagramUrl: "",
        twitterUrl: "",
        linkedinUrl: "",
        youtubeUrl: "",
        websiteUrl: "",
    });
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const upd = (k: keyof typeof form) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
            setForm(p => ({ ...p, [k]: e.target.value }));

    async function handleSave() {
        setError(""); setSaved(false);
        if (!form.name || !form.description || !form.category) {
            setError("Name, description and category are required."); return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/club/settings", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) {
                throw new Error("Failed to update club");
            }
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch {
            setError("Failed to save. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    async function getClub() {
        const res = await fetch("/api/club/settings/getClub", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });
        const data = await res.json();
        setForm(data);
    }

    const inputBase: React.CSSProperties = {
        background: "#13131a", border: "1px solid #1e1e2e",
        color: "#f0f0f8", fontFamily: "inherit", width: "100%",
    };
    const inputClass = "px-5 py-3 rounded-lg outline-none transition-all duration-200";
    const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = "#ff6584";
        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,101,132,0.1)";
    };
    const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = "#1e1e2e";
        e.currentTarget.style.boxShadow = "none";
    };

    return (
        <div className="max-w-2xl mx-auto" style={{ padding: "10px" }}>

            <div className="fade-up mb-6">
                <h2 className="font-display font-bold text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>Club Settings</h2>
                <p className="text-sm font-light" style={{ color: "var(--muted)" }}>Update your club profile and information</p>
            </div>

            <div className="fade-up flex flex-col gap-2 fade-up-1 rounded-2xl p-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>

                {/* Feedback */}
                {error && (
                    <div className="rounded-lg px-4 py-2.5 text-xs mb-5"
                        style={{ background: "rgba(255,101,132,0.1)", border: "1px solid rgba(255,101,132,0.25)", color: "#ff8fa3" }}>
                        {error}
                    </div>
                )}
                {saved && (
                    <div className="rounded-lg px-4 py-2.5 text-xs mb-5"
                        style={{ background: "rgba(67,233,123,0.1)", border: "1px solid rgba(67,233,123,0.25)", color: "#43e97b" }}>
                        ✓ Changes saved successfully
                    </div>
                )}

                {/* Club profile section */}
                <div className="font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
                    Club Profile
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1.5" style={{ color: "var(--muted)" }}>Club Name</label>
                    <input type="text" value={form.name} onChange={upd("name")}
                        className={inputClass} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div className="mb-4">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>Description</label>
                    <textarea rows={3} value={form.description} onChange={upd("description")}
                        className={`${inputClass} resize-none`} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div className="mb-6">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>Category</label>
                    <select value={form.category} onChange={upd("category")}
                        className={inputClass} style={{ ...inputBase, appearance: "none" as const }}
                        onFocus={onFocus} onBlur={onBlur}>
                        {CATEGORIES.map(c => <option key={c} value={c} style={{ background: "#13131a" }}>{c}</option>)}
                    </select>
                </div>

                <div className="mb-5" style={{ borderTop: "1px solid var(--border)" }} />

                {/* Links section */}
                <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
                    Links
                </div>

                <div className="mb-4">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>Instagram Handle</label>
                    <input type="text" placeholder="@yourclub" value={form.instagramUrl} onChange={upd("instagramUrl")}
                        className={`${inputClass}`} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>

                <div className="mb-6">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>Twitter Handle</label>
                    <input type="url" placeholder="@yourclub" value={form.twitterUrl} onChange={upd("twitterUrl")}
                        className={inputClass} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>
                <div className="mb-6">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>LinkedIn Handle</label>
                    <input type="url" placeholder="@yourclub" value={form.linkedinUrl} onChange={upd("linkedinUrl")}
                        className={inputClass} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>
                <div className="mb-6">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>Youtube Handle</label>
                    <input type="url" placeholder="@yourclub" value={form.youtubeUrl} onChange={upd("youtubeUrl")}
                        className={inputClass} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>
                <div className="mb-6">
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--muted)" }}>Website URL</label>
                    <input type="url" placeholder="https://yourclub.com" value={form.websiteUrl} onChange={upd("websiteUrl")}
                        className={inputClass} style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>

                {/* Save */}
                <button onClick={handleSave} disabled={loading}
                    className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200"
                    style={{ background: loading ? "#b34d62" : "#ff6584", border: "none", cursor: loading ? "not-allowed" : "pointer", padding: "5px" }}
                    onMouseEnter={e => { if (!loading) { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(255,101,132,0.35)"; } }}
                    onMouseLeave={e => { e.currentTarget.style.filter = ""; e.currentTarget.style.boxShadow = "none"; }}>
                    {loading ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </div>
    );
}