import React from "react";
import offerImage from '../../../images/SubscriptionOfferSectImage.png'
import style from '../Subscription.module.css'
export const  OfferSect = () => {


    return(
        <div className={style['offer-section']}>
            <img src={offerImage}/>
            <div className={style['offer-section-content']}>
                <h1>Flower Subscription</h1>
                
                    <div>
                        <h6>For Yourself</h6>
                        <ul><li>The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!</li></ul>
                    </div>
                    <div>
                        <h6>As a Gift</h6>
                        <ul><li>Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.</li></ul>
                    </div>
                    <div>
                        
                        <h6>For Business</h6>
                        <ul><li>Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.</li></ul>
                    </div>
                
                <button className={style['offer-section-transparent-button'] + ' uk-button uk-button-default'}>
                    EXPLORE PLANS
                </button>

            </div>
        </div>
    )
}