import {
  MapPin,
  Clock3,
  MessageCircle,
  ArrowUpRight,
  Navigation,
} from "lucide-react";

const whatsappNumber = "91XXXXXXXXXX";

const address =
  "SANTOSHI MATA COLONY, Manak Bhavan, SBI Road, Shivaji Nagar, Karanja Lad, Maharashtra 444105, India";

const handleWhatsApp = () => {
  const message = encodeURIComponent(
    "Hello Lactose Farm, I would like to check delivery availability for my area."
  );

  window.open(
    `https://wa.me/${whatsappNumber}?text=${message}`,
    "_blank"
  );
};

const handleDirections = () => {
  const location = encodeURIComponent(address);

  window.open(
    `https://www.google.com/maps/search/?api=1&query=${location}`,
    "_blank"
  );
};

export default function DeliveryAreas() {
  return (
    <section
      id="delivery"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl">

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-primary" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Delivery & Contact
            </span>

          </div>

          <h2 className="mt-4 font-heading text-4xl leading-[1.05] text-text sm:text-5xl lg:text-6xl">
            Fresh dairy,
            <br />
            <span className="text-primary">
              closer to home.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary sm:text-lg">
            We're based in Karanja Lad, Maharashtra. Send us your
            area on WhatsApp and we'll confirm delivery availability.
          </p>

        </div>

        {/* Content */}
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Address Card */}
          <div className="relative overflow-hidden rounded-[28px] bg-primary p-7 text-white sm:p-10">

            {/* Decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

            <div className="relative">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <MapPin
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
                  Karanja Lad
                </span>

              </div>

              <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                Lactose Farm Location
              </p>

              <h3 className="mt-3 font-heading text-3xl leading-tight sm:text-4xl">
                Visit or contact us.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/65">
                SANTOSHI MATA COLONY, Manak Bhavan, SBI Road,
                Shivaji Nagar, Karanja Lad, Maharashtra 444105,
                India.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <button
                  onClick={handleDirections}
                  className="flex items-center justify-center gap-2 rounded-[10px] bg-white px-5 py-3.5 text-sm font-bold text-primary transition hover:bg-cream"
                >
                  <Navigation size={17} />

                  Get Directions

                  <ArrowUpRight size={16} />
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 rounded-[10px] border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle size={17} />

                  Check Delivery

                </button>

              </div>

            </div>

          </div>

          {/* Delivery Information */}
          <div className="rounded-[28px] border border-border bg-cream p-7 sm:p-10">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Delivery Information
            </p>

            <h3 className="mt-3 font-heading text-3xl text-text">
              Is your area covered?
            </h3>

            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Delivery areas and timings can vary. Contact us with
              your location and we'll confirm availability.
            </p>

            {/* Info */}
            <div className="mt-8 space-y-3">

              <div className="flex items-start gap-4 rounded-[16px] border border-border bg-white p-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin
                    size={18}
                    className="text-primary"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-text">
                    Service Location
                  </p>

                  <p className="mt-1 text-xs leading-5 text-text-secondary">
                    Karanja Lad, Maharashtra
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4 rounded-[16px] border border-border bg-white p-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock3
                    size={18}
                    className="text-primary"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-text">
                    Delivery Timings
                  </p>

                  <p className="mt-1 text-xs leading-5 text-text-secondary">
                    Confirmed when placing your order.
                  </p>
                </div>

              </div>

            </div>

            {/* CTA */}
            <button
              onClick={handleWhatsApp}
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-[10px] bg-primary px-5 py-3.5 text-sm font-bold text-white transition hover:bg-primary-dark"
            >
              <MessageCircle size={17} />

              Check My Area

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            <p className="mt-4 text-center text-[11px] text-text-secondary">
              Send your locality on WhatsApp for delivery confirmation.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}