import React, {useState, useEffect, useRef} from 'react';
import {validationPhone} from '../../components/Shared/functions'
import './FollowUs.css';

import iconPhone from '../../images/call.svg';
import iconStreet from '../../images/pin_drop.svg';
import iconFacebook from '../../images/Facebook.svg';
import iconInstagram from '../../images/Instagram.svg';
import iconPinterest from '../../images/Pinterest.svg';
import iconTelegram from '../../images/Telegram.svg';
import iconTwitter from '../../images/Twitter.svg';
import bigImage from '../../images/RightColum.png'
import { Link, useLocation } from 'react-router-dom';

export function FollowUS(){

    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(true);

    // HANDLER INPUT
    const handleInputChange = (event) => {
        const inputValue = event.target.value;

        if (/[^+\d]/g.test(inputValue)) {
            setIsValid(false);
            console.log(inputValue);
            console.log(/[^+\d]/g.test(inputValue));
            console.log(isValid)
            return; // Если введены символы или буквы, ничего не делаем
          }
        if (phoneNumber.length < 1 && (inputValue === '+' || inputValue === '3')) {
            setPhoneNumber(inputValue);
            setIsValid(true);
            return;
          } else if (phoneNumber.length < 1 && inputValue === '0') {
            setIsValid(true)
            const newPhoneNumber = '+38' + inputValue;
            setPhoneNumber(newPhoneNumber);
            return
          } else {
            
            const formattedNumber = inputValue
            .replace(/[^+\d]/g, '') // Удаляем все нецифровые символы, кроме "+"
            .replace(/^(\+\d{3})(\d{0,2})?(\d{0,3})?(\d{0,2})?(\d{0,2})?/, (_, p1, p2, p3, p4, p5) => {
                let result = p1;
                if (p2) result += ' ' + p2;
                if (p3) result += ' ' + p3;
                if (p4) result += ' ' + p4;
                if (p5) result += ' ' + p5;
                return result;
              });
            setIsValid(true)
            setPhoneNumber(formattedNumber);
            return;
          }
    }



    return (
        <div className='follow-us-section'>
            <div className='lets-talk-div'>
                <form action="" method="post">
                    <h1><span className='uk-overflow-hidden'><span data-uk-scrollspy='cls: our-service-anim-text; repeat: true'>Lets</span> <span data-uk-scrollspy='cls: our-service-anim-text; repeat: true'>Talk</span></span></h1>
                    <p>We will call you back</p>
                    <div>
                    <input 
                    type="tel" 
                    name="" 
                    id="" 
                    placeholder='+380 XX XXX XX XX'
                    value={phoneNumber}
                    onChange={handleInputChange}
                    className={!isValid && 'uk-form-danger'}
                    />
                    <button className='uk-button' type="submit">REACH US</button>
                    </div>
                </form>
                <div className='follow-us-contacts'>
                    <div className='follow-us-phone'>
                        <div className='follow-us-phone-h2'>
                            <h2><span className='uk-overflow-hidden'><span data-uk-scrollspy='cls: our-service-anim-text; repeat: true'>Phone</span></span></h2>
                        </div>
                        <div className='follow-us-phone-p'>
                            <div><img src={iconPhone} alt="" /><a className='uk-link-text' href='tel: +380980099777'>+380980099777</a></div>
                            <div><img src={iconPhone} alt="" /><a className='uk-link-text' href='tel: +380980099111'>+380980099111</a></div>
                        </div>
                    </div>
                    <div className='follow-us-address'>
                        <div className='follow-us-address-h2'>
                            <h2><span className='uk-overflow-hidden'><span data-uk-scrollspy='cls: our-service-anim-text; repeat: true'>Address</span></span></h2>
                        </div>
                        <div className='follow-us-address-p'>
                            <div><p>OPENING HOURS: 8 TO 11 P.M.</p></div>
                            <div><img src={iconStreet} alt="" srcset="" /><a className='uk-link-text' href='https://maps.app.goo.gl/FW7xyzLAhUFkWKk77'>15/4 Khreshchatyk Street, Kyiv</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' follow-us-image-div'>
                <div className='uk-overflow-hidden follow-us-image'>
                    <img src={bigImage} alt="" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true" style={{'transform': 'scale(1.2)'}}/>
                </div>
                <div className='follow-us-icons'>
                    <div className='follow-us-icons-h2'>
                        <h2>Follow us</h2>
                    </div>
                    <div className='follow-us-icons-img'>
                        <a href="#"><img src={iconInstagram} alt="" /></a>
                        <a href="#"><img src={iconPinterest} alt="" /></a>
                        <a href="#"><img src={iconFacebook} alt="" /></a>
                        <a href="#"><img src={iconTwitter} alt="" /></a>
                        <a href="#"><img src={iconTelegram} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}