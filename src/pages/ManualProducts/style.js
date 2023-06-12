import styled from 'styled-components';

export const ContainerManualPage = styled.div`
    width: 100%;
    height: 65%;
    display:flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    color: #fff;
`;

export const ContainerSearch = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content:center;
    align-items:center;
    color: #fff;
    input{
        width: 230px;
        height: 27px;
        border:none;
        background:none;
        color: #fff;
        outline:none;
        border-bottom: 2px solid #0954CD;
    }
    span{
        font-weight:bold;
    }
`