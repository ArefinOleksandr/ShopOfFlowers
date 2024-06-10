import { Link } from 'react-router-dom';
import React from 'react';


const ItemCategory = ({imgPosition, title, image, id}) =>{
    console.log(imgPosition)
    return (
            <Link to={'/category?idCategory='+id}>
                <div className={'section-main ' + imgPosition}>
                    <div>
                        <h1>{title}</h1>
                        <span>Shop Now</span>
                    </div>
                    <div className='image-div'><img src={image} /></div>
                </div>
            </Link>
    )
}

const ItemProduct = ({idCategory, idItem, imageItem, imagePosition, priceItem, titleItem}) => {

    return (
        <Link to={'/item?idCategory='+idCategory+'&&idItem='+idItem} className={imagePosition}>
                            <div className='img-scale-parrent'>
                                <img
                                    style={{
                                        animation: 'img-scale 1s'
                                    }}
                                src={imageItem} alt="" />
                                <h2>{titleItem}</h2>
                                <p>price {priceItem}$</p>
                                
                            </div>
                            
                            
                        </Link>
    )
}

export function RightItemsSide(props){
    console.log(props.arrItems)
    let countItems = 0
    if(props.arrItems && props.page === 'main'){
        console.log(props.arrItems);
        return (
            <div className='main-right-section'>
                {props.arrItems.map(item => {
                    
                    countItems++
                    return <ItemCategory  imgPosition={countItems % 2 == 0 ? 'right-image' : 'left-image'} title={item.titleCategory} image={item.imageCategory} id={item._id}/>
            })}
            </div>
            
        )
        
    }
    else if(props.arrItems && props.page === 'category'){
        return(
            <div className='items-section'>
                {props.arrItems.map(item => {
                    countItems++;
                    return <ItemProduct 
                        idCategory={props.idCategory}
                        idItem={item._id}
                        imageItem ={item.imageItem}
                        imagePosition = {countItems % 2 == 0 ? 'grid-second-column' : 'grid-first-column'}
                        priceItem = {item.priceItem}
                        titleItem = {item.titleItem}  />
                })}
            </div>
        )
    }


    // else if(props.category && props.arrItems){
    //     console.log(props.arrItems, props.category)
    //     return(
    //         <div className='items-section'>
    //             {
    //                 props.arrItems[props.category].map((item) => (
    //                     <Link to={'/item?category='+props.category+'&&item='+item.url} className={!(item.id%2 == 0) ? 'grid-first-column' : 'grid-second-column'}>
    //                         <div className='img-scale-parrent'>
    //                             <img
    //                                 style={{
    //                                     animation: 'img-scale 1s'
    //                                 }}
    //                             src={item.img} alt="" />
    //                             <h2>{item.name}</h2>
    //                             <p>price {item.price}$</p>
                                
    //                         </div>
                            
                            
    //                     </Link>
    //                 ))
    //             }
    //         </div>
    //     )
    // }
    
}   

 