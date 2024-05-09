import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center w-[350px] h-[120px] bg-stone-100 rounded-lg animate-pulse">
        <Image
            src='/logo.png'
            alt="logo"
            width={200}
            height={36}
          />
      </div>
    </div>
  );
}
