import React, { useEffect, useState } from "react";
import style from './Cart.module.css';

export function Cart ({Items, handleRemoveItemsFromCart, Basename}){
    
    const calculateTotal = () => {
        let total = 0;
        Items.forEach(item => {
            total += item.priceItem
        })
        return total;
    }
    const handleRemoveButton = (item) => {
        handleRemoveItemsFromCart(item);
    }
    const handleResearch = () => {
        window.location.href = Basename + '/payment'
    }
    
    
    return (
        <div className={`${style[['cart-section']]} " uk-dropbar uk-dropbar-right"`} data-uk-drop='mode: click; pos: bottom-right; stretch : y; target : ! nav; animation: slide-right; animate-out : true; duration: 700' >
            <div className={style[['title-cart-section']]}>
                <h6>Shopping Cart</h6>
            </div>
            <div className={style[['items-cart-section']]}>
                {
                    Items.map(item => (
                        <div>
                            <div>
                                <img src={item.imageItem} />
                                <div>
                                    <h6>{item.titleItem}</h6>
                                    <span>Quantity{'('+item.countQuantity+')'}</span>
                                    <h6>${item.priceItem}</h6>
                                </div>
                            </div>
                            
                            <button className="uk-button" onClick={() => handleRemoveButton(item)}>Remove</button>
                        </div>
                    ))
                }
            </div>
            <div className={style['subtotal-cart-section']}>
                <h6>
                    Subtotal
                </h6>
                <span>${calculateTotal()}</span>
            </div>
            <div className={style['gift-message-cart-section']}>
                <textarea className="uk-textarea" rows={5} placeholder="Gift Message" type="text" />
            </div>
            <div className={style[['annotation-cart-section']]}>
                <p>Shipping & taxes calculated at checkout <br/>
                    Free standard shipping within Kyiv</p>
            </div>
            <button onClick={handleResearch} className={style[['button-cart-section']]}>CHEK OUT</button>
        </div>
    )
}