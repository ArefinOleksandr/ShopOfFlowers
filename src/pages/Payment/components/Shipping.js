import style from '../Payment.module.css'
import { useState } from 'react';

function DateInput() {
    const [date, setDate] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
  
    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      if (!date) {
        setIsFocused(false);
      }
    };
  
    return (
      <div className="date-input-container">
        {!isFocused && !date && (
          <input
            type="text"
            value="Data of Delivery"
            readOnly
            className="uk-input"
            onFocus={handleFocus}
          />
        )}
        {(isFocused || date) && (
          <input
            type="date"
            className='uk-input'
            value={date}
            onChange={handleDateChange}
            onBlur={handleBlur}
            autoFocus={isFocused}
          />
        )}
      </div>
    );
  }

  function TimeInput() {
    const [time, setTime] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    const handleTimeChange = (e) => {
      setTime(e.target.value);
    };
  
    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      if (!time) {
        setIsFocused(false);
      }
    };
  
    return (
      <div className="input-container">
        {!isFocused && !time && (
          <input
            type="text"
            value="Time of Delivery"
            readOnly
            className="uk-input"
            onFocus={handleFocus}
          />
        )}
        {(isFocused || time) && (
          <input
            type="time"
            className='uk-input'
            value={time}
            onChange={handleTimeChange}
            onBlur={handleBlur}
            autoFocus={isFocused}
          />
        )}
      </div>
    );
  }


export function Shipping({stepState, isOpened, handleNextStepButton, handleOpenSection}){
    return (
        <div className={style['inputs-form-section']}>
            <button 
                {...(stepState && !isOpened ? { 'data-uk-toggle': 'target: #shipping-section; animation: slide-top' } : {})}
                onClick={() => handleOpenSection('SHIPPING')}
                className={stepState ? style['active-menu-string']: style['disable-menu-string']}
            >Shipping details</button>
            <div {...(isOpened ? {'hidden': false} : {'hidden': true})} id="shipping-section">
                    <form>
                        <input className='uk-input' type='text' placeholder='Street' aria-label='Street'/>
                        <input className='uk-input' type='text' placeholder='Recipients Phone number' aria-label='Recipients Phone number'/>
                        <DateInput />
                        <TimeInput />
                        <div className={style['gapper-div'] + ' uk-child-width-1-2'}>
                            <input className='uk-input'  type='text' placeholder='Street' aria-label='Street' />
                            <input className='uk-input'  type='text' placeholder='Appartment Number' aria-label='Appartment Number' />
                        </div>
                        <button type='button' onClick={() => handleNextStepButton('SHIPPING')}>Open Payment</button>
                    </form>
                </div>
        </div>
    )
}