import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



import './Main.css';
import '../../components/Shared/Animations/Animations.css';
import {RightItemsSide} from '../../components/RightItemsSide/RightItemsSide'
//import { LeftItemsSide } from '../../components/Shared/LeftItemsSide/LeftItemsSide';

const imgHero = require('../../images/imgHero.png');
const freshFlowers = require('../../images/cardItemFreshFlowers.png');
const driedFlowers = require('../../images/cardItemDriedFlowers.png');
const livePlants = require('../../images/cardItemLivePlants.png');
const aromaCandels = require('../../images/cardItemAromaCandels.png');
const fresheners = require('../../images/cardItemFresheners.png');




function LeftSection(props){


    return (
        <div id='main-left-section' className='main-left-section'>
            {props.isMobile}
        <div className='sticky' {...(!props.isMobile && {'data-uk-sticky': 'end: #main-left-section; offset: 20%; media: 769'})}>
                <div>
                    <h1><span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>Kyiv</span></span><span><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>Luxe</span><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>Bouquets</span></span></h1>
                    <p style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>
                        <span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>Discover Uniquely Crafted Bouquets</span></span>
                        <span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>and Gifts for Any Occasion: Spread</span></span>
                        <span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}> Joy with Our Online Flower Delivery Service</span></span></p>
                </div>
                <div>
                    <div>
                        <img src={imgHero} alt="" srcset="" /><div style={{animation: 'white-opacity-image 1.5s'}}></div>
                    </div>
                    <div>
                        <span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>Experience the joy of</span></span>
                        <span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}> giving with our modern floral studio.</span></span> 
                        <span className='overflow-hidden-row'><span style={{animation: 'anim-text-from-bottom-to-top 1.5s'}}>Order online and send fresh flowers, plants and gifts today.</span></span>
                    </div>
                </div>
                </div>
            </div>
        
    )
}



export function Main(props){
    return (
        <div id='js-oversized' style={{marginTop: '5.95vw'}}>
            
            <LeftSection isMobile={props.isMobile}/>
            <RightItemsSide arrItems = {props.categories} page='main' />
        </div>
    )
}