import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#12002f] text-white px-4 py-6 flex items-center justify-center overflow-hidden">

      <div className="w-full max-w-7xl rounded-[30px] border border-purple-700 bg-[#1a003d]/80 backdrop-blur-lg p-4 md:p-8 shadow-2xl relative overflow-hidden">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center gap-6 mb-10">

          {/* LEFT LOGO */}
          <div className="text-center md:text-left">
            <h2 className="text-pink-200 text-2xl md:text-3xl font-bold tracking-widest">
              CYBER GUARDIANS
            </h2>

            <p className="text-pink-100 text-xs md:text-sm tracking-[4px] mt-1">
              STAY ALERT • STAY SECURE
            </p>
          </div>

          {/* MAIN TITLE */}
          <div className="text-center">
            <h1 className="text-pink-200 text-4xl md:text-6xl font-bold leading-tight">
              CYBERPASS GUARDIAN
            </h1>

            <p className="text-pink-100 mt-3 text-lg md:text-2xl">
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
            className="w-full bg-[#25004d] border border-purple-700 rounded-2xl px-6 py-5 text-xl outline-none"
          />

          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl"
          >
            👁
          </button>
        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

          <button className="bg-[#25004d] border border-purple-700 rounded-2xl py-5 text-xl font-semibold hover:bg-purple-800 transition">
            Generate Strong Password
          </button>

          <button className="bg-[#25004d] border border-purple-700 rounded-2xl py-5 text-xl font-semibold hover:bg-purple-800 transition">
            Copy Password
          </button>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

          {/* CARD 1 */}
          <div className="bg-[#25004d] border border-purple-700 rounded-2xl p-6">
            <h3 className="text-2xl mb-4">⚡ Strength</h3>
            <p className="text-3xl font-bold">Weak</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#25004d] border border-purple-700 rounded-2xl p-6">
            <h3 className="text-2xl mb-4">⏳ Crack Time</h3>
            <p className="text-4xl font-bold text-pink-300">
              2 Minutes
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#25004d] border border-purple-700 rounded-2xl p-6">
            <h3 className="text-2xl mb-4">📊 Security Score</h3>
            <p className="text-5xl font-bold text-pink-300">
              0/100
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#25004d] border border-purple-700 rounded-2xl p-6">
            <h3 className="text-2xl mb-4">🛡 Breach</h3>
            <p className="text-lg text-red-400">
              Password found in breaches
            </p>
          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-8 bg-[#25004d] border border-purple-700 rounded-2xl p-5 text-center text-sm md:text-lg text-pink-100">
          💡 Use at least 8 characters • Add uppercase letters • Add lowercase letters • Add numbers • Add symbols
        </div>

      </div>
    </div>
  );
}