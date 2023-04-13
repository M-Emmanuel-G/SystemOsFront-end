import styled from 'styled-components';

export const ContainerSolicitation = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form{
        display: flex;
        flex-direction: column;
        overflow: auto;
        select{
            width: 300px;
            height: 30px;
            text-align: center;
            border: none;
            border-bottom: 2px solid #424242;
        }
        input{
            width: 300px;
            height: 30px;
            margin: 1rem 0;
            text-align: center;
            border: none;
            border-bottom: 2px solid black;
            outline: 0;
            ::placeholder{
                font-size:1rem;
                color:#333;
            }
        }
        textarea{
            border: 2px solid black;
            height: 500px;
            resize: none;
            margin: 1rem 0;
            text-align: center;
            outline: 0;
            ::placeholder{
                font-size:1rem;
                color:#333;
            }
        }
        button{
            width: 300px;
            border-radius: 20px;
            height: 30px;
            margin: 1rem 0;
            border: none;
            background: #424242;
            color: #fff;
            font-size: 1rem;
        }
    }
`;