import Image from 'next/image';
import Button from '@/components/Button';
import AboutType from '@/types/About';

export default function About({ data }: { data: AboutType }) {
  const textContent = data.text.split('\n').filter((item) => item);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="py-10 min-[800px]:py-[66px] bg-byteex-gray ">
      <div className="max-w-[1200px] block min-[1000px]:grid [grid-template-areas:'image_title'_'image_text'_'image_button'] mx-auto my-0 px-10 ">
        <h2 className="[grid-area:title] mb-8 text-[26px] min-[600px]:text-[32px] text-center leading-10 text-byteex-blue min-[1000px]:text-start min-[1000px]:pl-24 min-[1000px]:mb-5">
          {data.title}
        </h2>

        <div className="[grid-area:image] self-center w-full mb-[60px] min-[1000px]:mb-0">
          <Image
            className="self-center min-[1000px]:self-start mx-auto"
            src={baseUrl + data.image.data.attributes.url}
            alt={data.image.data.attributes.alternativeText}
            width={524}
            height={664}
          />
        </div>

        <div className="[grid-area:text] flex flex-col gap-5 text-[15px] min-[1000px]:pl-24 min-[1000px]:mb-5 min-[1000px]:max-w-[600px]">
          {textContent.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <div className="[grid-area:button] hidden min-[1000px]:block pl-24">
          <Button text={data.button.title} link={data.button.link} />
        </div>
      </div>
    </div>
  );
}
