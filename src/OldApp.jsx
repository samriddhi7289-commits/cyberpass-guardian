import { useState, useEffect } from "react";

import Background from "./components/background";
import Hero from "./components/hero";
import Dashboard from "./components/dashboard";

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
        "This is a very common password"
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
        "Add special symbols"
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

    for (let i = 0; i < 12; i++) {

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

      alert("Failed to copy password");
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
            "⚠️ Password found in breach databases"
          );

        } else {

          setBreachMessage(
            "✅ Password not found in breaches"
          );
        }

      } catch {

        setBreachMessage(
          "Error checking breach database"
        );
      }
    };

    checkBreach();

  }, [password]);

  const result = checkStrength();

  return (

    <div className="min-h-screen relative overflow-hidden text-white">

      <Background />

      <Hero />

      <Dashboard
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        generatePassword={generatePassword}
        copyPassword={copyPassword}
        result={result}
        breachMessage={breachMessage}
      />

    </div>
  );
}