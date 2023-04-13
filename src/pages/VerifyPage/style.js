import styled from 'styled-components';

export const ContainerVerify = styled.div`
    width: 100%;
    height: 90%;
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
        position: absolute;
        bottom: 50px;
        display:flex;
        flex-direction: column;
    }
    button{
        width: 300px;
        border-radius: 20px;
        height: 30px;
        margin-top: 1rem;
        border: none;
        background: #424242;
        color: #fff;
        font-size: 1rem;
    }
`;