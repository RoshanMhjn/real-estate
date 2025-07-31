import { testimonials } from "../lib/helper";
import type { Testimonial } from "../types/testimonial";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="relative px-4 lg:px-40 py-10  overflow-visible">
      <h2 className="text-4xl font-bold mb-6 text-center">
        What Our Clients Say About Us
      </h2>

      <div className="flex justify-center mb-4">
        <Quote className="w-20 h-20 text-orange-500 opacity-40" />
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 4000000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation, Autoplay]}
        className="mx-auto relative"
      >
        {testimonials.map((testimonial: Testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col md:flex-row items-center gap-5 p-10 md:px-20 md:py-10 rounded-xl  min-h-[350px]">
              <div className="w-44 h-44 min-w-[176px] rounded-lg overflow-hidden shadow-md">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left md:bg-gray-200 rounded-lg p-5 lg:p-10">
                <p className="text-gray-600 mb-4 italic text-lg md:text-3xl leading-relaxed md:leading-10">
                  "{testimonial.message}"
                </p>
                <h4 className="text-lg md:text-2xl font-bold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm md:text-lg text-gray-500">
                  {testimonial.address}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
