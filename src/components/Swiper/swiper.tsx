import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from 'swiper/modules';
import TeacherContent from "../../content/TeacherContent.json"; // New JSON file for teacher info
export default function swiper() {
  return (
    <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {TeacherContent.map((teacher, index) => (
          <SwiperSlide key={index}>
            <span>
              <img src={teacher.image} alt={teacher.name} />
              <h3>{teacher.name}</h3>
              <p>{teacher.info}</p>
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
  )
}
