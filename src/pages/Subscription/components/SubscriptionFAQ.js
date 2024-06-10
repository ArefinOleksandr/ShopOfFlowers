import style from '../Subscription.module.css';
import arrowIcon from '../../../icons/VectorArrowFAQ.png'
export const SubsFAQ = () => {

    return (
        <div className={style['subs-faq-section']}>
            <div className={style['faq-block']}>
                <h1 className='uk-text-center'>Subscription FAQ</h1>
                <ul className='uk-navbar-nav'>
                    <li>
                        <a className='uk-button' data-uk-toggle='target: #toggle-item-1; animation: slide-top'><span>How often will I get a new bouquet?</span><img src={arrowIcon} /></a>
                         <p hidden id='toggle-item-1'>Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
                    </li>
                    <li>
                        <a className='uk-button' data-uk-toggle='target: #toggle-item-2; animation: slide-top'><span>Can i send subscription like as a gift ?</span><img src={arrowIcon} /></a>
                        <p hidden id='toggle-item-2'>Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
                    </li>
                    <li>
                        <a className='uk-button' data-uk-toggle='target: #toggle-item-3; animation: slide-top'><span>Can I choose which bouquet I get ?</span><img src={arrowIcon} /></a>
                        <p hidden id='toggle-item-3'>Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
                    </li>
                    <li>
                        <a className='uk-button' data-uk-toggle='target: #toggle-item-4; animation: slide-top'><span>Can I change the shipping address ?</span><img src={arrowIcon} /></a>
                        <p hidden id='toggle-item-4'>Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
                    </li>
                    <li>
                        <a className='uk-button' data-uk-toggle='target: #toggle-item-5; animation: slide-top'><span>What day will the subscription bouquet come?</span><img src={arrowIcon} /></a>
                        <p hidden id='toggle-item-5'>Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
                    </li>
                    <li>
                        <a className='uk-button' data-uk-toggle='target: #toggle-item-6; animation: slide-top'><span>Can I suspend my subscription to flowers ?</span><img src={arrowIcon} /></a>
                        <p hidden id='toggle-item-6'>Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}