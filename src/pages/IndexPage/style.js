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
        width: 90%;
        height: 20%;
    }
    
`

export const ContainerEachServices = styled.div`
    width: 150px;
    height: 100px;
    border-radius: 10px;
    margin: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #424242;
    color: #fff;
`;

export const ContainerHour = styled.div`
    width: 500px;
    height: 200px;
    border-radius: 10px;
    margin-bottom: 5rem;
    img{
        width: 400px;
        height: 200px;
        border-radius: 10px;
        pointer-events: none;
        padding: 15px;
    }
    .carousel{
        cursor: grab;
        overflow: hidden;
    }

    .inner{
        display: flex;
    }

    .item{
        min-height: 200px;
        min-width: 400px;
        padding: 10px;
    }
`