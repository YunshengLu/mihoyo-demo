import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
`;

export const Top = styled.div`
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    .left {
        width: 2.15rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon-sousuo {
            font-size: 1rem;
            font-weight: bold;
            color: white;
        }
    }
    .right {
        position: absolute;
        width: 2.15rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0;
        .icon-caidanzhankai {
            font-size: 0.8rem;
            font-weight: 500;
            color: white;
        }
    }
    .top_color {
        .icon-caidanzhankai{
            color: black;
        }
        .icon-sousuo{
            color: black;
        }
    }
`;

export const SelectItem = styled.div`
    width: 14.29rem;
    height: 2rem;
    .swiper-slide {
        width: auto;
        a {
            display: inline-block;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 2rem;
            width: auto;
            margin: auto 0.6rem;
            color: #707070;
            &.active {
                font-weight: 500;
                font-size: 1rem;
                color: ${props => (props.searchHidden ? 'black' : 'white')};
                /* color: white; */
            }
        }
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
        }
    }
`;
