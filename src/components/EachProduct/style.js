import styled from 'styled-components';

export const ContainerEachProduct = styled.div`
    width: 90%;
    height: 100px;
    border-radius:10px;
    border: 1px solid #000;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        text-decoration: none;
        color: #0ffc03;
    }
    img{
        width: 100px;
        height: 100px;
    }

    img, a{
        margin: 0 0.5rem;
    }
`;