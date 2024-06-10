import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Product.css';
import vectPlus from '../../icons/VectorPlus.svg';
import vectMinus from '../../icons/VectorMinus.svg';
import { Footer } from '../../components/Shared/Footer/Footer';
import icon_rec_1 from '../../images/recomendations/06f1ddd50f3fc305ea6d70043729835e.png';
import icon_rec_2 from '../../images/recomendations/2ca93b1afa00b251b4254051d124ce4b.png';
import icon_rec_3 from '../../images/recomendations/9590c94576caf4fd72cdc2ee9319c49b.png';
import icon_rec_4 from '../../images/recomendations/98945145d394abbe8321229537d3cc1d.png'
import { Navbar } from '../../components/Shared/Navbar/Navbar';


function ImageSection({image}){
    return(
        <div className='product-image-section' style={{boxSizing:'border-box',border: '1px #121212 solid'}}>
            {/* {categorys[props.category].map((item) => {
                if(item.url === props.item){
                    return <img src={item.img} alt="" />
                }
                
})} */}
        <img src={image} />

        </div>
    )
}


function BuySection({handleAddItemsToCart ,titleCategory, titleItem, arrCombinationItems, priceItem,imageItem}){
    
    const [countQuantity, setCountQuantity] = useState(1);
    const [activeCombination, setActiveCombination] = useState([])

    const handleCountMinus = () =>{
        if(countQuantity !== 1 ){
            
            setCountQuantity(countQuantity-1);
        }
    }
    const handleCountPlus = () => {
        setCountQuantity(countQuantity+1);
    }

    const handleCombinationClick = (e) => {
        console.log(e.target.parentNode)
        e.target.parentNode.style.border = '1px solid gray'
    }

    const handleClickBuyButton = () => {
        handleAddItemsToCart({
            imageItem : imageItem,
            titleItem : titleItem,
            priceItem : priceItem * countQuantity,
            countQuantity : countQuantity,

        })
    }

    return(
        <div className='product-buy-section'>
            <h2>
                {titleCategory}<span>{titleItem}</span>
            </h2>
            <h1>{titleItem + ' - ' + priceItem}</h1>
            <p>
            Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even
            </p>
            <div className='quantity' style={{display: 'flex',flexDirection:'row', alignItems: 'baseline'}}>
                <p>Quantity</p>
                <div className='counter'>
                    <button className='uk-width-1-3 uk-height-1-1' onClick={handleCountMinus}><img src={vectMinus} /></button>
                    <input className='uk-width-1-3 uk-height-1-1 uk-text-center'  type="text" value={countQuantity}/>
                    <button className='uk-width-1-3 uk-height-1-1' onClick={handleCountPlus}><img src={vectPlus}/></button>
                </div>
                
            </div>
            <div data-uk-slider className='combination-section '>
                <p>
                    Excelent Combinations with:
                </p>
                <div className='uk-position-relative'>
                    <div className='combination uk-slider-container'>
                        <ul className='uk-slider-items'>
                        {arrCombinationItems.map((item) => (
                            <li onClick={handleCombinationClick}  className='comb-item uk-width-1-4'>
                                <img src={item.imageCombinateItem} alt="" 
                                style={{
                                    width: "100%"
                                }}/>
                                <h4 style={{margin: '0'}}>{item.titleCombinateItem}</h4>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div class="uk-visible@s">
                        <a class="uk-position-center-left-out uk-position-small" href data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                        <a class="uk-position-center-right-out uk-position-small" href data-uk-slidenav-next data-uk-slider-item="next"></a>
                    </div>
                </div>

                
            </div>
            <h3>
                Price options
            </h3>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                 <input type="radio" name="" id="" style={{
                    height: '24px',
                    margin: '12px'
                }} /><p style={{
                    margin: '0'
                }}>One time purchase. Price $
                    <span>
                        {priceItem * countQuantity}
                    </span></p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
                <input type="radio" name="" id="" style={{
                    height: '24px',
                    margin: '12px'
                }} /><p style={{
                    margin: '0'
                }}>Subscribe now, and save 25% on this order. </p>
            </div>
            <button onClick={handleClickBuyButton} style={{
                border: '0',
                color: '#fff',
                backgroundColor: '#121212',
                margin: '24px'
            }}>ADD TO BASKET</button>
        </div>
    )
}

function Recomendations(){
    return (
        <div className='recomendations'>
            <div>
                <img src={icon_rec_1} alt="" />
                <h4>Rattan Grapefruit</h4>
                <p>price 48$</p>
            </div>
            <div>
                <img src={icon_rec_2} alt="" />
                <h4>Lime & Matcha</h4>
                <p>price 46$</p>
            </div>
            <div>
                <img src={icon_rec_3} alt="" />
                <h4>Cedar & Lavender</h4>
                <p>price 64$</p>
            </div>
            <div>
                <img src={icon_rec_4} alt="" />
                <h4>Ocean Mint</h4>
                <p>price 58$</p>
            </div>
        </div>
    )
}

export function Product({data, handleAddItemsToCart}){
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const idCategory = queryParams.get('idCategory');
    const idItem = queryParams.get('idItem')

    const currentCategory = data.find(item => item['_id'] === idCategory);
    const currentItem = currentCategory.items.find(item => item['_id'] === idItem);

    console.log(currentCategory, currentItem);

    return(
        <div className='product-section'>
            <ImageSection image={currentItem.imageItem} />
            <BuySection 
            titleCategory={currentCategory.titleCategory} 
            titleItem={currentItem.titleItem} 
            arrCombinationItems={currentItem.combinateItems}
            priceItem={currentItem.priceItem}
            handleAddItemsToCart={handleAddItemsToCart}
            imageItem={currentItem.imageItem}/>
            <h1 className='head-rec' style={{
                borderLeft: '1px #121212 solid', 
                borderRight: '1px #121212 solid',
                margin: '0',
                padding: '24px'
                }} >You may also like...</h1>
            <Recomendations />
        </div>
    )
}