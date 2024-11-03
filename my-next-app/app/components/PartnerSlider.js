import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Uber = "../public/Images/icon1"

const PartnerSlider = () => {
    const partners = [
        { id: 1, image: { Uber } },
        { id: 2, image: "/Images/icon2.png" },
        { id: 3, image: "/Images/icon3.png" },
        { id: 4, image: "/Images/icon4.png" },
        { id: 5, image: "/Images/partner5.png" },
        { id: 6, image: "/Images/partner6.png" },
        { id: 7, image: "/Images/partner7.png" },
        { id: 8, image: "/Images/yango.png" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <div style={{
            width: '100%',
            height: '150px',         // Yüksekliği arttırdık
            overflow: 'hidden',
            background: 'rgba(238, 238, 238, 0.12)',
        }}>
            <Slider {...settings} style={{ width: '100%', height: '100%' }}>
                {partners.map(partner => (
                    <div key={partner.id} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%'
                    }}>
                        <img
                            src={partner.image}
                            alt={`Partner ${partner.id}`}
                            style={{
                                width: '100%',            // Tam genişlik
                                height: '100%',           // Tam yükseklik
                                objectFit: 'cover',       // Alanı kaplar
                                padding: '5px'            // Kenarlarda boşluk
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PartnerSlider;
