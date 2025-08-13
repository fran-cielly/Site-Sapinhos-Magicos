import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MySlider() {
  return (
    <section id="slider" className="flex-grow bg-(--my-blue) flex items-center">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20} // espaço entre slides
        slidesPerView={1} // quantos slides aparecem por vez
        navigation // ativa setas
        pagination={{ clickable: true }} // ativa bolinhas
      >
        <SwiperSlide>
          <div className="bg-red-500 h-64 flex items-center justify-center text-white text-2xl">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-500 h-64 flex items-center justify-center text-white text-2xl">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 h-64 flex items-center justify-center text-white text-2xl">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
