import { Milk, Sparkles, Droplets, HeartHandshake } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-cream px-5 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] bg-primary">
          {/* Background Decorative Rings */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14">
            {/* Left Content Column */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Milk size={18} className="text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Yogesh Dairy Farm
                </span>
              </div>

              <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                Farm-to-Doorstep
              </p>

              <h2 className="mt-3 font-heading text-4xl leading-[1] text-white sm:text-5xl lg:text-6xl">
                Fresh dairy,
                <br />
                <span className="text-white/50">delivered simply.</span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/65 sm:text-base">
                Customize your daily milk order, select your preferences, and
                start receiving farm-fresh milk every morning.
              </p>

              {/* Feature Highlights */}
              <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 text-white/80 text-xs font-semibold">
                  <Sparkles size={16} className="text-amber-300" />
                  100% Pure & Natural
                </div>
                <div className="flex items-center gap-2 text-white/80 text-xs font-semibold">
                  <Droplets size={16} className="text-sky-300" />
                  Fresh Morning Batch
                </div>
                <div className="flex items-center gap-2 text-white/80 text-xs font-semibold">
                  <HeartHandshake size={16} className="text-emerald-300" />
                  Organic Cattle Care
                </div>
              </div>
            </div>

            {/* Right Graphic Illustration (No Cards / No Rates / No Liters) */}
            <div className="relative flex items-center justify-center p-4">
              <div className="relative w-full max-w-md aspect-square rounded-3xl \ backdrop-blur-sm flex flex-col items-center justify-center text-center">
                
                {/* Visual Glow */}
                <div className="absolute inset-0 rounded-3xl bg-white/5 blur-xl pointer-events-none" />

                {/* Vector Artwork Illustration */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-48 h-48 sm:w-64 sm:h-64 drop-shadow-2xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Decorative Sun / Farm Sky */}
                  <circle cx="100" cy="100" r="80" fill="white" fillOpacity="0.08" />
                  <circle cx="100" cy="100" r="60" fill="white" fillOpacity="0.12" />
                  
                  {/* Cow / Buffalo Head Silhouette Graphic */}
                  <path
                    d="M100 45 C70 45 55 65 55 95 C55 125 75 145 100 145 C125 145 145 125 145 95 C145 65 130 45 100 45 Z"
                    fill="#FFFFFF"
                    fillOpacity="0.9"
                  />
                  {/* Horns Illustration */}
                  <path
                    d="M60 70 C45 55 35 60 30 75 C45 80 55 75 60 70 Z"
                    fill="#E2E8F0"
                  />
                  <path
                    d="M140 70 C155 55 165 60 170 75 C155 80 145 75 140 70 Z"
                    fill="#E2E8F0"
                  />
                  {/* Ears */}
                  <path
                    d="M50 85 C35 90 30 100 40 105 C50 100 52 92 50 85 Z"
                    fill="#CBD5E1"
                  />
                  <path
                    d="M150 85 C165 90 170 100 160 105 C150 100 148 92 150 85 Z"
                    fill="#CBD5E1"
                  />
                  {/* Snout & Details */}
                  <ellipse cx="100" cy="120" rx="22" ry="14" fill="#F1F5F9" />
                  <circle cx="92" cy="120" r="3" fill="#64748B" />
                  <circle cx="108" cy="120" r="3" fill="#64748B" />
                  <circle cx="82" cy="85" r="4" fill="#334155" />
                  <circle cx="118" cy="85" r="4" fill="#334155" />
                </svg>

                {/* Simple Label */}
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Pure Organic Dairy
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}