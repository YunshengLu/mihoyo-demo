import styled from "styled-components";

export const SearchWrapper = styled.div`
    background-color: #fff;
`

interface ContainerProps {
    show:boolean,
}

export const Container = styled.div<ContainerProps>`
    display: ${props=>props.show?"":"none"};
    /* position: absolute; */
    /* position: fixed; */
    /* top:16.1vw; */
    /* left:0;
    right: 0;
    bottom: 0; */
    margin-top: 16.1vw;
    height: 100%;
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background-color: #f2f4f5;
`

interface ShortProps{
    show:boolean,
}

export const ShortcutWrapper = styled.div<ShortProps>`
    /* position: absolute; */
    /* top: 0; */
    /* bottom: 0; */
    background-color: #fff;
    display: ${props => props.show ? "" : "none"};
    padding: 2vw 4vw;
    width: 92vw;
    height: 90.6vh;
    .m-search-suggest {
        background-color: #fff;       
        li {
            height: 11.73333vw;
            line-height: 11.73333vw;
            border-bottom: 1px solid #f4f4f4;
            color: #000;
            font-size: 4vw;
            letter-spacing: 1px;
            .suggest_high_light{
                color: #00c3ff;
            }
        }
    }
    .m-search-hot {
        padding: 3.2vw 0;
        .title {
            height: 10vw;
            line-height: 10vw;
            font-weight: 600;
            color: #000;
            font-size: 3.73333vw;
        }
        .list {
            .hotword-item {
                display: inline-block;
                box-sizing: border-box;
                width: 50%;
                margin: 2vw 0;
            }
            .fire {
                color: red;
                font-size: 3vw;
            }
        }
    }
    .m-search-history {
        .title {
            display: flex;
            height: 10vw;
            line-height: 10vw;
            font-size: 3.73333vw;
            justify-content: space-between;
            margin: 1.2vw;
            .left{
                font-weight: 600;
                color: #000;
            }
            .right{
                color: #505050;
            }
        }
        .history-list {
            max-height: 34vw;
            margin-left: -1.2vw;
            overflow: hidden;
            li {
                display: inline-block;
                padding: 2.8vw 3.6vw;
                background-color: #f5f5f5;
                border-radius: .6vw;
                margin: 1.2vw;
                font-size: 3vw;
                a {
                    color:#6e6e6e;
                }
            }
            
        }
    }
`
