import Button from "@/components/button";
import { CircleCheckBig, Loader2 } from "lucide-react";

export default function Page({
  active,
  handleClick,
}:{
  active: boolean,
  handleClick: () => void,
}) {

  return (
    <div className="appear">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#f3f5f8] shadow-sm">
        <div className="bg-[#eceff4] border-b border-[#dce1e9] px-4 py-3 text-center sm:px-6">
          <span className="text-gray-500 text-[11px] sm:text-xs text-center font-medium">Recover your balance quickly and safely.</span>
        </div>

        <div className="px-3 pb-5 pt-5 sm:pb-6">
          <div className="rounded-[30px] bg-white px-4 py-6 text-center shadow-sm sm:px-6 sm:py-8">
            <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#34a853] shadow-lg shadow-green-300/50 sm:size-28">
              <CircleCheckBig className="size-10 text-white sm:size-16" strokeWidth={2.5} />
            </div>

            <h1 className="mt-6 text-4xl font-bold text-gray-800 leading-tight sm:mt-8 sm:text-3xl">
              Congratulations! <span className="text-3xl sm:text-5xl">🎉</span>
            </h1>

            <p className="mt-4 text-xl leading-relaxed text-[#2f4564] sm:mt-5 sm:text-[15px]">
              You successfully completed all rescues and your balance is available for withdrawal!
            </p>

            <div className="mt-6 bg-[#E6F4EA] border border-[#34A853] p-5 rounded-xl shadow-sm sm:mt-8">
              <p className="block text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">TOTAL RELEASED BALANCE</p>
              <p className="text-5xl font-black text-[#137333] tracking-tight">$ 230.00</p>
            </div>

            <div className="mt-6 p-5 bg-gray-50 rounded-lg p-4 border border-gray-200 min-h-[80px] flex items-center justify-center mb-8">
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[280px]">
                Watch a quick presentation to learn how to withdraw your money via bank transfer.
              </p>
            </div>

            <div className="mt-7 sm:mt-8">
              <Button
                onClick={handleClick}
                disabled={active}
                className="!rounded-2xl !border-b-0 !bg-[#34a853] !py-3 text-xl font-semibold uppercase hover:!bg-[#2f984b] sm:!py-4 sm:text-[20px]"
              >
                {active ? <Loader2 className="size-5 animate-spin" /> : null}
                <span>WATCH VIDEO NOW</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};