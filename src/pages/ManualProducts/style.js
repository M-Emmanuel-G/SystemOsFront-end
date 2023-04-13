import styled from 'styled-components';

export const ContainerManualPage = styled.div`
    width: 100%;
    height: 65%;
    display:flex;
    flex-direction: column;
    align-items: center;
    overflow: auto ;
`;

export const ContainerSearch = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content:center;
    align-items:center;

    input{
        width: 200px;
        height: 20px;
        margin-left:2rem;
    }
    span{
        font-weight:bold;
    }
`