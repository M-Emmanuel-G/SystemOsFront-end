import styled from 'styled-components';

export const ContainerPoint = styled.div`
    width:100%;
    height: 90%;
`

export const ContainerAdmin = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    H3{
        text-transform: uppercase;
    }
    
    
`

export const ContainerList = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    table{
        width: 100%;
        th{
            width: 150px;
            height: 30px;
            background: grey;
            color: #fff;
            border-radius: 10px;
        }
        td{
            width: 150px;
            height: 30px;
            text-align: center;
            font-size: 1rem;
        }
        
    }
    select{
        width: 326px;
        height: 50px;
        text-align: center;
        margin: 1rem 0;
        overflow: hidden;
        background: transparent;
        font-size: 1rem;
        -webkit-appearance: none;
        option{
            background: transparent;
        }
    }
`