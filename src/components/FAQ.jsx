import { useState } from "react";
import {
  Plus,
  Minus,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const faqs = [
  {
    question: "Which products do you currently offer?",
    answer:
      "Our current dairy product range will be listed here once the available products, pack sizes, and pricing are confirmed.",
  },
  {
    question: "Which areas do you deliver to?",
    answer:
      "Delivery is currently available in selected local areas. Send us your location on WhatsApp and we will confirm whether your area is covered.",
  },
  {
    question: "What are your delivery timings?",
    answer:
      "Delivery timings depend on the local delivery schedule. Our team will confirm the available timing when you place an enquiry.",
  },
  {
    question: "How do I place or change an order?",
    answer:
      "You can contact Lactose Farm through WhatsApp to place an order or ask about changing an existing order. Our team will guide you through the process.",
  },
  {
    question: "Is there a minimum order quantity?",
    answer:
      "Minimum order requirements have not yet been confirmed. Please contact us on WhatsApp for the current ordering rules.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Available payment methods will be confirmed by the Lactose Farm team when your order is placed.",
  },
  {
    question: "How should I store each product?",
    answer:
      "Storage instructions vary by product. Please follow the storage information provided with each product or ask our team before ordering.",
  },
  {
    question: "Can I place a regular or subscription order?",
    answer:
      "Regular or subscription ordering availability has not yet been confirmed. Contact us on WhatsApp to discuss your requirements.",
  },
];

const whatsappNumber = "91XXXXXXXXXX";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Lactose Farm, I have a question about your products and delivery."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>

            <div className="flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-primary" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                FAQ
              </span>

            </div>

            <h2 className="mt-4 font-heading text-4xl leading-[1.05] text-text sm:text-5xl lg:text-6xl">
              Before you
              <br />
              <span className="text-primary">
                place an order.
              </span>
            </h2>

          </div>

          <p className="max-w-xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8 lg:ml-auto">
            Quick answers about products, delivery, ordering,
            and everyday dairy use.
          </p>

        </div>

        {/* =====================================================
            FAQ CONTENT
        ====================================================== */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">

          {/* LEFT INFO */}
          <div className="lg:sticky lg:top-24 lg:self-start">

            <div className="rounded-[28px] bg-primary p-7 text-white sm:p-8">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <MessageCircle
                  size={20}
                  strokeWidth={1.7}
                />
              </div>

              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Need help?
              </p>

              <h3 className="mt-2 font-heading text-2xl leading-tight sm:text-3xl">
                Can't find your answer?
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Message our team directly and ask about your
                product, area, or delivery.
              </p>

              <button
                onClick={handleWhatsApp}
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-[10px] bg-white px-5 py-3.5 text-sm font-bold text-primary transition-all duration-200 hover:bg-[#F5F9FF]"
              >
                <MessageCircle size={17} />

                Ask on WhatsApp

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

            </div>

            {/* Small note */}
            <div className="mt-4 px-2">

              <p className="text-xs leading-5 text-text-secondary">
                Have a specific delivery question? Send us your
                area on WhatsApp and we'll confirm availability.
              </p>

            </div>

          </div>

          {/* RIGHT FAQ */}
          <div className="overflow-hidden rounded-[28px] border border-border bg-white">

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`transition-colors duration-300 ${
                    index !== faqs.length - 1
                      ? "border-b border-border"
                      : ""
                  } ${
                    isOpen
                      ? "bg-[#F7FAFF]"
                      : "bg-white"
                  }`}
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(
                        isOpen ? -1 : index
                      )
                    }
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >

                    {/* Number */}
                    <span
                      className={`hidden font-heading text-xl sm:block ${
                        isOpen
                          ? "text-primary"
                          : "text-text/15"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 text-sm font-semibold leading-6 transition-colors sm:text-base ${
                        isOpen
                          ? "text-primary"
                          : "text-text group-hover:text-primary"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Icon */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-[#F3F8FF] text-primary"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </span>

                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="px-5 pb-6 sm:pl-[76px] sm:pr-16">

                        <div className="h-px w-8 bg-primary/20" />

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                          {faq.answer}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

     

      </div>
    </section>
  );
}