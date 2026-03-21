import { Swiper, SwiperSlide } from 'swiper/react';
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JS from "../assets/js.png"
import REACT from "../assets/react.png"
import PHP from "../assets/php.png"
import SQL from "../assets/sql.png"
import JAVA from "../assets/java.png"
import ANGULAR from "../assets/angular.png"
import TYPESCRIPT from "../assets/typescript.png"
import C from "../assets/c.png"
import BOOTSTRAP from "../assets/bootstrap.png"
import TAILWIND from "../assets/tailwind.png"
import NODEJS from "../assets/nodejs.png"

import 'swiper/css';
import 'swiper/css/navigation';
import '../css/mySwiper.css';

import { Navigation } from 'swiper/modules';

export default function MySwiper() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView="auto"
      spaceBetween={10}
      rewind={true}
      className="mySwiper"
    >
      <SwiperSlide><img src={HTML} alt="HTML" /></SwiperSlide>
      <SwiperSlide><img src={CSS} alt="CSS" /></SwiperSlide>
      <SwiperSlide><img src={JS} alt="JavaScript" /></SwiperSlide>
      <SwiperSlide><img src={REACT} alt="React" /></SwiperSlide>
      <SwiperSlide><img src={PHP} alt="PHP" /></SwiperSlide>
      <SwiperSlide><img src={SQL} alt="SQL" /></SwiperSlide>
      <SwiperSlide><img src={JAVA} alt="Java" /></SwiperSlide>
      <SwiperSlide><img src={ANGULAR} alt="Angular" /></SwiperSlide>
      <SwiperSlide><img src={TYPESCRIPT} alt="TypeScript" /></SwiperSlide>
      <SwiperSlide><img src={C} alt="C" /></SwiperSlide>
      <SwiperSlide><img src={BOOTSTRAP} alt="Bootstrap" /></SwiperSlide>
      <SwiperSlide><img src={NODEJS} alt="Node.js" /></SwiperSlide>
      <SwiperSlide><img src={TAILWIND} alt="Tailwind" /></SwiperSlide>
    </Swiper>
  );
}