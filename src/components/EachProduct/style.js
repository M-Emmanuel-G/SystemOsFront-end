import styled from 'styled-components';

export const ContainerEachProduct = styled.div`
    width: 90%;
    height: 100px;
    border-radius:10px;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        text-decoration: none;
        color: #0954CD;
    }
    img{
        width: 100px;
        height: 100px;
    }

    img, a{
        margin: 0 0.5rem;
    }
`;