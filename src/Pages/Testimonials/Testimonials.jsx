import { useEffect, useState } from "react";
import SectionTitle from "../../Components/Container/SectionTitle/SectionTitle";

// React rating import
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="py-24">
      <div>
        <SectionTitle
          SubHeading={"What Our Client Say"}
          Heading={"Testimonials"}
        ></SectionTitle>
      </div>

      <div>
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center text-justify px-16 md:px-24 my-10 space-y-5">
                <div>
                  <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                </div>
                <span>
                  <FaQuoteLeft className="text-5xl " />
                </span>
                <p className="text-sm lg:text-lg">{review.details}</p>
                <h3 className="text-[#CD9003] text-3xl">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
