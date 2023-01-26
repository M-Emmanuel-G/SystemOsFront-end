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
    background: rgba(0,0,0,0.3);
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        animation: ${AnimLogo} 5s linear;

    }
    img{
        width: 50%;
        height: 50%;
    }
    h2{
        animation: ${AnimLogo} 5s linear ;
    }
`