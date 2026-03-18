// components/auth/AuthPage.tsx
// ⚡ CLIENT COMPONENT
// Single layout — left panel + right form
// Role switcher (Student / Club Leader) switches content WITHOUT page navigation
// Smooth CSS transitions on all panel/form content changes

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ── Types ──────────────────────────────────────────────────────────────────
type Mode = "login" | "signup";
type Role = "student" | "club";

interface AuthPageProps {
    mode: Mode;
}

// ── Constants ──────────────────────────────────────────────────────────────
const COLLEGES = [
    "SRM Institute of Science and Technology",
    "VIT Chennai",
    "Anna University",
    "Loyola College",
    "Presidency College",
    "PSG College of Technology",
    "Coimbatore Institute of Technology",
    "Other",
];

const CATEGORIES = [
    "Technology", "Cultural", "Sports",
    "Arts & Music", "Social Service",
    "Academic", "Photography", "Debate", "Other",
];

const LOGIN_CARDS = [
    { icon: "🎭", title: "Drama Club Annual Fest", sub: "SRM University · Tomorrow 6PM", badge: "New" },
    { icon: "💻", title: "Hackathon 2025", sub: "VIT Chennai · This weekend", badge: "Open" },
    { icon: "🎵", title: "Music Night — Live Bands", sub: "Loyola College · Fri 7PM", badge: "Hot" },
];

const SIGNUP_PERKS = [
    { icon: "🔍", bg: "rgba(108,99,255,0.2)", title: "Discover every club", desc: "Browse clubs from your college and beyond" },
    { icon: "🔔", bg: "rgba(67,233,123,0.2)", title: "Never miss an event", desc: "Get notified the moment clubs post events" },
    { icon: "📅", bg: "rgba(255,101,132,0.2)", title: "Personal event feed", desc: "All followed clubs' events in one place" },
    { icon: "🎟️", bg: "rgba(255,193,7,0.2)", title: "Easy event registration", desc: "Register for events directly from the app" },
];

const CLUB_SIGNUP_STEPS = [
    { num: "01", title: "Register your club", desc: "Fill in your club and leader details" },
    { num: "02", title: "Get verified in 24hrs", desc: "We review and approve quickly" },
    { num: "03", title: "Post your first event", desc: "Followers get notified instantly" },
    { num: "04", title: "Grow beyond campus", desc: "Reach students from other colleges" },
];

// ── Password strength ──────────────────────────────────────────────────────
function getStrength(pw: string) {
    let s = 0;
    if (pw.length >= 8) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    return [
        { label: "", color: "#1e1e2e" },
        { label: "Weak", color: "#ff6584" },
        { label: "Fair", color: "#ff9800" },
        { label: "Good", color: "#ffeb3b" },
        { label: "Strong", color: "#43e97b" },
    ][s];
}

// ── Shared input helpers ───────────────────────────────────────────────────
const inputBase: React.CSSProperties = {
    background: "#13131a",
    border: "1px solid #1e1e2e",
    color: "#f0f0f8",
    fontFamily: "inherit",
};

function onFocusAccent(color: string) {
    return (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 0 0 3px ${color}22`;
    };
}
const onBlurReset = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#1e1e2e";
    e.currentTarget.style.boxShadow = "none";
};

// ── Left panel ─────────────────────────────────────────────────────────────
function LeftPanel({ mode, role, visible }: { mode: Mode; role: Role; visible: boolean }) {
    const isClub = role === "club";
    const accent = isClub ? "#ff6584" : "#6c63ff";
    const accentAlt = isClub ? "#6c63ff" : "#ff6584";

    return (
        <aside
            className="hidden lg:flex w-[42%] flex-col p-12 relative overflow-hidden shrink-0"
            style={{ background: "#13131a", borderRight: "1px solid #1e1e2e" }}
            aria-hidden="true"
        >
            {/* Orbs */}
            <div className="absolute rounded-full pointer-events-none transition-all duration-700"
                style={{ width: 500, height: 500, background: accent, filter: "blur(130px)", opacity: 0.08, top: -200, right: -150 }} />
            <div className="absolute rounded-full pointer-events-none transition-all duration-700"
                style={{ width: 350, height: 350, background: accentAlt, filter: "blur(100px)", opacity: 0.07, bottom: -100, left: -80 }} />

            {/* Logo */}
            <div className="font-display font-extrabold text-2xl relative mb-3"
                style={{ background: "linear-gradient(135deg,#6c63ff,#ff6584)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                UniClub
            </div>

            {/* Panel body — fades between states */}
            <div className="flex-1 flex flex-col relative z-10">

                {/* Role badge */}
                <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold w-fit mb-6 transition-all duration-300"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}40`, color: accent }}
                >
                    {isClub ? "🏆 For Club Leaders" : "🎓 For Students"}
                </div>

                {/* Title */}
                <h2 className="font-display font-extrabold leading-tight mb-4 transition-all duration-300"
                    style={{ fontSize: "2.2rem", letterSpacing: "-0.03em" }}>
                    {mode === "login"
                        ? isClub
                            ? <><span style={{ display: "block" }}>Your club&apos;s</span>
                                <span style={{ background: `linear-gradient(135deg,${accent},${accentAlt})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "block" }}>dashboard</span>
                                <span style={{ display: "block" }}>awaits</span></>
                            : <><span style={{ display: "block" }}>Miss anything</span>
                                <span style={{ display: "block" }}>while you were</span>
                                <span style={{ background: `linear-gradient(135deg,${accent},${accentAlt})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "block" }}>away?</span></>
                        : isClub
                            ? <><span style={{ display: "block" }}>Grow your club&apos;s</span>
                                <span style={{ display: "block" }}>reach{" "}
                                    <span style={{ background: `linear-gradient(135deg,${accent},${accentAlt})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>instantly</span>
                                </span></>
                            : <><span style={{ display: "block" }}>Join the campus</span>
                                <span style={{ display: "block" }}>revolution.</span>
                                <span style={{ background: `linear-gradient(135deg,${accent},${accentAlt})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "block" }}>It&apos;s free.</span></>
                    }
                </h2>

                <p className="text-sm font-light leading-relaxed mb-8" style={{ color: "#7a7a9a" }}>
                    {mode === "login"
                        ? isClub
                            ? "Sign in to post events, manage your members, and track your club's growth."
                            : "Log back in and catch up on events from clubs you follow."
                        : isClub
                            ? "Register your club, get verified, and start reaching thousands of students beyond your campus."
                            : "Connect with every club in your college — and beyond. Takes less than a minute."
                    }
                </p>

                {/* Login: event cards */}
                {mode === "login" && !isClub && (
                    <div className="flex flex-col gap-3">
                        {LOGIN_CARDS.map((card, i) => (
                            <div key={i} className="rounded-xl px-4 py-3 flex items-center gap-3"
                                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #1e1e2e" }}>
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                                    style={{ background: ["rgba(108,99,255,0.2)", "rgba(67,233,123,0.2)", "rgba(255,193,7,0.2)"][i] }}>
                                    {card.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs font-medium truncate" style={{ color: "#f0f0f8" }}>{card.title}</div>
                                    <div className="text-xs" style={{ color: "#7a7a9a" }}>{card.sub}</div>
                                </div>
                                <span className="text-xs px-2 py-0.5 rounded-full shrink-0"
                                    style={{ background: "rgba(108,99,255,0.15)", color: "#a09dff" }}>{card.badge}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Login club: stats + testimonial */}
                {mode === "login" && isClub && (
                    <>
                        <div className="grid grid-cols-3 gap-5 mb-6">
                            {[["🏆", "500+", "Clubs"], ["🎓", "50+", "Colleges"], ["👥", "10k+", "Students"]].map(([icon, val, label]) => (
                                <div key={label} className="rounded-xl p-3 text-center"
                                    style={{ background: "rgba(255,101,132,0.06)", border: "1px solid rgba(255,101,132,0.12)" }}>
                                    <div className="text-base mb-1">{icon}</div>
                                    <div className="font-display font-bold text-base" style={{ color: "#f0f0f8" }}>{val}</div>
                                    <div className="text-xs font-light" style={{ color: "#7a7a9a" }}>{label}</div>
                                </div>
                            ))}
                        </div>
                        <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #1e1e2e" }}>
                            <p className="text-xs font-light leading-relaxed mb-3" style={{ color: "#7a7a9a" }}>
                                &ldquo;UniClub helped our robotics club reach 3x more students. Event registrations went through the roof.&rdquo;
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                                    style={{ background: "rgba(255,101,132,0.2)", color: "#ff6584" }}>P</div>
                                <div>
                                    <div className="text-xs font-medium">Priya Menon</div>
                                    <div className="text-xs" style={{ color: "#7a7a9a" }}>President, VIT Robotics Club</div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Signup student: perks */}
                {mode === "signup" && !isClub && (
                    <div className="flex flex-col gap-5">
                        {SIGNUP_PERKS.map((p, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
                                    style={{ background: p.bg, marginTop: 2 }}>{p.icon}</div>
                                <div>
                                    <div className="text-sm font-semibold mb-0.5">{p.title}</div>
                                    <div className="text-xs font-light" style={{ color: "#7a7a9a" }}>{p.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Signup club: steps */}
                {mode === "signup" && isClub && (
                    <div className="flex flex-col gap-5">
                        {CLUB_SIGNUP_STEPS.map((s) => (
                            <div key={s.num} className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center font-display text-xs font-bold shrink-0"
                                    style={{ background: "rgba(255,101,132,0.15)", border: "1px solid rgba(255,101,132,0.25)", color: "#ff6584" }}>
                                    {s.num}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold mb-0.5">{s.title}</div>
                                    <div className="text-xs font-light" style={{ color: "#7a7a9a" }}>{s.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
}

// ── Role Switcher ──────────────────────────────────────────────────────────
function RoleSwitcher({ role, onChange, accent }: { role: Role; onChange: (r: Role) => void; accent: string }) {
    return (
        <div className="flex rounded-xl p-1 mb-6" style={{ background: "#13131a", border: "1px solid #1e1e2e" }}>
            {(["student", "club"] as Role[]).map((r) => (
                <button key={r} onClick={() => onChange(r)}
                    className="flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                        background: role === r ? accent : "transparent",
                        color: role === r ? "#fff" : "#7a7a9a",
                        border: "none", cursor: "pointer",
                    }}>
                    {r === "student" ? "Student" : "Club Leader"}
                </button>
            ))}
        </div>
    );
}

// ── Error box ──────────────────────────────────────────────────────────────
function ErrorBox({ message }: { message: string }) {
    if (!message) return null;
    return (
        <div className="rounded-lg px-4 py-2.5 text-xs mb-4"
            style={{ background: "rgba(255,101,132,0.1)", border: "1px solid rgba(255,101,132,0.25)", color: "#ff8fa3" }}>
            {message}
        </div>
    );
}

// ── Password field ─────────────────────────────────────────────────────────
function PasswordField({ value, onChange, accent, showStrength = false }:
    { value: string; onChange: (v: string) => void; accent: string; showStrength?: boolean }) {
    const [show, setShow] = useState(false);
    const strength = getStrength(value);

    return (
        <div>
            <div className="relative">
                <input type={show ? "text" : "password"} placeholder="Min. 8 characters" value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full px-4 py-3 pr-11 rounded-lg text-sm outline-none transition-all duration-200"
                    style={inputBase} onFocus={onFocusAccent(accent)} onBlur={onBlurReset} />
                <button type="button" onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs"
                    style={{ color: "#7a7a9a", background: "none", border: "none", cursor: "pointer" }}>
                    {show ? "Hide" : "Show"}
                </button>
            </div>
            {showStrength && value && (
                <div className="mt-2">
                    <div className="flex gap-1 mb-1">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-0.5 flex-1 rounded-full transition-all duration-300"
                            />
                        ))}
                    </div>
                    <span className="text-xs" style={{ color: strength.color }}>{strength.label}</span>
                </div>
            )}
        </div>
    );
}

// ── Submit button ──────────────────────────────────────────────────────────
function SubmitButton({ label, loading, accent, onClick }:
    { label: string; loading: boolean; accent: string; onClick: () => void }) {
    return (
        <button onClick={onClick} disabled={loading}
            className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200"
            style={{ background: loading ? `${accent}99` : accent, border: "none", cursor: loading ? "not-allowed" : "pointer" }}
            onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.filter = "brightness(1.15)"; e.currentTarget.style.boxShadow = `0 8px 25px ${accent}55`; } }}
            onMouseLeave={(e) => { e.currentTarget.style.filter = ""; e.currentTarget.style.boxShadow = "none"; }}>
            {loading ? "Please wait..." : label}
        </button>
    );
}

// ── LOGIN FORM ─────────────────────────────────────────────────────────────
function LoginForm({ role, accent }: { role: Role; accent: string }) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Reset errors when role changes
    useEffect(() => { setError(""); }, [role]);

    async function submit() {
        setError("");
        if (!email || !password) { setError("Please fill in all fields."); return; }
        if (!/\S+@\S+\.\S+/.test(email)) { setError("Please enter a valid email address."); return; }

        setLoading(true);
        try {
            // 🔌 Hook your JWT login API here
            const res = await fetch(`/api/${role}/auth/signin`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) { const d = await res.json(); setError(d.message || "Invalid credentials."); return; }
            router.push(role === "student" ? "/feed" : "/dashboard");
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const forgotHref = role === "student" ? "/forgot-password" : "/club/forgot-password";

    return (
        <div>
            <ErrorBox message={error} />

            <div className="mb-4">
                <label className="block text-xs font-medium mb-1.5" style={{ color: "#7a7a9a" }}>Email address</label>
                <input type="email" placeholder="you@college.edu.in" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && submit()}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                    style={inputBase} onFocus={onFocusAccent(accent)} onBlur={onBlurReset} />
            </div>

            <div className="mb-6">
                <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-medium" style={{ color: "#7a7a9a" }}>Password</label>
                    <Link href={forgotHref} className="text-xs font-medium hover:underline" style={{ color: accent }}>
                        Forgot password?
                    </Link>
                </div>
                <PasswordField value={password} onChange={setPassword} accent={accent} />
            </div>

            <SubmitButton label="Sign in to UniClub" loading={loading} accent={accent} onClick={submit} />
        </div>
    );
}

// ── STUDENT SIGNUP FORM ────────────────────────────────────────────────────
function StudentSignupForm({ accent }: { accent: string }) {
    const router = useRouter();
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });
    const [terms, setTerms] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const upd = (k: keyof typeof form) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm(p => ({ ...p, [k]: e.target.value }));

    async function submit() {
        setError("");
        const { firstName, lastName, email, password } = form;
        if (!firstName || !lastName || !email || !password) { setError("Please fill in all fields."); return; }
        if (!/\S+@\S+\.\S+/.test(email)) { setError("Enter a valid email."); return; }
        if (password.length < 8) { setError("Password must be at least 8 characters."); return; }
        if (!terms) { setError("Please accept the terms to continue."); return; }

        setLoading(true);
        try {
            // 🔌 Hook your JWT student signup API here
            const res = await fetch("/api/student/auth/signup", {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form }),
            });
            if (!res.ok) { const d = await res.json(); setError(d.message || "Something went wrong."); return; }
            router.push("/feed");
        } catch { setError("Something went wrong."); }
        finally { setLoading(false); }
    }

    return (
        <div>
            <ErrorBox message={error} />

            <div className="grid grid-cols-2 gap-3 mb-4">
                {[["firstName", "First name", "Arjun"], ["lastName", "Last name", "Sharma"]].map(([k, label, ph]) => (
                    <div key={k}>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "#7a7a9a" }}>{label}</label>
                        <input type="text" placeholder={ph} value={form[k as keyof typeof form]}
                            onChange={upd(k as keyof typeof form)}
                            className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                            style={inputBase} onFocus={onFocusAccent(accent)} onBlur={onBlurReset} />
                    </div>
                ))}
            </div>

            <div className="mb-4">
                <label className="block text-xs font-medium mb-1.5" style={{ color: "#7a7a9a" }}>College email</label>
                <input type="email" placeholder="arjun@student.srmist.edu.in" value={form.email}
                    onChange={upd("email")} className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                    style={inputBase} onFocus={onFocusAccent(accent)} onBlur={onBlurReset} />
            </div>

            <div className="mb-5">
                <label className="block text-xs font-medium mb-1.5" style={{ color: "#7a7a9a" }}>Password</label>
                <PasswordField value={form.password} onChange={v => setForm(p => ({ ...p, password: v }))} accent={accent} showStrength />
            </div>

            <div className="flex items-start gap-2.5 mb-5">
                <input type="checkbox" id="s-terms" checked={terms} onChange={e => setTerms(e.target.checked)}
                    className="mt-0.5 shrink-0" style={{ accentColor: accent, width: 15, height: 15 }} />
                <label htmlFor="s-terms" className="text-xs leading-relaxed cursor-pointer" style={{ color: "#7a7a9a" }}>
                    I agree to UniClub&apos;s <Link href="/terms" className="hover:underline" style={{ color: accent }}>Terms</Link> and <Link href="/privacy" className="hover:underline" style={{ color: accent }}>Privacy Policy</Link>
                </label>
            </div>

            <SubmitButton label="Create Account →" loading={loading} accent={accent} onClick={submit} />
        </div>
    );
}

// ── CLUB SIGNUP FORM (2-step) ──────────────────────────────────────────────
function ClubSignupForm({ accent }: { accent: string }) {
    const router = useRouter();
    const [step, setStep] = useState<1 | 2>(1);
    const [leader, setLeader] = useState({ firstName: "", lastName: "", email: "", password: "" });
    const [club, setClub] = useState({ name: "", college: "", category: "", description: "", city: "", state: "" });
    const [terms, setTerms] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const updL = (k: keyof typeof leader) =>
        (e: React.ChangeEvent<HTMLInputElement>) => setLeader(p => ({ ...p, [k]: e.target.value }));
    const updC = (k: keyof typeof club) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
            setClub(p => ({ ...p, [k]: e.target.value }));

    function goStep2() {
        setError("");
        if (!leader.firstName || !leader.lastName || !leader.email || !leader.password) { setError("Please fill in all fields."); return; }
        if (!/\S+@\S+\.\S+/.test(leader.email)) { setError("Enter a valid email."); return; }
        if (leader.password.length < 8) { setError("Password must be at least 8 characters."); return; }
        setStep(2);
    }

    async function submit() {
        setError("");
        if (!club.name || !club.college || !club.category || !club.description) { setError("Please fill in all fields."); return; }
        if (!terms) { setError("Please accept the terms to continue."); return; }
        setLoading(true);
        try {
            // 🔌 Hook your JWT club signup API here
            const res = await fetch("/api/club/auth/signup", {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...leader, ...club }),
            });
            if (!res.ok) { setError("Something went wrong."); return; }
            router.push("/dashboard");
        } catch { setError("Something went wrong."); }
        finally { setLoading(false); }
    }

    return (
        <div>
            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-5">
                {[1, 2].map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                            style={{
                                background: step === s ? accent : step > s ? `${accent}30` : "#1e1e2e",
                                color: step === s ? "#fff" : step > s ? accent : "#7a7a9a",
                                border: step > s ? `1px solid ${accent}50` : "none",
                            }}>
                            {step > s ? "✓" : s}
                        </div>
                        <span className="text-xs transition-colors duration-300" style={{ color: step === s ? "#f0f0f8" : "#7a7a9a" }}>
                            {s === 1 ? "Your details" : "Club details"}
                        </span>
                        {i < 1 && <div className="w-6 h-px mx-1 transition-all duration-300" style={{ background: step > 1 ? `${accent}50` : "#1e1e2e" }} />}
                    </div>
                ))}
            </div>

            <ErrorBox message={error} />

            {/* Step 1 */}
            {step === 1 && (
                <div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {[["firstName", "First name", "Priya"], ["lastName", "Last name", "Menon"]].map(([k, label, ph]) => (
                            <div key={k}>
                                <label className="block text-xs font-medium mb-1.5" style={{ color: "#7a7a9a" }}>{label}</label>
                                <input type="text" placeholder={ph} value={leader[k as keyof typeof leader]}
                                    onChange={updL(k as keyof typeof leader)}
                                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                                    style={inputBase} onFocus={onFocusAccent(accent)} onBlur={onBlurReset} />
                            </div>
                        ))}
                    </div>
                    <div className="mb-4">
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "#7a7a9a" }}>College email</label>
                        <input type="email" placeholder="priya@student.vit.ac.in" value={leader.email} onChange={updL("email")}
                            className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                            style={inputBase} onFocus={onFocusAccent(accent)} onBlur={onBlurReset} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "#7a7a9a" }}>Password</label>
                        <PasswordField value={leader.password} onChange={v => setLeader(p => ({ ...p, password: v }))} accent={accent} showStrength />
                    </div>
                    <SubmitButton label="Continue →" loading={false} accent={accent} onClick={goStep2} />
                </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
                <div>
                    <div className="mb-4">
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "#7a7a9a" }}>Club name</label>
                        <input type="text" placeholder="e.g. VIT Robotics Club" value={club.name} onChange={updC("name")}
                            className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                            style={inputBase} onFocus={onFocusAccent(accent)} onBlur={onBlurReset} />
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {(["college", "category"] as const).map(k => (
                            <div key={k}>
                                <label className="block text-xs font-medium mb-1.5 capitalize" style={{ color: "#7a7a9a" }}>{k}</label>
                                <select value={club[k]} onChange={updC(k)}
                                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                                    style={{ ...inputBase, appearance: "none" as const }}
                                    onFocus={onFocusAccent(accent)} onBlur={onBlurReset}>
                                    <option value="" disabled>Select</option>
                                    {(k === "college" ? COLLEGES : CATEGORIES).map(c =>
                                        <option key={c} value={c} style={{ background: "#13131a" }}>{c}</option>)}
                                </select>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {(["city", "state"] as const).map(k => (
                            <div key={k}>
                                <label className="block text-xs font-medium mb-1.5 capitalize" style={{ color: "#7a7a9a" }}>{k}</label>
                                <input type="text" placeholder={`${k}`} value={club[k]} onChange={updC(k)}
                                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                                    style={inputBase} onFocus={onFocusAccent(accent)} onBlur={onBlurReset} />
                            </div>
                        ))}
                    </div>
                    <div className="mb-5">
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "#7a7a9a" }}>Description</label>
                        <textarea rows={3} placeholder="Tell students what your club is about..."
                            value={club.description} onChange={updC("description")}
                            className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 resize-none"
                            style={inputBase} onFocus={onFocusAccent(accent)} onBlur={onBlurReset} />
                        <div className="text-right text-xs mt-1"
                            style={{ color: club.description.length > 250 ? "#ff6584" : "#7a7a9a" }}>
                            {club.description.length}/300
                        </div>
                    </div>
                    <div className="flex items-start gap-2.5 mb-5">
                        <input type="checkbox" id="c-terms" checked={terms} onChange={e => setTerms(e.target.checked)}
                            className="mt-0.5 shrink-0" style={{ accentColor: accent, width: 15, height: 15 }} />
                        <label htmlFor="c-terms" className="text-xs leading-relaxed cursor-pointer" style={{ color: "#7a7a9a" }}>
                            I confirm I&apos;m an authorized representative of this club and agree to UniClub&apos;s{" "}
                            <Link href="/terms" className="hover:underline" style={{ color: accent }}>Terms</Link> and{" "}
                            <Link href="/privacy" className="hover:underline" style={{ color: accent }}>Privacy Policy</Link>
                        </label>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => { setStep(1); setError(""); }}
                            className="px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                            style={{ background: "transparent", border: "1px solid #1e1e2e", color: "#7a7a9a", cursor: "pointer" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e2e"; e.currentTarget.style.color = "#7a7a9a"; }}>
                            ← Back
                        </button>
                        <div className="flex-1">
                            <SubmitButton label="Register Club →" loading={loading} accent={accent} onClick={submit} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// ── MAIN AUTH PAGE ─────────────────────────────────────────────────────────
export function AuthPage({ mode }: AuthPageProps) {
    const [role, setRole] = useState<Role>("student");
    const [panelVisible, setPanelVisible] = useState(true);

    const accent = role === "club" ? "#ff6584" : "#6c63ff";
    const oppLink = mode === "login" ? "/signup" : "/login";
    const oppLabel = mode === "login" ? "Sign up free" : "Sign in";

    // Smooth cross-fade when role switches
    function handleRoleChange(r: Role) {
        if (r === role) return;
        setPanelVisible(false);
        setTimeout(() => { setRole(r); setPanelVisible(true); }, 180);
    }

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .font-display { font-family: 'Syne', sans-serif; }
        body { font-family: 'DM Sans', sans-serif; }
        .panel-fade { transition: opacity 0.18s ease, transform 0.18s ease; }
        .panel-hidden { opacity: 0; transform: translateY(6px); }
        .panel-visible { opacity: 1; transform: translateY(0); }
      `}</style>

            <div className="min-h-screen flex" style={{ background: "#0a0a0f", color: "#f0f0f8" }}>

                {/* LEFT — server-style decorative panel, state-driven */}
                <div className={`panel-fade ${panelVisible ? "panel-visible" : "panel-hidden"}`} style={{ display: "contents" }}>
                    <LeftPanel mode={mode} role={role} visible={panelVisible} />
                </div>

                {/* RIGHT — form area */}
                <div className="flex-1 flex items-center justify-center px-6 py-12 overflow-y-auto">
                    <div className="w-full max-w-sm">

                        {/* Header */}
                        <div className="mb-7">
                            <h1 className="font-display font-bold text-2xl mb-1" style={{ letterSpacing: "-0.02em" }}>
                                {mode === "login" ? "Welcome back 👋" : "Create your account"}
                            </h1>
                            <p className="text-sm font-light" style={{ color: "#7a7a9a" }}>
                                {mode === "login" ? "No account yet? " : "Already have one? "}
                                <Link href={oppLink} className="font-medium hover:underline" style={{ color: accent }}>
                                    {oppLabel}
                                </Link>
                            </p>
                        </div>

                        {/* Role switcher — switches content in place */}
                        <RoleSwitcher role={role} onChange={handleRoleChange} accent={accent} />

                        {/* Form content — fades on role switch */}
                        <div className={`panel-fade ${panelVisible ? "panel-visible" : "panel-hidden"}`}>
                            {mode === "login" && <LoginForm role={role} accent={accent} />}
                            {mode === "signup" && role === "student" && <StudentSignupForm accent={accent} />}
                            {mode === "signup" && role === "club" && <ClubSignupForm accent={accent} />}
                        </div>

                        {/* Bottom link */}
                        <p className="text-center text-xs mt-5" style={{ color: "#7a7a9a" }}>
                            {mode === "login" ? "New to UniClub? " : "Already have an account? "}
                            <Link href={oppLink} className="font-medium hover:underline" style={{ color: accent }}>
                                {oppLabel}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}