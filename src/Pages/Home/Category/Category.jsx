// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import image
import image1 from "../../../assets/home/slide1.webp";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../Components/Container/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
      <div>
        <section>
          <SectionTitle
            SubHeading={"From 11:00am to 10:00pm"}
            Heading={"ORDER ONLINE"}
          ></SectionTitle>
        </section>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper text-center mb-24 "
        >
          <SwiperSlide>
            <img src={image1} alt="" />
            <p className="text-black text-4xl text-center -mt-16 font-inter">
              SALADS
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Category;
