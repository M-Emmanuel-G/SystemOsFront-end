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
`;

export const ContainerBanner = styled.div`
    width: 100%;
    height: 90%;
    background: #fff;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    img{
        width: 100%;
        height: 100%;
    }
    
`

export const ContainerEachServices = styled.div`
    width: 150px;
    height: 100px;
    border-radius: 10px;
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #424242;
    color: #fff;
`;

export const ContainerHour = styled.div`
    width: 90%;
    height: 150px;
    border-radius: 10px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 4rem;
    }
`

export const CardHour = styled.div`
    width: 200px;
    height: 100px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    background: #424242;
    span{
        font-size: 4rem;
        color: #fff;
    }
`

export const ContainerServices = styled.div`
    width: 400px;
    height: 90%;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 10px;
`