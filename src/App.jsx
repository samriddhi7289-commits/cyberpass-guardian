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
      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl rounded-[24px] border border-purple-500 bg-[#1a003d]/82 backdrop-blur-sm p-4 md:p-6 shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center gap-4 mb-6">

          {/* LOGO */}
          <div className="text-center md:text-left">
            <h2 className="text-[#ffe3ff] text-lg md:text-3xl font-semibold tracking-[4px]">
              CYBER GUARDIANS
            </h2>

            <p className="text-white text-[9px] md:text-xs tracking-[3px] mt-1">
              STAY ALERT • STAY SECURE
            </p>
          </div>

          {/* TITLE */}
          <div className="text-center">
            <h1 className="text-[#ffd6ff] text-2xl md:text-5xl font-bold leading-tight">
              CYBERPASS GUARDIAN
            </h1>

            <p className="text-white mt-1 text-xs md:text-lg">
              Advanced Cyber Security Check
            </p>
          </div>

        </div>

        {/* INPUT */}
        <div className="relative mb-5">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#2a004d]/80 border border-purple-500 rounded-xl px-4 py-3 text-sm md:text-lg outline-none text-white placeholder:text-gray-300"
          />

          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-white"
          >
            👁
          </button>

        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

          <button className="bg-[#2a004d]/80 border border-purple-500 rounded-xl py-3 text-sm md:text-lg font-medium text-white hover:bg-purple-800 transition duration-300">
            Generate Strong Password
          </button>

          <button className="bg-[#2a004d]/80 border border-purple-500 rounded-xl py-3 text-sm md:text-lg font-medium text-white hover:bg-purple-800 transition duration-300">
            Copy Password
          </button>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

          {/* CARD 1 */}
          <div className="bg-[#2a004d]/75 border border-purple-500 rounded-xl p-4">

            <h3 className="text-sm md:text-lg mb-3 text-white">
              ⚡ Strength
            </h3>

            <p className="text-2xl md:text-3xl font-semibold text-white">
              Weak
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-[#2a004d]/75 border border-purple-500 rounded-xl p-4">

            <h3 className="text-sm md:text-lg mb-3 text-white">
              ⏳ Crack Time
            </h3>

            <p className="text-2xl md:text-3xl font-semibold text-[#ffc6f3]">
              2 Minutes
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-[#2a004d]/75 border border-purple-500 rounded-xl p-4">

            <h3 className="text-sm md:text-lg mb-3 text-white">
              📊 Security Score
            </h3>

            <p className="text-3xl md:text-4xl font-semibold text-[#ffc6f3]">
              0/100
            </p>

          </div>

          {/* CARD 4 */}
          <div className="bg-[#2a004d]/75 border border-purple-500 rounded-xl p-4">

            <h3 className="text-sm md:text-lg mb-3 text-white">
              🛡 Breach
            </h3>

            <p className="text-xs md:text-sm text-[#ff9fb3]">
              Password found in breaches
            </p>

          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-5 bg-[#2a004d]/75 border border-purple-500 rounded-xl p-3 text-center text-[10px] md:text-sm text-white leading-relaxed">

          💡 Use at least 8 characters • Add uppercase letters • Add lowercase letters • Add numbers • Add symbols

        </div>

      </div>
    </div>
  );
}