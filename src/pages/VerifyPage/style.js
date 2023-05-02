import styled from 'styled-components';

export const ContainerVerify = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow-y: auto;
    span{
        margin: 0.37rem 0;
        font-size: 15px;
    }
    h2{
        font-size: 20px;
    }
    div{
        width: 100%;
        height: 100px;
        position: absolute;
        bottom: 50px;
        display:flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }
`;

export const ContainerAction = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width: 300px;
        border-radius: 20px;
        height: 30px;
        margin: 3rem;
        border: none;
        background: #424242;
        color: #fff;
        font-size: 1rem;
    }
`