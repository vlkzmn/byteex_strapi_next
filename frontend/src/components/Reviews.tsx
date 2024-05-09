import { ReviewsType } from "@/types/Reviews";
import Image from "next/image";
import { ReviewsSlider, ReviewsSliderMD } from "./ReviewsSlider";
import Button from "./Button";

export default function Reviews({ data }: { data: ReviewsType }) {
  console.log(data);
  return (
    <div className="pb-[110px]">
      <h2 className="mb-6 min-[600px]:mb-8 text-[26px] min-[600px]:text-[32px] text-center leading-10 text-byteex-blue">
        {data.title}
      </h2>

      <p className="max-w-[616px] mx-auto px-6 mb-14 text-center">
        {data.description}
      </p>

      <div className="w-full">
        <Image
          className="mb-[36px] min-[800px]:hidden"
          src={`http://localhost:1337${data.imageMobile.data.attributes.url}`}
          alt={data.imageMobile.data.attributes.alternativeText}
          width={1264}
          height={628}
        />

        <Image
          className="hidden min-[800px]:block mb-[76px]"
          src={`http://localhost:1337${data.image.data.attributes.url}`}
          alt={data.image.data.attributes.alternativeText}
          width={4395}
          height={788}
        />
      </div>

      <div className="hidden min-[840px]:block mb-14">
        <ReviewsSlider reviews={data.reviews}/>
      </div>

      <div className="min-[840px]:hidden mb-14">
        <ReviewsSliderMD reviews={data.reviews}/>
      </div>

      <div className="min-[800px]:flex justify-center px-7">
        <Button text={data.button.title} link={data.button.link} reviewsCount={data.button.reviewsCount} />
      </div>
    </div>
  );
}
