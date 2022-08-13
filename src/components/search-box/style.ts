import styled from "styled-components";

export const SearchBoxWrapper = styled.div`
    .m-search-search-bar {
        height: 11.73333vw;
        padding: 3.2vw;
        padding-bottom: 1vw;
        background: #f5f5f5;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
        border-bottom: 1px solid #eaeaea;
        .search{
            font-size: 4.5vw;
            padding: 1.5vw 1vw 0 0;
            color:#999;
            vertical-align: -.5vw;
        }
        .input-area {
            margin-top: 1.86667vw;
            height: 8vw;
            width: 76vw;
            line-height: 8vw;
            padding: .3vw 3.2vw;
            background: #fff;
            border-radius: 1vw;
            display: inline-block;
            input {
                font-size: 4vw;
                color: #505050;
                caret-color: #00c3ff;
                border: none;
                background: transparent;
                width: 64vw;
                outline: none;
            }
            .iconfont {
                color: #a0a0a0;
                vertical-align: sub;
            }
            .ic_search_tab {
                font-size: 5.33333vw;
            }
            .close {
                padding-top: 2.2vw;
                font-size: 3.73333vw;
                float: right;
            }
        }
        .cancel {
            font-size: 4vw;
            float: right;
            line-height: 11.73333vw;
        }
    }
`