import Image from 'next/image';
import BenefitsSlider from '@/components/BenefitsSlider';
import BrandsSlider from '@/components/BrandsSlider';
import Button from '@/components/Button';
import BenefitsType from '@/types/Benefits';

export default function Benefits({ data }: { data: BenefitsType }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="w-full pb-16 bg-gradient-benefits-up-down min-[1000px]:bg-gradient-benefits-up">
      <div className="pt-24">
        <div className="mb-4 text-center text-xl text-byteex-brands-gray min-[1000px]:mb-6 max-[1000px]:translate-y-6">
          {data.where}
        </div>

        <div className="mb-11">
          <div className="hidden min-[1000px]:flex justify-between items-center gap-8 max-w-[1253px] my-0 mx-auto mb-[116px] px-5">
            {data.brands.data.map((item) => (
              <div key={item.attributes.url} className="w-[200px]">
                <Image
                  src={baseUrl + item.attributes.url}
                  alt={item.attributes.alternativeText}
                  width={200}
                  height={60}
                />
              </div>
            ))}
          </div>

          <div className="block min-[1000px]:hidden px-3">
            <BrandsSlider images={data.brands.data} />
          </div>
        </div>

        <div className="max-w-[1150px] mx-auto my-0 block px-[56px] min-[1000px]:grid [grid-template-areas:'title_image'_'list_image'] min-[1000px]:px-8">
          <h2 className="[grid-area:title] mb-[25px] text-[26px] min-[600px]:text-[32px] text-center leading-10 text-byteex-blue min-[1000px]:text-start min-[1200px]:mb-[74px]">
            {data.title}
          </h2>

          <div className="[grid-area:image] justify-self-end mb-[60px] min-[1000px]:mb-0">
            <BenefitsSlider images={data.images.data} />
          </div>

          <div className="[grid-area:list] flex flex-col gap-[60px] min-[1000px]:gap-5 w-full min-[1000px]:w-[480px]">
            {data.list.map((item) => (
              <div
                key={item.title}
                className="relative min-[1000px]:after:hidden after:content-[''] after:absolute after:-bottom-[30px] after:left-[0] after:w-full after:h-px after:bg-[rgba(196,_196,_196,_0.5)] after:last:hidden flex flex-col gap-5 min-[1000px]:gap-8 min-[1000px]:flex-row"
              >
                <Image
                  className="self-center min-[1000px]:self-start"
                  src={baseUrl + item.image.data.attributes.url}
                  alt={item.image.data.attributes.alternativeText}
                  width={42}
                  height={42}
                />

                <div>
                  <div className="mb-[14px] text-xl text-center text-byteex-blue min-[1000px]:text-start">
                    {item.title}
                  </div>

                  <div className="text-[15px] leading-[23px] text-center min-[1000px]:text-start">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="min-[800px]:hidden mt-10 mx-6">
          <Button
            text={data.button.title}
            link={data.button.link}
            reviewsCount={data.button.reviewsCount}
          />
        </div>
      </div>
    </div>
  );
}
