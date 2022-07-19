import React,{ useEffect } from 'react';
import {
    ItemWrapper
} from './style'
import Swiper from 'swiper'

/**
 * 
 * @param {*} param0 
 * @returns 活动导航List
 */
const NavigatorList = ({navigator}) => {

    let navigatorList = navigator

    let swiper = null;
    useEffect(() => {
        if(swiper) return;
        swiper = new Swiper('.swiper-container',{
            observer: true,
            observerParants: true,
            slidesPerView : 'auto',
            freeMode: {
                enabled: true,
            },
        })
    },[])

    return (
        <ItemWrapper>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
            {
                navigatorList && navigatorList.length ?
                navigatorList.map((item) => 
                    <div key={item.id} className="swiper-slide">
                        <a href={item.app_path}>
                            <img src={item.icon}/>
                            <span>{item.name}</span>
                        </a>
                    </div>
                ) : null
            }
                </div>
            </div>
        </ItemWrapper>
    )
}

export default NavigatorList