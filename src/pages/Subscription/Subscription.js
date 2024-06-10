import React from "react";
import {OfferSect} from './components/offerSect'
import style from './Subscription.module.css'
import { AboutSubscribe } from "./components/aboutSubscribe";
import { Subscribe } from "./components/Subscribe";
import {SubsFAQ} from './components/SubscriptionFAQ'

export function SubscriptionPage(){
    


    return(
        <div className={style['subscription-page-font-styles']} style={{marginTop: '5.95vw'}}>
            <OfferSect />
            <AboutSubscribe />
            <Subscribe />
            <SubsFAQ />
        </div>
    )
}