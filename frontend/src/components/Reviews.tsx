import Image from 'next/image';
import { ReviewsSlider, ReviewsSliderMD } from '@/components/ReviewsSlider';
import Button from '@/components/Button';
import ReviewsType from '@/types/Reviews';

export default function Reviews({ data }: { data: ReviewsType }) {
  return (
    <div className="pb-[68px] min-[800px]:pb-[110px]">
      <h2 className="mb-6 min-[600px]:mb-8 text-[26px] min-[600px]:text-[32px] text-center leading-10 text-byteex-blue">
        {data.title}
      </h2>

      <p className="max-w-[616px] mx-auto mb-14 px-6 text-center">
        {data.description}
      </p>

      <div className="w-full">
        <Image
          className="mb-[36px] min-[800px]:hidden"
          src={data.imageMobile.data.attributes.url}
          alt={data.imageMobile.data.attributes.alternativeText}
          width={1264}
          height={628}
        />

        <Image
          className="hidden min-[800px]:block mb-[76px]"
          src={data.image.data.attributes.url}
          alt={data.image.data.attributes.alternativeText}
          width={4395}
          height={788}
        />
      </div>

      <div className="hidden min-[840px]:block mb-14">
        <ReviewsSlider reviews={data.reviews} />
      </div>

      <div className="min-[840px]:hidden mb-14">
        <ReviewsSliderMD reviews={data.reviews} />
      </div>

      <div className="min-[800px]:flex justify-center px-7">
        <Button
          text={data.button.title}
          link={data.button.link}
          reviewsCount={data.button.reviewsCount}
        />
      </div>
    </div>
  );
}
