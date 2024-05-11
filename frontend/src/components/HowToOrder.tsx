/* eslint-disable @next/next/no-img-element */
import HowToOrderSlider from '@/components/HowToOrderSlider';
import Button from '@/components/Button';
import HowToOrderType from '@/types/HowToOrder';

export default function HowToOrder({ data }: { data: HowToOrderType }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="max-w-[1120px] mx-auto py-[56px] px-8 min-[600px]:py-[76px]">
      <h2 className="mb-6 min-[600px]:mb-[44px] text-[26px] min-[600px]:text-[32px] text-center leading-10 text-byteex-blue">
        {data.title}
      </h2>

      <div className="hidden min-[680px]:flex justify-between mb-10">
        {data.cards.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-center items-center w-[31%] py-[70px] px-8 bg-byteex-gray even:bg-byteex-bage rounded-lg"
          >
            <div className="flex justify-center items-center w-[70px] h-[70px] ">
              <img
                src={baseUrl + item.image.data.attributes.url}
                alt={item.image.data.attributes.alternativeText}
              />
            </div>

            <div className="mb-4 text-[22px] text-byteex-blue">
              {item.title}
            </div>

            <div className="text-[15px] text-center">{item.description}</div>
          </div>
        ))}
      </div>

      <div className="min-[680px]:hidden [grid-area:image] justify-self-end mb-10 px-5">
        <HowToOrderSlider cards={data.cards} />
      </div>

      <div className="min-[800px]:flex justify-center">
        <Button
          text={data.button.title}
          link={data.button.link}
          reviewsCount={data.button.reviewsCount}
        />
      </div>
    </div>
  );
}
