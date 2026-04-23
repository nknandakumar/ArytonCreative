"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const mediaItems = [
  { type: "video", src: "https://res.cloudinary.com/dxr3pcmsa/video/upload/v1775920807/Video-550_htk03d.mp4", label: "Aston Martin F1 Concept" },
  { type: "image", src: "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899343/Oracle_RedBull_RB21_Peach_Edition1_mxazvi.jpg", label: "Oracle RedBull RB21" },
  { type: "video", src: "https://res.cloudinary.com/dxr3pcmsa/video/upload/v1775900207/Video-820_xjp8hr.mp4", label: "Vodafone McLaren MP4-32" },
  { type: "image", src: "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899338/photo1_fihjup.jpg", label: "Gulf Williams F1 Livery" },
  { type: "image", src: "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899340/Oracle_RedBull_RB21_Peach_Edition_p2_me4kws.jpg", label: "Oracle RedBull Detail" },
];

const N = mediaItems.length;
// Triple the array so we always have neighbours on both sides
const TRACK = [...mediaItems, ...mediaItems, ...mediaItems];
const TRANSITION_MS = 700;
const GAP = 20;
const CARD_W = 460; const CARD_H = 260;
const SIDE_W = 190; const SIDE_H = 210;
const FAR_W  = 90;  const FAR_H  = 165;

// Visual X positions (left edge) relative to container center, by delta from active
function xByDelta(delta: number, cw: number): number {
  // Center card is centered in container
  const half = cw / 2;
  if (delta ===  0) return half - CARD_W / 2;
  if (delta ===  1) return half + CARD_W / 2 + GAP;
  if (delta ===  2) return half + CARD_W / 2 + GAP + SIDE_W + GAP;
  if (delta === -1) return half - CARD_W / 2 - GAP - SIDE_W;
  if (delta === -2) return half - CARD_W / 2 - GAP - SIDE_W - GAP - FAR_W;
  // off-screen placeholders for items entering/exiting
  if (delta  >  2) return half + CARD_W / 2 + GAP + SIDE_W + GAP + FAR_W + GAP + FAR_W;
  return              half - CARD_W / 2 - GAP - SIDE_W - GAP - FAR_W - GAP - FAR_W;
}

function sizeByDelta(delta: number) {
  const a = Math.abs(delta);
  if (a === 0) return { w: CARD_W, h: CARD_H };
  if (a === 1) return { w: SIDE_W, h: SIDE_H };
  if (a === 2) return { w: FAR_W,  h: FAR_H  };
  return { w: FAR_W, h: FAR_H };
}

function opacityByDelta(delta: number) {
  const a = Math.abs(delta);
  if (a === 0) return 1;
  if (a === 1) return 0.6;
  if (a === 2) return 0.2;
  return 0;
}

export function HeroMediaSlider() {
  // trackIdx lives in the middle copy [N .. 2N-1]
  const [trackIdx, setTrackIdx] = useState(N);
  const [animated, setAnimated] = useState(true);
  const [cw, setCw] = useState(1200);
  const wrapRef  = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Measure container width
  useEffect(() => {
    const measure = () => { if (wrapRef.current) setCw(wrapRef.current.offsetWidth); };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const advance = useCallback(() => {
    setTrackIdx(prev => {
      const next = prev + 1;
      // If we've scrolled into the last copy, schedule a silent reset back to middle copy
      if (next >= 2 * N) {
        if (resetRef.current) clearTimeout(resetRef.current);
        resetRef.current = setTimeout(() => {
          setAnimated(false);
          setTrackIdx(N); // same visual item, middle copy
          requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
        }, TRANSITION_MS + 50);
      }
      return next;
    });
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 3000);
  }, [advance]);

  useEffect(() => {
    // Delay first start to sync with preloader reveal
    const initDelay = setTimeout(() => {
      startTimer();
    }, 3500);
    
    return () => {
      clearTimeout(initDelay);
      if (timerRef.current) clearInterval(timerRef.current);
      if (resetRef.current) clearTimeout(resetRef.current);
    };
  }, [startTimer]);

  const ease = `${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`;

  return (
    <div
      ref={wrapRef}
      className="hidden md:block w-full pb-10 z-10 relative overflow-hidden"
      style={{ height: `${CARD_H + 40}px` }}
    >
      {/* Edge fades */}
      <div className="absolute left-0 inset-y-0 w-28 bg-gradient-to-r from-[#08090d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-28 bg-gradient-to-l from-[#08090d] to-transparent z-10 pointer-events-none" />

      {TRACK.map((item, i) => {
        const delta   = i - trackIdx;
        const visible = Math.abs(delta) <= 3;
        if (!visible) return null; // skip truly far-off items

        const { w, h } = sizeByDelta(delta);
        const opacity   = opacityByDelta(delta);
        const x         = xByDelta(delta, cw);
        const isCenter  = delta === 0;
        const isSide    = Math.abs(delta) === 1;
        const transStr  = animated
          ? `left ${ease}, width ${ease}, height ${ease}, opacity ${ease}`
          : "none";

        return (
          <div
            key={i} // stable - never remounts
            onClick={() => { if (isSide) { setTrackIdx(i); startTimer(); } }}
            style={{
              position:   "absolute",
              top:        "50%",
              left:       `${x}px`,
              width:      `${w}px`,
              height:     `${h}px`,
              transform:  "translateY(-50%)",
              opacity,
              cursor:     isSide ? "pointer" : "default",
              transition: transStr,
              flexShrink: 0,
            }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            {item.type === "video" ? (
              <video src={item.src} autoPlay={isCenter} muted loop playsInline className="w-full h-full object-cover" />
            ) : (
              <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
            )}
          </div>
        );
      })}
    </div>
  );
}
