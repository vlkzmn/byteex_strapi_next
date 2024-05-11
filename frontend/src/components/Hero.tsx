import Image from 'next/image';
import Button from '@/components/Button';
import HeroType from '@/types/Hero';
import { suisse } from '@/utils/fonts/fonts';

export default function Hero({ data }: { data: HeroType }) {
  const messageMd = data.message.split('|')[1];

  return (
    <header>
      <div
        className={`${suisse.className} flex justify-center items-center h-9 mb-4 min-[800px]:mb-8 text-[11px] bg-byteex-bage`}
      >
        <div className="md:hidden">{messageMd}</div>
        <div className="hidden md:block">{data.message}</div>
      </div>

      <div className="max-w-[1464px] mx-auto my-0 px-5">
        <Image
          className="mx-auto mb-4 min-[800px]:mb-16 min-[800px]:ml-24"
          src={data.logo.data.attributes.url}
          alt={data.logo.data.attributes.alternativeText}
          width={200}
          height={36}
          priority
        />

        <div className="flex justify-between">
          <div className="lg:ml-[102px]">
            <h1 className="w-[350px] lg:w-[450px] mb-6 text-[26px] lg:text-[38px] text-4xl leading-[34px] lg:leading-[45px] text-center mx-auto min-[800px]:text-left min-[800px]:mx-0 text-byteex-blue">
              {data.title}
            </h1>

            <Image
              className="min-[800px]:hidden mb-6 object-contain"
              src={data.image.data.attributes.url}
              alt={data.image.data.attributes.alternativeText}
              width={725}
              height={445}
              priority
            />

            <ul className="flex flex-col gap-6 mb-[39px]">
              {data.list.map((item) => (
                <li
                  key={item.description}
                  className="flex items-center gap-2.5"
                >
                  <Image
                    src={item.image.data.attributes.url}
                    alt={item.image.data.attributes.alternativeText}
                    width={31}
                    height={31}
                    priority
                  />

                  <p className="w-full lg:w-[425px] min-[800px]:w-[350px] text-[15px]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <Button text={data.button.title} link={data.button.link} />

            <div className="relative h-36">
              <div className="absolute top-0 w-full min-[800px]:w-[416px] mt-11 p-5 rounded-xl border border-byteex-gray-border shadow-byteex-review bg-white z-10">
                <div className="flex w-full mb-3">
                  <Image
                    className="mr-4"
                    src={data.headerReview.foto.data.attributes.url}
                    alt={data.headerReview.foto.data.attributes.alternativeText}
                    width={39}
                    height={39}
                    priority
                  />

                  <div className="flex flex-col-reverse items-start justify-between gap-0 min-[450px]:flex-row min-[450px]:gap-4 min-[450px]:items-center">
                    <div>{data.headerReview.name}</div>

                    <div className="flex items-center gap-2 translate-y-[2px]">
                      <Image
                        src="/stars.svg"
                        alt={
                          data.headerReview.foto.data.attributes.alternativeText
                        }
                        width={60}
                        height={10}
                        priority
                      />
                      <div
                        className={`${suisse.className} text-[11px] text-byteex-review-gray translate-y-px`}
                      >
                        {data.reviewTitle}
                      </div>
                    </div>
                  </div>
                </div>

                <p
                  className={`${suisse.className} text-[12px] text-byteex-text-gray leading-[23px]`}
                >
                  {data.headerReview.text}
                </p>
              </div>
            </div>
          </div>

          <Image
            className="hidden min-[800px]:block mr-8 lg:mr-[62px] object-contain self-start"
            src={data.image.data.attributes.url}
            alt={data.image.data.attributes.alternativeText}
            width={725}
            height={422}
            priority
          />
        </div>
      </div>
    </header>
  );
}
