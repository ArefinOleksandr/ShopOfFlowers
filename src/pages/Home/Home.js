import React from 'react';

import { Navbar } from '../../components/Shared/Navbar/Navbar';
import { Main } from '../../containers/Main/Main';
import { AboutUs } from '../../containers/AboutUs/AboutUs';
import { ChooseUs } from '../../containers/ChooseUs/ChooseUs';
import { FollowUS } from '../../containers/FollowUs/FollowUs';
import { OurService } from '../../containers/OurService/OurService';
import { Reviews } from '../../containers/Reviews/Reviews';
import { Footer } from '../../components/Shared/Footer/Footer';
import useMobileCheck from '../../components/Shared/functions';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export function Home({data, basename}){
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollTo=params.get('scrollTo');

        if(scrollTo){
            const element = document.querySelector(`.${scrollTo}`);
            if(element){
                window.scrollTo({top: element.offsetTop - '100', behavior:"smooth"})
            }
        }
    }, [location])


    return(
        <div>
            <Main isMobile={useMobileCheck()} categories={data}/>
            <AboutUs />
            <ChooseUs isMobile={useMobileCheck()} />
            <FollowUS />
            <OurService basename={basename} />
            <Reviews />
        </div>
    )
}