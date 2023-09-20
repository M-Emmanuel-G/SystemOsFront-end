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

export const EachServices = styled.div`
    width: 350px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0.5rem 0;
    border:2px solid #fff;
    border-radius:10px;
`;

export const ContainerTittle = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerServices = styled.div`
    width: 100%;
    height: 70%;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
`;

export const Services = styled.div`
    width: 270px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border:2px solid #0954CD;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin:1rem 0;
    border-radius: 10px;
    color: #fff;
    a{
        font-size: 1.5rem;
        color: #fff;
        text-decoration: none;
    }
`



export const CircleBack = styled.div`
    width: 100%;
    height: 100%;
    background:black;
    position:absolute;
    clip-path: circle(45% at right bottom);
    z-index: 0;
`