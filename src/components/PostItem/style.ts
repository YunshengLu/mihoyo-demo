import styled from 'styled-components'

export const PostWrapper = styled.div`
    display: flex;
    overflow: hidden;
    background-color: #fff;
    flex-direction: column;
    margin-bottom: 0.3rem;
    padding: .3rem;
    .PostBody{
        display: flex;
        flex-direction: column;
        width: 100%;
        flex:1;
    }
    .cover_container{
        margin:.5rem;
        max-height: 13rem;
        max-width: 17.1rem;
        border-radius: 0.3rem;
        overflow: hidden;
        position: relative;
        .two_container{
            display: flex;
            justify-content: space-between;
        }
        .three_container{
            height: 11rem;
            position: relative;
            border-radius: 0.3rem;
            overflow: hidden;
        }
        .label{
                position: absolute;
                width: 2.2rem;
                line-height: 0.8rem;
                height: .8rem;
                border-radius: 0.1rem;
                right: 0.1rem;
                bottom: 0.1rem;
                font-size: 0.6rem;
                padding: .1rem .2rem;
                color: white;
                background-color: rgba(0,0,0,0.4);
                text-align: center;
            }
    }
`

export const PostHeader = styled.div`
    display: flex;
    height: 2rem;
    width: 100%;
    margin: 0.4rem 0;
    /* background-color: pink; */
    flex-direction: row;
    justify-content: space-between;
    .user{
        display: flex;
        height: 100%;
        /* flex:1; */
        .avatar{
            margin-left:0.5rem;
            margin-right: 0.3rem;
            width: 2rem;
            height: 2rem;
            /* background-color: #fff; */
            .avatar_url{
                margin: 0.1rem;
                border-radius: 50%;
                width: 1.8rem;
                height: 1.8rem;
            }
            .pendant{
                position: relative;
                width: 2rem;
                height: 2rem;
                top: -2.1rem;
            }
        }
        .base{
            display: flex;
            flex-direction: column;
            flex:1;
            height: 100%;
            /* background-color: violet; */
            .nickname{
                height: 0.8rem;
                line-height: 0.8rem;
                color: #000;
                padding: 0.2rem;
                font-size: 0.7rem;
                .level{
                    text-align: center;
                    font-size: 0.6rem;
                    margin: 0 0.5rem;
                    display: inline-block;
                    height: 0.8rem;
                    width: 0.8rem;
                    border-radius: 50%;
                    color: #fff;
                    background-color: orange;
                }
            }
            .created_at{
                flex:1;
                padding: 0.1rem;
                color: #b7b7b7;
            }
        }
    }
    .right{
        height: 100%;
        line-height: 100%;
        display: flex;
        align-items:center;
        justify-content: space-evenly;
        margin: 0.3rem;
        .attention{
            font-size: 0.7rem;    
            height: 1rem;
            line-height: 1rem;
            width: 3rem;
            margin: 0.3rem;;
            text-align: center;
            border: 1px solid #269ce7;
            border-radius: 0.2rem;
            color: #269ce7;
        }
        .is_attention {
            border: 1px solid black;
            color: black;
            opacity: 0.5;
        }
        .input{
            font-size: 1.5rem;  
            color: #b7b7b7;  
        }
    }
`

export const PostMessage = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    .subject{
        font-weight: 500;
        margin: 0.2rem .5rem;
        font-size: .9rem;
        display: -webkit-box;    
        line-height: 1.3rem;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow:hidden;
        text-overflow:ellipsis;
        .is_official{
            height: 1rem;
            width: 1rem;
            text-align: center;
            line-height: 1rem;
            font-size: .7rem;
            color: #269ce7;
            font-weight: 500;
            background-color: #dceff7;
            display: inline-block;
            margin-right: .3rem;
            margin-bottom: .1rem;
        }
    }
    .content{
        margin: 0.2rem .5rem;
        line-height: 1.1rem;
        font-size: .75rem;
        color: #999999;
        display: -webkit-box;    
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow:hidden;
        text-overflow:ellipsis;
    }

    
`

interface ImageItemProps {
    imgUrl: string
}

export const TwoImageItem = styled.div<ImageItemProps>`
    background-image: url(${props => props.imgUrl});
    height: 8rem;
    width: 49.5%;
    background-size: cover;
    background-position: 50% 38.2%;
    display: inline-block;
    /* margin-right: 0.5rem; */
    /* border-radius: 0.2rem; */
    vertical-align: top;
    position: relative;
`

export const MoreImageItem = styled.div<ImageItemProps>`
    background-image: url(${props => props.imgUrl});
    width: 49.5%;
    background-size: cover;
    background-position: 50% 38.2%;
    display: inline-block;
    /* margin-right: 0.5rem; */
    /* border-radius: 0.2rem; */
    vertical-align: top;
    position: relative;
    &:nth-child(1){
        height: 11rem;
        width: 11.5rem;
    }
    &:nth-child(2){
        position: absolute;
        top: 0;
        right: 0;
        height: 5.45rem;
        width: 5.45rem;
    }
    &:nth-child(3){
        position: absolute;
        bottom: 0;
        right: 0;
        height: 5.4rem;
        width: 5.45rem;
    }
    &:not(:nth-child(-n+3)) {
        display: none;
    }
`

interface CoverImgProps {
    coverUrl: string,
    viewType: number,
}

export const CoverImg = styled.div<CoverImgProps>`
    background-image: url(${props => props.coverUrl});
    width: ${props => (props.viewType == 1 ? '100%' : '10rem')};
    height: ${props => (props.viewType == 1 ? '10rem' : '12rem')};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 38.2%;
    border-radius: 0.2rem;
`


export const PostFooter = styled.div`
    display: flex;
    width: 100%;
    font-size: .7rem;
    justify-content: space-between;
    /* align-items: baseline; */
    .topics{
        margin: .5rem;
        white-space: normal;
        span {
            display: inline-block;
            color: #999;
            height: 1rem;
            line-height: 1rem;
            background-color: #f2f4f5;
            padding: .1rem .3rem;
            margin-right: .5rem;
            border-radius: 10%;
            white-space: nowrap;
        }
    }
    .stat{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: .5rem;
        font-size: 1rem;
        height: 2rem;
        line-height: 2rem;
        color: #b7b7b7;
        span{
            font-size: .7rem;
        }
        span:not(:last-child){
            margin-right: 1rem;
        }
        .iconfont {
            display: inline-block;
            padding: 0 0.1rem;
            font-size: .8rem;
            font-weight: bold;
        }
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        display: inline-block;
        display: flex;
        align-items: center;
        height: 1.8rem;
        margin-top: 0.5rem;
        width: 100%;
        > div {
            height: 2.5rem;
            width: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            color: black;
        }
        span {
            color: rgb(30, 31, 33);
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
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.5rem;
        width: 100%;
        background-color: rgba(248, 248, 248, 1);
        position: fixed;
        bottom: 0;
        font-size: 0.8rem;
        color: black;
    }
`;