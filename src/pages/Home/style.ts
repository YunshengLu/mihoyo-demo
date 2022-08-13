import styled from "styled-components";

interface HomeWrapperProps{
    image:string,
}

export const HomeWrapper = styled.div<HomeWrapperProps>`
    background-image: url(${props => (props.image)});
    background-repeat: no-repeat;

    background-size: 100%;
    /* margin-bottom: 2.7rem; */
    .nav{
        margin-top: .3rem;
        display: flex;
        color: black;
        width: 100%;
        height: 2.2rem;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        .bar_title{
            margin: 0 .5rem;
            font-size: .9rem;
            font-weight: 600;
            .icon{
                font-size: 1rem;
            }
        }
        .link{
            margin: 0 .5rem;
            font-size: .6rem;
            color: #999;
        }
    }
`