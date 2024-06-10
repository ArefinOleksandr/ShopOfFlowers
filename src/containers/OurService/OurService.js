import React, { useEffect, useState, useRef } from 'react';
import subscribeImage from '../../images/image.png'
import './OurService.css';
import { Link } from 'react-router-dom';
export function OurService({basename}){

    

    return (
        <div className='our-service-section'>
            <div className='our-service-h1'>
                <h1><span className='uk-overflow-hidden'><span data-uk-scrollspy='cls: our-service-anim-text; repeat: true'>Our</span> <span data-uk-scrollspy='cls: our-service-anim-text; repeat: true'>Service</span></span></h1>
            </div>
            <div className='our-service-subscribe'>
                <div className='subscribe-image'>
                    <img src={subscribeImage} alt="" />
                </div>
                <div className='subscribe-button'>
                    <h4><span className='uk-overflow-hidden'><span data-uk-scrollspy='cls: our-service-anim-text; repeat: true'>service</span> </span></h4>
                    <h2 style={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                    }><span className='uk-overflow-hidden'><span data-uk-scrollspy='cls: our-service-anim-text; repeat: true'>Flower</span> <span data-uk-scrollspy='cls: our-service-anim-text; repeat: true'>Subsctiptions</span></span></h2>
                    <p>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                    <Link to={'/subscription'} className='uk-button'>SUBSCRIBE NOW</Link>
                </div>
            </div>
            <div  className='our-service-inquire uk-background-blend-darken'  >
                <h4>
                    Service
                </h4>
                <h2 style={{'color': 'white'}}>
                    Wedding & Event Decor
                </h2>
                <p>
                Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.
                </p>
                <button className='uk-button' style={{'backdropFilter': 'blur(.5px)', 'backgroundColor': '#fff0'}}>
                    INQUIRE NOW
                </button>
            </div>
        </div>
    )
}