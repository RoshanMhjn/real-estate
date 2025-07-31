import { useState } from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Property Sales",
    description:
      "Buy or sell homes and land with confidence through expert guidance and verified listings.",
    image: "https://images.pexels.com/photos/7031400/pexels-photo-7031400.jpeg",
  },
  {
    title: "Renting Services",
    description:
      "Browse quality rentals or list your property with ease — for tenants and landlords alike.",
    image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
  },
  {
    title: "Advertising",
    description:
      "Reach more buyers and renters through our targeted, modern marketing strategies.",
    image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
  },
  {
    title: "Real Estate Consulting",
    description:
      "Get market insights and expert advice tailored to your property investment goals.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
  {
    title: "Legal Support",
    description:
      "Navigate complex paperwork and real estate law with full legal guidance and support.",
    image: "https://images.pexels.com/photos/4386369/pexels-photo-4386369.jpeg",
  },
  {
    title: "Property Management",
    description:
      "Sit back while we handle maintenance, rent collection, and tenant care for your property.",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
  },
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="px-4 lg:px-40 py-10 text-center bg-gray-50">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Swiper Card */}
        <Swiper
          effect="cards"
          grabCursor
          modules={[EffectCards]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-80 h-96"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full overflow-hidden  shadow-md"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white p-4">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col gap-5">
          <div className="bg-gray-200 rounded-xl p-6 text-left w-full  md:w-[500px] h-52 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-orange-500 mb-2">
                {services[activeIndex].title}
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                {services[activeIndex].description}
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-white"
            ref={ref}
          >
            <div className="bg-orange-500 rounded-lg p-4 shadow-md text-center">
              <div className="text-3xl font-bold">
                {inView && <CountUp end={2000} duration={2} />}+
              </div>
              <p className="text-sm">Customers</p>
            </div>
            <div className="bg-blue-500 rounded-lg p-4 shadow-md text-center">
              <div className="text-3xl font-bold">
                {inView && <CountUp end={900} duration={2} />}+
              </div>
              <p className="text-sm">Listings</p>
            </div>
            <div className="bg-green-600 rounded-lg p-4 shadow-md text-center">
              <div className="text-3xl font-bold">
                {inView && <CountUp end={9} duration={4} />}+
              </div>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
