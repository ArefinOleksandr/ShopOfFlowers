import { Order } from "./components/Order";
import { Contact } from "./components/Contact";
import { Shipping } from "./components/Shipping";
import { Payment } from "./components/Payment";
import style from './Payment.module.css';
import { useState } from "react";

export function PaymentPage({addedItemsToCart}){
    const [stepState, setStepState] = useState({Contact: true, Shipping: false, Payment: false});
    const [openSectionState, setOpenSectionState] = useState({Contact: true, Shipping: false, Payment: false});
    
    const handleNextStepButton = (currentSection) => {
        switch(currentSection){
            case 'CONTACT':
                setStepState({Contact: true, Shipping: true, Payment: false});
                setOpenSectionState({Contact: false, Shipping: true, Payment: false})
                break;
            case 'SHIPPING':
                setStepState({Contact: true, Shipping: true, Payment: true});
                setOpenSectionState({Contact: false, Shipping: false, Payment: true})
                break;
            case 'PAYMENT': 
                console.log('Complete!');
                break;
            default:
                console.log('Something Wrong')
        }
    }   
    const handleOpenSection = (currentSection) =>{
        switch(currentSection){
            case 'CONTACT':
                if(stepState.Contact){
                    setOpenSectionState({Contact: true, Shipping: false, Payment: false});
                }
               
                break;
            case 'SHIPPING':
                if(stepState.Shipping){
                    setOpenSectionState({Contact: false, Shipping: true, Payment: false});
                }
                break;
            case 'PAYMENT': 
            if(stepState.Payment){
                setOpenSectionState({Contact: false, Shipping: false, Payment: true});
            }
                break;
            default:
                console.log('Something Wrong')
        }
    }

    return (
        <div className={style['payment-page']}>
            <div className={style['form-section']}>
                <div>
                    <span className={openSectionState.Contact? style['active-menu-string'] : style['disable-menu-string']}> INFORMATION &gt;</span>
                    <span className={openSectionState.Shipping? style['active-menu-string'] : style['disable-menu-string']}> SHIPPING &gt;</span>
                    <span className={openSectionState.Payment? style['active-menu-string'] : style['disable-menu-string']}> PAYMENT &gt;</span>
                </div>
                <Contact 
                    stepState={stepState.Contact} 
                    isOpened={openSectionState.Contact}
                    handleNextStepButton={handleNextStepButton}
                    handleOpenSection={handleOpenSection}
                />
                <Shipping 
                    stepState={stepState.Shipping} 
                    isOpened={openSectionState.Shipping}
                    handleNextStepButton={handleNextStepButton}
                    handleOpenSection={handleOpenSection}
                />
                <Payment 
                    stepState={stepState.Payment} 
                    isOpened={openSectionState.Payment}
                    handleNextStepButton={handleNextStepButton}
                    handleOpenSection={handleOpenSection}
                />
            </div>
            <Order Items={addedItemsToCart} />
        </div>
    )
}