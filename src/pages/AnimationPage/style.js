import styled, { keyframes } from 'styled-components';

export const AnimLogo = keyframes`
    0%{
        transform: scale(0);
    }
    50%{
        
    }
    100%{
        transform:scale(1)
    }
`

export const ContainerAnimation = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 90%;
        height: 20%;
        animation: ${AnimLogo} 5s linear;
    }
`;