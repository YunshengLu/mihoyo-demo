import styled from 'styled-components';

export const Tab = styled.div`
    display: ${props => (props.pathHome ? 'flex' : 'none')};
    height: 2.7rem;
    width: 100%;
    background-color: rgba(248, 248, 248, 1);
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    z-index: 999;
    a {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-around;
        &.active *{
            color: skyblue;
        }
    }
    .input {
        width: 3.5rem;
        margin: auto;
        transform: scale(1.2, 1);
    }
`;

export const TabItem = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    i {
        color: #707070;
        font-weight: bold;
        font-size: 1.2rem;
        margin: 0.5rem 0 0.3rem 0;
    }
    .icon-kuaisutianjiamoren {
        font-size: 1.5rem;
        color: rgba(0, 130, 243, 0.8);
    }
    span {
        color: black;
        font-size: 0.4rem;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4rem;
    margin-top: 1.5rem;
    a {
        display: inline-block;
        display: flex;
        align-items: center;
        height: 3.5rem;
        width: 80%;
        > div {
            height: 2.5rem;
            width: 2.5rem;
            background: rgb(233, 243, 255);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: rgb(25, 163, 254);
        }
        span {
            color: rgb(30, 31, 33);
            margin-left: 0.7rem;
            font-size: 0.7rem;
            > p {
                color: rgb(192, 197, 200);
                margin-top: 0.2rem;
                font-size: 0.5rem;
            }
        }
        .beta {
            position: absolute;
            display: inline-block;
            width: 1.4rem;
            height: 0.6rem;
            font-size: 0.5rem;
            text-align: center;
            background: rgb(249, 98, 71);
            border-radius: 5px 5px 0 5px;
            color: white;
            margin-top: -2rem;
            margin-left: -2.7rem;
        }
    }
    .close {
        color: rgb(192, 197, 200);
        margin-top: 1rem;
    }
`;
