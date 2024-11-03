"use client";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../componentStyle/SwiperStyles.scss";

const Icon1 = "../public/Images/icon1.png"

const MySwiper = () => {
    return (
        <Swiper
            spaceBetween={85}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            onSlideChange={() => console.log('Slide değişti')}
            onSwiper={(swiper) => console.log(swiper)}
            className='swiper'
        >
            <SwiperSlide className='swiper-slide'>
                <Link href="#section3">
                    <div className='image'>
                    <img src={Icon1} />
                    </div>
                    <h3>Video İdentifikasiya Platforması</h3>
                    <p>Mərkəzi Bankın tələb və qaydalarına uyğun ən müasir həllimiz olan Video İdentifikasiya Platformasını təqdim edirik.</p>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <Link href="#section3">
                    <div className='image'>
                    <img src={Icon1} />
                    </div>
                    <h3>Proqramlaşdırma</h3>
                    <p>MSolution-da biz sizin xüsusi ehtiyaclarınızı ödəmək üçün geniş çeşiddə texnologiyalardan istifadə edərək hərtərəfli inkişaf xidmətləri təklif edirik.</p>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <Link href="#section3">
                    <div className='image'>
                    <img src={Icon1} />
                    </div>
                    <h3>AniPay ilə inteqrasiya</h3>
                    <p>Biz Mərkəzi Bankın Ani Ödəniş Sistemi olan AniPay ilə sürətli inteqrasiya təklif edirik.</p>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <Link href="#section3">
                    <div className='image'>
                    <img src={Icon1} />
                    </div>
                    <h3>HÖP ilə inteqrasiya</h3>
                    <p>Biz Mərkəzi Bankın Hökumət Ödəniş Portalı (HÖP) ilə sürətli inteqrasiyanı təmin edirik.</p>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <Link href="#section3">
                    <div className='image'>
                    <img src={Icon1} />
                    </div>
                    <h3>ERP və CRM sistemləri</h3>
                    <p>Müasir ERP sistemimiz əsas biznes proseslərini asanlaşdırır, CRM modulumuz isə müştərilərin cəlb edilməsini və satış idarəçiliyini artırır.</p>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <Link href="#section3">
                    <div className='image'>
                    <img src={Icon1} />
                    </div>
                    <h3>Ödəniş sistemlərinin inteqrasiyası</h3>
                    <p>MSolution-da biz hər növ ödəniş sistemlərinin inteqrasiyası üzrə ixtisaslaşmışıq.</p>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <Link href="#section3">
                    <div className='image'>
                    <img src={Icon1} />
                    </div>
                    <h3>UX/UI Dizayn</h3>
                    <p>Biz başa düşürük ki, rəqəmsal məhsulun uğuru onun istifadəçi təcrübəsindədir.</p>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <Link href="#section3">
                    <div className='image'>
                    <img src={Icon1} />
                    </div>
                    <h3>QR kod ödənişləri</h3>
                    <p>QR ödəniş həllimizlə xərclərə qənaət edin.</p>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <Link href="#section3">
                    <div className='image'>
                    <img src={Icon1} />
                    </div>
                    <h3>Biznes Həlləri</h3>
                    <p>MSolution-da biz sizin unikal problemlərinizə və məqsədlərinizə uyğunlaşdırılmış hərtərəfli biznes həlləri təklif edirik.</p>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <Link href="#section3">
                    <div className='image'>
                    <img src={Icon1} />
                    </div>
                    <h3>İT Konsaltinq və DevOps</h3>
                    <p>Mütəxəssislərdən ibarət komandamız texnologiya strategiyanızı optimallaşdırmağa və effektiv DevOps proseslərini həyata keçirməyə qadirdir.</p>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <Link href="#section3">
                    <div className='image'>
                    <img src={Icon1} />
                    </div>
                    <h3>E-Cüzdan Həlli</h3>
                    <p>Elektron pul kisəsi həllimiz maliyyə idarəetmə imkanlarını artırmaq istəyən şirkətlər üçün nəzərdə tutulmuş backend sistemidir.</p>
                </Link>
            </SwiperSlide>
        </Swiper>
    );
};

export default MySwiper;
