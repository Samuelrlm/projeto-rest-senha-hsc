import { Containersucess } from "../Success/styles";
import { MainErro, TextoErro, Titulo } from "./styles";

export function Errorpage() {
    return(
        <Containersucess>
            <MainErro>
                <Titulo>
                    <h1>Erro de aplicação</h1>
                    <span className="material-symbols-outlined">warning</span>
                </Titulo>
                <TextoErro>
                    <p>Entre em contato com a TI</p>
                    <p>RAMAL: <b>7025</b></p>
                </TextoErro>
                <div className="imagem">
                    <img src="https://img.freepik.com/vetores-gratis/opa-erro-404-com-uma-ilustracao-do-conceito-de-robo-quebrado_114360-1932.jpg?w=2000" alt="" width={400}/>
                </div>
            </MainErro>
        </Containersucess>
    )
}