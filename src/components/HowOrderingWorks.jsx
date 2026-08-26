import {
  ShoppingBasket,
  MessageCircle,
  Truck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShoppingBasket,
    title: "Choose your dairy",
    description:
      "Select the bottle size or dairy product you want for your home.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Message us",
    description:
      "Send your product choice and location on WhatsApp. We confirm availability.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Receive your order",
    description:
      "Once confirmed, your order is delivered according to the available local schedule.",
  },
];

export default function HowOrderingWorks() {
  return (
    <section
      id="ordering"
      className="bg-cream py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              How It Works
            </span>

            <h2 className="mt-3 font-heading text-4xl leading-[1.05] text-text sm:text-5xl">
              Three steps.
              <br />
              <span className="text-primary">
                That's it.
              </span>
            </h2>

          </div>

          <p className="max-w-lg text-sm leading-7 text-text-secondary sm:text-base lg:ml-auto">
            Getting your everyday dairy from Lactose Farm is simple.
            Choose what you need, confirm your area, and we'll take
            care of the rest.
          </p>

        </div>

        {/* Steps */}
        <div className="relative mt-14">

          {/* Vertical Line */}
          <div className="absolute bottom-10 left-[27px] top-10 hidden w-px bg-border sm:block" />

          <div className="space-y-4">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative grid gap-6 rounded-[24px] border border-border bg-white p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-soft sm:grid-cols-[56px_1fr_auto] sm:items-center sm:p-7"
                >

                  {/* Number */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-cream font-heading text-xl text-primary ring-8 ring-cream">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div>

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <Icon
                          size={17}
                          strokeWidth={1.8}
                          className="text-primary"
                        />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                        Step {step.number}
                      </span>

                    </div>

                    <h3 className="mt-4 font-heading text-2xl text-text">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">
                      {step.description}
                    </p>

                  </div>

                  {/* Arrow */}
                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:flex">
                    <ArrowRight size={17} />
                  </div>

                </article>
              );
            })}

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex flex-col gap-4 rounded-[24px] border border-primary/10 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
              Ready to start?
            </p>

            <h3 className="mt-1 font-heading text-2xl text-text">
              Check if we deliver to you.
            </h3>

          </div>

          <a
            href="#delivery"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-[10px] bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-soft"
          >
            Check Delivery Area

            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}