import React, { useEffect } from "react";
import Swiper from "swiper";

import "swiper/swiper-bundle.css"; // Подключаем стили Swiper

const MySwiper = () => {
  useEffect(() => {
    // Инициализация Swiper при монтировании компонента
    const mySwiper = new Swiper(".swiper-container", {
      // Опции Swiper
      slidesPerView: 3, // Количество отображаемых слайдов
      spaceBetween: 30, // Расстояние между слайдами
      loop: true, // Зацикленная прокрутка
    });

    // Убедитесь, что вы очищаете Swiper при размонтировании компонента
    return () => {
      mySwiper.destroy(true, true);
    };
  }, []); // Пустой массив зависимостей гарантирует выполнение этого эффекта только один раз при монтировании компонента

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        {/* Добавьте здесь ваши слайды */}
      </div>
    </div>
  );
};

export default MySwiper;
