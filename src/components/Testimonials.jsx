import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Customer Name",
    location: "Locality",
    review:
      "Approved customer review will appear here once provided by Lactose Farm.",
  },
  {
    id: 2,
    name: "Customer Name",
    location: "Locality",
    review:
      "Approved customer review will appear here once provided by Lactose Farm.",
  },
  {
    id: 3,
    name: "Customer Name",
    location: "Locality",
    review:
      "Approved customer review will appear here once provided by Lactose Farm.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl">

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Customer Reviews
          </span>

          <h2 className="mt-3 font-heading text-4xl text-text sm:text-5xl">
            What our customers say.
          </h2>

          <p className="mt-4 text-sm leading-6 text-text-secondary sm:text-base">
            Real experiences from Lactose Farm customers.
          </p>

        </div>

        {/* Reviews */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-card border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7"
            >

              {/* Quote */}
              <div className="flex items-center justify-between">

                <Quote
                  size={22}
                  className="text-primary"
                />

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      fill="currentColor"
                      className="text-gold"
                    />
                  ))}
                </div>

              </div>

              {/* Review */}
              <p className="mt-6 text-sm leading-7 text-text-secondary">
                “{testimonial.review}”
              </p>

              {/* Customer */}
              <div className="mt-6 border-t border-border pt-5">

                <p className="text-sm font-semibold text-text">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-text-secondary">
                  {testimonial.location}
                </p>

              </div>

            </article>
          ))}

        </div>

        {/* Note */}
        <p className="mt-8 text-center text-xs text-text-secondary">
          Reviews are published with customer permission.
        </p>

      </div>
    </section>
  );
}