import { useEffect, useState } from "react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const openMapsLocation = () => {
    const mapsUrl =
      "https://www.google.com/maps?q=Gereja+Anugerah+Kristus,+Jl.+Letkol+Iskandar+No.909,+17+Ilir,+Ilir+Timur+I,+Kota+Palembang,+Sumatera+Selatan+30125";
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const getNextSunday = () => {
      const now = new Date();
      const nextSunday = new Date();
      nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
      nextSunday.setHours(10, 0, 0, 0);
      return nextSunday;
    };

    const timer = setInterval(() => {
      const now = new Date();
      const nextService = getNextSunday();
      const diff = nextService.getTime() - now.getTime();
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full text-white">
      <div className="relative rounded-b-[56px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/img/hero.jpg" alt="hero background" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/50" />
        </div>

        <div className="page-container relative z-[1] section pb-14">
          <div className="flex items-center justify-between py-6 text-white">
            <div className="flex items-center gap-3">
              <img src="/img/logo.png" alt="logo" className="h-8 w-8 rounded" />
              <span className="font-semibold">Gereja Anugerah Kristus</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => scrollToSection("schedule")} className="btn pill text-white border border-white/30 bg-white/10 hover:bg-white/20">Schedule</button>
              <button onClick={() => scrollToSection("devotion")} className="btn pill text-white border border-white/30 bg-white/10 hover:bg-white/20">Devotions</button>
              <button onClick={() => scrollToSection("documentation")} className="btn pill text-white border border-white/30 bg-white/10 hover:bg-white/20">Documentation</button>
              <button onClick={() => scrollToSection("cta")} className="btn pill text-white border border-white/30 bg-white/15 hover:bg-white/25">Connect</button>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-6 pt-6">
            <div className="md:col-span-9 lg:col-span-8">
              <p className="chip inline-block mb-4 glass text-sm text-white/90">Sunday Service</p>
              <h1 className="font-serif leading-tight">
                <span className="block text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px]">No matter where or who you are,</span>
                <span className="block text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px] italic text-[color:var(--accent)]">you're welcome here.</span>
              </h1>
              <div className="mt-6 flex gap-3">
                <button onClick={openMapsLocation} className="btn pill text-white border border-white/30 bg-white/15 hover:bg-white/25">Visit Us</button>
                <button onClick={() => scrollToSection("schedule")} className="btn pill text-white border border-white/40 bg-transparent hover:bg-white/10">See Schedule</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container section text-black">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <blockquote className="font-serif italic text-lg md:text-xl text-[color:var(--muted-ink)] align-middle">
            "But seek first the Kingdom of God and his righteousness, and all these things will be added to you".
          </blockquote>
          <div className="flex items-center justify-end gap-4 md:gap-6">
            <div className="flex flex-col text-right">
              <span className="text-xs tracking-wide text-[color:var(--muted-ink)]">Next Sunday Service In</span>
              <div className="mt-2 flex gap-3">
                <div className="card w-24 p-3 text-center">
                  <div className="text-3xl font-bold">{timeLeft.days}</div>
                  <div className="text-xs text-[color:var(--muted-ink)]">Days</div>
                </div>
                <div className="card w-24 p-3 text-center">
                  <div className="text-3xl font-bold">{timeLeft.hours}</div>
                  <div className="text-xs text-[color:var(--muted-ink)]">Hours</div>
                </div>
                <div className="card w-24 p-3 text-center">
                  <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-xs text-[color:var(--muted-ink)]">Minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
