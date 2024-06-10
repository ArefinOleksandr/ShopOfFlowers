import { useState } from 'react';


import style from '../Subscription.module.css'

import vectMinus from '../../../icons/VectorMinus.svg';
import vectPlus from '../../../icons/VectorPlus.svg';

import SubscribeImage from '../../../images/image.png'
import ClassicPlanImage from '../../../images/ClassicPlanImage.png';
import SeasonalPlanImage from '../../../images/SeasonalPlanImage.png'
import LuxePlanImage from '../../../images/LuxePlanImage.png'

function ClassicPlan({active}){

    return(
        <div className={style['subscription-plan']}>
            <div>
                <img src={ClassicPlanImage}/>
                <div>
                    <span>Classic</span>
                    <ul>
                        <li>Price $45  </li>
                        <li>Free Delivery</li>
                        <li>Best for a budget</li>
                        <li>Glass vase with first delivery</li>
                        <li>Save up to 25%</li>
                    </ul>
                </div>
                
            </div>
            <button className='uk-button uk-width-1-1'>Select</button>
        </div>
    )
}   
function SeasonalPlan({active}){

    return(
        <div className={style['subscription-plan']}>
            <div>
                <img src={SeasonalPlanImage}/>
                <div>
                    <span>Seasonal</span>
                    <ul>
                        <li>Price $65</li>
                        <li>Free Delivery</li>
                        <li>Best seasonal selections</li>
                        <li>Glass vase with first delivery</li>
                        <li>Luxury candle with your first delivery</li>
                        <li>Save up to 28%</li>
                    </ul>
                </div>
                
            </div>
            <button className='uk-button uk-width-1-1'>Select</button>
        </div>
    )
}  
function LuxePlan({active}){

    return(
        <div className={style['subscription-plan']}>
            <div>
                <img src={LuxePlanImage}/>
                <div>
                    <span>Luxe</span>
                    <ul>
                        <li>Price $95</li>
                        <li>Free Delivery</li>
                        <li>Premium arrangement</li>
                        <li>Premium vase with first delivery</li>
                        <li>Luxury candle with your first delivery</li>
                        <li>Save up to 30%</li>
                    </ul>
                </div>
                
            </div>
            <button className='uk-button uk-width-1-1'>Select</button>
        </div>
    )
}  



export function Subscribe () {
    const [countQuantity, setCountQuantity] = useState(1);
    const handleCountMinus = () =>{
        if(countQuantity !== 1 ){
            
            setCountQuantity(countQuantity-1);
        }
    }
    const handleCountPlus = () => {
        setCountQuantity(countQuantity+1);
    }

    return (
        <div className={style[['subscribe-section']] + ' uk-child-width-1-2@m uk-child-width-1-1@s'}>
            <div className={style['subscribe-section-form']}>
                <span>Build Your Subscription</span>
                <h3>Selecting a Plan</h3>
                <p>Enjoy free shipping on every order and save up to 30%. 
Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause, or cancel your subscription, simply log in to your account dashboard. You're in complete control of your flower delivery experience.</p>
                <div className={style['subscribe-section-form-subscription-plans']}>
                    <ClassicPlan />
                    <SeasonalPlan />
                    <LuxePlan />
                </div>
                <div className={style['subscribe-section-form-second-step']}>
                    <h4>How often do you want flowers delivered ?</h4>
                    <p>Select the delivery frequency</p>
                    <div className={style['subscribe-section-form-second-step-button-block']}>
                        <button className={style['offer-section-transparent-button'] + ' uk-button'}>Monthly</button>
                        <button className={style['offer-section-transparent-button'] + ' uk-button'}>Bi-Weekly</button>
                        <button className={style['offer-section-transparent-button'] + ' uk-button'}>Weekly</button>
                    </div>
                </div>
                <div className={style['subscribe-section-form-third-step']}>
                    <h4>How many deliveries would you like ?</h4>
                    <p>Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need </p>
                    <div className={style['counter'] + ' counter'}>
                        <button className='uk-width-1-3 uk-height-1-1' onClick={handleCountMinus}><img src={vectMinus} /></button>
                        <input className='uk-width-1-3 uk-height-1-1 uk-text-center'  type="text" value={countQuantity}/>
                        <button className='uk-width-1-3 uk-height-1-1' onClick={handleCountPlus}><img src={vectPlus}/></button>
                    </div>

                </div>
                <button className={style['black-button'] + ' uk-button'}>CHEKOUT</button>
            </div>
            <div className={style['subscribe-section-image']} id='subscribe-section-image'>
                <img data-uk-sticky = 'media: 960; end: #subscribe-section-image;' src={SubscribeImage}/>
            </div>
        </div>
    )
}