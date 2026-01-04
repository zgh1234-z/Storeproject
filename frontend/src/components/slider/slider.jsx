import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slider() {
  return (

        <div>
          <h2>SLIDER TEST</h2>
          <Swiper
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            spaceBetween={20}
            slidesPerView={2}
          >
            <SwiperSlide>
              <img src="/slide1.jpg" alt="slide1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slide2.jpg" alt="slide2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slide3.jpg" alt="slide3" />
            </SwiperSlide>
          </Swiper>
        </div>
  );
}

export default Slider;
