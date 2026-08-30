import { useState } from "react";
import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  Plus,
  Minus,
  ShoppingCart,
} from "lucide-react";

import Bottal from "../assets/Bottal.png";

const whatsappNumber = "917015813074";

function MilkFillBackground({ quantity, maxQty = 10, isCardActive }) {
  const fillPercentage = Math.min((quantity / maxQty) * 100, 100);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[32px]">
      {/* Milk Fill */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/20 to-primary/5 transition-all duration-700 ease-out"
        style={{ height: `${fillPercentage}%` }}
      >
        {/* Wave */}
        <div className="absolute -top-6 left-0 right-0 h-6 overflow-hidden">
          <svg
            className={`h-full w-[200%] fill-primary/10 opacity-80 ${
              isCardActive ? "animate-[wave_2s_linear_infinite]" : ""
            }`}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function TrustPoints({
  setIsCartOpen,
  onAddToCart,
  totalCartCount,
}) {
  const [quantity, setQuantity] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const product = {
    id: 1,
    name: "Buffalo Milk",
    size: "1000 ML",
    unitPrice: 90,
    image: Bottal,
  };

  const totalPrice = product.unitPrice * quantity;

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);

    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 800);
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Yogesh Dairy Farm, I would like to order ${product.name} ${product.size} x ${quantity} bottle(s) for ₹${totalPrice}. Please confirm availability and delivery.`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* ========================================
          ANIMATION
      ======================================== */}
      <style>
        {`
          @keyframes wave {
            0% {
              transform: translateX(0);
            }

            50% {
              transform: translateX(-25%);
            }

            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      {/* ========================================
          FLOATING CART
      ======================================== */}
      <button
        type="button"
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 font-bold text-white shadow-2xl transition-all hover:bg-primary-dark active:scale-95"
      >
        <ShoppingCart size={19} />

        <span>Cart</span>

        {totalCartCount > 0 && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-extrabold text-primary">
            {totalCartCount}
          </span>
        )}
      </button>

      {/* ========================================
          BACKGROUND DECORATIONS
      ======================================== */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ========================================
            SECTION HEADER
        ======================================== */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-primary" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Our Milk
            </span>
          </div>

          <h2 className="font-heading text-4xl leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-6xl">
            Pure milk.
            <br />

            <span className="text-primary">
              Simply delivered.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            Fresh buffalo milk from Yogesh Dairy Farm, carefully bottled
            and delivered fresh to your doorstep.
          </p>
        </div>

        {/* ========================================
            MAIN PRODUCT SHOWCASE
        ======================================== */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">

          {/* ======================================
              BOTTLE SHOWCASE
          ====================================== */}
          <article className="group relative min-h-[650px] overflow-hidden rounded-[32px] bg-[#F5F8FA] p-6 sm:p-10 lg:min-h-[720px]">

            <MilkFillBackground
              quantity={quantity}
              maxQty={10}
              isCardActive={isActive}
            />

            {/* Decorative Number */}
            <span className="pointer-events-none absolute -right-4 -top-10 z-0 font-heading text-[180px] font-black leading-none text-primary/[0.035] sm:text-[230px]">
              1L
            </span>

            {/* Product Badge */}
            <div className="relative z-20 flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow-md">
                <Sparkles size={14} />
                FARM FRESH
              </div>

              <span className="rounded-full border border-primary/10 bg-white/70 px-4 py-2 text-xs font-bold tracking-wide text-primary backdrop-blur">
                1000 ML
              </span>
            </div>

            {/* Bottle */}
            <div className="relative z-10 flex min-h-[470px] items-center justify-center py-8">
              <img
                src={product.image}
                alt="Yogesh Dairy Farm Buffalo Milk 1000 ML"
                className={`h-[430px] w-auto object-contain drop-shadow-[0_30px_35px_rgba(17,17,17,0.16)] transition-all duration-700 sm:h-[500px] ${
                  isActive
                    ? "scale-105 -translate-y-2"
                    : "group-hover:scale-[1.03]"
                }`}
              />
            </div>

            {/* Product Bottom Info */}
            <div className="relative z-20 flex items-end justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Fresh Buffalo Milk
                </p>

                <h3 className="mt-1 font-heading text-3xl text-text">
                  1000 ML Bottle
                </h3>

                <p className="mt-2 text-sm text-text-secondary">
                  Pure · Fresh · Natural
                </p>
              </div>

              <div className="text-right">
                <p className="text-3xl font-black text-primary">
                  ₹90
                </p>

                <p className="text-xs text-text-secondary">
                  per bottle
                </p>
              </div>

            </div>
          </article>

          {/* ======================================
              ORDER PANEL
          ====================================== */}
          <div className="flex flex-col gap-6">

            {/* Order Card */}
            <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-[32px] bg-primary p-7 text-white sm:p-9">

              {/* Decorative number */}
              <span className="pointer-events-none absolute -right-5 -top-12 font-heading text-[190px] font-black leading-none text-white/[0.07]">
                1
              </span>

              <div className="relative z-10">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Order Fresh Milk
                </p>

                <h3 className="mt-4 max-w-sm font-heading text-4xl leading-tight sm:text-5xl">
                  Fresh from our farm
                  <br />
                  <span className="italic text-white/70">
                    to your door.
                  </span>
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
                  Choose how many 1 litre bottles you need and place your
                  order directly with Yogesh Dairy Farm.
                </p>
              </div>

              {/* Quantity */}
              <div className="relative z-10 mt-12">

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
                  Quantity
                </p>

                <div className="flex w-fit items-center gap-5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">

                  <button
                    type="button"
                    onClick={handleDecrement}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-90"
                  >
                    <Minus size={17} />
                  </button>

                  <span className="min-w-[30px] text-center text-lg font-bold">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-90"
                  >
                    <Plus size={17} />
                  </button>

                </div>

              </div>

              {/* Price */}
              <div className="relative z-10 mt-8 flex items-end justify-between border-t border-white/10 pt-6">

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Total
                  </p>

                  <p className="mt-1 font-heading text-4xl">
                    ₹{totalPrice}
                  </p>
                </div>

                <p className="pb-1 text-sm text-white/50">
                  {quantity} × ₹90
                </p>

              </div>

            </div>

            {/* ====================================
                ACTION CARD
            ==================================== */}
            <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-[0_15px_45px_rgba(17,17,17,0.06)] sm:p-7">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Ready to order?
              </p>

              <h3 className="mt-2 font-heading text-2xl text-text">
                Fresh milk, delivered simply.
              </h3>

              {/* Buttons */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                <button
                  type="button"
                  onClick={() =>
                    onAddToCart(product, quantity)
                  }
                  className="flex items-center justify-center gap-2 rounded-xl border border-primary bg-white px-4 py-3.5 text-sm font-bold text-primary transition-all hover:bg-primary/5 active:scale-95"
                >
                  <ShoppingCart size={17} />
                  Add to Cart
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/15 transition-all hover:bg-primary-dark active:scale-95"
                >
                  <MessageCircle size={17} />
                  Order on WhatsApp
                </button>

              </div>

            </div>

            {/* ====================================
                DELIVERY INFO
            ==================================== */}
            <div className="grid grid-cols-3 gap-3">

              <div className="rounded-2xl bg-[#F8FAFB] p-4">
                <p className="text-xs font-bold text-primary">
                  FRESH
                </p>

                <p className="mt-1 text-[11px] leading-4 text-text-secondary">
                  Farm fresh milk
                </p>
              </div>

              <div className="rounded-2xl bg-[#F8FAFB] p-4">
                <p className="text-xs font-bold text-primary">
                  1 HOUR
                </p>

                <p className="mt-1 text-[11px] leading-4 text-text-secondary">
                  Refrigerate after delivery
                </p>
              </div>

              <div className="rounded-2xl bg-[#F8FAFB] p-4">
                <p className="text-xs font-bold text-primary">
                  1 LTR
                </p>

                <p className="mt-1 text-[11px] leading-4 text-text-secondary">
                  Convenient bottle
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================
            BOTTOM CART CTA
        ======================================== */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-gray-100 pt-7 sm:flex-row sm:items-center">

          <div>
            <p className="font-heading text-2xl text-text">
              Already added something?
            </p>

            <p className="mt-1 text-sm text-text-secondary">
              Review your selected bottles before checkout.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary-dark active:scale-95"
          >
            <ShoppingCart size={17} />

            View Cart ({totalCartCount})

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

        </div>
      </div>
    </section>
  );
}