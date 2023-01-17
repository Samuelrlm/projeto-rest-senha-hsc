import { Cardmain, Containersucess } from "./styles";


export function Sucesspage () {
 
    return(
        <Containersucess>
            <Cardmain>
                <div className="titulo">
                    <h2>Sua senha atual é: <b><i>123</i></b></h2>
                </div>
                <div className="obs">
                    <p>Ao entrar no TASY você deverá redefinir sua senha.</p>
                </div>
                <div className="foto">
                    <img src="src\image\reset-img.jpg" alt="" />
                </div>
            </Cardmain>
        </Containersucess>
)
}