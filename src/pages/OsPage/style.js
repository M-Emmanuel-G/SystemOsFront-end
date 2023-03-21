import styled from 'styled-components';

export const ContainerHomePage = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: auto;
    form{
        margin-top: 12rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div{
           width: 100%;
           display: flex;
           flex-direction: column;
           align-items: center;
           overflow: auto;
        }
        input{
            width: 300px;
            height: 30px;
            margin: 0.9rem 0;
            text-align: center;
            font-size: 1rem;
            outline: 0;
            border: none;
            border-bottom: 2px solid black;
            ::placeholder{
                text-align: center;
                font-size: 1.5rem;
                font-weight: bold;
            }
        }
        section{
            display: flex;
            flex-direction: column;
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
    }

`;