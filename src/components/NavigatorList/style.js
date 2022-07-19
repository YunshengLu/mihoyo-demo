import styled from 'styled-components';

// export const Wrapper = styled.div`
//     height: 4rem;
//     display: flex;
//     white-space: nowrap;
//     overflow: hidden;
//     position: fixed;
//     -webkit-box-orient: vertical;
//     -webkit-box-direction: normal;
//     /* width: 4rem; */
//     /* .swiper {
//         width: auto;
//     } */
// `;

// export const Item = styled.div`
//     height: 4rem;
//     width: 3.4rem !important;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     margin-top: 0.5rem 0;
//     a {
//         display: inline-block;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         text-align: center;
//         flex-direction: column;
//         font-size: 0.6rem;
//         color: black;
//         img {
//             /* display: inline-block; */
//             width: 2rem;
//             height: 2rem;
//             margin-bottom: 0.6rem;
//         }
//     }
// `;

export const ItemWrapper = styled.div`
    height: 4rem;
    margin-top: 1rem;
    margin-left: 0.5rem;
    .swiper-slide {
        height: 4rem;
        width: 3.4rem;
        margin-top: 0.5rem 0;
        a {
            display: inline-block;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            flex-direction: column;
            font-size: 0.6rem;
            color: white;
            img {
                width: 2rem;
                height: 2rem;
                margin-bottom: 0.6rem;
            }
        }
    }
`;
