import style from '../Payment.module.css'
import ApplePayIcon from '../../../icons/ApplePay.png'
import GooglePayIcon from '../../../icons/GooglePay.png'

export function Payment({stepState, isOpened, handleNextStepButton, handleOpenSection}){
    return (
        <div className={style['inputs-form-section']}>
            <button 
                {...(stepState && !isOpened ? { 'data-uk-toggle': 'target: #payment-section; animation: slide-top' } : {})}
                onClick={() => handleOpenSection('PAYMENT')}
                className={stepState ? style['active-menu-string']: style['disable-menu-string']}
            >Payment</button>
            <div {...(isOpened ? {'hidden': false} : {'hidden': true})} id="payment-section">
                    <form>
                        <input className='uk-input' type='text' placeholder='Card Number' aria-label='Card Number'/>
                        <div className={style['gapper-div'] + ' uk-child-width-1-2'}>
                            <input className='uk-input' type='text' placeholder='MM / YY' aria-label='MM / YY'/>
                            <input className='uk-input' type='text' placeholder='CVV Code' aria-label='CVV Code'/>
                        </div>
                        <button type='button'  onClick={() => handleNextStepButton('PAYMENT')}>MAKE A PURCHASE</button>
                        <h4>Or pay using</h4>
                        <div className={style['another-payment-button']+ " " + style['gapper-div'] + ' uk-child-width-1-2 '}>
                            <button className='uk-button' type='button'><img src={ApplePayIcon}/><span>APPLE PAY</span></button>
                            <button className='uk-button'  type='button'><img src={GooglePayIcon} /> <span>GOOGLE PAY</span></button>
                        </div>
                    </form>
                    
                </div>
        </div>
    )
}