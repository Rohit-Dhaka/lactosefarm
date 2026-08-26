import { useState } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  MapPin,
  Milk,
  Check,
} from "lucide-react";

const whatsappNumber = "91XXXXXXXXXX";

const bottles = [
  { id: "500ml", size: "500 ML", price: "₹45" },
  { id: "1000ml", size: "1000 ML", price: "₹90" },
];

export default function FinalCTA() {
  const [selected, setSelected] = useState(bottles[0]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Lactose Farm, I would like to order Buffalo Milk (${selected.size}) for ${selected.price}. Please confirm availability and delivery details.`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="bg-cream px-5 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[28px] bg-primary">

          {/* Decoration */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_300px] lg:items-center lg:p-14">

            {/* Content */}
            <div className="max-w-2xl">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Milk size={18} className="text-white" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Lactose Farm
                </span>
              </div>

              <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
                Ready when you are
              </p>

              <h2 className="mt-3 font-heading text-4xl leading-[1] text-white sm:text-5xl lg:text-6xl">
                Fresh dairy,
                <br />
                <span className="text-white/50">
                  delivered simply.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/65 sm:text-base">
                Select your bottle size and place your order directly
                through WhatsApp.
              </p>

            </div>

            {/* Order Card */}
            <div className="rounded-[22px] bg-white p-5 shadow-xl">

              <div className="flex items-center justify-between">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle
                    size={19}
                    className="text-primary"
                  />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  Order
                </span>

              </div>

              <h3 className="mt-5 font-heading text-2xl text-text">
                Choose bottle
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-2">

                {bottles.map((bottle) => {
                  const active = selected.id === bottle.id;

                  return (
                    <button
                      key={bottle.id}
                      type="button"
                      onClick={() => setSelected(bottle)}
                      className={`relative rounded-xl border p-3 text-left transition-all ${
                        active
                          ? "border-primary bg-primary/5"
                          : "border-border bg-[#F8FBFF] hover:border-primary/30"
                      }`}
                    >
                      {active && (
                        <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                          <Check
                            size={10}
                            className="text-white"
                            strokeWidth={3}
                          />
                        </span>
                      )}

                      <span
                        className={`text-[10px] font-bold uppercase ${
                          active
                            ? "text-primary"
                            : "text-text-secondary"
                        }`}
                      >
                        {bottle.size}
                      </span>

                      <span className="mt-1 block font-heading text-xl text-primary">
                        {bottle.price}
                      </span>
                    </button>
                  );
                })}

              </div>

              <button
                onClick={handleWhatsApp}
                className="group mt-3 flex w-full items-center justify-center gap-2 rounded-[10px] bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primary-dark"
              >
                <MessageCircle size={17} />

                Order {selected.size}

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <a
                href="#delivery"
                className="mt-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold text-text-secondary hover:text-primary"
              >
                <MapPin size={14} />
                Check delivery area
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}