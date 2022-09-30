// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default ({ children }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={25}
      slidesPerView={1}
      grabCursor={true}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }}
      className="pb-5"
    >
      {children}
    </Swiper>
  );
};
