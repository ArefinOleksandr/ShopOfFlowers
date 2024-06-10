import React from 'react';
import { Link } from 'react-router-dom';

import {useLocation} from 'react-router-dom';
import { Navbar } from '../../components/Shared/Navbar/Navbar';
import { Footer } from '../../components/Shared/Footer/Footer';


import './Category.css';

import freshImage from '../../images/FreshImage.png';
import { categorys } from '../../components/Shared/Items/items.data';
import { RightItemsSide } from '../../components/RightItemsSide/RightItemsSide';


    


function ImageSection({imageCategory, titleCategory}){
   
    return (
        <div className='image-section'>
            <div>
                
            <img src={imageCategory} alt="" />
            <h1>{titleCategory}</h1>
            </div>
        </div>
    )
}




export function Category({data}){
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const category = queryParams.get('idCategory');
    const currentCategory = data.find(item => item['_id'] === category);

    console.log(currentCategory);

    return (
        <div>
            <main className='category-main'>

                <ImageSection imageCategory={currentCategory.imageCategory} titleCategory={currentCategory.titleCategory}/>
                <RightItemsSide arrItems ={currentCategory.items} idCategory = {currentCategory._id} page = 'category' />
            </main>
        </div>
    )
}