import styled from 'styled-components';

export const ContainerSendEmail = styled.main`
    width:100%;
    height:70%;
    display:flex;
    flex-direction:column;
    align-items:center;
    input{
        width: 230px;
        height: 27px;
        border:none;
        background:none;
        color: #fff;
        outline:none;
    }
    input, label{
        margin: 0 0.2rem;
    }
    button{
        width: 300px;
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #0954CD;
        border:0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        margin:2rem 0;
        border-radius: 10px;
        color:#fff;
    }
`;