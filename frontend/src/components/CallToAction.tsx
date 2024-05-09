/* eslint-disable @next/next/no-img-element */
import { CallToActionType } from "@/types/CallToAction";
import CallToActionSlider from "./CallToActionSlider";

export default function CallToAction({ data }: { data: CallToActionType }) {
  return (
    <div className="max-w-[1120px] mx-auto py-[56px] px-8 min-[600px]:py-[76px]">
      <h2 className="mb-6 min-[600px]:mb-[44px] text-[26px] min-[600px]:text-[32px] text-center leading-10 text-byteex-blue">
        {data.title}
      </h2>

      <div className="hidden min-[680px]:flex justify-between">
        {data.cards.map(item => (
          <div key={item.title} className="flex flex-col justify-center items-center w-[31%] py-[70px] px-8 bg-byteex-gray even:bg-byteex-bage rounded-lg">
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
        ))}
      </div> 

      <div className="min-[680px]:hidden [grid-area:image] justify-self-end mb-[60px] px-5 min-[1000px]:mb-0">
        <CallToActionSlider cards={data.cards} />
      </div>     
    </div>
  )
}
