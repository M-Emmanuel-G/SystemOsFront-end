import styled from 'styled-components';

export const ContainerAdmin = styled.div`
    width: 100%;
    height: 90%;
`;

export const ContainerMenuAdmin = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 40px;
        height: 40px;
        margin: 0 1rem;
        border: none;
        background: none;
        color: #fff;
    }
    div{
        input{
            width: 300px;
            height: 20px;
            border-radius: 10px;
            border: none;
            outline: 0;
            font-size: 1rem;
            font-weight: bold;
            text-align: center;
            ::placeholder{
                text-align: center;
                font-weight:bold;
            }
        }
        button{
            width: 100px;
        }
    }
`

export const ContainerOsAdmin = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`

export const ListOs = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: auto;
    
    section{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    div{
        input{
            width: 300px;
            height: 20px;
            margin: 1rem 0;
            font-size: 1rem;
            color: #333;
            text-align: center;
            border: none;
            border-bottom: 1px solid #424242;
            outline: 0;
            background: none;
            ::placeholder{
                color: #333;
                font-size: 1rem;
            }
        }
    }
`
