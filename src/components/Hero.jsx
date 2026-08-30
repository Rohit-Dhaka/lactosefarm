import { ArrowRight, MapPin, MessageCircle, Milk } from "lucide-react";
import Bottal from "../assets/Bottal.png";
// import SmallBottal from "../assets/SmallBottal.png";

const whatsappNumber = "917015813074";

export default function Hero() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Yogesh Dairy Farm, I would like to know more about your dairy products and delivery availability."
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#F3F8FF]"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-8 px-5 py-12 sm:px-6 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 lg:px-8 lg:py-20">
        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-10 max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Milk className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
              Fresh dairy, delivered locally
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl font-heading text-[44px] leading-[1.02] tracking-[-0.02em] text-text sm:text-[54px] lg:text-[64px]">
            Fresh dairy,
            <br />
            <span className="text-primary">straight from</span>
            <br />
            Yogesh Dairy Farm.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            Farm-fresh dairy made for your everyday table. Discover our buffalo
            milk and other dairy products, with simple local ordering and
            delivery.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleWhatsApp}
              className="group flex items-center justify-center gap-2 rounded-[10px] bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(8,124,255,0.22)] transition-all duration-200 hover:bg-primary-dark hover:shadow-[0_10px_30px_rgba(8,124,255,0.30)]"
            >
              <MessageCircle size={18} />
              Order on WhatsApp
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

            <a
              href="#delivery"
              className="flex items-center justify-center gap-2 rounded-[10px] border border-primary/20 bg-white px-6 py-3.5 text-sm font-semibold text-text transition-all duration-200 hover:border-primary hover:text-primary"
            >
              <MapPin size={18} />
              Check Delivery Area
            </a>
          </div>
        </div>

        {/* ================= RIGHT PRODUCT VISUAL ================= */}
        <div className="relative flex min-h-[520px] items-center justify-center lg:min-h-[650px]">
          {/* Soft Blue Circle */}
          <div className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/10 blur-[2px] sm:h-[520px] sm:w-[520px]" />

          {/* Large White Glow */}
          <div className="absolute right-10 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-white/80 blur-2xl" />

          {/* Decorative Blue Circle */}
          <div className="absolute right-10 top-20 h-28 w-28 rounded-full border border-primary/10 bg-primary/5" />

          {/* Back Bottle */}
          <img
            src={Bottal}
            alt="Yogesh Dairy Farm buffalo milk bottle"
            className="absolute right-[32%] top-[8%] z-10 h-[430px] w-auto rotate-[-3deg] object-contain drop-shadow-[0_25px_30px_rgba(17,17,17,0.16)] transition-transform duration-500 hover:-translate-y-2"
          />

          {/* Front Bottle */}
          <img
            src={Bottal}
            alt="Yogesh Dairy Farm buffalo milk"
            className="absolute right-[-18%] top-[3%] z-20 h-[540px] w-auto rotate-[2deg] object-contain drop-shadow-[0_30px_35px_rgba(17,17,17,0.18)] transition-transform duration-500 hover:-translate-y-2 sm:right-[5%]"
          />

          {/* Floating Trust Badge */}
          <div className="absolute bottom-8 left-[6%] z-30 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-[0_15px_40px_rgba(17,17,17,0.10)] backdrop-blur-md sm:left-[8%]">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                  ✓
                </span>
                <span className="text-xs font-semibold text-text">
                  Hygienic Handling
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                  ✓
                </span>
                <span className="text-xs font-semibold text-text">
                  Fresh Local Supply
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                  ✓
                </span>
                <span className="text-xs font-semibold text-text">
                  Easy Ordering
                </span>
              </div>
            </div>
          </div>

          {/* Small Location Badge */}
          <div className="absolute bottom-4 right-[4%] z-30 hidden items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-md sm:flex">
            <MapPin size={15} className="text-primary" />
            <span className="text-xs font-semibold text-text">
              Local Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-[-1px] left-0 right-0 h-12 overflow-hidden">
        <div className="absolute -bottom-20 left-[-5%] h-32 w-[110%] rounded-[50%] bg-white" />
      </div>
    </section>
  );
}
