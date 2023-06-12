import styled, { keyframes } from 'styled-components';

export const ContainerBase = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const ContainerMobile = styled.div`
    /* width: 376px;
    height: 667px; */
    width: 100%;
    height: 100%;
    /* border: 1px solid black;
    border-radius: 10px; */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(339deg, rgba(83,81,81,1) 40%, rgba(0,13,245,1) 100%);
`

const AnimLoadingKey = keyframes`
    0%{transform:rotate(0deg)}
    100%{transform:rotate(360deg)}
`

export const AnimLoading = styled.div`
    width: 30px;
    height: 30px;
    border: 6px solid #424242;
    border-radius: 50%;
    background: none;
    border-top-color: red;
    animation: ${AnimLoadingKey} .5s infinite;
`

const LoadingPulse = keyframes`
    0%{
        transform: scale(0.15);
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        transform: scale(1);
        opacity: 0;
    }
`

export const AnimPulse = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #111;
    display: none;

    animation: ${LoadingPulse} 1s infinite linear;
`