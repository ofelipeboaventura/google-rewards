import Button from "@/components/button";
import { useMemo, useRef, useState } from "react";

export default function Page({
  handleClick,
  active,
}:{
  handleClick: () => void,
  active: boolean,
}) {
  const [codeChars, setCodeChars] = useState(["", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const expectedCode = "AMZN";
  const isCodeValid = useMemo(() => codeChars.join("") === expectedCode, [codeChars]);

  const handleInputChange = (index: number, value: string) => {
    const nextChar = value.replace(/[^a-zA-Z]/g, "").slice(-1).toUpperCase();
    const nextCode = [...codeChars];
    nextCode[index] = nextChar;
    setCodeChars(nextCode);

    if (nextChar && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="appear">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-[#f3f5f8] shadow-sm">
        <div className="bg-[#eceff4] border-b border-[#dce1e9] px-4 py-3 text-center sm:px-6">
          <span className="text-gray-500 text-[11px] sm:text-xs text-center font-medium">Recover your balance quickly and safely.</span>
        </div>

        <div className="px-2 py-3 sm:px-3 sm:py-3">
          <div className="flex items-end justify-between">
            <span className="flex justify-between text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Your progress</span>
            <span className="text-green-700">43%</span>
          </div>
          <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden shadow-inner border border-gray-200">
            <div className="h-full w-[43%] bg-[#34A853] h-full rounded-full transition-all duration-500" />
          </div>
        </div>

        <div className="px-3 pb-5 sm:pb-6">
          <div className="rounded-[30px] bg-white px-4 py-6 text-center shadow-sm sm:px-6 sm:py-8">
            <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              RESCUE 2 / 3
            </span>

            <h1 className="text-2xl font-bold text-gray-800 mb-8 leading-tight">Rescue your Cashback</h1>

            <div className="bg-[#E6F4EA] border border-dashed border-[#34A853] p-5 rounded-xl mb-8 shadow-sm">
              <p className="block text-xs text-gray-500 font-bold uppercase tracking-widest mb-1.5">VALUE TO RECEIVE</p>
              <p className="text-4xl font-black text-[#137333] tracking-tight">$ 45.15</p>
            </div>

            <div className="p-6 rounded-xl mb-8 transition-all bg-gray-50 border-gray-200 border-2 border-dashed">
              <p className="block text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">CODE: AMAZON</p>
              <div className="text-4xl font-mono font-bold text-gray-800 tracking-[0.2em]">
                <span>A</span>
                <span>M</span>
                <span>Z</span>
                <span>N</span>
              </div>
            </div>

            <p className="text-gray-500 text-sm mb-4 font-medium">Enter the code above to release</p>

            <div className="flex justify-center gap-3 mb-8">
              {codeChars.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  inputMode="text"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  maxLength={1}
                  value={value}
                  onChange={(event) => handleInputChange(index, event.target.value)}
                  className="h-14 w-11 rounded-xl border-2 border-[#d8dde5] bg-[#f5f7fa] text-center text-3xl font-semibold uppercase text-[#122949] outline-none focus:border-[#39b768] focus:bg-[#eaf7ef] sm:h-20 sm:w-16 sm:rounded-2xl sm:text-5xl"
                />
              ))}
            </div>

            <div className="mt-7">
              <Button
                onClick={handleClick}
                disabled={active || !isCodeValid}
                className="!rounded-2xl !border-b-0 !bg-[#34a853] !py-3 text-xl font-semibold uppercase hover:!bg-[#2f984b] sm:!py-4 sm:text-[20px]"
              >
                RESCUE CASHBACK
              </Button>
            </div>
          </div>
        </div>

        <div className="px-4 pb-6 pt-3 text-center sm:px-6 sm:pb-7 sm:pt-4">
          <div className="inline-flex items-center gap-3 text-lg sm:gap-4 sm:text-[15px]">
            <span className="font-medium text-[#9b9da4]">Google</span>
            <span className="text-[#b4b6bb]">|</span>
            <span className="font-medium text-[#9b9da4]">Secure 256-bit SSL</span>
          </div>
        </div>
      </div>
    </div>
  );

};