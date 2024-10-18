"use client";

import { Slide } from "@/types/slide";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderWrapper from "./slider-wrapper";

import "@/styles/styles.scss";
const slides: Slide[] = [
  {
    title: "Proje 1",
    content:
      "Bu proje, modern web teknolojileri kullanılarak geliştirilmiştir.",
    image: "https://picsum.photos/seed/pic1/1600/700",
  },
  {
    title: "Proje 2",
    content: "Bu proje, kullanıcı dostu bir arayüze sahiptir.",
    image: "https://picsum.photos/seed/pic2/1600/700",
  },
  {
    title: "Proje 3",
    content: "Bu proje, yüksek performanslı bir altyapıya sahiptir.",
    image: "https://picsum.photos/seed/pic3/1600/700",
  },
  {
    title: "Proje 4",
    content: "Bu proje, esnek ve ölçeklenebilir bir yapıya sahiptir.",
    image: "https://picsum.photos/seed/pic4/1600/700",
  },
  {
    title: "Proje 5",
    content: "Bu proje, güvenli ve sağlam bir kod tabanına sahiptir.",
    image: "https://picsum.photos/seed/pic5/1600/700",
  },
  {
    title: "Proje 6",
    content:
      "Bu proje, kullanıcı geri bildirimlerine dayalı olarak geliştirilmiştir.",
    image: "https://picsum.photos/seed/pic6/1600/700",
  },
  {
    title: "Proje 7",
    content: "Bu proje, yenilikçi ve yaratıcı çözümler sunar.",
    image: "https://picsum.photos/seed/pic7/1600/700",
  },
  {
    title: "Proje 8",
    content: "Bu proje, sektördeki en iyi uygulamaları takip eder.",
    image: "https://picsum.photos/seed/pic8/1600/700",
  },
];

const ProjectSlides = () => {
  return (
    <div className="project-slides">
      <Swiper slidesPerView={3} spaceBetween={32} wrapperClass="-items-center">
        {slides.map((slide) => (
          <SwiperSlide
            style={{
              alignSelf: "stretch",
              height: "auto",
            }}
            key={slide.title}
          >
            <SliderWrapper {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlides;
