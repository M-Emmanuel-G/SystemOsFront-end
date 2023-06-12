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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #49494C;
    background: #000;
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

    animation: ${LoadingPulse} .5s infinite linear;
`

export const Circle = styled.div`
    width: 100%;
    height: 100%;
    background:#fff;
    position:absolute;
    clip-path: ellipse(60% 15% at 50% 100%);
    z-index: 0;
`