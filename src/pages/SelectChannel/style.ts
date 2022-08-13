import styled from 'styled-components';

export const Modal = styled.div`
    z-index: 999;
    opacity: 0.7;
    background-color: black;
    position: absolute;
    top :50%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: .8rem;
    color: white;
    border-radius: .4rem;
    height: 2rem;
    line-height: 2rem;
    width: 8rem;
    padding: 0 1rem;
`;
