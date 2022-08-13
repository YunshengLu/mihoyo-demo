import { CarouselsIn } from '@/models';
import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselsWrapper } from './style'

interface CarouselsProps{
  carousels: CarouselsIn,
}

const Carousels: React.FC<CarouselsProps> = (props) => {
  const { carousels } = props;
  const swiperList = 
    carousels.data.map(item =>
      <SwiperSlide className="swiper-slide" key={item.app_path}>
        <img src={item.cover} />
      </SwiperSlide>
    )
  
  return (
    <CarouselsWrapper>
      <Swiper
        speed={700} // 变屏速度
        spaceBetween={10}
        setWrapperSize={true} // flex调整Wrapper
        slidesPerView={1.18} // 一屏几个小silder
        centeredSlides={true} // 活动后居中
        centeredSlidesBounds={true} // 贴边
        className="myCarouselsSwiper"
      >
        {swiperList}
      </Swiper>
    </CarouselsWrapper>
  )
}

export default memo(Carousels)
