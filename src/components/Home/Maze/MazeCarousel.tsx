import { Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecursiveBacktrack } from "./RecursiveBacktrack";

// swiper styles styles]
import "swiper/css";
import "swiper/css/pagination";

export const MazeCarousel = () => {
  return (
    <>
      <h6>Click on a tile to generate a maze!</h6>
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        pagination={{ clickable: true }}
        spaceBetween={-10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        loop
        speed={100}
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        className="w-96 pb-6"
      >
        <SwiperSlide>
          <RecursiveBacktrack description="This is done using Recursive Division!" />
        </SwiperSlide>
        <SwiperSlide>
          <RecursiveBacktrack description="This is done using Recursive Division!" />
        </SwiperSlide>
        <SwiperSlide>
          <RecursiveBacktrack description="This is done using Recursive Division!" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
