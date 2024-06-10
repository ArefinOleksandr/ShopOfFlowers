import { useState, useEffect } from "react"
import style from '../Payment.module.css'
import CartIcon from '../../../icons/CartIcon.png'


export function Order({Items}){
    const [itemsInCart, setItemsInCart] = useState(Items);
    const [mobileState, setMobileState] = useState(window.innerWidth <= 992);
    
    
    const calculateTotal = () => {
        let total = 0;
        itemsInCart.forEach(item => {
            total += item.priceItem
        })
        return total;
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

    return (
        <div className={style['order-section']}>
            {!mobileState ? 
            (<h4>ORDER SUMMURY</h4>) : 
            (<button className="uk-button" data-uk-toggle='target: #order-section-details; animation: slide-top'>
                <img src={CartIcon} /> 
                <span>Show order summury</span>
            </button>)}
            <div id="order-section-details" className={style['order-section-details']}>
                <div className={style['order-section-details-product']}>
                    {itemsInCart.map((item) => (
                        <div>
                            <img src={item.imageItem} />
                            <div>
                                <div>
                                    <h6>{item.titleItem}</h6>
                                    <span>Quantity{'('+item.countQuantity+')'}</span>
                                </div>
                                <h6>${item.priceItem}</h6>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={style['order-section-details-gift']}>
                    <span>If you have our gift card, enter the code to get discounts</span>
                    <form className={style['gapper-div'] + ' uk-child-width-1-2'}>
                        <input className='uk-input' type='text' placeholder='Gift Card' aria-label='Gift Card'/>
                        <button type="button" className="uk-button">APPLY</button>
                    </form>
                </div>
                <div className={style['order-section-details-subtotal']}>
                    <div>
                        <span>Subtotal</span>
                        <span>{'$' + calculateTotal()}</span>
                    </div>
                    <div>
                        <span>Shipping</span>
                        <span>$0.00</span>
                    </div>
                </div>
                <div className={style['order-section-details-total']}>
                    <div>
                        <h6>Total</h6>
                        <span>{'$' + calculateTotal()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}