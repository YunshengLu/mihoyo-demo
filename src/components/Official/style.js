import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 0.4rem 0.4rem 0 0;
    height: 10.4rem;
    border-bottom: 0.4rem solid rgb(242, 243, 244);
    a {
        display: inline-block;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        width: 100%;
        height: 2.8rem;
        .icon-zixun {
            position: absolute;
            font-size: 1rem;
            font-weight: bold;
            left: 0.5rem;
        }
        p {
            position: absolute;
            font-size: 0.9rem;
            font-weight: bold;
            left: 2rem;
            top: 0.85rem;
        }
        .all {
            font-size: 0.6rem;
            margin-right: -14.5rem;
            opacity: 0.6;
            .icon-xiangyou {
                position: absolute;
                display: inline-block;
                margin-top: -0.1rem;
                transform: scale(0.5);
            }
        }
    }
`
export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 3rem;
    border-radius: 0.4rem;
    margin-bottom: 0.6rem;
    background: rgb(248,248,248);
    font-size: 0.8rem;
    a {
        display: inline-block;
        .title {
            width: 16rem;
            height: 0.9rem;
            text-align: left;
            margin-top: 0.5rem;
            margin-left: 0.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            /* background: pink; */
        }
        .footer {
            position: relative;
            .label {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 0.5rem;
                margin-left: 0.5rem;
                font-size: 0.6rem;
                width: 1.8rem;
                height: 0.8rem;
                border-radius: 2px;
                background: rgb(189,165,117);
            }
            .date {
                text-align: right;
                opacity: 0.5;
                font-size: 0.6rem;
                margin-top: -0.8rem;
                margin-right: .6rem;
            }
        }
    }
`