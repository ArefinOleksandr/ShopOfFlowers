import React, {useEffect, useState, useRef} from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';



export function AboutUs(){

  
    const elementRef = useRef(null);
   

    return(
        <div className='about-us-section'>
            <div className='about-us-h1' id='oversized'>
                <h1 data-uk-sticky='end: #oversized;offset: 40%' data-uk-parallax='opacity: 0, 1; end: 70vh+ 70%'>About us</h1>
            </div>
            <div ref={(elementRef)} className='about-us-content'>
                <div>
                    <h2 data-uk-parallax='opacity: 0, 1; end: 70vh+ 70%'>
                        OUR STORY
                    </h2>
                    <h1 data-uk-parallax='opacity: 0, 1; end: 70vh+ 70%'>
                        Lyiv LuxeBouquets
                    </h1>
                    <p data-uk-parallax='opacity: 0, 1; end: 70vh+ 70%'>
                    We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.
                    </p>
                    <Link to='#' data-uk-parallax='opacity: 0, 1; end: 70vh+ 70%'>
                        LEARN MORE
                    </Link>
                </div>
                
            </div>
        </div>
    )
}