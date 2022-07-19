import styled from 'styled-components';
import style from '@/assets/global-style';

export const Container = styled.div`
    transform-origin: right bottom;
    /* CSSTransition 过渡类型给children */
    &.fly-enter,
    &.fly-appear {
        opacity: 0;
        /* 使用translate3d 会启用 GPU 加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active,
    &.fly-appear-active {
        opacity: 1;
        transition: all 0.3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all 0.3s;
        transform: translate3d(100%, 0, 0);
    }
`;

export const ShortcutWrapper = styled.div`
`

export const Item = styled.div`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    >li {
        width: 17.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        .info {
            display: flex;
            img {
                width: 2.4rem;
                height: 2.4rem;
                margin: 0.5rem;
                border: 1px solid rgba(0, 0, 0, 0.1);
                border-radius: 0.2rem;
            }
            .text {
                display: flex;
                flex-direction: column;
                text-align: left;
                margin: 0.5rem;
                width: 11rem;
                .name {
                    font-size: 0.8rem;
                    font-weight: 600;
                }
                .desc {
                    margin-top: 0.5rem;
                    font-size: 0.6rem;
                    opacity: 0.5;
                }
            }
            p {
                position: absolute;
                width: 1.5rem;
                height: 0.5rem;
                font-size: 0.5rem;
                margin-left: 16rem;
                margin-top: 1.5rem;
                opacity: 0.5;
            }
        }
    }
`