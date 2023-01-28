import styled, { keyframes } from 'styled-components';

export const ContainerBase = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;
    position: relative;
`;

export const ContainerMobile = styled.div`
    width: 376px;
    height: 667px;
    border: 1px solid black;
    border-radius: 10px;
    position: relative;
`

const AnimLoadingKey = keyframes`
    0%{transform:rotate(0deg)}
    100%{transform:rotate(360deg)}
`

export const AnimLoading = styled.div`
    width: 50px;
    height: 50px;
    border: 6px solid #424242;
    border-radius: 50%;
    background: none;
    border-top-color: red;
    animation: ${AnimLoadingKey} .2s infinite;
`