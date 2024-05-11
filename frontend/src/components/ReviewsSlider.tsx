'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Image as Foto } from '@/types/Image';
import { suisse } from '@/utils/fonts/fonts';
import 'swiper/css';
import 'swiper/css/navigation';

interface Review {
  name: string;
  text: string;
  foto: Foto;
}

function Stars() {
  return <Image src="/stars.svg" alt="stars" width={60} height={10} />;
}

export function ReviewsSlider({ reviews }: { reviews: Review[] }) {
  const navigation = {
    nextEl: '.next-unique-review',
    prevEl: '.prev-unique-review',
  };

  return (
    <div className="relative max-w-[1200px] mx-auto px-20">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={navigation}
        modules={[Navigation]}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.name}>
            <div
              key={item.name}
              className="px-9 py-7 m-1.5 rounded-xl border border-byteex-gray-border shadow-byteex-review bg-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.foto.data.attributes.url}
                  alt={item.foto.data.attributes.alternativeText}
                  width={40}
                  height={40}
                />

                <div>
                  <Stars />

                  <div className="text-[15px]">{item.name}</div>
                </div>
              </div>

              <div
                className={`${suisse.className} text-xs text-byteex-text-gray leading-[23px]`}
              >
                {item.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-unique icon-next next-unique-review -translate-x-[50px]" />
      <div className="swiper-button-unique icon-prev prev-unique-review right-0 -translate-x-[30px]" />
    </div>
  );
}

export function ReviewsSliderMD({ reviews }: { reviews: Review[] }) {
  const navigation = {
    nextEl: '.next-unique-reviewMD',
    prevEl: '.prev-unique-reviewMD',
  };

  return (
    <div className="relative max-w-[1160px] mx-auto px-20">
      <Swiper
        navigation={navigation}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.name}>
            <div
              key={item.name}
              className="px-9 py-7 m-1.5 mb-10 rounded-xl border border-byteex-gray-border shadow-byteex-review bg-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.foto.data.attributes.url}
                  alt={item.foto.data.attributes.alternativeText}
                  width={40}
                  height={40}
                />

                <div>
                  <Stars />

                  <div className="text-[15px]">{item.name}</div>
                </div>
              </div>

              <div
                className={`${suisse.className} text-xs text-byteex-text-gray leading-[23px]`}
              >
                {item.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-unique icon-next next-unique-reviewMD -translate-x-[50px]" />
      <div className="swiper-button-unique icon-prev prev-unique-reviewMD right-0 -translate-x-[30px]" />
    </div>
  );
}
