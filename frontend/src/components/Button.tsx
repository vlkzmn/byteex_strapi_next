import { suisse } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Button ({
  text, 
  link, 
  reviewsCount
}: { 
  text: string, 
  link: string, 
  reviewsCount?: string
}) {
  return (
    <div className="min-[800px]:w-[356px]">
      <div className="flex flex-col items-center">
        <Link 
          href={link} 
          className={`${suisse.className} flex justify-center items-center gap-4 w-full h-14 rounded-md bg-byteex-blue hover:bg-blue-900 transition`}
        >
          <div className="text-lg text-white leading-0">
            {text}
          </div>          

          <Image
            src='/arrow.svg'
            alt="arrow icon"
            width={23}
            height={10}
          />
        </Link>

        {!!reviewsCount && (
          <div className="flex items-center gap-[14px] mt-[14px]">
            <Image
              src='/stars.svg'
              alt="stars icon"
              width={80}
              height={13}
            />

            <div className={`${suisse.className} text-[11px] text-byteex-review-gray translate-y-[2px]`}>
              {reviewsCount}
            </div>          
          </div>
        )}
      </div> 
    </div>
       
  )
}
