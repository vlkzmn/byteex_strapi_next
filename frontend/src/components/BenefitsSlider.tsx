'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../app/globals.css';
import 'swiper/css/thumbs';

import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { suisse } from '@/utils/fonts';

interface Images {
  attributes: {
    alternativeText: string;
    url: string;
  },
}

export default function BenefitsSlider({ images }: { images: Images[] }) {
  const navigation = {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique'
  }

  return (
    <div className='relative'>
      <Swiper
        navigation={navigation}
        modules={[Navigation, Pagination]}
        // pagination={true}
        className="w-full h-auto min-[530px]:w-[433px]"
      >
        {images.map(item => (
          <SwiperSlide key={item.attributes.url}>
            <Image
              src={`http://localhost:1337${item.attributes.url}`}
              alt={item.attributes.alternativeText}
              width={433}
              height={648}
            />
            <div className={`${suisse.className} mt-2 text-[13px] text-center leading-[22px]`}>
              {item.attributes.alternativeText}
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
