"use client";
import React, { useEffect, useState } from "react";
import "../Section2/section2.scss";

function Section2() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const haqqindaDiv = document.querySelector(".haqqinda");
        const imageDiv = document.querySelector(".image");
        const divPosition = haqqindaDiv.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Eğer div pencere içinde görünüyorsa animasyonu başlat
        if (divPosition < windowHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false); // Sayfa yukarı kaydırıldığında animasyonu sıfırla
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // İlk yüklemede de kontrol et
        handleScroll();

        // Scroll eventini temizlemek için cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="section2">
            {/* Animasyon tetiklendiğinde slide-in sınıfı eklenir */}
            <div className={`haqqinda ${isVisible ? "slide-in" : ""}`}>
                <div className="haqqimizda">
                    <h1>Haqqimizda</h1>
                    <h2>MSolution-a xoş gəlmisiniz: İnnovasiya  Mükəmməlliklə <br /> Qarşılanır</h2>
                    <ul>
                        <li> Çətinlikdən inkişafa: Biz biznes problemlərini inkişaf <br /> imkanlarına çevirməkdə sizin əsas tərəfdaşınızıq.</li>
                        <li> Vahid yanaşma: Bizim hərtərəfli yanaşmamız <br /> əməliyyatları sadələşdirməkdən rəqəmsal<br /> mənzərənizi dəyişməyə qədər hər şeyi əhatə edir.</li>
                        <li> Mükəmməl həllər: Biz sizin biznesinizi ən qabaqcıl <br /> həllər ilə təchiz edərək qüsursuz inteqrasiya və <br /> səmərəliliyi təmin edirik.</li>
                        <li> Uğura gedən yol: MSolution-da, biz sadəcə xidmət <br /> göstərmirik; uğur hekayələri yaradırıq.</li>
                    </ul>
                </div>
            </div>
            <div className={`image ${isVisible ? "slide-in" : ""}`}></div>
        </div>
    );
}

export default Section2;
