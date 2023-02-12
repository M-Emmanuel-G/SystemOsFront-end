import styled from 'styled-components';

export const ContainerHeader = styled.div`
    width: 100%;
    height: 10%;
    background: linear-gradient(39deg, rgba(2,2,3,1) 0%, rgba(106,106,110,1) 100%);    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #fff;
    img{
        position: absolute;
        left: 0;
        width: 40px;
        height: 40px;
        color: #fff;
        margin: 0 1rem;
    }
`;