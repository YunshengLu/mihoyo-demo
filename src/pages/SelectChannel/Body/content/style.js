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
    height: 0.6rem;
    font-size: 18px;
    margin-top: 0.2rem;
    margin-left: 5%;
    border-bottom: 1px solid rgba(166,166,169,0.2);

    img{
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 8px;
    }

    span{
        font-size: 16px;
        align-self: center;
        margin-top: -10px;
        margin-left: 4%;
    }

    .icon-shanjian{
        position: absolute;
        align-self: center;
        margin-top: -0.1rem;
        right: 12%;
        font-size: 18px;
        opacity: 0.4;
    }
    
    .icon-shouye{
        position: absolute;
        align-self: center;
        margin-top: -0.1rem;
        right: 3%;
        font-size: 22px;
        opacity: 0.4;
    }
`;
