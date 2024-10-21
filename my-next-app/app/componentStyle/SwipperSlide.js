"use client"; // İstemci bileşeni olduğunu belirt

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/swiper.min.css'; // CSS'i doğru bir şekilde yükle

const SwiperComponent = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide değişti')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div style={{ backgroundColor: 'red', height: '300px' }}>
                    Slide 1
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundColor: 'blue', height: '300px' }}>
                    Slide 2
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundColor: 'green', height: '300px' }}>
                    Slide 3
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ backgroundColor: 'yellow', height: '300px' }}>
                    Slide 4
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperComponent;
