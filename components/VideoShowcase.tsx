"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface VideoData {
  title: string;
  url: string;
}

interface VideoShowcaseProps {
  videos: VideoData[];
}

export function VideoShowcase({ videos }: VideoShowcaseProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  // Initialize state based on which video is set to autoPlay (idx === 0)
  const [playingStates, setPlayingStates] = useState<boolean[]>(
    videos.map((_, i) => i === 0)
  );

  // Effect to sync internal state if video plays/pauses natively (though controls are hidden)
  useEffect(() => {
    const handleEvent = () => {
      setPlayingStates(
        videoRefs.current.map((vid) => (vid ? !vid.paused : false))
      );
    };
    
    const refs = videoRefs.current;
    
    refs.forEach((vid) => {
      if (vid) {
        vid.addEventListener("play", handleEvent);
        vid.addEventListener("pause", handleEvent);
      }
    });
    
    return () => {
      refs.forEach((vid) => {
        if (vid) {
          vid.removeEventListener("play", handleEvent);
          vid.removeEventListener("pause", handleEvent);
        }
      });
    };
  }, [videos.length]);

  const handleTogglePlay = (index: number) => {
    const vid = videoRefs.current[index];
    if (!vid) return;

    if (vid.paused) {
      vid.play();
      
      // Pause all others
      videoRefs.current.forEach((otherVid, i) => {
        if (i !== index && otherVid) {
          otherVid.pause();
        }
      });
    } else {
      vid.pause();
    }
  };

  return (
    <div className="w-full flex-1">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-center w-full">
        {videos.map((vid, idx) => (
          <div key={idx} className="relative flex flex-col flex-1 items-center w-full">
            <div 
              className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-white/10 shadow-lg relative group cursor-pointer"
              onClick={() => handleTogglePlay(idx)}
            >
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                src={vid.url}
                className="w-full h-full object-cover"
                muted
                loop={idx === 0}
                autoPlay={idx === 0}
                playsInline
              />
              
              {/* Overlay Play/Pause Button */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none ${
                    playingStates[idx] ? "opacity-0 group-hover:opacity-100 bg-black/20" : "opacity-100 bg-black/50"
                 }`}
              >
                <button 
                  className="w-16 h-16 rounded-full bg-brand-teal/90 text-brand-black flex items-center justify-center transition-transform hover:scale-110 pointer-events-auto backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTogglePlay(idx);
                  }}
                  aria-label={playingStates[idx] ? "Pause" : "Play"}
                >
                  {playingStates[idx] ? <Pause size={24} fill="currentColor" /> : <Play size={24} className="ml-1" fill="currentColor" />}
                </button>
              </div>

              {/* Bottom Fade & Text Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
               <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none text-left">
                  <h3 className="font-heading text-xl md:text-2xl lg:text-3xl text-brand-white uppercase tracking-wide leading-tight drop-shadow-md">
                     {vid.title}
                  </h3>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
