import styled from 'styled-components';

export const ContainerPDF = styled.main`
    width: 100%;
    height: 80%;
    overflow-y: auto;
    text-align: center;
    color:#000;
    display: flex;
    justify-content: center;
    img{
        width: 100%;
        height: 300px;
    }
    button{
        width: 300px;
        height: 30px;
        margin:1rem 0;
        border-radius:20px;
        border:0;
        background: #0954CD;
        font-size: 1.3rem;
    }
`;

export const ContainerOrderService = styled.div`
    width: 50%;
    height: 100%;
    background: #fff;
`

export const ContainerHeader = styled.header`
    width: 100%;
    height: 20%;
    display: flex;
`

export const ContainerLogo = styled.div`
    width: 15%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
`

export const ContainerTitle = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span{
        font-size: 1.2rem;
    }
    p{
        font-size: 12px;
        margin: 0.3rem;
    }
`
//------------------------------------------------------------------------------------------------------------------------//

export const ContainerInfo = styled.section`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
//------------------------------------------------------------------------------------------------------------------------//

export const ContainerClient = styled.section`
 width: 100%;
 height: 10%;
 background: crimson;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: center;
 span{
    font-size: 12px;
 }

`

//------------------------------------------------------------------------------------------------------------------------//

export const ContainerCampOrder = styled.section`
    width: 100%;
    height: 50%;
    background: yellow;
    display: flex;
    div{
        width: 50%;
        height: 100%;

    }
`

//------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------//