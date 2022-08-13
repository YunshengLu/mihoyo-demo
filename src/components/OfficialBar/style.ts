import styled from 'styled-components';

export const OfficialWrapper = styled.div`
    background: white;
    border-radius: 0.5rem 0.5rem 0 0;
    /* height: 10.4rem; */
    display: flex;
    flex-direction: column;
    margin: 0.3rem 0;
    padding: 0 0.2rem;
    /* .header{
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
            a{
                color: #999;
            }
        }
    } */
    .information {
        display: flex;
        flex-direction: column;
        padding-bottom: 0.5rem;
        justify-content: center;
        .item {
            background-color: #f2f4f5;
            display: flex;
            flex-direction: column;
            border-radius: 0.3rem;
            margin: 0.3rem 0.5rem;
            padding: 0.4rem;
            justify-content: center;
            .message {
                font-size: 0.7rem;
                margin: 0.2rem 0;
                line-height: 1rem;
                white-space: nowrap;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .details {
                margin-top: 0.2rem;
                display: flex;
                justify-content: space-between;
                .label {
                    background-color: #dcc69b;
                    padding: 0.1rem 0.25rem;
                    border-radius: 0.1rem;
                    color: white;
                    font-size: 0.6rem;
                    margin-left: 0.2rem;
                }
                .time {
                    font-size: 0.4rem;
                    padding-top: 0.2rem;
                    color: #c0c0af;
                    margin-right: 0.2rem;
                }
            }
        }
    }
`;
