import { HeaderType } from "@/types/Header";
import { suisse } from "@/utils/fonts";
import Image from "next/image";
import Button from "./Button";

export default function Header({ data }: { data: HeaderType }) {
  const messageMd = data.message.split('|')[1];

  return (
    <header>
      <div className={`${suisse.className} flex justify-center items-center h-9 mb-4 min-[800px]:mb-8 text-[11px] bg-byteex-bage`}>
        <span className="md:hidden">{messageMd}</span>
        <span className="hidden md:block">{data.message}</span>
      </div>

      <div className="max-w-[1464px] mx-auto my-0 px-5">
        <Image
          className="mx-auto mb-4 min-[800px]:mb-16 min-[800px]:ml-24"
          src={`http://localhost:1337${data.logo.data.attributes.url}`}
          alt="Star Wars Logo"
          width={200}
          height={35}
          priority
        />

        <div className="flex justify-between">
          <div className="lg:ml-[102px]">
            <h1 className="w-[350px] lg:w-[450px] mb-6 text-[26px] lg:text-[38px] text-4xl leading-[34px] lg:leading-[45px] text-center mx-auto min-[800px]:text-left min-[800px]:mx-0 text-byteex-blue">
              {data.title}
            </h1>

            <Image
              className="min-[800px]:hidden mb-6 object-contain"
              src={`http://localhost:1337${data.image.data.attributes.url}`}
              alt="Star Wars Logo"
              width={725}
              height={422}
              priority
            />

            <ul className="flex flex-col gap-6 mb-[39px]">
              {data.list.map(item => (
                <li key={item.description} className="flex items-center gap-2.5">
                  <Image
                    src={`http://localhost:1337${item.image.data.attributes.url}`}
                    alt="Star Wars Logo"
                    width={31}
                    height={31}
                    priority
                  />

                  <p className="w-full lg:w-[425px] text-[15px]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <Button text={data.button.title} link={data.button.link} />

            <div className="w-full min-[800px]:w-[416px] mt-11 p-5 rounded-xl border border-byteex-gray-border shadow-byteex-review">
              <div className="flex justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={`http://localhost:1337${data.headerReview.foto.data.attributes.url}`}
                    alt={data.headerReview.foto.data.attributes.alternativeText}
                    width={39}
                    height={39}
                  />

                  {data.headerReview.name}
                </div>
                
                <div className="flex items-center gap-2">
                  <Image
                    src='/stars.svg'
                    alt={data.headerReview.foto.data.attributes.alternativeText}
                    width={60}
                    height={10}
                  />
                  <div className={`${suisse.className} text-[11px] text-byteex-review-gray translate-y-px`}>
                    {data.reviewTitle}
                  </div>            
                </div>            
              </div>

              <p className={`${suisse.className} text-[12px] text-byteex-text-gray leading-[23px]`}>
                {data.headerReview.text}
              </p>
            </div>
          </div>

          <Image
            className="hidden min-[800px]:block mr-8 lg:mr-[62px] object-contain self-start"
            src={`http://localhost:1337${data.image.data.attributes.url}`}
            alt="Star Wars Logo"
            width={725}
            height={422}
            priority
          />
        </div>

        {/* <div className="absolute -bottom-20 left-0 w-full min-[800px]:w-[416px] p-5 rounded-xl border border-byteex-gray-border shadow-byteex-review">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <Image
                src={`http://localhost:1337${data.headerReview.foto.data.attributes.url}`}
                alt={data.headerReview.foto.data.attributes.alternativeText}
                width={39}
                height={39}
              />

              {data.headerReview.name}
            </div>
            
            <div className="flex items-center gap-2 translate-y-0.5">
              <Image
                src='/stars.svg'
                alt={data.headerReview.foto.data.attributes.alternativeText}
                width={60}
                height={10}
              />
              <div className={`${suisse.className} text-[11px] text-byteex-review-gray translate-y-px`}>
                {data.reviewTitle}
              </div>            
            </div>            
          </div>

          <p className={`${suisse.className} text-xs`}>
            {data.headerReview.text}
          </p>
        </div> */}
      </div>      
    </header>
  );
}
