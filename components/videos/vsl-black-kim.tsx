"use client";

import { useEffect, useState } from "react";

export default function VSLBlackKim() {
  const [playerFailed, setPlayerFailed] = useState(false);

  useEffect(() => {
    const handleRejectedFetch = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message = String(reason?.message || reason || "");
      const stack = String(reason?.stack || "");
      const isPlayerFailure =
        message.includes("Failed to fetch") &&
        (stack.includes("scripts.converteai.net") || stack.includes("smartplayer.js"));

      if (isPlayerFailure) {
        event.preventDefault();
        setPlayerFailed(true);
      }
    };

    window.addEventListener("unhandledrejection", handleRejectedFetch);

    const loadPlayerScript = () => {
      if (document.querySelector('script[src*="68a77525bbcb512da47ca857"]')) return;
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/51bb56e8-38bf-4e58-87dd-2429e902a5b3/players/68a77525bbcb512da47ca857/v4/player.js";
      script.async = true;
      script.onerror = () => {
        setPlayerFailed(true);
      };
      document.head.appendChild(script);
    };

    loadPlayerScript();

    return () => {
      window.removeEventListener("unhandledrejection", handleRejectedFetch);
      const existingScript = document.querySelector('script[src*="68a77525bbcb512da47ca857"]');
      if (existingScript) {
        existingScript.remove();
      };
    };
  }, []);

  if (playerFailed) {
    return (
      <div className="w-full rounded-2xl border border-red-200 bg-red-50 px-4 py-6 text-sm text-red-700">
        Video temporarily unavailable. Please refresh the page and try again.
      </div>
    );
  }

  return (
    // @ts-expect-error - Player script is not defined in the global scope
    <vturb-smartplayer 
      id="vid-68a77525bbcb512da47ca857" 
      style={{ 
        width: "100%",
        margin: "0 auto", 
        display: "block",
        "--player-border-radius": "20px",
        "--player-box-shadow": "0 5px 5px 0 rgba(0, 0, 0, 0.2)",
      }} 
    />
  );

};