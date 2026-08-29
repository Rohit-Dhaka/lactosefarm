import { MessageCircle, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

const whatsappNumber = "91XXXXXXXXXX";
const phoneNumber = "91XXXXXXXXXX";

const handleWhatsApp = () => {
  const message = encodeURIComponent(
    "Hello Lactose Farm, I would like to know more about your dairy products."
  );

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
};

const footerLinks = {
  Explore: [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Our Promise", href: "#promise" },
    { name: "How It Works", href: "#ordering" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* ================= BRAND ================= */}
          <div className="sm:col-span-2 lg:col-span-6">
            <Link to="/" className="inline-block">
              <img
                src={Logo}
                alt="Lactose Farm Logo"
                className="h-16 w-16 rounded-full object-cover sm:h-18 sm:w-18"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Pure dairy for the people you care for every day. Simple ordering,
              local service, and a focus on hygienic dairy handling.
            </p>

            {/* WhatsApp CTA */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="group mt-6 inline-flex items-center gap-2 rounded-[10px] bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-[0_8px_25px_rgba(8,124,255,0.25)] active:scale-95"
            >
              <MessageCircle size={18} />
              <span>Order on WhatsApp</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* ================= EXPLORE ================= */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Explore
            </h3>

            <ul className="mt-4 space-y-3">
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

          {/* ================= CONTACT ================= */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Contact
            </h3>

            <div className="mt-4 space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin size={17} className="text-primary" />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">Lactose Farm</p>
                  <p className="mt-0.5 text-xs sm:text-sm leading-5 text-white/50">
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
                  <Phone size={17} className="text-primary" />
                </div>
                <span>+91 80808 22038</span>
              </a>

              {/* WhatsApp */}
              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex items-center gap-3 text-sm text-white/55 transition-colors duration-200 hover:text-primary"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle size={17} className="text-primary" />
                </div>
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <p>© {new Date().getFullYear()} Lactose Farm™. All rights reserved.</p>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-5">
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}