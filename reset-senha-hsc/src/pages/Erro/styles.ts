import styled from "styled-components";

export const Titulo = styled.div `
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    span{
        background: #FFFB00;
        color: #000000;
        border-radius: 50%;
        padding: 1rem;
        font-size: 70px;
    }
`

export const MainErro = styled.div`
    margin-top: 1rem;
    background: #ffffff;
    height: 95%;
    width: 90%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TextoErro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`