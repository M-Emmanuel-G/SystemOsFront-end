import styled from 'styled-components';

export const ContainerUniqueOs = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    table{
        width: 100%;
        height: 100%;
        th{
            width: 200px;
            height: 30px;
        }
        td{
            width: 200px;
            height: 30px;
            text-align: center;
            button{
                background: red;
                color: #fff;
                font-size: 1rem;
                width: 70px;
                height: 25px;
                border-radius: 20px;
                border: none;
            }
        }
    }
`