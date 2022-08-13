import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ActivityWrapper } from './style'
import { NavigatorItem } from '@/models'
import { FreeMode } from 'swiper';

interface ActivityProps{
  navigator: NavigatorItem[],
}

const ActivityBar: React.FC<ActivityProps> = (props) => {
  const { navigator } = props;
  const swiperList =
    navigator.map(item =>
      <SwiperSlide className="mySlide" key={item.id}>
        <a className="item" href={item.app_path}>
          <img src={item.icon} />
          <span>{item.name}</span>
        </a>
      </SwiperSlide>
    )
  return (
    <ActivityWrapper>
      <Swiper
        className='mySwiper'
        setWrapperSize={true} // flex调整Wrapper
        slidesPerView={5.5}
        centeredSlidesBounds={true} // 贴边
        modules={[FreeMode]}
        freeMode={{
          enabled: true,

        }}
      >
        {swiperList}
      </Swiper>
    </ActivityWrapper>
  )
}

export default memo(ActivityBar)
