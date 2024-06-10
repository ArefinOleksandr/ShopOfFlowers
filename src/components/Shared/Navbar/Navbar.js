import React, { createRef, useEffect, useState } from 'react';
import ShopCartImage from '../../../icons/ShopCart.svg';
import { Cart } from '../../../containers/Cart/Cart';
import mobileStyle from './Navbar-Mobile.module.css';
import desktopStyle from './Navbar-Desktop.module.css';
import { Link, useLocation } from 'react-router-dom';

import telegram from '../../../images/Telegram.svg'
import instagram from '../../../images/Instagram.svg'
import facebook from '../../../images/Facebook.svg'
import twitter from '../../../images/Twitter.svg'
import pinterest from '../../../images/Pinterest.svg'

export function Navbar({handleRemoveItemsFromCart, addedItemsToCart, router }) {
  const [mobileState, setMobileState] = useState(window.innerWidth <= 992);
  const [linesButtonState, setLinesButtonState] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('.lets-talk-div');
    if(element){
      window.scrollTo({top: element.offsetTop, behavior: 'smooth'})
    }
    else{
      window.location.href = router.basename + '?scrollTo=lets-talk-div'
    }
  }
  

  useEffect(() => {
    const handleResize = () => {
      setMobileState(window.innerWidth <= 992);
      console.log(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, );

  return mobileState ? (
    <nav className={mobileStyle['nav-navbar'] + ' uk-position-top uk-position-fixed'}>
      <div>
        <div class="uk-navbar-container" data-uk-navbar>
          <div class={mobileStyle['navbar-left'] + ' uk-navbar-left'}>
            <a class="uk-navbar-toggle uk-navbar-toggle-animate" data-uk-navbar-toggle-icon href=""></a>
            <div
              className={mobileStyle['menu-nav'] + " uk-dropbar uk-dropbar-left"}
              style={window.innerWidth <= 376 ?  {width: '100vw'}:{width: '50vw'}}
              data-uk-drop='mode: click; pos: bottom-left; stretch : y; target : ! nav; animation: slide-left; animate-out : true; duration: 700'
            >
              
                <div className={mobileStyle['menu-nav-item']}><a href='#'>Sing In</a></div>
                <div className={mobileStyle['menu-nav-item']}><a href={router.basename}>Home</a></div>
                <div className={mobileStyle['menu-nav-item']}><a href={router.basename + '/subscription'}>Servise</a></div>
                <div className={mobileStyle['menu-nav-item']}><button onClick={scrollToContact}>Contact</button></div>
                <div className={mobileStyle['menu-nav-item']}><a href="#">About us</a></div>
                <div className={mobileStyle['menu-nav-item']}>
                  <a>Shipping & returns</a><br />
                  <a>Terms & conditions</a><br />
                  <a>Privacy policy</a><br />
                </div>
                <div className={mobileStyle['menu-nav-item'] + ' ' + mobileStyle['menu-nav-item-image']}>
                  <a href><img src={telegram}/></a>
                  <a href><img src={instagram}/></a>
                  <a href><img src={facebook}/></a>
                  <a href><img src={pinterest}/></a>
                  <a href><img src={twitter}/></a>
                </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div className={mobileStyle['navbar-right'] + ' uk-navbar-right'}>
            <a>
              <img src={ShopCartImage} />
            </a>
            <Cart Basename={router.basename} Items={addedItemsToCart} />
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <nav className={desktopStyle['nav-navbar'] + ' uk-position-top uk-position-fixed uk-width-1-1'}>
      <ul className='uk-width-1-4 uk-child-width-1-2'>
        <li>
          <a  href={router.basename}>Shop</a>
        </li>
        <li>
          <button onClick={scrollToContact}>Contact</button>
        </li>
      </ul>
      <div className='uk-width-1-4'></div>
      <div className='uk-width-1-4'></div>
      <ul className='uk-width-1-4'>
        <li>
          <a href="#" className=''>Subscribe</a>
        </li>
        <li>
          <button id="targer-cart-button">Cart</button>
          <Cart Basename={router.basename} handleRemoveItemsFromCart={handleRemoveItemsFromCart} Items={addedItemsToCart} />
        </li>
      </ul>
    </nav>
  );
}
