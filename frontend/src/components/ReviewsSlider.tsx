'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Image as ImageType } from '@/types/Image';
import { suisse } from '@/utils/fonts';

interface Review {
  name: string | null;
  text: string;
  foto: ImageType;
};

export function ReviewsSlider({ reviews }: { reviews: Review[] }) {
  const navigation = {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique'
  }

  return (
    <div className='relative px-20 max-w-[1200px] mx-auto'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={navigation}
        modules={[Navigation]}
      >
        {reviews.map(item => (
          <SwiperSlide key={item.name}>
            <div key={item.name} className="px-9 py-7 m-1.5 rounded-xl border border-byteex-gray-border shadow-byteex-review bg-white">
              <div className="flex items-center gap-4 mb-4">
                <Image
                    src={`http://localhost:1337${item.foto.data.attributes.url}`} 
                    alt={item.foto.data.attributes.alternativeText} 
                    width={40}
                    height={40}
                  />

                <div>
                  <Image
                    src='/stars.svg'
                    alt="stars"
                    width={60}
                    height={10}
                  />

                  <div className="text-[15px]">
                    {item.name}
                  </div>
                </div>
              </div>

              <div className={`${suisse.className} text-[12px] text-byteex-text-gray leading-[23px]`}>
                {item.text}
              </div>
            </div>         
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next-unique cursor-pointer absolute top-1/2 -translate-x-[50px]">
        <Image
          src='./arrow-left.svg'
          alt='arrow left'
          width={10}
          height={19}
        />
      </div>

      <div className="swiper-button-prev-unique cursor-pointer absolute top-1/2 right-0 -translate-x-[30px]">
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

export function ReviewsSliderMD({ reviews }: { reviews: Review[] }) {
  const navigation = {
    nextEl: '.swiper-button-next-unique-review',
    prevEl: '.swiper-button-prev-unique-review'
  }

  return (
    <div className='relative px-20 max-w-[1160px] mx-auto'>
      <Swiper
        navigation={navigation}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
        className="w-full pb-10"
      >
        {reviews.map(item => (
          <SwiperSlide key={item.name}>
            <div key={item.name} className="px-9 py-7 m-1.5 rounded-xl border border-byteex-gray-border shadow-byteex-review bg-white">
              <div className="flex items-center gap-4 mb-4">
                <Image
                    src={`http://localhost:1337${item.foto.data.attributes.url}`} 
                    alt={item.foto.data.attributes.alternativeText} 
                    width={40}
                    height={40}
                  />

                <div>
                  <Image
                    src='/stars.svg'
                    alt="stars"
                    width={60}
                    height={10}
                  />

                  <div className="text-[15px]">
                    {item.name}
                  </div>
                </div>
              </div>

              <div className={`${suisse.className} text-[12px] text-byteex-text-gray leading-[23px]`}>
                {item.text}
              </div>
            </div>         
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next-unique-review cursor-pointer absolute top-1/2 -translate-x-[50px]">
        <Image
          src='./arrow-left.svg'
          alt='arrow left'
          width={10}
          height={19}
        />
      </div>

      <div className="swiper-button-prev-unique-review cursor-pointer absolute top-1/2 right-0 -translate-x-[30px]">
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
