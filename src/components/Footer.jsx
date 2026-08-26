import {
  MessageCircle,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

const whatsappNumber = "91XXXXXXXXXX";
const phoneNumber = "91XXXXXXXXXX";

const handleWhatsApp = () => {
  const message = encodeURIComponent(
    "Hello Lactose Farm, I would like to know more about your dairy products."
  );

  window.open(
    `https://wa.me/${whatsappNumber}?text=${message}`,
    "_blank"
  );
};

const footerLinks = {
  Explore: [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Our Promise", href: "#promise" },
    { name: "How It Works", href: "#ordering" },
  ],

  Help: [
    { name: "Delivery", href: "#delivery" },
    { name: "Customer Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr]">

          {/* ================= BRAND ================= */}
          <div className="max-w-sm">

            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >

              {/* Logo Mark */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary transition-transform duration-200 group-hover:scale-105">
                <span className="font-heading text-xl font-semibold text-white">
                  L
                </span>
              </div>

              {/* Brand Name */}
              <div className="leading-none">

                <span className="block font-heading text-2xl text-white">
                  Lactose Farm
                </span>

                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  Fresh Dairy
                </span>

              </div>

            </a>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Pure dairy for the people you care for every day.
              Simple ordering, local service, and a focus on
              hygienic dairy handling.
            </p>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsApp}
              className="group mt-6 inline-flex items-center gap-2 rounded-[10px] bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-[0_8px_25px_rgba(8,124,255,0.25)]"
            >
              <MessageCircle size={18} />

              Order on WhatsApp

              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

          </div>

          {/* ================= EXPLORE ================= */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">

              {footerLinks.Explore.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors duration-200 hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* ================= HELP ================= */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              Help
            </h3>

            <ul className="mt-5 space-y-3">

              {footerLinks.Help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors duration-200 hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-sm font-semibold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-5">

              {/* Location */}
              <div className="flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin
                    size={17}
                    className="text-primary"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Lactose Farm
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/50">
                    Karanja Lad
                    <br />
                    Full address to be confirmed
                  </p>
                </div>

              </div>

              {/* Phone */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-3 text-sm text-white/55 transition-colors duration-200 hover:text-primary"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone
                    size={17}
                    className="text-primary"
                  />
                </div>

                <span>
                  +91 XXXXX XXXXX
                </span>

              </a>

              {/* WhatsApp */}
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-3 text-sm text-white/55 transition-colors duration-200 hover:text-primary"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle
                    size={17}
                    className="text-primary"
                  />
                </div>

                <span>
                  WhatsApp Us
                </span>

              </button>

            </div>

          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 border-t border-white/10 pt-6">

          <div className="flex flex-col gap-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <p>
              © {new Date().getFullYear()} Lactose Farm™. All rights reserved.
            </p>

            {/* Legal */}
            <div className="flex flex-wrap gap-5">

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Terms & Conditions
              </a>

              <a
                href="#contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}