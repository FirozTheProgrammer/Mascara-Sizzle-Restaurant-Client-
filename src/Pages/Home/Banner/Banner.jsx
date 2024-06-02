import banner1 from "../../../assets/home/01.webp";
import banner2 from "../../../assets/home/02.webp";
import banner3 from "../../../assets/home/03.webp";
import banner4 from "../../../assets/home/04.webp";
import banner5 from "../../../assets/home/05.webp";
import banner6 from "../../../assets/home/06.webp";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <>
      <Carousel
        className="text-center"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div className="">
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner3} />
        </div>
        <div>
          <img src={banner4} />
        </div>
        <div>
          <img src={banner5} />
        </div>
        <div>
          <img src={banner6} />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
