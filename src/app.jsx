import { useState, useEffect } from "react";
import cyberBg from "./assets/cyber-bg.png";

export default function App() {

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [breachMessage, setBreachMessage] = useState("");

  const commonPasswords = [
    "123456",
    "password",
    "qwerty",
    "admin",
    "abc123",
    "password123",
  ];

  // Password Strength Logic
  const checkStrength = () => {

    let score = 0;
    let suggestions = [];

    if (
      commonPasswords.includes(
        password.toLowerCase()
      )
    ) {
      score = 10;

      suggestions.push(
        "Very common password"
      );
    }

    if (password.length >= 8) {
      score += 25;
    } else {
      suggestions.push(
        "Use at least 8 characters"
      );
    }

    if (/[A-Z]/.test(password)) {
      score += 20;
    } else {
      suggestions.push(
        "Add uppercase letters"
      );
    }

    if (/[a-z]/.test(password)) {
      score += 20;
    } else {
      suggestions.push(
        "Add lowercase letters"
      );
    }

    if (/[0-9]/.test(password)) {
      score += 15;
    } else {
      suggestions.push("Add numbers");
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      score += 20;
    } else {
      suggestions.push(
        "Add symbols"
      );
    }

    let strength = "";
    let crackTime = "";

    if (score < 40) {
      strength = "Weak";
      crackTime = "2 Minutes";
    } else if (score < 75) {
      strength = "Medium";
      crackTime = "3 Months";
    } else {
      strength = "Strong";
      crackTime = "200+ Years";
    }

    return {
      score,
      strength,
      suggestions,
      crackTime,
    };
  };

  // Generate Password
  const generatePassword = () => {

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let generated = "";

    for (let i = 0; i < 14; i++) {

      generated += chars.charAt(
        Math.floor(
          Math.random() * chars.length
        )
      );
    }

    setPassword(generated);
  };

  // Copy Password
  const copyPassword = async () => {

    try {

      await navigator.clipboard.writeText(
        password
      );

      alert("Password copied!");

    } catch {

      alert("Failed to copy");
    }
  };

  // Breach Detection
  useEffect(() => {

    const checkBreach = async () => {

      if (!password) {
        setBreachMessage("");
        return;
      }

      try {

        const encoder = new TextEncoder();

        const data =
          encoder.encode(password);

        const hashBuffer =
          await crypto.subtle.digest(
            "SHA-1",
            data
          );

        const hashArray = Array.from(
          new Uint8Array(hashBuffer)
        );

        const hash = hashArray
          .map((b) =>
            b
              .toString(16)
              .padStart(2, "0")
          )
          .join("")
          .toUpperCase();

        const prefix = hash.slice(0, 5);

        const suffix = hash.slice(5);

        const response = await fetch(
          `https://api.pwnedpasswords.com/range/${prefix}`
        );

        const text =
          await response.text();

        const hashes =
          text.split("\n");

        const found = hashes.find(
          (h) =>
            h.startsWith(suffix)
        );

        if (found) {

          setBreachMessage(
            "⚠ Password found in breaches"
          );

        } else {

          setBreachMessage(
            "✓ Safe from known breaches"
          );
        }

      } catch {

        setBreachMessage(
          "Error checking breaches"
        );
      }
    };

    checkBreach();

  }, [password]);

  const result = checkStrength();

  return (

    <div className="min-h-screen overflow-hidden relative text-white bg-black">

      {/* Background */}
      <div className="absolute inset-0">

        <img
          src={cyberBg}
          alt="Cyber Background"
          className="w-full h-full object-cover"
        />

        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-[#140021]/30"></div>

      </div>

      {/* Animated Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[150px] animate-pulse"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px] animate-pulse"></div>

      {/* Branding */}
      <div className="absolute top-5 left-6 z-30">

        <h1 className="text-fuchsia-300 text-xl font-black tracking-[3px] uppercase leading-none drop-shadow-[0_0_20px_#d946ef]">

          Cyber Guardians

        </h1>

        <p className="text-fuchsia-200/80 tracking-[2px] uppercase text-[10px] mt-1">

          Stay Alert • Stay Secure

        </p>

      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">

        {/* Floating Panel */}
        <div className="w-full max-w-6xl backdrop-blur-[18px] bg-[#120018]/8 border border-fuchsia-300/20 rounded-[32px] shadow-[0_0_60px_rgba(217,70,239,0.10)] p-8 animate-[float_6s_ease-in-out_infinite] hover:scale-[1.01] transition-all duration-500">

          {/* Header */}
          <div className="text-center mb-6">

            <h2 className="text-3xl font-black text-fuchsia-300 uppercase tracking-[4px] drop-shadow-[0_0_28px_#d946ef]">

              CyberPass Guardian

            </h2>

            <p className="text-fuchsia-100/70 mt-2">

              Advanced Cyber Security Check

            </p>

          </div>

          {/* Input */}
          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full p-5 pr-16 rounded-2xl bg-[#170021]/15 border border-fuchsia-400/20 outline-none focus:border-fuchsia-300 focus:shadow-[0_0_20px_#d946ef] text-lg backdrop-blur-md hover:bg-[#170021]/20 caret-fuchsia-400 transition-all duration-300"
            />

            {/* Eye Button */}
            <button
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-5 top-1/2 -translate-y-1/2 text-fuchsia-300 text-2xl"
            >
              {showPassword ? "🙈" : "👁"}
            </button>

          </div>

          {/* Buttons */}
          <div className="grid md:grid-cols-2 gap-5 mt-6">

            <button
              onClick={generatePassword}
              className="backdrop-blur-md bg-fuchsia-500/5 border border-fuchsia-300/20 text-fuchsia-200 shadow-[0_0_18px_rgba(217,70,239,0.10)] px-5 py-4 rounded-2xl font-semibold hover:bg-fuchsia-500/20 hover:text-white hover:scale-105 transition-all duration-300"
            >
              Generate Strong Password
            </button>

            <button
              onClick={copyPassword}
              className="backdrop-blur-md bg-fuchsia-500/5 border border-fuchsia-300/20 text-fuchsia-200 shadow-[0_0_18px_rgba(217,70,239,0.10)] px-5 py-4 rounded-2xl font-semibold hover:bg-fuchsia-500/20 hover:text-white hover:scale-105 transition-all duration-300"
            >
              Copy Password
            </button>

          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">

            {/* Strength */}
            <div className="bg-[#170021]/10 border border-fuchsia-400/15 rounded-2xl p-4 hover:border-fuchsia-300/40 hover:shadow-[0_0_35px_rgba(217,70,239,0.22)] transition-all duration-300">

              <div className="flex items-center gap-2 mb-3">

                <span className="text-xl animate-pulse">
                  ⚡
                </span>

                <span className="text-fuchsia-100 font-semibold">
                  Strength
                </span>

              </div>

              <div className="w-full h-3 bg-[#22002e]/20 rounded-full overflow-hidden">

                <div
                  className={`h-full transition-all duration-700 ${
                    result.score < 40
                      ? "bg-red-500"
                      : result.score < 75
                      ? "bg-yellow-400"
                      : "bg-fuchsia-400"
                  }`}
                  style={{
                    width: `${result.score}%`
                  }}
                ></div>

              </div>

              <p className="text-fuchsia-100 mt-3 font-semibold">
                {result.strength}
              </p>

            </div>

            {/* Crack Time */}
            <div className="bg-[#170021]/10 border border-fuchsia-400/15 rounded-2xl p-4 hover:border-fuchsia-300/40 hover:shadow-[0_0_35px_rgba(217,70,239,0.22)] transition-all duration-300">

              <div className="flex items-center gap-2 mb-3">

                <span className="text-xl animate-pulse">
                  ⏳
                </span>

                <h3 className="text-fuchsia-300 text-sm font-bold">

                  Crack Time

                </h3>

              </div>

              <p className="text-2xl font-black text-fuchsia-300">

                {result.crackTime}

              </p>

            </div>

            {/* Score */}
            <div className="bg-[#170021]/10 border border-fuchsia-400/15 rounded-2xl p-4 hover:border-fuchsia-300/40 hover:shadow-[0_0_35px_rgba(217,70,239,0.22)] transition-all duration-300">

              <div className="flex items-center gap-2 mb-3">

                <span className="text-xl animate-pulse">
                  📊
                </span>

                <h3 className="text-fuchsia-300 text-sm font-bold">

                  Security Score

                </h3>

              </div>

              <p className="text-3xl font-black text-fuchsia-300">

                {result.score}/100

              </p>

            </div>

            {/* Breach */}
            <div className="bg-[#170021]/10 border border-fuchsia-400/15 rounded-2xl p-4 hover:border-fuchsia-300/40 hover:shadow-[0_0_35px_rgba(217,70,239,0.22)] transition-all duration-300">

              <div className="flex items-center gap-2 mb-3">

                <span className="text-xl animate-pulse">
                  🛡
                </span>

                <h3 className="text-fuchsia-300 text-sm font-bold">

                  Breach

                </h3>

              </div>

              <p
                className={`font-semibold text-sm ${
                  breachMessage.includes("⚠")
                    ? "text-red-400"
                    : "text-fuchsia-300"
                }`}
              >
                {breachMessage}
              </p>

            </div>

          </div>

          {/* Tip Box */}
          <div className="mt-6 bg-fuchsia-500/5 border border-fuchsia-300/15 rounded-2xl p-4 backdrop-blur-md hover:border-fuchsia-300/30 transition-all duration-300">

            <div className="flex items-center gap-3">

              <span className="text-2xl animate-pulse">
                💡
              </span>

              <p className="text-fuchsia-100 text-sm">

                {result.suggestions.length > 0
                  ? result.suggestions.join(" • ")
                  : "Excellent Password Strength"}

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}