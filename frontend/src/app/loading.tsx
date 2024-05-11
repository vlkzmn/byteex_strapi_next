import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center p-[75px] bg-byteex-bage rounded-lg animate-pulse">
        <Image src="/logo.png" alt="logo" width={200} height={36} />
      </div>
    </div>
  );
}
