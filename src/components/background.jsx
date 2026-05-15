export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Main Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#071226] to-[#0f172a]"></div>

      {/* Massive Glow Top Left */}
      <div className="absolute w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full top-[-250px] left-[-250px]"></div>

      {/* Massive Glow Bottom Right */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full bottom-[-200px] right-[-200px]"></div>

      {/* Tech Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Animated Scan Line */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute w-full h-[2px] bg-cyan-400/20 top-1/3 animate-ping"></div>

      </div>

      {/* TOP RIGHT HUD */}
      <div className="absolute top-10 right-10 w-72 h-72 opacity-50">

        <div className="absolute top-0 right-0 w-full h-[2px] bg-cyan-400"></div>

        <div className="absolute top-0 right-0 h-full w-[2px] bg-cyan-400"></div>

        <div className="absolute top-10 right-10 w-28 h-28 border border-cyan-400/30 rotate-45"></div>

        <div className="absolute top-24 right-24 w-14 h-14 border border-cyan-300/30 rotate-45"></div>

        <div className="absolute top-0 right-20 w-20 h-[2px] bg-cyan-300/40"></div>

        <div className="absolute top-20 right-0 h-20 w-[2px] bg-cyan-300/40"></div>

      </div>

      {/* BOTTOM LEFT HUD */}
      <div className="absolute bottom-10 left-10 w-72 h-72 opacity-40">

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400"></div>

        <div className="absolute bottom-0 left-0 h-full w-[2px] bg-cyan-400"></div>

        <div className="absolute bottom-10 left-10 w-28 h-28 border border-cyan-400/30 rotate-45"></div>

        <div className="absolute bottom-24 left-24 w-14 h-14 border border-cyan-300/30 rotate-45"></div>

        <div className="absolute bottom-0 left-20 w-20 h-[2px] bg-cyan-300/40"></div>

        <div className="absolute bottom-20 left-0 h-20 w-[2px] bg-cyan-300/40"></div>

      </div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-cyan-300 animate-pulse"></div>

      <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>

      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-300 animate-pulse"></div>

      {/* Atmospheric Blur Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06),transparent_60%)]"></div>

      {/* Extra Floating Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/5 blur-[180px] rounded-full"></div>

    </div>
  );
}