"use client";

import { RevealContainer, TextReveal } from "@/components/animations/Reveal";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { VideoShowcase } from "@/components/VideoShowcase";

const project1Images = [
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899343/Oracle_RedBull_RB21_Peach_Edition1_mxazvi.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899340/Oracle_RedBull_RB21_Peach_Edition_p2_me4kws.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899340/Oracle_RedBull_RB21_Peach_Edition_p3_cljpcs.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899341/Oracle_RedBull_RB21_Peach_Edition_p4_zfceqv.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899342/Oracle_RedBull_RB21_Peach_Edition_p5_kibk9k.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899342/Oracle_RedBull_RB21_Peach_Edition_p7_kyamnc.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899342/Oracle_RedBull_RB21_Peach_Edition_p8_pav33f.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899342/Oracle_RedBull_RB21_Peach_Edition_p9_awjlt6.jpg"
];

const project2Images = [
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899338/photo1_fihjup.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899338/photo2_drzh61.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899338/photo3_pye6vy.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899338/photo4_yta8gx.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899338/photo5_adbtsu.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899339/photo6_lqlhfq.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899339/photo7_txmnt7.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899339/photo8_ud3qzk.jpg"
];

const videoProjects = [
  {
    title: "Aston Martin F1 Concept ",
    url: "https://res.cloudinary.com/dxr3pcmsa/video/upload/v1775900207/Video-820_xjp8hr.mp4"
  },
  {
    title: "Vodafone McLaren MP4-32 (2025)",
    url: "https://res.cloudinary.com/dxr3pcmsa/video/upload/v1775900453/SnapInsta.to_AQM4dkRNhhodz4qBKIa3O2q7BGjpsZ1dqrFqR9_4YNopiy_kyp7oqpX6FOdeWWyusJLZYi7rj9hVAeN26RHYOFMlyLw7xnk4XTYvSAY_aaptdb.mp4"
  }
];

export function SelectedWorkSection() {
  return (
    <section className="bg-brand-black w-full border-t border-white/5">
      {/* Section header */}
      <div className="w-full pt-32 pb-20 px-4 md:px-6 lg:px-10">
        <div className="w-full max-w-[90%] md:max-w-7xl mx-auto text-center">
          <RevealContainer>
            <TextReveal>
              <h2 className="font-heading text-5xl md:text-7xl text-brand-white uppercase tracking-wider mb-2">
                Selected <span className="text-brand-white/30">Work</span>
              </h2>
            </TextReveal>
          </RevealContainer>
        </div>
      </div>

      {/* Panel 1: Videos */}
      <div className="w-full bg-[#08090d] pb-32 md:pb-40">
        <div className="w-full max-w-[95%] md:max-w-[85%] px-4 md:px-6 lg:px-10 mx-auto">
          <VideoShowcase videos={videoProjects} />
        </div>
      </div>

      {/* Panel 2: Project 1 — Peach RedBull */}
      <div className="w-full bg-[#08090d] pt-8 pb-32 md:pb-40 border-t border-white/5">
        <div className="w-full max-w-[95%] md:max-w-[85%] px-4 md:px-6 lg:px-10 mx-auto">
          <ProjectCarousel
            title="Oracle RedBull RB21 Peach Livery"
            images={project1Images}
          />
        </div>
      </div>

      {/* Panel 3: Project 2 */}
      <div className="w-full bg-[#08090d] pt-8 pb-32 md:pb-40 border-t border-white/5">
        <div className="w-full max-w-[95%] md:max-w-[85%] px-4 md:px-6 lg:px-10 mx-auto">
          <ProjectCarousel
            title="Gulf Williams F1 Team Livery"
            images={project2Images}
          />
        </div>
      </div>
    </section>
  );
}
