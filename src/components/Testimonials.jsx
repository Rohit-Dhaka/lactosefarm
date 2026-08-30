
import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper base styles
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Customer Name",
    location: "Locality",
    review:
      "Approved customer review will appear here once provided by Yogesh Dairy Farm.",
  },
  {
    id: 2,
    name: "Customer Name",
    location: "Locality",
    review:
      "Approved customer review will appear here once provided by Yogesh Dairy Farm.",
  },
  {
    id: 3,
    name: "Customer Name",
    location: "Locality",
    review:
      "Approved customer review will appear here once provided by Yogesh Dairy Farm.",
  },
  {
    id: 4,
    name: "Customer Name",
    location: "Locality",
    review:
      "Approved customer review will appear here once provided by Yogesh Dairy Farm.",
  },
  {
    id: 5,
    name: "Customer Name",
    location: "Locality",
    review:
      "Approved customer review will appear here once provided by Yogesh Dairy Farm.",
  },
  {
    id: 6,
    name: "Customer Name",
    location: "Locality",
    review:
      "Approved customer review will appear here once provided by Yogesh Dairy Farm.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-cream py-20 sm:py-24">
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
            Real experiences from Yogesh Dairy Farm customers.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!px-1 !py-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <article className="flex h-full flex-col justify-between rounded-card border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7">
                  
                  {/* Top content */}
                  <div>
                    {/* Quote & Rating */}
                    <div className="flex items-center justify-between">
                      <Quote size={22} className="text-primary" />
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

                    {/* Review text */}
                    <p className="mt-6 text-sm leading-7 text-text-secondary">
                      “{testimonial.review}”
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="text-sm font-semibold text-text">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-xs text-text-secondary">
                      {testimonial.location}
                    </p>
                  </div>

                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      

      </div>
    </section>
  );
}
