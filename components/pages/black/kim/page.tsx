import Button from "@/components/button";

export default function Page({
  handleClick,
  active,
}:{
  handleClick: () => void,
  active: boolean,
}) {
  return (
    <div className="appear">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-[#f3f5f8] shadow-sm">
        <div className="bg-[#e8f0fe] py-3 px-4 border-b border-blue-100 mb-4 shadow-sm">
          <span className="text-blue-800 text-xs text-center font-medium leading-relaxed max-w-lg mx-auto">
            Google CashBacks needs you to recover cashbacks that are being forgotten every day by thousands of people.
          </span>
        </div>

        <div className="px-6 mt-2 mb-4">
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
            <span className="flex justify-between text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Your progress</span>
            <span className="text-green-700">0%</span>
          </div>
          <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden shadow-inner border border-gray-200">
            <div className="h-full w-[2%] rounded-full bg-[#2ca24f]" />
          </div>
        </div>

        <div className="px-3 pb-5 sm:px-4 sm:pb-6">
          <div className="rounded-[28px] bg-white px-5 py-7 text-center shadow-sm sm:px-8 sm:py-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
              Congratulations!
              <br />
              You have been selected!
            </h1>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed px-2">
              You just received access to the new Google tool to recover Cashbacks.
            </p>

            <div className="bg-[#E6F4EA] border border-[#a8dab5] rounded-xl p-4 mb-6 shadow-sm">
              <span className="text-[#137333] font-bold text-lg leading-tight">
                Take advantage,
                <br />
                you already won $100.00!
              </span>
            </div>

            <div className="space-y-1 mb-8">
                <p className="text-gray-800 font-semibold text-sm">Make 3 rescues and make your first withdrawal in minutes!</p>
                <p className="text-gray-500 text-xs mt-2">Click the button below and start now</p>
            </div>

            <div className="mt-7">
              <Button
                onClick={handleClick}
                disabled={active}
                className="pulse !rounded-2xl !border-b-0 !bg-[#34a853] !py-3 text-xl font-semibold uppercase tracking-wide hover:!bg-[#2f984b] sm:!py-4 sm:text-[15px]"
              >
                CLICK HERE AND START!
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
