/* eslint-disable @next/next/no-img-element */
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Image as ImageType } from '@/types/Image';

interface Cards {
  title: string | null;
  description: string;
  image: ImageType;
};

export default function CallToActionSlider({ cards }: { cards: Cards[] }) {
  const navigation = {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique'
  }

  return (
    <div className='relative'>
      <Swiper
        navigation={navigation}
        modules={[Navigation]}
        className="w-full h-auto min-[530px]:w-[433px]"
      >
        {cards.map(item => (
          <SwiperSlide key={item.title}>
            <div key={item.title} className="flex flex-col justify-center items-center py-[70px] px-8 bg-byteex-gray even:bg-byteex-bage rounded-lg">
              <div className="w-[70px] h-[70px] flex justify-center items-center">
                <img 
                  src={`http://localhost:1337${item.image.data.attributes.url}`} 
                  alt={item.image.data.attributes.alternativeText} 
                />
              </div>            

              <div className="mb-4 text-[22px] text-byteex-blue">
                {item.title}
              </div>

              <div className="text-[15px] text-center">
                {item.description}
              </div>
            </div>         
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next-unique cursor-pointer absolute top-1/2 -translate-x-5">
        <Image
          src='./arrow-left.svg'
          alt='arrow left'
          width={10}
          height={19}
        />
      </div>

      <div className="swiper-button-prev-unique cursor-pointer absolute top-1/2 right-0 translate-x-5">
        <Image
          src='./arrow-right.svg'
          alt='arrow left'
          width={10}
          height={19}
        />
      </div>
    </div>    
  );
}
