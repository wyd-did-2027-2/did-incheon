import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

const PREFIX: Record<string, { pc: string; mobile: string }> = {
  kr: { pc: "pk", mobile: "mk" },
  en: { pc: "pe", mobile: "me" },
};

export default function SliderItem00({ locale }: { locale: string }) {
  const { pc, mobile } = PREFIX[locale] || PREFIX.kr;

  return (
    <div className="relative w-full h-full bg-white">
      <Image
        src={`${R2_URL}/${mobile}1.png`}
        alt="인천교구 wyd open"
        fill
        className="object-contain min-[1080px]:hidden block"
        priority
      />
      <Image
        src={`${R2_URL}/${pc}1.png`}
        alt="인천교구 wyd open"
        fill
        className="object-contain hidden min-[1080px]:block"
        priority
      />
    </div>
  );
}
