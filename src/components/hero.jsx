import hoodie from "../assets/hoodie.png";

export default function Hero() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-start pt-2 z-10 pointer-events-none overflow-hidden">

      {/* Atmospheric Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full top-0"></div>

      {/* Hoodie Container */}
      <div className="relative mt-4">

        {/* Blur Behind Hoodie */}
        <div className="absolute inset-0 bg-cyan-400/20 blur-[120px] rounded-full scale-125"></div>

        {/* Hoodie Image */}
        <img
          src={hoodie}
          alt="Cyber Hacker"
          className="relative w-[220px] md:w-[340px] opacity-70 drop-shadow-[0_0_60px_#38bdf8] animate-pulse"
        />

      </div>

      {/* Hero Text */}
      <div className="mt-[-15px] text-center">

        <h1 className="text-4xl md:text-6xl font-black tracking-[6px] text-cyan-300 drop-shadow-[0_0_30px_#22d3ee]">

          CYBER

        </h1>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-[5px] text-white mt-1">

          GUARDIANS

        </h1>

        {/* Animated Divider */}
        <div className="flex justify-center mt-4">

          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>

        </div>

        <p className="mt-4 text-cyan-100/60 text-sm md:text-lg tracking-[5px] uppercase">

          Stay Alert • Stay Secure

        </p>

      </div>

    </div>
  );
}