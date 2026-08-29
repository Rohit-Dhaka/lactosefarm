import { useState, useEffect } from "react";
import { MessageCircle, ArrowUpRight, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/Logo.jpg";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "Products", path: "/products" },
  { name: "Our Promise", path: "/promise" },
  { name: "Delivery", path: "/delivery" },
];

const whatsappNumber = "918080822038";

export default function Navbar({ cartCount = 0, onOpenCart, onToggleCart }) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock/Unlock body scrolling based on mobile drawer state
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Lactose Farm, I would like to know more about your dairy products and delivery availability."
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleCartClick = () => {
    closeMenu();
    if (onToggleCart) {
      onToggleCart();
    } else if (onOpenCart) {
      onOpenCart();
    }
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-white/95 backdrop-blur-xl">
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
            className="z-20 h-14 w-14 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6 lg:gap-8">
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

          <div className="flex items-center gap-3">
            {/* Cart Icon Button with Counter Badge */}
            <button
              type="button"
              onClick={handleCartClick}
              aria-label="Open Cart Drawer"
              className="relative flex items-center justify-center rounded-full p-2.5 text-text-secondary transition-all duration-300 ease-linear hover:bg-primary/5 hover:text-primary active:scale-95"
            >
              <ShoppingCart className="h-6 w-6" />
              {/* Cart Counter Badge */}
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-md ring-2 ring-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="z-20 flex flex-col gap-1 lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              <span className="flex flex-col gap-[5px]">
                <span
                  className={`block h-[3px] w-[25px] rounded-full bg-primary transition-all duration-300 ease-in-out ${
                    isOpen ? "translate-y-[8px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[3px] w-[25px] rounded-full bg-primary transition-all duration-300 ease-in-out ${
                    isOpen ? "translate-x-[10px] opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[3px] w-[25px] rounded-full bg-primary transition-all duration-300 ease-in-out ${
                    isOpen ? "-translate-y-[8px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed left-0 top-0 z-10 h-screen w-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex h-full flex-col px-5 pb-6 pt-24 sm:px-6">
          <div className="divide-y divide-border">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center py-5 text-base font-semibold transition-colors ${
                    isActive ? "text-primary" : "text-text hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 rounded-full transition-all duration-200 ${
                        isActive ? "bg-primary" : "bg-transparent"
                      }`}
                    />
                    <span>{link.name}</span>
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Bottom CTA Buttons */}
          <div className="mt-auto space-y-3 mb-10">
            <button
              type="button"
              onClick={handleCartClick}
              className="flex w-full items-center justify-center gap-2 rounded-[12px] border border-primary/20 bg-primary/10 px-5 py-3.5 text-sm font-bold text-primary transition-all duration-200 hover:bg-primary/20"
            >
              <ShoppingCart size={18} />
              View Cart ({cartCount})
            </button>

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