import Image from 'next/image';
import InfoBannerType from '@/types/InfoBannerType';

export default function InfoBanner({ data }: { data: InfoBannerType }) {
  return (
    <div className="min-[650px]:block flex flex-col items-center py-14 min-[800px]:py-10 bg-byteex-gray">
      <h2 className="min-[650px]:mb-8 text-[26px] text-center leading-10 text-byteex-blue">
        {data.title}
      </h2>

      <div className="flex flex-col min-[650px]:flex-row justify-center max-[650px]:divide-y min-[650px]:divide-x divide-[#c4c4c4]">
        {data.list.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center w-[260px] py-7 min-[650px]:py-4 text-byteex-blue"
          >
            <div className="flex justify-center mb-2">
              <Image
                src={item.image.data.attributes.url}
                alt={item.image.data.attributes.alternativeText}
                width={42}
                height={42}
              />
            </div>

            <div className="text-[22px]">{item.title}</div>

            <div className="text-[14px]">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
