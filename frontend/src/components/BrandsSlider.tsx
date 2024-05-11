'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { ImageInArray } from '@/types/Image';
import 'swiper/css';
import 'swiper/css/pagination';

export default function BrandsSlider({ images }: { images: ImageInArray[] }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={16}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[130px]"
    >
      {images.map((item) => (
        <SwiperSlide key={item.attributes.url}>
          <div className="flex justify-around items-center h-full">
            <Image
              src={baseUrl + item.attributes.url}
              alt={item.attributes.alternativeText}
              width={200}
              height={60}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
