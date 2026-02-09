import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import CountUp from '@/components/countUp';

type ModalSnapshot = {
  total: number,
  added: number,
};

// SET COMPONENT DATA
const values: Record<string, Record<number, ModalSnapshot>> = {
  kim: {
    2: { total: 142, added: 42 },
    3: { total: 187, added: 45 },
    4: { total: 230, added: 42 },
  },
  rock: {
    1: { total: 71, added: 71 },
    2: { total: 142, added: 71 },
    3: { total: 213, added: 71 },
  },
  megan: {
    1: { total: 60, added: 60 },
    2: { total: 120, added: 60 },
    3: { total: 180, added: 60 },
  },
};

export default function Modal({
  content,
  page,
}:{
  content: string,
  page: number,
}) {

  // SET COMPONENT DATA
  const pageData = values[content]?.[page];

  if (!pageData) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/45 px-5 backdrop-blur-[2px]">
      <div className="modal w-full max-w-md rounded-3xl bg-[#f8f9fb] px-6 py-8 text-center shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
        <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-[#d6f2e3]">
          <DotLottieReact
            src="/lotties/check.lottie"
            loop={false}
            autoplay={true}
          />
        </div>
        <h3 className="mt-5 text-[20px] font-bold leading-none text-[#10131a]">
          Thanks for your review!
        </h3>
        <div className="mt-5 rounded-xl border border-[#9fe2bd] bg-[#e6f4ea] px-5 py-6">
          <div className="text-5xl font-black leading-none text-[#1aa14a]">
            US$ <CountUp start={0} end={pageData.total} duration={500} />
          </div>
          <div className="mt-2 text-[20px] font-medium text-[#1a8a43]">
            Available balance!
          </div>
          <div className="mt-2 text-[20px] font-medium text-[#4a9165]">
            + US$ {pageData.added}
          </div>
        </div>
        <div className="mt-6 text-[20px] text-[#6d7788]">
          Keep evaluating to earn more! 🚀
        </div>
      </div>
    </div>
  );

};