import { suisse } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Button ({text, link}: { text: string, link: string}) {
  return (
    <Link 
      href={link} 
      className={`${suisse.className} flex justify-center items-center gap-4 min-[800px]:w-[356px] h-14 text-lg text-white rounded-md bg-byteex-blue hover:bg-blue-900 transition`}
    >
      {text}

      <Image
        src='/arrow.svg'
        alt="arrow icon"
        width={23}
        height={10}
      />
    </Link>
  )
}
