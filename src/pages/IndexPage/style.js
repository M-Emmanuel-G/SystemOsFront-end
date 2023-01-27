import styled, { keyframes } from 'styled-components';

export const AnimLogo = keyframes`
    0%{
        color:#333;
        transform: scale(0);
        opacity:0;
    }
    100%{
        color:#333;
        transform: scale(1);
        opacity: 1;
    }
`

export const ContainerIndexPage = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    button{
        width: 170px;
        height: 30px;
        font-size: 1.5rem;
        margin: 1rem 0;
        background: none;
        border: none;
    }
`;

export const ContainerSubHeader = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        margin: 0 1rem;
    }
    
`
export const ContainerBanner = styled.div`
    width: 100%;
    height: 90%;
    background: #fff;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    img{
        width: 90%;
        height: 20%;
        /* margin-top: 2rem; */
    }
    
`

export const ContainerEachServices = styled.div`
    width: 150px;
    height: 100px;
    border-radius: 10px;
    border: 2px solid black;
    margin: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #424242;
    color: #fff;
`;