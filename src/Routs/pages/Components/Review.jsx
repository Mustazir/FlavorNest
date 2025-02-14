import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Title from "../../../Shared/title";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="mb-11">
      <Title
        heading={"TESTIMONIALS"}
        subheading={"What Our Clients Say"}
      ></Title>

      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
      >
        {reviews.map((review) => (
          <SwiperSlide review={review} key={review._id}>
            <div className="mx-auto text-center items-center justify-center flex flex-col gap-4 ">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />

              <div className="px-16">
                <h3 className="font-extrabold text-8xl">"</h3>
                <p className="text-xl font-normal">{review.details}</p>
                <h3 className="text-3xl text-yellow-600 font-semibold">{review.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
