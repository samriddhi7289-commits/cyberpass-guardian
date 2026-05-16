import React, { useState } from "react";
import "./index.css";
import cyberBg from "./assets/cyber-bg.png";

export default function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-3 py-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${cyberBg})`,
      }}
    >
      {/* BRIGHT CYBER OVERLAY */}
      <div className="absolute inset-0 bg-[#12002f]/30"></div>

      {/* MAIN FLOATING CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl rounded-[28px] border border-purple-600 bg-[#1b003a]/88 backdrop-blur-md p-4 md:p-10 shadow-[0_0_40px_rgba(168,85,247,0.35)] overflow-hidden">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center gap-5 mb-8">

          {/* LEFT LOGO */}
          <div className="text-center md:text-left">
            <h2 className="text-[#ffd1f7] text-xl md:text-5xl font-bold tracking-widest">
              CYBER GUARDIANS
            </h2>

            <p className="text-[#ffe7ff] text-[10px] md:text-base tracking-[5px] mt-2">
              STAY ALERT • STAY SECURE
            </p>
          </div>

          {/* MAIN TITLE */}
          <div className="text-center">
            <h1 className="text-[#ffd1f7] text-3xl md:text-6xl font-bold leading-tight">
              CYBERPASS GUARDIAN
            </h1>

            <p className="text-[#ffffff] mt-2 text-sm md:text-2xl">
              Advanced Cyber Security Check
            </p>
          </div>

        </div>

        {/* PASSWORD INPUT */}
        <div className="relative mb-6">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#2a004d]/90 border border-purple-500 rounded-2xl px-5 py-4 md:py-5 text-base md:text-2xl outline-none text-white placeholder:text-gray-300"
          />

          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl md:text-3xl text-white"
          >
            👁
          </button>

        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

          <button className="bg-[#2a004d]/90 border border-purple-500 rounded-2xl py-4 md:py-5 text-lg md:text-2xl font-semibold text-white hover:bg-purple-800 transition duration-300">
            Generate Strong Password
          </button>

          <button className="bg-[#2a004d]/90 border border-purple-500 rounded-2xl py-4 md:py-5 text-lg md:text-2xl font-semibold text-white hover:bg-purple-800 transition duration-300">
            Copy Password
          </button>

        </div>

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

          {/* CARD 1 */}
          <div className="bg-[#2a004d]/80 border border-purple-500 rounded-2xl p-5">

            <h3 className="text-lg md:text-2xl mb-4 text-white">
              ⚡ Strength
            </h3>

            <p className="text-3xl md:text-5xl font-bold text-white">
              Weak
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-[#2a004d]/80 border border-purple-500 rounded-2xl p-5">

            <h3 className="text-lg md:text-2xl mb-4 text-white">
              ⏳ Crack Time
            </h3>

            <p className="text-3xl md:text-5xl font-bold text-[#ffb3ef]">
              2 Minutes
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-[#2a004d]/80 border border-purple-500 rounded-2xl p-5">

            <h3 className="text-lg md:text-2xl mb-4 text-white">
              📊 Security Score
            </h3>

            <p className="text-4xl md:text-6xl font-bold text-[#ffb3ef]">
              0/100
            </p>

          </div>

          {/* CARD 4 */}
          <div className="bg-[#2a004d]/80 border border-purple-500 rounded-2xl p-5">

            <h3 className="text-lg md:text-2xl mb-4 text-white">
              🛡 Breach
            </h3>

            <p className="text-sm md:text-lg text-[#ff8fa3]">
              Password found in breaches
            </p>

          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-7 bg-[#2a004d]/80 border border-purple-500 rounded-2xl p-4 md:p-5 text-center text-xs md:text-lg text-white leading-relaxed">

          💡 Use at least 8 characters • Add uppercase letters • Add lowercase letters • Add numbers • Add symbols

        </div>

      </div>
    </div>
  );
}