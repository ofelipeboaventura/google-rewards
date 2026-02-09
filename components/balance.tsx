import CountUp from '@/components/countUp';

// SET COMPONENT DATA
const balance: Record<string, Record<number, { start: number, end: number }>> = {
  "kim": {
    1: { start: 0, end: 0 },
    2: { start: 100, end: 100 },
    3: { start: 100, end: 142.35 },
    4: { start: 142.35, end: 187.5 },
    5: { start: 187.5, end: 230 },
    6: { start: 230, end: 230 },
  },
  "rock": {
    1: { start: 0, end: 0 },
    2: { start: 0, end: 71 },
    3: { start: 71, end: 142 },
    4: { start: 142, end: 213 },
    5: { start: 213, end: 213 },
    6: { start: 213, end: 213 },
  },
  "megan": {
    1: { start: 0, end: 0 },
    2: { start: 0, end: 60 },
    3: { start: 60, end: 120 },
    4: { start: 120, end: 180 },
    5: { start: 180, end: 180 },
    6: { start: 180, end: 180 },
  },
};

export default function Balance({
  page,
  content,
}:{
  page: number,
  content?: string,
}) {

  // SET COMPONENT DATA
  const balanceData = balance[content || 'kim'];
  const fallbackPage = Math.max(...Object.keys(balanceData).map(Number));
  const balanceByPage = balanceData[page] || balanceData[fallbackPage];
  const introBalanceValue = content === "kim" && page === 1 ? 100 : null;
  const startValue = introBalanceValue ?? balanceByPage.start;
  const endValue = introBalanceValue ?? balanceByPage.end;

  return (
    <div className="bg-gradient-to-r from-[#34A853] to-[#2E8B46] text-white pl-2.5 pr-3 py-1.5 rounded-full shadow-sm shadow-green-100 flex items-center gap-2">
      <span className="flex size-7 items-center justify-center rounded-full border border-white/30 bg-white/15 text-sm">
        $
      </span>
      <span className="font-bold text-sm tracking-wide">$ 
        <CountUp start={startValue} end={endValue} duration={3000} />.00
      </span>
    </div>
  );

};