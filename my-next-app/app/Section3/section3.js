"use client";
import React from 'react';
import MySwiper from '../components/SwipperSlide';
import ErrorBoundary from '../components/ErrorBoundary';
import "../Section3/Section3.scss";

function Section3() {
    return (
        <div id='section3' className='section3'>
            <h1>Xidmətlərimiz</h1>
            <ErrorBoundary>
                <MySwiper />
            </ErrorBoundary>

        </div>
    );
}

export default Section3;