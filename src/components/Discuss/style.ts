import styled from "styled-components";

interface DiscussProps {
    searchHidden: boolean;
}

export const DiscussWrapper = styled.div<DiscussProps>`
    width: 100%;
    height: ${props => (props.searchHidden ? '2rem' : '4rem')};
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        position: relative;
        display: inline-block;
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${props => (props.searchHidden ? '100%' : '90%')};
        height: ${props => (props.searchHidden ? '2rem' : '3rem')};
        color: black;
        background: white;
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: ${props => (props.searchHidden ? '0' : '8px')};
        img {
            position: absolute;
            height: ${props => (props.searchHidden ? '1.3rem' : '1.5rem')};
            width: ${props => (props.searchHidden ? '1.3rem' : '1.5rem')};
            /* margin-left: ${props => (props.searchHidden ? '-16rem' : '-14rem')}; */
            left: 0.5rem;
        }
        >p {
            position: absolute;
            font-size: 0.6rem;
            right: 0.8rem;
        }
    }

`
export const Content = styled.div<DiscussProps>`
    position: absolute;
    display: flex;
    text-align: left;
    flex-direction: column;
    /* margin-left: -4.5rem; */
    left: ${props => (props.searchHidden ? '4.5rem' : '3rem')};
    .titles {
        display: flex;
        .title {
            font-size: 0.7rem;
            margin-bottom: 0.6rem;
        }
        .signin {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 0.8rem;
            font-size: 0.1rem;
            margin-left: 0.3rem;
            border-radius: 2px;
            color: rgb(204,208,209);
            background: rgb(248,248,248);
        }
    }
    >span {
        color: rgb(204,208,209);
        font-size: 8px;
        margin-left: ${props => (props.searchHidden ? '-1.8rem' : '0')};
    }
`