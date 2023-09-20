import styled from 'styled-components';

export const ContainerHdCalc = styled.main`
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    background: #000;
`;

export const ContainerResult = styled.section`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-size: 1.5rem;
    }

`

export const ContainerInputs = styled.section`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div{
        width: 30%;
        height: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.3rem 0;
        input{
            width: 3rem;
            height: 30px;
            border-radius: 12px;
            outline: 0;
            text-align: center;
            ::placeholder{
                text-align: center;
                font-size: 1rem;
                font-weight: bold;
            }
        }
        button{
            width: 100px;
            height: 30px;
            border-radius: 12px;
        }
    }
`