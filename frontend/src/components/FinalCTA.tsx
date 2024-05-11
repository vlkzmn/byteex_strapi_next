import Image from 'next/image';
import Button from '@/components/Button';
import FinalCTAType from '@/types/FinalCTAType';

export default function FinalCTA({ data }: { data: FinalCTAType }) {
  return (
    <footer className="flex flex-col items-center py-14 min-[600px]:py-20 bg-gradient-benefits-down">
      <h2 className="mb-4 px-8 text-[26px] min-[600px]:text-[32px] text-center text-byteex-blue">
        {data.title}
      </h2>

      <p className="max-w-[580px] mb-10 px-8 text-[15px] text-center">
        {data.description}
      </p>

      <Image
        className="mb-16"
        src={data.image.data.attributes.url}
        alt={data.image.data.attributes.alternativeText}
        width={815}
        height={383}
      />

      <div className="w-full">
        <div className="hidden min-[800px]:flex justify-center mb-1.5">
          <Button text={data.button.title} link={data.button.link} />
        </div>

        <div className="min-[800px]:hidden mx-6">
          <Button
            text={data.button.title}
            link={data.button.link}
            reviewsCount={data.button.reviewsCount}
          />
        </div>
      </div>

      <div className="hidden min-[800px]:flex flex-col items-center">
        <Image
          className="mb-8"
          src={data.payment.data.attributes.url}
          alt={data.payment.data.attributes.alternativeText}
          width={364}
          height={22}
        />

        <div className="hidden min-[800px]:flex divide-x divide-[#c4c4c4]">
          {data.list.map((item) => (
            <div key={item.title} className="flex gap-4 px-6">
              <div>
                <Image
                  src={item.image.data.attributes.url}
                  alt={item.image.data.attributes.alternativeText}
                  width={33}
                  height={33}
                />
              </div>

              <div className="w-[120px] text-[14px]">
                <div>{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
