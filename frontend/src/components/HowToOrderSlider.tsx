'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Image as ImageType } from '@/types/Image';
import 'swiper/css';
import 'swiper/css/navigation';

interface Cards {
  title: string;
  description: string;
  image: ImageType;
}

export default function HowToOrderSlider({ cards }: { cards: Cards[] }) {
  const navigation = {
    nextEl: '.next-unique-order',
    prevEl: '.prev-unique-order',
  };

  return (
    <div className="relative">
      <Swiper
        navigation={navigation}
        modules={[Navigation]}
        className="w-full h-auto min-[530px]:w-[433px]"
      >
        {cards.map((item) => (
          <SwiperSlide key={item.title}>
            <div
              key={item.title}
              className="flex flex-col justify-center items-center py-[70px] px-8 bg-byteex-gray rounded-lg"
            >
              <Image
                src={item.image.data.attributes.url}
                alt={item.image.data.attributes.alternativeText}
                width={70}
                height={70}
              />

              <div className="mb-4 text-[22px] text-byteex-blue">
                {item.title}
              </div>

              <div className="text-[15px] text-center">{item.description}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-unique icon-next next-unique-order -translate-x-5" />
      <div className="swiper-button-unique icon-prev prev-unique-order right-0 translate-x-5" />
    </div>
  );
}
