import styled from 'styled-components';

export const ContainerSendEmail = styled.main`
    width:100%;
    height:75%;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-y:auto;
    form{
        div{
            display: flex;
            justify-content: space-between;
            align-items:center;
        }
    }
    input{
        width: 230px;
        height: 27px;
        border:none;
        background:none;
        color: #fff;
        outline:none;
        margin: 0 0.2rem;
    }

    label{
        color: #0954CD;
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
        position:relative;
        left: 2rem;
    }
    textarea{
        width: 350px;
        background: #c7c6c3;
        border:2px solid #000;
        outline: none;
    }
`;

export const ModalContainer = styled.main`
    width: 100%;
    height: 100%;
    background:rgba(1,1,1, 0.5);
    position:absolute;
    display: none;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`