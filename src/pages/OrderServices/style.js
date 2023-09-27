import styled from 'styled-components';

export const ContainerOrderService = styled.main`
    width: 100%;
    height: 75%;
    background: #000;
    color: #fff;
    form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        input{
            width: 300px;
            height: 25px;
            border-radius: 12px;
            margin-top: 1rem;
            ::placeholder{
                text-align: center;
            }
        }
        textarea{
            border-radius: 12px;
            margin-top: 1rem;
            ::placeholder{
                text-align: center;
            }
        }
    }
`;