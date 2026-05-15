export default function Dashboard({
  password,
  setPassword,
  showPassword,
  setShowPassword,
  generatePassword,
  copyPassword,
  result,
  breachMessage,
}) {
  return (
    <div className="relative z-20 w-full max-w-2xl mt-[340px] px-4 animate-[pulse_6s_ease-in-out_infinite]">

      {/* Main Glass Card */}
      <div className="backdrop-blur-2xl bg-white/[0.04] border border-cyan-300/15 rounded-3xl shadow-[0_0_80px_rgba(34,211,238,0.18)] p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-3xl font-bold text-cyan-300">
              Password Analyzer
            </h2>

            <p className="text-cyan-100/60 mt-1">
              Advanced Cyber Security Check
            </p>

          </div>

          {/* Live Dot */}
          <div className="w-4 h-4 rounded-full bg-cyan-400 animate-ping"></div>

        </div>

        {/* Input */}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-5 rounded-2xl bg-[#03122b]/80 border border-cyan-400/20 outline-none focus:border-cyan-300 focus:shadow-[0_0_40px_#22d3ee] text-lg transition-all duration-300"
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">

          <button
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_0_25px_rgba(34,211,238,0.35)] px-5 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
          >
            {showPassword
              ? "Hide Password"
              : "Show Password"}
          </button>

          <button
            onClick={generatePassword}
            className="bg-[#03122b]/80 border border-cyan-300/40 shadow-[0_0_20px_rgba(34,211,238,0.12)] text-cyan-300 hover:bg-cyan-500 hover:text-black px-5 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
          >
            Generate Password
          </button>

          <button
            onClick={copyPassword}
            className="bg-[#03122b]/80 border border-cyan-300/40 shadow-[0_0_20px_rgba(34,211,238,0.12)] text-cyan-300 hover:bg-cyan-500 hover:text-black px-5 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
          >
            Copy Password
          </button>

        </div>

        {/* Strength Section */}
        <div className="mt-10">

          <div className="flex justify-between mb-3">

            <span className="text-cyan-100 font-semibold">
              Password Strength
            </span>

            <span
              className={`font-bold ${
                result.score < 40
                  ? "text-red-400"
                  : result.score < 75
                  ? "text-yellow-300"
                  : "text-cyan-300"
              }`}
            >
              {result.strength}
            </span>

          </div>

          {/* Progress Bar */}
          <div className="w-full h-4 bg-[#03122b]/80 rounded-full overflow-hidden">

            <div
              className={`h-full transition-all duration-700 ${
                result.score < 40
                  ? "bg-red-500"
                  : result.score < 75
                  ? "bg-yellow-400"
                  : "bg-cyan-400"
              }`}
              style={{
                width: `${result.score}%`
              }}
            ></div>

          </div>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-[#03122b]/70 border border-cyan-400/20 rounded-2xl p-6">

            <h3 className="text-cyan-300 text-lg font-semibold mb-2">
              Security Score
            </h3>

            <p className="text-4xl font-black text-white">
              {result.score}/100
            </p>

          </div>

          <div className="bg-[#03122b]/70 border border-cyan-400/20 rounded-2xl p-6">

            <h3 className="text-cyan-300 text-lg font-semibold mb-2">
              Estimated Crack Time
            </h3>

            <p className="text-2xl font-bold text-white">
              {result.crackTime}
            </p>

          </div>

        </div>

        {/* Breach Detection */}
        <div className="mt-8 bg-[#03122b]/70 border border-cyan-400/20 rounded-2xl p-5">

          <h3 className="text-cyan-300 text-lg font-semibold mb-2">
            Breach Detection
          </h3>

          <p
            className={`font-semibold ${
              breachMessage.includes("⚠️")
                ? "text-red-400"
                : "text-cyan-300"
            }`}
          >
            {breachMessage}
          </p>

        </div>

        {/* Suggestions */}
        <div className="mt-8">

          <h3 className="text-cyan-300 text-xl font-bold mb-4">
            Security Suggestions
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            {result.suggestions.length > 0 ? (
              result.suggestions.map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-[#03122b]/70 border border-cyan-400/20 rounded-2xl p-4"
                  >
                    • {item}
                  </div>
                )
              )
            ) : (
              <div className="bg-[#03122b]/70 border border-cyan-400/20 rounded-2xl p-4">
                ✅ Excellent Password
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}