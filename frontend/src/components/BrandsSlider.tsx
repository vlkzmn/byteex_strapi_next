'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';

interface Images {
  attributes: {
    alternativeText: string;
    url: string;
  },
}

export default function BrandsSlider({ images }: { images: Images[] }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-[110px] pt-12 pb-20"
      >
        {images.map(item => (
        <SwiperSlide key={item.attributes.url}>
          <div className='flex justify-center items-center w-full h-full'>
            <Image
              src={`http://localhost:1337${item.attributes.url}`}
              alt={item.attributes.alternativeText}
              width={200}
              height={60}
            />
          </div>          
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
