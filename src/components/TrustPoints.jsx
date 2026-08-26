
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

import Bottal from "../assets/Bottal.png";
import SmallBottal from "../assets/SmallBottal.png";

const whatsappNumber = "91XXXXXXXXXX";

const products = [
  {
    id: 1,
    name: "Buffalo Milk",
    size: "500 ML",
    price: "₹45",
    image: SmallBottal,
    label: "Everyday",
  },
  {
    id: 2,
    name: "Buffalo Milk",
    size: "1000 ML",
    price: "₹90",
    image: Bottal,
    label: "Best Value",
  },
];

const handleWhatsApp = (product) => {
  const message = encodeURIComponent(
    `Hello Lactose Farm, I would like to order ${product.name} ${product.size} for ${product.price}. Please confirm availability and delivery.`
  );

  window.open(
    `https://wa.me/${whatsappNumber}?text=${message}`,
    "_blank"
  );
};

export default function TrustPoints() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute right-[-150px] bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">

          <div className="max-w-2xl">

            <div className="mb-4 flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-primary" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Our Milk
              </span>

            </div>

            <h2 className="font-heading text-4xl leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-6xl">
              One bottle.
              <br />
              <span className="text-primary">
                Purely everyday.
              </span>
            </h2>

          </div>

          <div className="max-w-sm lg:pb-1">

            <p className="text-sm leading-7 text-text-secondary sm:text-base">
              Fresh buffalo milk from Lactose Farm, available in two
              convenient sizes for your everyday needs.
            </p>

          </div>

        </div>

        {/* ================= PRODUCT SHOWCASE ================= */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">

          {/* ================= FEATURED 1L ================= */}
          <article className="group  relative min-h-[560px] overflow-hidden rounded-[30px] bg-[#F3F8FF] sm:min-h-[620px]">
            <div className=" w-full h-50  bottom-0 absolute z-30 bg-gradient-to-b  to-[#4c8ad2] "/>


            

            {/* Decorative Circle */}
            <div className="absolute -right-20 top-10 h-[420px] w-[420px] rounded-full border border-primary/10 bg-primary/[0.03]" />

            <div className="absolute -right-5 top-24 h-[330px] w-[330px] rounded-full border border-primary/10" />

            {/* Badge */}
            <div className="absolute left-6 top-6 z-30 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white">
              <Sparkles size={14} />
              BEST VALUE
            </div>

            {/* Product Image */}
            <div className="absolute inset-x-0 bottom-0 top-0 ">

              <img
                src={Bottal}
                alt="Lactose Farm Buffalo Milk 1000 ML"
                className="absolute bottom-[10px] right-[7%] z-10 h-[470px] w-auto object-contain drop-shadow-[0_30px_35px_rgba(17,17,17,0.16)] transition-transform duration-700 group-hover:scale-[1.035] group-hover:-translate-y-3 sm:h-[550px] lg:right-[10%]"
              />

            </div>

            {/* Content */}
            <div className="absolute bottom-7 left-7 z-20 max-w-[260px] sm:bottom-9 sm:left-9  z-50">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                1000 ML
              </p>

              <h3 className="mt-2 font-heading text-3xl text-text sm:text-4xl">
                Buffalo Milk
              </h3>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Your everyday family bottle.
              </p>

              <div className="mt-5 flex items-center gap-4">

                <span className="font-heading text-4xl text-black">
                  ₹90
                </span>

                <button
                  onClick={() => handleWhatsApp(products[1])}
                  className="group/button flex h-11 w-11 items-center justify-center rounded-full bg-text text-white transition-all duration-200 hover:bg-primary"
                  aria-label="Order 1000 ML Buffalo Milk"
                >
                  <ArrowUpRight
                    size={19}
                    className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                  />
                </button>

              </div>

            </div>

            {/* Size */}
            <span className="absolute right-0 top-0 z-20 font-heading text-7xl text-primary/[0.07] sm:text-[180px]">
              1L
            </span>

          </article>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="grid gap-6">

            {/* 500ML PRODUCT */}
            <article className="group relative min-h-[390px] overflow-hidden rounded-[30px] bg-[#F8FBFF]">
                <div className=" w-full h-50  bottom-0 absolute z-30 bg-gradient-to-b  to-[#4c8ad2] "/>
    <span className="absolute right-0 top-0 z-20 font-heading text-7xl text-primary/[0.07] sm:text-[80px] z-">
              0.5L
            </span>
              {/* Background */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

              {/* Badge */}
              <div className="absolute left-6 top-6 z-20 rounded-full border border-primary/15 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                EVERYDAY
              </div>

              {/* Bottle */}
              <img
                src={SmallBottal}
                alt="Lactose Farm Buffalo Milk 500 ML"
                className="absolute bottom-[-15px] right-[5%] z-10 h-[390px] w-auto object-contain drop-shadow-[0_25px_30px_rgba(17,17,17,0.14)] transition-transform duration-700 group-hover:scale-[1.04] group-hover:-translate-y-2 sm:h-[400px]"
              />

              {/* Content */}
              <div className="absolute bottom-6 left-6 z-20 max-w-[180px] z-50">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  500 ML
                </p>

                <h3 className="mt-1 font-heading text-2xl text-text">
                  Buffalo Milk
                </h3>

                <div className="mt-2 flex items-center gap-3">

                  <span className="font-heading text-3xl text-black">
                    ₹45
                  </span>

                  <button
                    onClick={() => handleWhatsApp(products[0])}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-text text-white transition-colors hover:bg-primary"
                    aria-label="Order 500 ML Buffalo Milk"
                  >
                    <ArrowUpRight size={16} />
                  </button>

                </div>

              </div>

            </article>

            {/* ORDER PANEL */}
            <div className="relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-[30px] bg-primary p-6 text-white sm:p-7">

              {/* Decorative Number */}
              <span className="absolute -right-2 -top-8 font-heading text-[150px] leading-none text-white/[0.08]">
                2
              </span>

              <div className="relative z-10">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Simple Ordering
                </p>

                <h3 className="mt-2 max-w-[260px] font-heading text-2xl leading-tight">
                  Pick your size. Message us. We deliver.
                </h3>

              </div>

              <button
                onClick={() => handleWhatsApp(products[1])}
                className="relative z-10 mt-6 flex w-fit items-center gap-2 rounded-[10px] bg-white px-5 py-3 text-sm font-bold text-primary transition-all hover:bg-[#F3F8FF]"
              >
                <MessageCircle size={17} />

                Order on WhatsApp

                <ArrowUpRight size={16} />
                
              </button>

            </div>

          </div>

        </div>

      

      </div>
    </section>
  );
}
