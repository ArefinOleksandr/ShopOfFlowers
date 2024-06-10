import React from 'react';
import style from '../Subscription.module.css'

export function AboutSubscribe(){


    return(
        <div className={style['about-subscribe-section'] + ' uk-child-width-1-2@m uk-child-width-1-1@s'}>
            <div id='about-subscribe-title' style={{padding: '5.55vw', border: '1px solid #121212'}}>
                <h1 data-uk-sticky = 'media: 960; end: #about-subscribe-title; offset: 10vw'>How does it work?</h1>
            </div>
            <div className={style['about-subscribe-section-content']}>
                <div>
                    <h3>Choose a plan</h3>
                    <p>Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.</p>
                </div>
                <div>
                    <h3>Frequency and Duration</h3>
                    <p>Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.</p>
                </div>
                <div>
                    <h3>Pay once</h3>
                    <p>After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones</p>
                </div>
            </div>
        </div>
    )
}