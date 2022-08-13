import styled from 'styled-components'

export const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
    height: 2.7rem;
    display: flex;
    background: #f2f3f4;
    width: 100%;
    align-items: center;
    z-index: 999;
    /* justify-content: center; */
    a {
        flex: 1;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-around;
        /* 子代通配符 */
        &.active * {
            color: skyblue !important;
        }
        .tab-item {
            display: flex;
            height: 100%;
            flex-direction: column;
            i {
                color: #707070;
                font-weight: bold;
                margin: 0.5rem 0 0.3rem 0;
                font-size: 1.2rem;
            }
            span {
                color: black;
                font-size: 0.4rem;
            }
        }
    }
    .input {
        width: 3.5rem;
        margin: auto;
        text-align: center;
        transform: scale(1.2, 1);
        .icon-kuaisutianjiamoren {
            font-size: 1.5rem;
            color: rgba(0, 130, 243, 0.8);
        }
    }
`


export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4rem;
    margin-top: 1.5rem;
    a{
        display:flex;
        align-items: center;
        height: 3.5rem;
        width: 100%;
        div{
            height: 2.5rem;
            line-height: 2.5rem;
            width: 2.5rem;
            text-align: center;
            border-radius: 50%;
            background-color: rgb(233, 243, 255);
            font-size: 1.5rem;
            .beta{
                position: absolute;
                display: inline-block;
                width: 1.4rem;
                height: 0.6rem;
                line-height: 0.6rem;
                font-size: 0.5rem;
                text-align: center;
                background: rgb(249, 98, 71);
                border-radius: 5px 5px 0 5px;
                color: white;
                margin-left: -1rem;
            }
        }
        span{
            color: rgb(30, 31, 33);
            margin-left: 0.7rem;
            font-size: 0.7rem;
            p {
                color: rgb(192, 197, 200);
                margin-top: 0.2rem;
                font-size: 0.5rem;
            }
        }
    }
    .close {
        color: rgb(192, 197, 200);
        margin-top: 1rem;
    }
`
