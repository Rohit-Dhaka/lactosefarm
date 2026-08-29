import {
  ShieldCheck,
  Clock3,
  Droplets,
  FlaskConical,
  RotateCcw,    
  BadgeCheck,
} from "lucide-react";

const whatsappNumber = "918080822038";

const handleWhatsApp = () => {
  const message = encodeURIComponent(
    "Hello Lactose Farm, I would like to know more about your buffalo milk and quality practices."
  );

  window.open(
    `https://wa.me/${whatsappNumber}?text=${message}`,
    "_blank"
  );
};

const qualityPoints = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Lab Quality Tested",
    short: "Quality testing",
  },
  {
    icon: Droplets,
    number: "02",
    title: "Pure & Natural",
    short: "Pure & natural",
  },
  {
    icon: FlaskConical,
    number: "03",
    title: "No Added Water",
    short: "No added water",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Preservative Free",
    short: "No preservatives",
  },
];

const handlingSteps = [
  {
    icon: Clock3,
    number: "01",
    title: "Boil",
    heading: "Within 30 minutes",
    description:
      "Boil the milk within 30 minutes of delivery, as instructed on the product label.",
  },
  {
    icon: Droplets,
    number: "02",
    title: "Clean",
    heading: "After every use",
    description:
      "Gently clean the bottle after use to keep it ready for the next delivery.",
  },
  {
    icon: RotateCcw,
    number: "03",
    title: "Return",
    heading: "Next delivery",
    description:
      "Return the bottle when your next delivery arrives.",
  },
];

export default function WhyLactoseFarm() {
  return (
    <section
      id="promise"
      className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          <div>

            <div className="flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-primary" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Our Quality Promise
              </span>

            </div>

            <h2 className="mt-5 max-w-4xl font-heading text-4xl leading-[1.02] tracking-tight text-text sm:text-5xl lg:text-7xl">
              Clear information.
              <br />

              <span className="text-primary">
                Simple standards.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-base leading-7 text-text-secondary sm:text-lg sm:leading-8 lg:ml-auto">
            We keep the important product and handling information
            simple, visible, and easy to understand.
          </p>

        </div>

        {/* =====================================================
            QUALITY SECTION
        ====================================================== */}
        <div className="mt-14 overflow-hidden rounded-[32px] border border-border bg-white">

          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

            {/* Intro */}
            <div className="relative overflow-hidden bg-primary p-7 text-white sm:p-10 lg:p-12">

                <div className="">

            <div className="flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BadgeCheck
                  size={24}
                  className="text-primary"
                  strokeWidth={1.7}
                />
              </div>

              <span className="font-heading text-6xl leading-none text-primary/10">
                F
              </span>

            </div>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Regulatory Information
            </p>

            <h3 className="mt-2 font-heading text-3xl text-white sm:text-4xl">
              FSSAI Registration
            </h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
              Display the exact FSSAI registration information
              from the business certificate.
            </p>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#F3F8FF] px-5 py-4">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-wider text-text-secondary">
                  FSSAI Reg. No.
                </p>

                <p className="mt-1 text-sm font-bold text-text">
                  To be confirmed
                </p>

              </div>

              <BadgeCheck
                size={22}
                className="text-primary"
              />

            </div>

          </div>

            </div>

            {/* Quality Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2">

              {qualityPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.number}
                    className={`group relative p-7 transition-all duration-300 hover:bg-[#F5F9FF] sm:p-9 ${
                      index < 2
                        ? "border-b border-border"
                        : ""
                    } ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-border"
                        : ""
                    }`}
                  >

                    <div className="flex items-start justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                          className="text-primary transition-colors duration-300 group-hover:text-white"
                        />
                      </div>

                      <span className="font-heading text-5xl leading-none text-primary/10">
                        {point.number}
                      </span>

                    </div>

                    <h4 className="mt-8 font-heading text-2xl text-text">
                      {point.title}
                    </h4>

                    <p className="mt-2 text-sm text-text-secondary">
                      {point.short}
                    </p>

                    <div className="mt-6 h-1 w-8 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-14 group-hover:bg-primary" />

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* =====================================================
            FSSAI + PRODUCT INFORMATION
        ====================================================== */}
      

        {/* =====================================================
            HANDLING
        ====================================================== */}
        <div className="mt-20 sm:mt-24">

          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                After Delivery
              </p>

              <h3 className="mt-3 font-heading text-3xl leading-tight text-text sm:text-4xl">
                Take care of
                <br />
                your bottle.
              </h3>

            </div>

            <p className="max-w-md text-sm leading-6 text-text-secondary lg:ml-auto">
              Follow the handling instructions provided on the
              product packaging after your milk is delivered.
            </p>

          </div>

          {/* Steps */}
          <div className="mt-10 overflow-hidden rounded-[30px] border border-border bg-white">

            <div className="grid md:grid-cols-3">

              {handlingSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className={`relative p-7 sm:p-9 ${
                      index !== handlingSteps.length - 1
                        ? "border-b md:border-b-0 md:border-r border-border"
                        : ""
                    }`}
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                        <Icon
                          size={21}
                          className="text-white"
                          strokeWidth={1.8}
                        />
                      </div>

                      <span className="font-heading text-5xl text-primary/10">
                        {step.number}
                      </span>

                    </div>

                    <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      Step {step.number}
                    </p>

                    <h4 className="mt-2 font-heading text-2xl text-text">
                      {step.heading}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-text-secondary">
                      {step.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

    

      </div>
    </section>
  );
}