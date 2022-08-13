import styled from 'styled-components';

export const HotTopicsWrapper = styled.div`
    background-color: #fff;
    /* height: 10rem; */
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: .3rem;
    /* .nav{ 
        （ 写在Home了 要复用 ）
        margin: .3rem 0;
        display: flex;
        color: black;
        width: 100%;
        height: 2.2rem;
        justify-content: space-between;
        align-items: center;
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
    } */
    .topics{
        display: flex;
        flex-direction: column;    
        justify-content: center;
        .hotTopicItem{
            display: flex;
            padding: .5rem;
            height: 3.2rem;
            .image{
                padding-right: .4rem;
                img{
                    border-radius: .25rem;
                    height: 3rem;
                    /* width: 3rem; */
                } 
            }
            .message{
                width: 14rem;
                white-space: nowrap;
                line-height: 1rem;
                &::after {
                    content: '';
                    display: block;
                    border-bottom: #f2f4f5 solid 1px;
                    padding-top: .7rem;
                }
                .topic_name{
                    font-size: .75rem;
                    color: #000;
                }
                .post_name{
                    font-size: .65rem;
                    color: #999;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .count{
                    font-size: .6rem;
                    color: #99999990;
                }
            }
        }
    }
`

export const TopicItem = styled.div`
    display: flex;
    padding: .5rem;
    height: 3.2rem;
        .image{
            padding-right: .4rem;
            img{
                border-radius: .25rem;
                height: 3rem;
                /* width: 3rem; */
            } 
        }
        .message{
            width: 14rem;
            white-space: nowrap;
            line-height: 1rem;
            &::after {
                content: '';
                display: block;
                border-bottom: #f2f4f5 solid 1px;
                padding-top: .7rem;
            }
            .topic_name{
                font-size: .75rem;
                color: #000;
            }
            .post_name{
                font-size: .65rem;
                color: #999;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .count{
                font-size: .6rem;
                color: #99999990;
            }
        }
`