import React, {useRef, useState} from 'react';
import './Reviews.css';
import googleImage from '../../images/googleLogo.png'

const reviews = [
    {
        id: 1, 
        text: '“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”',
        author: '– Ronald Richards',
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aspernatur dignissimos adipisci natus aut repudiandae quae dolorum dicta minima quis temporibus earum quibusdam, vitae soluta? Eaque cupiditate quia nam dolore?',
        author: '- Alex'
    },
    {
        id: 3,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aspernatur dignissimos adipisci natus aut repudiandae quae dolorum dicta minima quis temporibus earum quibusdam, vitae soluta? Eaque cupiditate quia nam dolore?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aspernatur dignissimos adipisci natus aut repudiandae quae dolorum dicta minima quis temporibus earum quibusdam, vitae soluta? Eaque cupiditate quia nam dolore?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aspernatur dignissimos adipisci natus aut repudiandae quae dolorum dicta minima quis temporibus earum quibusdam, vitae soluta? Eaque cupiditate quia nam dolore?',
        author: 'User'
    }
]

function Carousel(props){

    

    return(
        <div  data-uk-slider='center:true'  className='carousel'>
                
                <div className='uk-position-relative' style={{maxWidth: '90vw'}}>
                    <div className='uk-slider-container' tabIndex={-1}>
                        <ul className='uk-slider-items uk-grid'>
                            {props.reviews.map((item) => (
                                <li className=''>
                                    <div className='uk-card uk-card-default' style={{'height' : '98%'}}>
                                        <h2 className='uk-text-middle'>
                                            {item.text}
                                        </h2>
                                        <p className='uk-text-middle'>
                                            {item.author}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>   
                </div>
                   
                <div class="uk-hidden@s uk-light">
			        <a class="uk-position-center-left uk-position-small" href data-uk-slidenav-previous data-uk-slider-item="previous"></a>
			        <a class="uk-position-center-right uk-position-small" href data-uk-slidenav-next data-uk-slider-item="next"></a>
		        </div>
		        <div class="uk-visible@s">
			        <a class="uk-position-center-left-out uk-position-small" href data-uk-slidenav-previous data-uk-slider-item="previous"></a>
			        <a class="uk-position-center-right-out uk-position-small" href data-uk-slidenav-next data-uk-slider-item="next"></a>
		        </div>
            </div>
        </div>
    )
}

export function Reviews(){
    
    return (
        <div className='reviews-section'>
            <div className='reviews-h4'>
                <img src={googleImage} alt="" />
                <h4 className='uk-text-bold'>REVIEWS</h4>
                <h1 className='uk-text-bolder'>Our Clients say</h1>
            </div>
            <Carousel reviews = {reviews}/>
        </div>
      
    );
}