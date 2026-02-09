import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slider() {
  return (
    <div>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
      >
        <SwiperSlide>
          <img src="/images/slide1.webp" alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide2.webp" alt="slide2" />
        </SwiperSlide>
        {/* <SwiperSlide> */}
        {/* <img src="/images/slide3.webp" alt="slide3" /> */}
        {/* </SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default Slider;
