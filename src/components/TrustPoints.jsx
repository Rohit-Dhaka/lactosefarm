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
import SmallBottal from "../assets/SmallBottal.png";

const whatsappNumber = "91XXXXXXXXXX";

// Sub-component for dynamic milk fill level background with wave animation
function MilkFillBackground({ quantity, maxQty = 10, isCardActive }) {
  // Calculate percentage fill height based on quantity (capped at 100%)
  const fillPercentage = Math.min((quantity / maxQty) * 100, 100);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[30px]">
      {/* Animated Liquid Surface */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#e2edff] to-[#ffffff] transition-all duration-700 ease-out"
        style={{ height: `${fillPercentage}%` }}
      >
        {/* Animated Wave Surface */}
        <div className="absolute -top-6 left-0 right-0 h-6 overflow-hidden">
          <svg
            className={`w-[200%] h-full fill-[#ffffff] opacity-80 ${
              isCardActive ? "animate-[wave_2s_linear_infinite]" : ""
            }`}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function TrustPoints({
  // cart,
  // isCartOpen,
  setIsCartOpen,
  onAddToCart,
  totalCartCount,
}) {
  const [quantities, setQuantities] = useState({
    1: 1, // 500 ML
    2: 1, // 1000 ML
  });

  const [activeCardId, setActiveCardId] = useState(null);

  const productList = [
    {
      id: 1,
      name: "Buffalo Milk",
      size: "500 ML",
      unitPrice: 45,
      image: SmallBottal,
      badge: "EVERYDAY",
    },
    {
      id: 2,
      name: "Buffalo Milk",
      size: "1000 ML",
      unitPrice: 90,
      image: Bottal,
      badge: "BEST VALUE",
    },
  ];

  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    setActiveCardId(id);
    setTimeout(() => setActiveCardId(null), 800);
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }));
  };

  const handleDirectWhatsApp = (product) => {
    const qty = quantities[product.id];
    const totalPrice = product.unitPrice * qty;
    const message = encodeURIComponent(
      `Hello Lactose Farm, I would like to order ${product.name} ${product.size} x ${qty} bottle(s) for ₹${totalPrice}. Please confirm availability and delivery.`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="products" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Wave animation keyframes embedded via standard CSS inline block */}
      <style>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Floating Cart Trigger Button */}
      <button
        type="button"
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 font-bold text-white shadow-2xl transition hover:bg-primary-dark active:scale-95"
      >
        <ShoppingCart size={20} />
        <span>Cart</span>
        {totalCartCount > 0 && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-extrabold text-primary">
            {totalCartCount}
          </span>
        )}
      </button>

      {/* Background Decorative Blur */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[-150px] bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
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
              <span className="text-primary">Purely everyday.</span>
            </h2>
          </div>

          <div className="max-w-sm lg:pb-1">
            <p className="text-sm leading-7 text-text-secondary sm:text-base">
              Fresh buffalo milk from Lactose Farm, available in two convenient sizes for your everyday needs.
            </p>
          </div>
        </div>

        {/* PRODUCT SHOWCASE GRID */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* ================= 1000 ML PRODUCT CARD ================= */}
          <article className="group relative flex min-h-[580px] flex-col justify-between overflow-hidden rounded-[30px] bg-[#F3F8FF] p-6 sm:p-9 transition-colors duration-500">
            {/* Milk Fill Dynamic Background */}
            <MilkFillBackground
              quantity={quantities[2]}
              maxQty={10}
              isCardActive={activeCardId === 2}
            />

            {/* Badge & Background Deco */}
            <div className="relative z-20 flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow-md">
                <Sparkles size={14} />
                BEST VALUE
              </div>
              <span className="font-heading text-6xl font-black text-primary/10 sm:text-8xl">
                1L
              </span>
            </div>

            {/* Bottle Image */}
            <div className="relative z-10 my-4 flex justify-center">
              <img
                src={Bottal}
                alt="Lactose Farm Buffalo Milk 1000 ML"
                className={`h-[360px] w-auto object-contain drop-shadow-[0_25px_30px_rgba(17,17,17,0.16)] transition-all duration-500 sm:h-[420px] ${
                  activeCardId === 2 ? "scale-105 -translate-y-2" : "group-hover:scale-105"
                }`}
              />
            </div>

            {/* Controls & Price Details */}
            <div className="relative z-20 rounded-2xl border border-white/80 bg-white/80 p-5 backdrop-blur-md shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    1000 ML
                  </p>
                  <h3 className="font-heading text-2xl text-text">Buffalo Milk</h3>
                  <p className="mt-1 text-lg font-bold text-black">
                    ₹{productList[1].unitPrice * quantities[2]}{" "}
                    <span className="text-xs font-normal text-text-secondary">
                      (₹90/L)
                    </span>
                  </p>
                </div>

                {/* Quantity Control Buttons */}
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
                  <button
                    type="button"
                    onClick={() => handleDecrement(2)}
                    className="p-1 text-gray-600 transition hover:text-primary active:scale-90"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-6 text-center text-sm font-bold">
                    {quantities[2]}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleIncrement(2)}
                    className="p-1 text-gray-600 transition hover:text-primary active:scale-90"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => onAddToCart(productList[1], quantities[2])}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-primary bg-white px-4 py-3 text-xs font-bold text-primary transition hover:bg-primary/5 active:scale-95"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>

                <button
                  type="button"
                  onClick={() => handleDirectWhatsApp(productList[1])}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold text-white shadow-md shadow-primary/20 transition hover:bg-primary-dark active:scale-95"
                >
                  <MessageCircle size={16} />
                  Buy on WhatsApp
                </button>
              </div>
            </div>
          </article>

          {/* ================= RIGHT COLUMN (500 ML & ORDER PANEL) ================= */}
          <div className="grid gap-6">
            {/* 500 ML PRODUCT CARD */}
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] bg-[#F8FBFF] p-6 sm:p-7 transition-colors duration-500">
              {/* Milk Fill Dynamic Background */}
              <MilkFillBackground
                quantity={quantities[1]}
                maxQty={10}
                isCardActive={activeCardId === 1}
              />

              <div className="relative z-20 flex items-center justify-between">
                <span className="rounded-full border border-primary/15 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                  EVERYDAY
                </span>
                <span className="font-heading text-4xl font-black text-primary/10">
                  0.5L
                </span>
              </div>

              <div className="relative z-10 my-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    500 ML
                  </p>
                  <h3 className="font-heading text-xl text-text">Buffalo Milk</h3>
                  <p className="mt-1 text-base font-bold text-black">
                    ₹{productList[0].unitPrice * quantities[1]}
                  </p>
                </div>

                <img
                  src={SmallBottal}
                  alt="Lactose Farm Buffalo Milk 500 ML"
                  className={`h-32 w-auto object-contain drop-shadow-md transition-all duration-500 ${
                    activeCardId === 1 ? "scale-105 -translate-y-1" : "group-hover:scale-105"
                  }`}
                />
              </div>

              {/* Quantity Selector & Action */}
              <div className="relative z-20 space-y-3 border-t border-gray-100/60 pt-2 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-text-secondary">
                    Quantity
                  </span>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1 shadow-sm">
                    <button
                      type="button"
                      onClick={() => handleDecrement(1)}
                      className="p-1 text-gray-600 hover:text-primary active:scale-90"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-5 text-center text-xs font-bold">
                      {quantities[1]}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleIncrement(1)}
                      className="p-1 text-gray-600 hover:text-primary active:scale-90"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => onAddToCart(productList[0], quantities[1])}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-primary bg-white text-xs font-bold text-primary transition hover:bg-primary/5 py-2.5"
                  >
                    <ShoppingCart size={14} /> Add
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDirectWhatsApp(productList[0])}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary text-xs font-bold text-white transition hover:bg-primary-dark py-2.5"
                  >
                    <MessageCircle size={14} /> Order
                  </button>
                </div>
              </div>
            </article>

            {/* ORDER PANEL */}
            <div className="relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-[30px] bg-primary p-6 text-white sm:p-7">
              <span className="absolute -right-2 -top-8 font-heading text-[150px] leading-none text-white/[0.08]">
                2
              </span>

              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Simple Ordering
                </p>
                <h3 className="mt-2 max-w-[260px] font-heading text-2xl leading-tight">
                  Pick your size. Adjust quantity. We deliver.
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative z-10 mt-5 flex w-fit items-center gap-2 rounded-[10px] bg-white px-5 py-3 text-sm font-bold text-primary transition-all hover:bg-[#F3F8FF]"
              >
                <ShoppingCart size={17} />
                View Cart ({totalCartCount})
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// import { useState } from "react";
// import {
//   ArrowUpRight,
//   MessageCircle,
//   Sparkles,
//   Plus,
//   Minus,
//   ShoppingCart,
// } from "lucide-react";

// import Bottal from "../assets/Bottal.png";
// import SmallBottal from "../assets/SmallBottal.png";

// const whatsappNumber = "91XXXXXXXXXX";

// export default function TrustPoints({    
//   setIsCartOpen,
//   onAddToCart,
//   totalCartCount,
// }) {
//   // Local state for product quantities before adding to cart
//   const [quantities, setQuantities] = useState({
//     1: 1, // 500 ML
//     2: 1, // 1000 ML
//   });

//   const productList = [
//     {
//       id: 1,
//       name: "Buffalo Milk",
//       size: "500 ML",
//       unitPrice: 45,
//       image: SmallBottal,
//       badge: "EVERYDAY",
//     },
//     {
//       id: 2,
//       name: "Buffalo Milk",
//       size: "1000 ML",
//       unitPrice: 90,
//       image: Bottal,
//       badge: "BEST VALUE",
//     },
//   ];

//   const handleIncrement = (id) => {
//     setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
//   };

//   const handleDecrement = (id) => {
//     setQuantities((prev) => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }));
//   };

//   const handleDirectWhatsApp = (product) => {
//     const qty = quantities[product.id];
//     const totalPrice = product.unitPrice * qty;
//     const message = encodeURIComponent(
//       `Hello Lactose Farm, I would like to order ${product.name} ${product.size} x ${qty} bottle(s) for ₹${totalPrice}. Please confirm availability and delivery.`
//     );

//     window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
//   };

//   return (
//     <section id="products" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
//       {/* Floating Cart Trigger Button */}
//       <button
//         type="button"
//         onClick={() => setIsCartOpen(true)}
//         className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 font-bold text-white shadow-2xl transition hover:bg-primary-dark active:scale-95"
//       >
//         <ShoppingCart size={20} />
//         <span>Cart</span>
//         {totalCartCount > 0 && (
//           <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-extrabold text-primary">
//             {totalCartCount}
//           </span>
//         )}
//       </button>

//       {/* Background Decorative Blur */}
//       <div className="pointer-events-none absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />
//       <div className="pointer-events-none absolute right-[-150px] bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//         {/* HEADER */}
//         <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
//           <div className="max-w-2xl">
//             <div className="mb-4 flex items-center gap-2">
//               <span className="h-2 w-2 rounded-full bg-primary" />
//               <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
//                 Our Milk
//               </span>
//             </div>

//             <h2 className="font-heading text-4xl leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-6xl">
//               One bottle.
//               <br />
//               <span className="text-primary">Purely everyday.</span>
//             </h2>
//           </div>

//           <div className="max-w-sm lg:pb-1">
//             <p className="text-sm leading-7 text-text-secondary sm:text-base">
//               Fresh buffalo milk from Lactose Farm, available in two convenient sizes for your everyday needs.
//             </p>
//           </div>
//         </div>

//         {/* PRODUCT SHOWCASE GRID */}
//         <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
//           {/* ================= 1000 ML PRODUCT CARD ================= */}
//           <article className="group relative flex min-h-[580px] flex-col justify-between overflow-hidden rounded-[30px] bg-[#F3F8FF] p-6 sm:p-9">
//             <div className="pointer-events-none absolute bottom-0 h-50 w-full z-10 bg-gradient-to-b to-[#4c8ad2]/20" />

//             {/* Badge & Background Deco */}
//             <div className="relative z-20 flex items-center justify-between">
//               <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow-md">
//                 <Sparkles size={14} />
//                 BEST VALUE
//               </div>
//               <span className="font-heading text-6xl font-black text-primary/10 sm:text-8xl">
//                 1L
//               </span>
//             </div>

//             {/* Bottle Image */}
//             <div className="relative z-10 my-4 flex justify-center">
//               <img
//                 src={Bottal}
//                 alt="Lactose Farm Buffalo Milk 1000 ML"
//                 className="h-[360px] w-auto object-contain drop-shadow-[0_25px_30px_rgba(17,17,17,0.16)] transition-transform duration-500 group-hover:scale-105 sm:h-[420px]"
//               />
//             </div>

//             {/* Controls & Price Details */}
//             <div className="relative z-20 rounded-2xl border border-white bg-white/80 p-5 backdrop-blur-md">
//               <div className="flex flex-wrap items-center justify-between gap-4">
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
//                     1000 ML
//                   </p>
//                   <h3 className="font-heading text-2xl text-text">Buffalo Milk</h3>
//                   <p className="mt-1 text-lg font-bold text-black">
//                     ₹{productList[1].unitPrice * quantities[2]}{" "}
//                     <span className="text-xs font-normal text-text-secondary">
//                       (₹90/L)
//                     </span>
//                   </p>
//                 </div>

//                 {/* Quantity Control Buttons */}
//                 <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
//                   <button
//                     type="button"
//                     onClick={() => handleDecrement(2)}
//                     className="p-1 text-gray-600 transition hover:text-primary active:scale-90"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="w-6 text-center text-sm font-bold">
//                     {quantities[2]}
//                   </span>
//                   <button
//                     type="button"
//                     onClick={() => handleIncrement(2)}
//                     className="p-1 text-gray-600 transition hover:text-primary active:scale-90"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="mt-4 flex gap-3">
//                 <button
//                   type="button"
//                   onClick={() => onAddToCart(productList[1], quantities[2])}
//                   className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-primary bg-white px-4 py-3 text-xs font-bold text-primary transition hover:bg-primary/5 active:scale-95"
//                 >
//                   <ShoppingCart size={16} />
//                   Add to Cart
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => handleDirectWhatsApp(productList[1])}
//                   className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold text-white shadow-md shadow-primary/20 transition hover:bg-primary-dark active:scale-95"
//                 >
//                   <MessageCircle size={16} />
//                   Buy on WhatsApp
//                 </button>
//               </div>
//             </div>
//           </article>

//           {/* ================= RIGHT COLUMN (500 ML & ORDER PANEL) ================= */}
//           <div className="grid gap-6">
//             {/* 500 ML PRODUCT CARD */}
//             <article className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] bg-[#F8FBFF] p-6 sm:p-7">
//               <div className="flex items-center justify-between">
//                 <span className="rounded-full border border-primary/15 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
//                   EVERYDAY
//                 </span>
//                 <span className="font-heading text-4xl font-black text-primary/10">
//                   0.5L
//                 </span>
//               </div>

//               <div className="my-3 flex items-center justify-between">
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
//                     500 ML
//                   </p>
//                   <h3 className="font-heading text-xl text-text">Buffalo Milk</h3>
//                   <p className="mt-1 text-base font-bold text-black">
//                     ₹{productList[0].unitPrice * quantities[1]}
//                   </p>
//                 </div>

//                 <img
//                   src={SmallBottal}
//                   alt="Lactose Farm Buffalo Milk 500 ML"
//                   className="h-32 w-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Quantity Selector & Action */}
//               <div className="space-y-3 border-t border-gray-100 pt-2">
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs font-medium text-text-secondary">
//                     Quantity
//                   </span>
//                   <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1">
//                     <button
//                       type="button"
//                       onClick={() => handleDecrement(1)}
//                       className="p-1 text-gray-600 hover:text-primary"
//                     >
//                       <Minus size={14} />
//                     </button>
//                     <span className="w-5 text-center text-xs font-bold">
//                       {quantities[1]}
//                     </span>
//                     <button
//                       type="button"
//                       onClick={() => handleIncrement(1)}
//                       className="p-1 text-gray-600 hover:text-primary"
//                     >
//                       <Plus size={14} />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex gap-2">
//                   <button
//                     type="button"
//                     onClick={() => onAddToCart(productList[0], quantities[1])}
//                     className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-primary text-xs font-bold text-primary transition hover:bg-primary/5 py-2.5"
//                   >
//                     <ShoppingCart size={14} /> Add
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => handleDirectWhatsApp(productList[0])}
//                     className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary text-xs font-bold text-white transition hover:bg-primary-dark py-2.5"
//                   >
//                     <MessageCircle size={14} /> Order
//                   </button>
//                 </div>
//               </div>
//             </article>

//             {/* ORDER PANEL */}
//             <div className="relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-[30px] bg-primary p-6 text-white sm:p-7">
//               <span className="absolute -right-2 -top-8 font-heading text-[150px] leading-none text-white/[0.08]">
//                 2
//               </span>

//               <div className="relative z-10">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
//                   Simple Ordering
//                 </p>
//                 <h3 className="mt-2 max-w-[260px] font-heading text-2xl leading-tight">
//                   Pick your size. Adjust quantity. We deliver.
//                 </h3>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setIsCartOpen(true)}
//                 className="relative z-10 mt-5 flex w-fit items-center gap-2 rounded-[10px] bg-white px-5 py-3 text-sm font-bold text-primary transition-all hover:bg-[#F3F8FF]"
//               >
//                 <ShoppingCart size={17} />
//                 View Cart ({totalCartCount})
//                 <ArrowUpRight size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }