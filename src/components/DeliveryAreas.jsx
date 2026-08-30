import { useState } from "react";
import {
  MapPin,
  Clock3,
  MessageCircle,
  ArrowUpRight,
  Navigation,
  Truck,
} from "lucide-react";

const whatsappNumber = "917015813074";

const address =
  "SANTOSHI MATA COLONY, Manak Bhavan, SBI Road, Shivaji Nagar, Karanja Lad, Maharashtra 444105, India";

// Delivery Areas Data
const deliveryLocalities = [
  { name: "Shivaji Nagar", time: "6:00 AM - 7:00 AM", status: "Active", radius: "0-2 km" },
  { name: "Santoshi Mata Colony", time: "6:00 AM - 7:00 AM", status: "Active", radius: "0-1 km" },
  { name: "SBI Road Area", time: "6:30 AM - 7:30 AM", status: "Active", radius: "1-2 km" },
  { name: "Main Market / Station Rd", time: "7:00 AM - 8:00 AM", status: "Active", radius: "2-3 km" },
  { name: "Bypass / Outer Colony", time: "7:30 AM - 8:30 AM", status: "On Request", radius: "3-5 km" },
];

// Delivery Slots Schedule
const deliverySlots = [
  { slot: "Morning Slot", time: "6:00 AM – 8:30 AM", description: "Fresh morning dispatch for breakfast & tea" },
  { slot: "Evening Slot", time: "5:00 PM – 7:00 PM", description: "Fresh evening batch for dinner requirements" },
];

export default function DeliveryAreas() {
  const [selectedArea] = useState(deliveryLocalities[0].name);

  const handleWhatsApp = (localityName) => {
    const targetLocality = localityName || selectedArea;
    const message = encodeURIComponent(
      `Hello Yogesh Dairy Farm! I would like to check delivery availability and slots for my area: ${targetLocality}.`
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

  return (
    <section
      id="delivery"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Delivery Coverage & Slots
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
            We deliver daily across Karanja Lad, Maharashtra. Send us your location on WhatsApp for instant delivery slot confirmation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          
          {/* Main Address Card */}
          <div className="relative overflow-hidden rounded-[28px] bg-primary p-7 text-white sm:p-10 flex flex-col justify-between">

            {/* Background Circle Decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={22} strokeWidth={1.7} />
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
                  Karanja Lad Hub
                </span>
              </div>

              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                Yogesh Dairy Farm Main Address
              </p>

              <h3 className="mt-2 font-heading text-3xl leading-tight sm:text-4xl">
                Visit or pickup directly.
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
                {address}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleDirections}
                className="flex items-center justify-center gap-2 rounded-[12px] bg-white px-5 py-3.5 text-sm font-bold text-primary transition hover:bg-cream active:scale-95"
              >
                <Navigation size={17} />
                Get Directions
                <ArrowUpRight size={16} />
              </button>

              <button
                onClick={() => handleWhatsApp(selectedArea)}
                className="flex items-center justify-center gap-2 rounded-[12px] border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95"
              >
                <MessageCircle size={17} />
                Check Delivery Slot
              </button>
            </div>

          </div>

          {/* Delivery Timings & Slots Card */}
          <div className="rounded-[28px] border border-border bg-cream/50 p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-4 border-b border-border/60">
                <Clock3 size={20} className="text-primary" />
                <h3 className="font-heading text-xl font-bold text-text">Delivery Slots</h3>
              </div>

              <div className="mt-5 space-y-3">
                {deliverySlots.map((slot, idx) => (
                  <div key={idx} className="rounded-xl bg-white p-4 border border-border/70 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-primary">{slot.slot}</span>
                      <span className="text-xs font-bold text-text">{slot.time}</span>
                    </div>
                    <p className="mt-1 text-[11px] text-text-secondary">{slot.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-primary/5 p-4 border border-primary/10 flex items-center gap-3">
              <Truck size={20} className="text-primary shrink-0" />
              <p className="text-[11px] text-text-secondary leading-tight">
                <strong>Express Delivery:</strong> Orders confirmed before 8 PM are dispatched the next morning.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}