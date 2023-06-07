import styled from 'styled-components';

export const ContainerPDF = styled.main`
    width: 100%;
    height: 80%;
    overflow-y: auto;
    text-align: center;
    img{
        width: 100%;
        height: 300px;
    }
    button{
        width: 300px;
        height: 30px;
        margin:1rem 0;
        border-radius:20px;
        border:0;
        background: #0954CD;
        font-size: 1.3rem;
    }
    main{
        table{
            width: 100%;
            height: 100%;
            tbody{
                tr{
                    th{
                        width: 150px;
                        display:flex;
                        justify-content:flex-start;
                    }
                }
            }
        }
    }
`;