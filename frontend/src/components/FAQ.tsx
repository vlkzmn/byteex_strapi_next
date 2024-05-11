'use client';

import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Button from '@/components/Button';
import FAQType from '@/types/FAQ';

export default function FAQ({ data }: { data: FAQType }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [expandedQuestion, setExpandedQuestion] = useState<null | number>(null);

  const toggleAnswer = (index: number) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  return (
    <div className="max-w-[1464px] mx-auto block min-[900px]:flex gap-6 mb-14">
      <div className="min-[1464px]:ml-[211px] min-[1300px]:ml-[100px] max-w-[720px]">
        <h2 className="mb-14 px-11 min-[600px]:mb-20 text-[26px] min-[600px]:text-[32px] text-center leading-10 text-byteex-blue">
          {data.title}
        </h2>

        <div className="flex flex-col gap-8 px-11 relative before:content-[''] before:absolute before:-top-4 before:left-11 before:right-11 before:h-px before:bg-[rgba(196,_196,_196,_0.5)]">
          {data.list.map((item, index) => (
            <div
              className="relative after:content-[''] after:absolute after:-bottom-4 after:left-[0] after:w-full after:h-px after:bg-[rgba(196,_196,_196,_0.5)]"
              key={item.title + index}
            >
              <button
                type="button"
                className={classNames(
                  'w-full faq-after-plus-icon flex justify-between text-[18px] text-byteex-blue',
                  { 'faq-after-minus-icon': expandedQuestion === index }
                )}
                onClick={() => toggleAnswer(index)}
              >
                {item.title}
              </button>

              <p
                className={classNames(
                  'w-[90%] opacity-0 text-[14px] leading-5 max-h-0 mt-2',
                  { 'opacity-100 max-h-20': expandedQuestion === index }
                )}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="self-center hidden min-[900px]:block min-[1464px]:mr-[105px] min-[1300px]:mr-[50px]">
        <Image
          src={baseUrl + data.image.data.attributes.url}
          alt={data.image.data.attributes.alternativeText}
          width={430}
          height={636}
        />
      </div>

      <div className="min-[900px]:hidden min-[800px]:flex min-[800px]:justify-center mt-16 mx-6">
        <Button
          text={data.button.title}
          link={data.button.link}
          reviewsCount={data.button.reviewsCount}
        />
      </div>
    </div>
  );
}
