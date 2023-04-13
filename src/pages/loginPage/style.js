import styled from 'styled-components';

export const ContainerLogin = styled.div`
    width: 376px;
    height: 90%;
    border-radius: 10px;
    form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input{
            width: 326px;
            height: 30px;
            margin: 1rem 0;
            border: none;
            text-align: center;
            font-size: 1rem;
            outline: 0;
            ::placeholder{
                font-size: 1rem;
                text-align: center;
                font-weight: bold;
                color: #333;
            }
            :Focus{
                border-bottom: 1px solid #424242;
            }
        }
        button{
            position: relative;
            top: 4rem;
            width: 326px;
            height: 40px;
            border-radius: 10px;
            margin: 1rem 0;
            border: none;
            /* background: #424242; */
            /* color: #fff; */
            font-size: 1rem;
        }
    }
`;