import styled from 'styled-components';

export const BodyWrapper = styled.div``;

export const TabWrapper = styled.div`
    font-size: 18px;
    display: flex;

    header {
        width: 100%;
        height: 2.8rem;
        display: flex;
        align-items: center;

        .left {
            width: 50%;
            text-align: left;
            flex: 1;
            p {
                margin-left: 0.5rem;
                font-weight: 600;
            }
        }

        .right {
            width: 50%;
            text-align: right;
            p {
                margin-right: 0.5rem;
                font-size: 16px;
                opacity: 0.6;
            }
        }
    }
`;
