import { useState } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/Logo.jpg";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "Products", path: "/products" },
  { name: "Our Promise", path: "/promise" },
  { name: "Delivery", path: "/delivery" },
  { name: "FAQ", path: "/faq" },
];

const whatsappNumber = "91XXXXXXXXXX";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Lactose Farm, I would like to know more about your dairy products and delivery availability.",
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    setIsOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/home"
          onClick={closeMenu}
          className="group flex items-center"
          aria-label="Lactose Farm Home"
        >
          <img
            src={Logo}
            alt="Lactose Farm"
            className="h-14 w-14 z-20 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary hover:bg-primary/5 hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="group hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark hover:shadow-soft lg:flex"
        >
          <MessageCircle size={17} />
          Order on WhatsApp
          <ArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col gap-1 z-20  lg:hidden"
        >
          <span className="flex flex-col gap-[5px]">
            {/* Top */}
            <span
              className={`block h-[3px] w-[25px] rounded-full bg-primary transition-all duration-300 ease-in-out ${
                isOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />

            {/* Middle */}
            <span
              className={`block h-[3px] w-[25px] rounded-full bg-primary transition-all duration-300 ease-in-out ${
                isOpen ? "translate-x-[10px] opacity-0" : "opacity-100"
              }`}
            />

            {/* Bottom */}
            <span
              className={`block h-[3px] w-[25px] rounded-full bg-primary transition-all duration-300 ease-in-out ${
                isOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

     <div
  className={`fixed right-0 top-0  z-10 h-screen w-full bg-white
    transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    lg:hidden`}
>
  <div className="flex h-full flex-col px-5 pb-6 pt-24 sm:px-6">

    {/* Navigation */}
    <div className="divide-y divide-border">

      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={closeMenu}
          className={({ isActive }) =>
            `flex items-center py-5 text-base font-semibold transition-colors ${
              isActive
                ? "text-primary"
                : "text-text hover:text-primary"
            }`
          }
        >
          {({ isActive }) => (
            <div className="flex items-center gap-3">

              <span
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-primary"
                    : "bg-transparent"
                }`}
              />

              <span>{link.name}</span>

            </div>
          )}
        </NavLink>
      ))}

    </div>

    {/* Bottom CTA */}
    <div className="mt-auto">

      <button
        type="button"
        onClick={handleWhatsApp}
        className="group flex w-full items-center justify-center gap-2 rounded-[12px] bg-primary px-5 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-primary-dark"
      >
        <MessageCircle size={18} />

        Order on WhatsApp

        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </button>

    </div>

  </div>
</div>
    </header>
  );
}
