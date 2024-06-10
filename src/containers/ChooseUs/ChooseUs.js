import React, {useEffect, useRef, useState} from 'react';

import './ChooseUs.css';

export function ChooseUs(props){
  
    const elementRef = useRef(null);
    
    return (
        <div ref={(elementRef)} className='choose-us-section'>
            <div id='choose-us-oversized' data-uk-parallax='opacity: 0, 1; end: 70vh+ 70%'>
               <h1 {...(!props.isMobile && {'data-uk-sticky': 'end: #choose-us-oversized; offset: 70%'})} >
                Why choose us ?
                </h1>
            </div>
            <div data-uk-parallax='opacity: 0, 1; end: 70vh+ 70%'>
                <div>
                    <h2>
                        Stylish bouquets by florists
                    </h2>
                    <p>
                        At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.
                    </p>
                </div>
                <div>
                    <h2>
                    On-time delivery    
                    </h2>
                    <p>
                    Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.
                    </p>
                </div>
                <div>
                    <h2>
                    Safe payment
                    </h2>
                    <p>
                    You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.
                    </p>
                </div>
                <div>
                    <h2>
                    Subscription by your needs
                    </h2>
                    <p>
                    With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.
                    </p>
                </div>
            </div>
        </div>
    )
}