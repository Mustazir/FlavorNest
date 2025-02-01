import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import s1 from "../../../assets/assets/home/slide1.jpg";
import s2 from "../../../assets/assets/home/slide2.jpg";
import s3 from "../../../assets/assets/home/slide3.jpg";
import s4 from "../../../assets/assets/home/slide4.jpg";
import s5 from "../../../assets/assets/home/slide5.jpg";
import Title from "../../../Shared/title";

const Catagory = () => {
  return (
    <section className="my-10">
        <Title heading={'ORDER ONLINE'}
        subheading={'From 11:00am to 10:00pm'}></Title>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src={s1} alt="aaaaa" />
          <h3 className="text-2xl font-semibold -mt-12 text-green-950 text-center uppercase">Salad</h3>
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={s2} alt="aaaaa" />
          <h3 className="text-2xl font-semibold -mt-12 text-green-600 text-center uppercase">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={s3} alt="aaaaa" />
          <h3 className="text-2xl font-semibold -mt-12 text-green-950 text-center uppercase">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={s4} alt="aaaaa" />
          <h3 className="text-2xl font-semibold -mt-12 text-green-950 text-center uppercase">Dessert</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={s5} alt="aaaaa" />
          <h3 className="text-2xl font-semibold -mt-12 text-green-950 text-center uppercase">Salad</h3>
          
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Catagory;
