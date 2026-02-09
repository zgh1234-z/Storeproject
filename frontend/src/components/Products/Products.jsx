import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Products.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../card/Card";

function Products() {
  const Cards = [
    {
      id: 1,
      title: "فرش ماشینی کرامتیان بلوچی A زمینه لاکی",
      price: 12000000,
      image: "/images/download-1.webp",
    },
    {
      id: 2,
      title: "فرش ماشینی دنیای فرش مدل روشنک سنتی ",
      price: 35000000,
      image: "/images/download-3.webp",
    },
    {
      id: 3,
      title: "فرش ماشینی دنیای فرش مدل غوغا سنتی ",
      price: 2500000,
      image: "/images/download-4.webp",
    },
    {
      id: 4,
      title: "فرش ماشینی دنیای فرش مدل گیشه سنتی ",
      price: 2500000,
      image: "/images/download-5.webp",
    },
    {
      id: 5,
      title: "فرش ماشینی دنیای فرش مدل جیران ",
      price: 2500000,
      image: "/images/download-1.webp",
    },
    {
      id: 6,
      title: "فرش ماشینی مدل فانوس سنتی ",
      price: 500000,
      image: "/images/download-4.webp",
    },
  ];

  return (
    <div className="products">
      <h2>محصولات پرطرفدار</h2>;
      <Swiper
        className="sw"
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 4 },
          2560: { slidesPerView: 5 },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
      >
        {Cards.map((index) => (
          <SwiperSlide className="Swiper" id={index.id}>
            <Card title={index.title} price={index.price} image={index.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Products;
