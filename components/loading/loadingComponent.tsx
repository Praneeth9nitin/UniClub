// app/(dashboard)/dashboard/loading.tsx
// ✅ Next.js automatically shows this while server components fetch data
// Drop this file in any route folder to get automatic loading UI

export default function LoadingComponent() {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            background: "#09090f",
            padding: "3rem 1rem",
        }}>

            {/* Logo */}
            <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.4rem",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                background: "linear-gradient(135deg, #6c63ff, #ff5f82)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}>
                UniClub
            </div>

            {/* Spinner */}
            <div style={{ position: "relative", width: 64, height: 64 }}>
                <style>{`
          @keyframes spin-cw  { to { transform: rotate(360deg);  } }
          @keyframes spin-ccw { to { transform: rotate(-360deg); } }
          .uc-ring-outer {
            position: absolute; inset: 0;
            border-radius: 50%;
            border: 2px solid transparent;
            border-top-color:  #6c63ff;
            border-right-color: #6c63ff;
            animation: spin-cw 1.2s linear infinite;
          }
          .uc-ring-inner {
            position: absolute; inset: 10px;
            border-radius: 50%;
            border: 2px solid transparent;
            border-bottom-color: rgba(255,255,255,0.12);
            border-left-color:   rgba(255,255,255,0.12);
            animation: spin-ccw 0.8s linear infinite;
          }
        `}</style>
                <div className="uc-ring-outer" />
                <div className="uc-ring-inner" />
                <div style={{
                    position: "absolute", width: 7, height: 7,
                    background: "#ff5f82", borderRadius: "50%",
                    top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                }} />
            </div>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 220 }}>
                {[
                    "Connecting to database",
                    "Loading your clubs",
                    "Fetching events",
                    "Almost there",
                ].map((label, i) => (
                    <div key={label} style={{
                        display: "flex", alignItems: "center", gap: 10,
                        fontSize: "0.78rem",
                        color: i === 0 ? "#ededf5" : "rgba(255,255,255,0.3)",
                        animation: `fadeIn 0.4s ease ${i * 0.15}s both`,
                    }}>
                        <div style={{
                            width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                            border: `1.5px solid ${i === 0 ? "#6c63ff" : "rgba(255,255,255,0.12)"}`,
                            background: i === 0 ? "rgba(108,99,255,0.15)" : "transparent",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            {i === 0 && (
                                <div style={{
                                    width: 6, height: 6, borderRadius: "50%", background: "#6c63ff",
                                }} />
                            )}
                        </div>
                        {label}
                    </div>
                ))}
            </div>

            {/* Progress bar */}
            <div style={{
                width: "100%", maxWidth: 220, height: 3,
                background: "rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden",
            }}>
                <div style={{
                    height: "100%", width: "25%",
                    background: "linear-gradient(90deg, #6c63ff, #ff5f82)",
                    borderRadius: 4,
                    animation: "progress 2s ease-in-out infinite alternate",
                }} />
                <style>{`
          @keyframes progress {
            from { width: 15%; }
            to   { width: 85%; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
            </div>

            {/* Tagline */}
            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.02em" }}>
                Gathering your campus feed...
            </div>

        </div>
    )
}