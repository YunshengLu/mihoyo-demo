import React from 'react';
import loadingImg from '@/assets/loading.svg';

const Loading = () => {
    return (
        <div
            style={{
                height: '12rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '-50',
                fontSize: '1rem',
                justifyContent: 'space-evenly',
                color: 'skyblue',
            }}
        >
            <img src={loadingImg} style={{ width: '5rem' }} />
            <span>加载中，精彩即将呈现</span>
        </div>
    );
};

export default Loading;
