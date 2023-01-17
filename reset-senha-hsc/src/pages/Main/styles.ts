import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    color:white;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    align-items: center;
    flex-direction: column;
    
`;

export const Logo = styled.div`
    margin-top: 5px;
`

export const Container_mv = styled.div `
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    background: white;
    width: 400px;
    height: 400px;
    border-radius: 5px;
    box-shadow: 0px 10px 40px -12px #00000056;
    transition: all 300ms ease;
    color: black;
`;

export const Formulario = styled.div `
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 95%;
    margin-left: 10px;
    input{
        width: 100%;
        border: none;
        border-radius: 5px;
        padding: 4.5px;
        background: transparent;
        font-size: 12pt;
        outline: none;
        box-sizing: border-box;
        border: solid 1.9px #3D3D3D;
        transition: 300ms cubic-beizer(0.4, 0 , 0.2 , 1)
        -webkit-autofill {
            background: none;
        }
    }
    input:hover{
        background: #F3F2F2;
    }
    input:focus{
        border-color: #2412c7;
        background: transparent;
    }
    
`

export const Btn = styled.div`
    button{
        margin-top: 1rem;
        width: 95%;
        margin-left: 10px;
    }
`

export const Enviar = styled.div`
        button{
            width: 95%;
            padding: 7px 0px;
            background: linear-gradient(to right, #2412c7, #4ab6f5);
            color: #FFFFFF;
            border-radius: 5px;
            outline: none;
            font-weight: 800;
            cursor: pointer;
            transition: all 300ms ease;
            border:none;
        }

        button:hover{
            background: linear-gradient(to right, #4D40C0, #7DCAF7);
            border-color: none;
            border: none;
            padding: 7px 0px;
            color: #FFFFFF;
        }

`
export const Voltar = styled.div`
    button{
        margin-top: 0.5rem;
        width: 95%;
        padding: 7px 0px;
        background: #e0dada;
        color: #000000;
        border: none;
        border-radius: 5px;
        outline: none;
        font-weight: 800;
        cursor: pointer;
        transition: all 300ms ease;
    }
    button:hover{
        background: #7a7a7a;
        color: #ffffff;
    }
`

export const Footer = styled.div`
    width: 100vw;
    position: fixed;
    bottom: 0;
    z-index: -1000;

    img{
        margin: 0;
        width: 100%;
        height: 100%;
    }
    
`

export  const Inputs = styled.div`
    div{
        margin-top:1rem;
    }
    label{
        font-weight: 500;
    }
`
