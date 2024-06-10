import style from '../Payment.module.css'

export function Contact({stepState, isOpened, handleNextStepButton, handleOpenSection}) {

    return (
        <div className={style['inputs-form-section']}>
            <button 
                {...(stepState && !isOpened ? { 'data-uk-toggle': 'target: #contact-section; animation: slide-top' } : {})}
                onClick={() => handleOpenSection('CONTACT')}
                className={stepState ? style['active-menu-string']: style['disable-menu-string']}
            >Contact Information </button>
                <div {...(isOpened ? {'hidden': false} : {'hidden': true})} id="contact-section">
                    <form>
                        <input className='uk-input' type='text' placeholder='Your Name' aria-label='Your Name'/>
                        <input className='uk-input' type='text' placeholder='Your Email' aria-label='Your Email'/>
                        <input className='uk-input' type='text' placeholder='Your Phone number' aria-label='Your Phone number'/>
                        <button className='uk-button' type='button' onClick={() => handleNextStepButton('CONTACT')}>CONTINUE TO SHIPPING</button>
                    </form>
                    
                </div>
        </div>
    )
}