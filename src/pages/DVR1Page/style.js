import styled from 'styled-components';

export const ContainerDvrOne = styled.main`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    align-items: center;
    button{
        width: 300px;
        height: 30px;
        border-radius:20px;
        border:0;
        background: #0954CD;
        font-size: 1.3rem;
    }
    form{
        display: flex;
        flex-direction:column;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin:0.2rem 0;
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
        }
    }
`;