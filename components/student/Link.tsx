import React from 'react'

function Link() {
    return (
        <div className="flex flex-col gap-2">
            {suggestedClubs.map((club, i) => (
                <Link key={club.id} href={`/clubs/${club.id}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-150"
                    style={{
                        background: "#111118",
                        border: "1px solid #1a1a2a",
                        textDecoration: "none",
                        animation: `fadeUp 0.35s ease ${0.05 * i}s both`,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(108,99,255,0.3)" }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a2a" }}
                >
                    <ClubAvatar name={club.name} logoUrl={club.logoUrl} size={40} />
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium mb-0.5 truncate">{club.name}</div>
                        <div className="text-xs truncate" style={{ color: "#6b6b8a" }}>
                            {club.followersCount} followers · {club.eventsCount} events
                        </div>
                    </div>
                    <FollowButton clubId={club.id} initialFollowing={false} />
                </Link>
            ))}
        </div>
    )
}

export default Link