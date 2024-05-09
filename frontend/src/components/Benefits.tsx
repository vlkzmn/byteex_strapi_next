import { BenefitsType } from "@/types/Benefits";
import Image from "next/image";
import BenefitsSlider from "./BenefitsSlider";
import BrandsSlider from "./BrandsSlider";
import Button from "./Button";

export default function Benefits({ data }: { data: BenefitsType }) {
  return (
    <div className="bg-gradient-benefits-md min-[1000px]:bg-gradient-benefits w-full pb-16">
      <div className="pt-24">
        <div className="text-center text-xl text-byteex-brands-gray min-[1000px]:mb-6">
          {data.where}
        </div>

        <div className="mb-11 min-[1200px]:[113px]">
          <div className="hidden min-[1000px]:flex justify-between items-center gap-4 my-0 mx-auto mb-[116px] max-w-[1253px] px-5">
            {data.brands.data.map(item => (
              <div key={item.attributes.url} className="w-[200px]">
                <Image
                  src={`http://localhost:1337${item.attributes.url}`}
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
        
        
        <div className="max-w-[1150px] mx-auto my-0 block px-[56px] [grid-template-areas:'title_image'_'list_image'] min-[1000px]:grid min-[1000px]:px-8">
          <h2 className="[grid-area:title] mb-[25px] text-[26px] min-[600px]:text-[32px] text-center leading-10 text-byteex-blue min-[1200px]:mb-[74px] min-[1000px]:text-start">
            {data.title}
          </h2>

          <div className="[grid-area:image] justify-self-end mb-[60px] min-[1000px]:mb-0">
            <BenefitsSlider images={data.images.data} />
          </div>

          <div className="[grid-area:list] flex flex-col gap-[60px] min-[1000px]:gap-5 w-full min-[1000px]:w-[480px]">
            {data.list.map(item => (
              <div key={item.title} className="relative min-[1000px]:after:hidden after:content-[''] after:absolute after:-bottom-[30px] after:left-[0] after:w-full after:h-px after:bg-[rgba(196,_196,_196,_0.5)] after:last:hidden flex flex-col gap-5 min-[1000px]:gap-8 min-[1000px]:flex-row">
                <Image
                  className="self-center min-[1000px]:self-start"
                  src={`http://localhost:1337${item.image.data.attributes.url}`}
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
          <Button text={data.button.title} link={data.button.link} reviewsCount={data.button.reviewsCount} />
        </div>
      </div>
    </div>
  );
}
