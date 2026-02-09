import Image from "next/image";

export default function Logo() {
  
  return (
    <div className="flex gap-2 items-center">
      <Image
        width="88"
        height="30"
        src="/google.svg"
        alt="CashBacks"
        priority
      />
      <div className="flex flex-col gap-1">
        <span className="text-[15px] font-semibold leading-none text-[#6b7280]">CashBacks</span>
      </div>
    </div>
  );
};