import styled from 'styled-components'

export const ContentWrapper = styled.div``;

export const Tab = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
`;

export const TabItem = styled.div`
    width: 90%;
    display: flex;
    list-style: none;
    height: 3rem;
    font-size: 0.9rem;
    margin-top: 0.8rem;
    margin-left: 5%;
    border-bottom: 1px solid rgba(166,166,169,0.2);

    img{
        width: 2.3rem;
        height: 2.3rem;
        border-radius: .4rem;
    }

    span{
        font-size: .8rem;
        align-self: center;
        margin-top: -0.6rem;
        margin-left: 4%;
    }

    .icon-shanjian{
        position: absolute;
        align-self: center;
        margin-top: -0.6rem;
        right: 12%;
        font-size: .9rem;
        opacity: 0.4;
    }
    
    .icon-shouye{
        position: absolute;
        align-self: center;
        margin-top: -0.6rem;
        right: 3%;
        font-size: 1.1rem;
        opacity: 0.4;
    }
`;
