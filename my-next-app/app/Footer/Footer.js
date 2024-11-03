import React from 'react'
import "../Footer/footer.scss"
import Link from "next/link";
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footerwall'>
            <div className='footer'>
                <div className='social'>
                    <Link href="/">
                        <img width="200" height="100" className="logo" src="http://msolution.az/storage/settings/01HQE0M564VE2NR1A99D69D9S2.svg" alt="MSolution"></img>
                    </Link>
                    <h2>Sosial Media</h2>
                    <div className='sosialicons'>
                        <Link href="/">
                            <FaFacebook size={40} color='#1877F2' />
                        </Link>
                        <Link href="/">
                            <FaLinkedin size={40} color='#0A66C2' />
                        </Link>
                        <Link href="/">
                            <FaInstagram size={40} color='#E4405F' />
                        </Link>
                    </div>
                </div>
                <div className='menu'>
                    <h2>Menyu</h2>
                    <Link href="/">Əsas səhifə</Link>
                    <Link href="/">Haqqımızda</Link>
                    <Link href="/">Xidmətlərimiz</Link>
                    <Link href="/">Layihələrimiz</Link>
                    <Link href="/">Bizimlə əlaqə</Link>
                </div>
                <div className='contact'>
                    <h2>Bizimlə əlaqə</h2>
                    <Link href="/">hi@msolution.az</Link>
                    <Link href="/">+994 99 342 11 01</Link>
                    <Link href="/">Aral Plaza - Azerbaijan, Baku,. <br /> Ataturk avenue 118A-120</Link>
                </div>
            </div>
            <hr />
            <div className='end'>
                <p>copyright2024 | Müəllif hüquqları MSolution tərəfindən qorunur</p>
                <Link href="/">Şərtlər & qaydalar  |  Gizlilik Siyasəti</Link>
            </div>
        </div>


    )
}

export default Footer