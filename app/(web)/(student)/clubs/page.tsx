// app/(student)/clubs/page.tsx
// ⚡ FULL CLIENT COMPONENT

"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { FollowButton } from "@/components/student/FollowButton"

// ── Types ────────────────────────────────────────────────────────
export type Club = {
    id: string
    name: string
    college: string
    category: string
    logoUrl: string | null
    isFollowing: boolean
    description: string
    followers: string[]
    events: string[]
}

const SORT_OPTIONS = [
    { value: "followers", label: "Most followed" },
    { value: "events", label: "Most active" },
    { value: "name", label: "A → Z" },
]

// ── Club avatar ───────────────────────────────────────────────────
function ClubAvatar({ name, logoUrl, size = 40 }: {
    name: string; logoUrl: string | null; size?: number
}) {
    if (logoUrl) {
        return (
            <img src={logoUrl} alt={name}
                className="rounded-full object-cover shrink-0"
                style={{ width: size, height: size }} />
        )
    }
    return (
        <div className="rounded-full flex items-center justify-center font-display font-bold shrink-0"
            style={{
                width: size,
                height: size,
                background: "rgba(108,99,255,0.18)",
                color: "#a09dff",
                fontSize: size * 0.38,
            }}>
            {name.charAt(0)}
        </div>
    )
}

// ── Skeletons ─────────────────────────────────────────────────────
function FeaturedSkeleton() {
    return (
        <div className="rounded-2xl overflow-hidden" style={{ minHeight: 200, background: "#111118", border: "1px solid #1a1a2a" }}>
            <div className="p-4 flex flex-col gap-3 h-full justify-end">
                <div className="flex items-center gap-3">
                    <div className="rounded-full" style={{ width: 38, height: 38, background: "#1a1a2a" }} />
                    <div className="flex flex-col gap-1.5">
                        <div className="rounded-md" style={{ width: 120, height: 14, background: "#1a1a2a" }} />
                        <div className="rounded-md" style={{ width: 80, height: 11, background: "#1a1a2a" }} />
                    </div>
                </div>
                <div className="rounded-md" style={{ width: "90%", height: 11, background: "#1a1a2a" }} />
                <div className="rounded-md" style={{ width: "70%", height: 11, background: "#1a1a2a" }} />
            </div>
        </div>
    )
}

function RowSkeleton() {
    return (
        <div className="flex items-center gap-4 px-4 py-3.5 rounded-xl"
            style={{ background: "#111118", border: "1px solid #1a1a2a" }}>
            <div className="rounded-full shrink-0" style={{ width: 40, height: 40, background: "#1a1a2a" }} />
            <div className="flex-1 flex flex-col gap-2">
                <div className="rounded-md" style={{ width: "45%", height: 13, background: "#1a1a2a" }} />
                <div className="rounded-md" style={{ width: "30%", height: 11, background: "#1a1a2a" }} />
            </div>
            <div className="rounded-full" style={{ width: 72, height: 28, background: "#1a1a2a" }} />
        </div>
    )
}

// ── Featured card ─────────────────────────────────────────────────
function FeaturedCard({ club }: { club: Club }) {
    return (
        <Link href={`/clubs/${club.id}`}
            className="featured-card relative flex flex-col justify-end rounded-2xl overflow-hidden"
            style={{
                minHeight: 200,
                background: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,95,130,0.08))",
                border: "1px solid #1a1a2a",
                textDecoration: "none",
                transition: "border-color 0.15s, transform 0.15s",
            }}>

            {/* Orb */}
            <div className="absolute rounded-full pointer-events-none"
                style={{
                    width: 180, height: 180, background: "#6c63ff",
                    filter: "blur(60px)", opacity: 0.1,
                    top: -50, right: -30,
                }} />

            {/* Category */}
            <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{ background: "rgba(108,99,255,0.2)", color: "#a09dff" }}>
                {club.category}
            </div>

            {/* Follow */}
            <div className="absolute top-3 right-3">
                <FollowButton clubId={club.id} initialFollowing={club.isFollowing} />
            </div>

            {/* Bottom */}
            <div className="relative z-10 p-4">
                <div className="flex items-center gap-3 mb-2">
                    <ClubAvatar name={club.name} logoUrl={club.logoUrl} size={38} />
                    <div className="min-w-0">
                        <div className="font-display font-bold text-sm truncate" style={{ letterSpacing: "-0.01em" }}>
                            {club.name}
                        </div>
                        <div className="text-xs truncate" style={{ color: "#6b6b8a" }}>{club.college}</div>
                    </div>
                </div>
                <p className="text-xs leading-relaxed mb-3"
                    style={{
                        color: "#9999bb",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}>
                    {club.description}
                </p>
                <div className="flex items-center gap-3 text-xs" style={{ color: "#6b6b8a" }}>
                    <span>👥 {club.followers.length}</span>
                    <span>📅 {club.events.length} events</span>
                </div>
            </div>
        </Link>
    )
}

// ── List row ──────────────────────────────────────────────────────
function ClubRow({ club }: { club: Club }) {
    return (
        <Link href={`/clubs/${club.id}`}
            className="club-row flex items-center gap-4 px-4 py-3.5 rounded-xl"
            style={{
                background: "#111118",
                border: "1px solid #1a1a2a",
                textDecoration: "none",
                transition: "border-color 0.15s",
            }}>
            <ClubAvatar name={club.name} logoUrl={club.logoUrl} size={40} />
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className="text-sm font-medium truncate">{club.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full shrink-0"
                        style={{ background: "rgba(108,99,255,0.12)", color: "#a09dff" }}>
                        {club.category}
                    </span>
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "#6b6b8a" }}>
                    <span>{club.college}</span>
                    <span style={{ color: "#2a2a3a" }}>·</span>
                    <span>👥 {club.followers.length}</span>
                    <span style={{ color: "#2a2a3a" }}>·</span>
                    <span>📅 {club.events.length} events</span>
                </div>
            </div>
            <FollowButton clubId={club.id} initialFollowing={club.isFollowing} />
        </Link>
    )
}

// ── Main ──────────────────────────────────────────────────────────
export default function ClubsPage() {
    const [clubs, setClubs] = useState<Club[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("all")
    const [college, setCollege] = useState("all")
    const [sort, setSort] = useState("followers")

    async function fetchClubs() {
        setLoading(true); setError("")
        try {
            const res = await fetch("/api/student/getClubs", { credentials: "include" })
            if (!res.ok) { setError("Failed to load clubs."); return }
            const data = await res.json()

            setClubs(data.clubs)
        } catch {
            setError("Something went wrong. Please refresh.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { fetchClubs() }, [])

    // ── Filter + sort in JS ───────────────────────────────────────
    const filtered = useMemo(() => {
        let result = [...clubs]
        if (search.trim()) {
            const q = search.toLowerCase()
            result = result.filter(c =>
                c.name?.toLowerCase().includes(q) ||
                c.college?.toLowerCase().includes(q) ||
                c.category?.toLowerCase().includes(q)
            )
        }
        if (category !== "all") result = result.filter(c => c.category === category)
        if (college !== "all") result = result.filter(c => c.college === college)
        result.sort((a, b) => {
            if (sort === "followers") return b.followers.length - a.followers.length
            if (sort === "events") return b.events.length - a.events.length
            if (sort === "name") return a.name.localeCompare(b.name)
            return 0
        })
        return result
    }, [clubs, search, category, college, sort])

    const categories = useMemo(() => [...new Set(clubs.map(c => c.category))].sort(), [clubs])
    const colleges = useMemo(() => [...new Set(clubs.map(c => c.college))].sort(), [clubs])
    const featured = filtered.slice(0, 4)
    const rest = filtered.slice(4)
    const hasFilters = search || category !== "all" || college !== "all"

    function clearFilters() { setSearch(""); setCategory("all"); setCollege("all") }

    const inputStyle = {
        background: "#111118", border: "1px solid #1a1a2a",
        color: "#ededf5", fontFamily: "'DM Sans', sans-serif", outline: "none",
        transition: "border-color 0.15s",
    }

    return (
        <>
            <style>{`
        .club-row:hover      { border-color: rgba(108,99,255,0.3) !important; }
        .featured-card:hover { border-color: rgba(108,99,255,0.3) !important; transform: translateY(-2px); }
        .filter-input:focus  { border-color: #6c63ff !important; box-shadow: 0 0 0 3px rgba(108,99,255,0.1); }
        .filter-sel:focus    { border-color: #6c63ff !important; }
        @keyframes shimmer   { 0%,100% { opacity:0.5; } 50% { opacity:1; } }
        .skeleton > *        { animation: shimmer 1.5s ease-in-out infinite; }
      `}</style>

            <div>
                {/* Header */}
                <div className="fade-up mb-6">
                    <h1 className="font-display font-bold text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>
                        Clubs
                    </h1>
                    <p className="text-sm" style={{ color: "#6b6b8a" }}>
                        {loading
                            ? "Loading clubs..."
                            : `${filtered.length} clubs across ${colleges.length} colleges`}
                    </p>
                </div>

                {/* Filters */}
                <div className="fade-up delay-1 flex flex-col sm:flex-row gap-2 mb-4">
                    {/* Search */}
                    <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs" style={{ color: "#6b6b8a" }}>🔍</span>
                        <input type="text" placeholder="Search clubs..."
                            value={search} onChange={e => setSearch(e.target.value)}
                            className="filter-input w-full pl-8 pr-4 py-2.5 rounded-xl text-sm"
                            style={inputStyle} />
                    </div>

                    {/* Category */}
                    <select value={category} onChange={e => setCategory(e.target.value)}
                        className="filter-sel px-3 py-2.5 rounded-xl text-sm"
                        style={{ ...inputStyle, appearance: "none" as const, minWidth: 140, cursor: "pointer" }}>
                        <option value="all" style={{ background: "#111118" }}>All categories</option>
                        {categories.map(c => (
                            <option key={c} value={c} style={{ background: "#111118" }}>{c}</option>
                        ))}
                    </select>

                    {/* College */}
                    <select value={college} onChange={e => setCollege(e.target.value)}
                        className="filter-sel px-3 py-2.5 rounded-xl text-sm"
                        style={{ ...inputStyle, appearance: "none" as const, minWidth: 160, cursor: "pointer" }}>
                        <option value="all" style={{ background: "#111118" }}>All colleges</option>
                        {colleges.map(c => (
                            <option key={c} value={c} style={{ background: "#111118" }}>{c}</option>
                        ))}
                    </select>

                    {/* Sort */}
                    <select value={sort} onChange={e => setSort(e.target.value)}
                        className="filter-sel px-3 py-2.5 rounded-xl text-sm"
                        style={{ ...inputStyle, appearance: "none" as const, minWidth: 140, cursor: "pointer" }}>
                        {SORT_OPTIONS.map(o => (
                            <option key={o.value} value={o.value} style={{ background: "#111118" }}>{o.label}</option>
                        ))}
                    </select>
                </div>

                {/* Active filter chips */}
                {hasFilters && (
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                        {search && (
                            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                                style={{ background: "rgba(108,99,255,0.12)", color: "#a09dff", border: "1px solid rgba(108,99,255,0.2)" }}>
                                "{search}"
                                <button onClick={() => setSearch("")}
                                    style={{ background: "none", border: "none", color: "#a09dff", cursor: "pointer", lineHeight: 1, padding: 0 }}>×</button>
                            </span>
                        )}
                        {category !== "all" && (
                            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                                style={{ background: "rgba(108,99,255,0.12)", color: "#a09dff", border: "1px solid rgba(108,99,255,0.2)" }}>
                                {category}
                                <button onClick={() => setCategory("all")}
                                    style={{ background: "none", border: "none", color: "#a09dff", cursor: "pointer", lineHeight: 1, padding: 0 }}>×</button>
                            </span>
                        )}
                        {college !== "all" && (
                            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                                style={{ background: "rgba(108,99,255,0.12)", color: "#a09dff", border: "1px solid rgba(108,99,255,0.2)" }}>
                                {college}
                                <button onClick={() => setCollege("all")}
                                    style={{ background: "none", border: "none", color: "#a09dff", cursor: "pointer", lineHeight: 1, padding: 0 }}>×</button>
                            </span>
                        )}
                        <button onClick={clearFilters}
                            className="text-xs transition-colors hover:text-rose-400"
                            style={{ background: "none", border: "none", color: "#6b6b8a", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                            Clear all
                        </button>
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="text-center py-16 rounded-2xl mb-4"
                        style={{ background: "#111118", border: "1px solid #1a1a2a" }}>
                        <div className="text-3xl mb-3">⚠️</div>
                        <p className="text-sm mb-4" style={{ color: "#6b6b8a" }}>{error}</p>
                        <button onClick={fetchClubs}
                            className="text-sm font-medium px-5 py-2.5 rounded-xl text-white"
                            style={{ background: "#6c63ff", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                            Try again
                        </button>
                    </div>
                )}

                {/* Loading skeletons */}
                {loading && (
                    <div>
                        <div className="skeleton grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                            {Array(4).fill(null).map((_, i) => <FeaturedSkeleton key={i} />)}
                        </div>
                        <div className="skeleton flex flex-col gap-2">
                            {Array(5).fill(null).map((_, i) => <RowSkeleton key={i} />)}
                        </div>
                    </div>
                )}

                {/* No results */}
                {!loading && !error && filtered.length === 0 && (
                    <div className="text-center py-20 rounded-2xl"
                        style={{ background: "#111118", border: "1px solid #1a1a2a" }}>
                        <div className="text-4xl mb-3">🔍</div>
                        <h2 className="font-display font-bold text-base mb-2">No clubs found</h2>
                        <p className="text-sm mb-4" style={{ color: "#6b6b8a" }}>Try a different search or filter</p>
                        <button onClick={clearFilters}
                            className="text-sm font-medium hover:underline"
                            style={{ background: "none", border: "none", color: "#6c63ff", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                            Clear filters
                        </button>
                    </div>
                )}

                {/* Results */}
                {!loading && !error && filtered.length > 0 && (
                    <>
                        {/* Featured grid */}
                        {featured.length > 0 && (
                            <div className="mb-5">
                                <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#6b6b8a" }}>
                                    {hasFilters ? "Results" : "Top Clubs"}
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {featured.map((club, i) => (
                                        <div key={club.id} style={{ animation: `fadeUp 0.35s ease ${0.05 * i}s both` }}>
                                            <FeaturedCard club={club} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* List */}
                        {rest.length > 0 && (
                            <div>
                                <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#6b6b8a" }}>
                                    {hasFilters ? `${rest.length} more` : "All Clubs"}
                                </div>
                                <div className="flex flex-col gap-2">
                                    {rest.map((club, i) => (
                                        <div key={club.id} style={{ animation: `fadeUp 0.35s ease ${0.05 * i}s both` }}>
                                            <ClubRow club={club} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}