"use client";
import { useInView } from 'react-intersection-observer';
import "../Section4/Section4.scss";

const Icon2 = "../public/Images/icon2.png"
const Icon3 = "../public/Images/icon3.png"
const Icon4 = "../public/Images/icon4.png"
const Icon5 = "../public/Images/icon5.png"

function Section4() {
    // "cardleft" ve "cardright" elementlerini izlemek için useInView hook'unu kullanıyoruz
    const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: false });
    const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: false });

    return (
        <div id='section4' className='section4'>
            <h1>Niyə MSolution</h1>
            <div className="cards">
                <div ref={leftRef} className={`cardleft ${leftInView ? 'in-view' : ''}`}>
                    <div className="information">
                        <div className="image">
                            <img src={Icon2} alt="Deneyim Ikonu" />
                        </div>
                        <h2>Təcrübə</h2>
                    </div>
                    <p>
                        Komandamız rəqəmsal mənzərəni dərindən dərk edən yüksək ixtisaslı peşəkarlardan ibarətdir.
                        Ən müasir həllər təqdim etmək üçün ən son biznes tendensiyaları və ən yaxşı təcrübələrlə inkişaf edirik.
                    </p>
                </div>

                <div ref={rightRef} className={`cardright ${rightInView ? 'in-view' : ''}`}>
                    <div className="information">
                        <div className="image">
                            <img src={Icon3} />
                        </div>
                        <h2>Müştəri mərkəzli yanaşma</h2>
                    </div>
                    <p>
                        Biz müştərilərimizə və onların unikal ehtiyaclarına üstünlük veririk. Biz sizin ideyalarınızı,
                        ehtiyaclarınızı və məqsədlərinizi dinləyirik və xidmətlərimizi xüsusi tələblərinizə uyğunlaşdırırıq.
                        Sizin uğurunuz bizim uğurumuzdur.
                    </p>
                </div>

                <div ref={leftRef} className={`cardleft ${leftInView ? 'in-view' : ''}`}>
                    <div className="information">
                        <div className="image">
                            <img src={Icon4} />
                        </div>
                        <h2>Nəticəyə əsaslanan həllər</h2>
                    </div>
                    <p>
                        Bizim əsas diqqətimiz nəticə əldə etməkdir. Biz biznesin böyüməsinə təkan verən, istifadəçi təcrübələrini
                        təkmilləşdirən və rəqabət üstünlüyü təmin edən rəqəmsal məhsullar yaratmaq üçün yaradıcılıq və texniki təcrübəni
                        birləşdiririk.
                    </p>
                </div>

                <div ref={rightRef} className={`cardright ${rightInView ? 'in-view' : ''}`}>
                    <div className="information">
                        <div className="image">
                            <img src={Icon5} />
                        </div>
                        <h2>Birgə Tərəfdaşlıq</h2>
                    </div>
                    <p>
                        Biz müştərilərimizlə uzunmüddətli əlaqələri yüksək qiymətləndiririk. Biz özümüzü rəqəmsal tərəfdaşınız
                        kimi görürük, rəqəmsal məhsullarınızın inkişafını təmin etmək üçün davamlı dəstək, texniki xidmət və yeniləmələr təqdim edirik.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Section4;
