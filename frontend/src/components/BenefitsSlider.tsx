'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { suisse } from '@/utils/fonts/fonts';
import { ImageInArray } from '@/types/Image';
import 'swiper/css';
import 'swiper/css/navigation';

export default function BenefitsSlider({ images }: { images: ImageInArray[] }) {
  const navigation = {
    nextEl: '.next-unique-benefits',
    prevEl: '.prev-unique-benefits',
  };

  return (
    <div className="relative">
      <Swiper
        navigation={navigation}
        modules={[Navigation]}
        className="w-full h-auto min-[530px]:w-[433px]"
      >
        {images.map((item) => (
          <SwiperSlide key={item.attributes.url}>
            <Image
              src={item.attributes.url}
              alt={item.attributes.alternativeText}
              width={433}
              height={648}
            />
            <div
              className={`${suisse.className} mt-2 text-[13px] text-center leading-[22px]`}
            >
              {item.attributes.alternativeText}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-unique icon-next next-unique-benefits -translate-x-5" />
      <div className="swiper-button-unique icon-prev prev-unique-benefits right-0 translate-x-5" />
    </div>
  );
}
