"use client";
import React from 'react';
import "../Section5/Section5.scss";
import PartnerSlider from "../components/PartnerSlider"

function Section3() {
    return (
        <div id='section5' className='section5'>
            <h1>Seçilmiş Tərəfdaşlar</h1>
            <h2>Əgər bizim tərəfdaşımız olmaq istəyirsinizsə, bizimlə əlaqə saxlamaqdan çəkinməyin.</h2>
            <PartnerSlider />
        </div>
    );
}

export default Section3;