// src/components/AppBackground.jsx

const AppBackground = () => {
  return (
    <div className="app-bg-wrapper" aria-hidden="true">
      {/* Base gradient layer */}
      <div className="app-bg-layer" />

      {/* Glowing animated orbs */}
      <div className="app-bg-blob app-bg-blob-1" />
      <div className="app-bg-blob app-bg-blob-2" />
      <div className="app-bg-blob app-bg-blob-3" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Dark fade at bottom to blend with footer */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
    </div>
  )
}

export default AppBackground