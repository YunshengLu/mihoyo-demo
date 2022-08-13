import styled from 'styled-components';

interface HeaderProps {
    opacity: number;
}

export const HeaderWrapper = styled.div<HeaderProps>`
    /* background-color: transparent; */
    z-index: 999;
    height: 3.2rem;
    .navBar {
        background-color: ${props => `rgba(242, 244, 245, ${props.opacity})`};
        padding: 0 2vw;
        /* padding-top: 1.1rem; */
        /* padding-bottom: 0.4rem; */
        padding: 0.5rem ;
        font-size: 0.9rem;
        height: 1.8rem;
        line-height: 1.8rem;
        display: flex;
        justify-content: space-between;
        width: 96vw;
        color: ${props =>
            `rgba(${255 - props.opacity * 255}, ${255 - props.opacity * 255}, ${
                255 - props.opacity * 255
            }, .5)`};
        position: fixed;
        z-index: 999;
        .search {
            width: 7vw;
            text-align: center;
            font-size: 1.4rem;
            font-weight: bold;
        }
        .channels {
            /* width: 13.15rem; */
            margin: 0 1vw;
            width: 80vw;
            white-space: nowrap;
            text-align: center;
            flex: 1;
            /* display: inline-block; */
            .swiper-slide {
                width: auto;
            }
        }
        .setChannels {
            /* display: inline-block; */
            display: flex;
            justify-content: center;
            align-items: center;
            width: 7vw;
            text-align: center;
            font-size: 1.2rem;
            .icon-caidanzhankai {
                font-size: 1rem;
            }
        }
    }
`;

interface slideProps {
    fontNumber: number;
    opacity: number;
}

export const MySlide = styled.div<slideProps>`
    display: inline-block;
    width: ${props => `${props.fontNumber * 0.9}rem`};
    text-align: center;
    padding: 0 1rem;
    a {
        color: ${props =>
            `rgba(${255 - props.opacity * 255}, ${255 - props.opacity * 255}, ${
                255 - props.opacity * 255
            }, .5)`};
        &.active {
            position: absolute;
            top: 0;
            left: ${props =>
                `${1 - (0.1 * props.fontNumber) / 2 + 0.1 * props.fontNumber * props.opacity}rem`};
            /* right: ${props =>
                `${0.1 * props.fontNumber - 0.1 * props.fontNumber * props.opacity}rem`}; */
            font-size: ${props => `${1.1 - 0.2 * props.opacity}rem`};
            color: ${props =>
                `rgba(${255 - props.opacity * 255}, ${255 - props.opacity * 255}, ${
                    255 - props.opacity * 255
                })`};
        }
    }
`;

interface stickyProps {
    visible: boolean;
}

export const StickyWrapper = styled.div<stickyProps>`
    display: ${props => (props.visible ? 'flex' : 'none')};
    height: 2.2rem;
    line-height: 2rem;
    margin-top: 0.25rem;
    padding: 0.2rem 0.7rem;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: #fff;
    position: fixed;
    top: 3rem;
    z-index: 999;
    font-size: 0.6rem;
    border-bottom: 1px solid #f2f4f5;
    .left {
        display: flex;
        width: 75%;
        .icon {
            img {
                width: 1.7rem;
            }
        }
        .prompt {
            margin-left: 0.7rem;
            color: #0000008a;
        }
    }
    .link {
        color: #000;
    }
`;
