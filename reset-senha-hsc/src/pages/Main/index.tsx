import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { Btn, Container, Container_mv, Enviar, Footer, Formulario, Inputs, Logo, Voltar } from "./styles";

export function Mainpage () {


    const { register,handleSubmit,formState:{ errors }, reset} = useForm();

    const navigate = useNavigate();

    const [nm_usuario, setNm_usuario] = useState("")
    const [nr_cpf, setNr_cpf] = useState("")
    const [dt_nascimento, setDt_nascimento] = useState("")
    
    async function resetSenha (event: any) {
        const time = "T00:00:00-03:00"
        const date = new Date(dt_nascimento + time);
        const formattedDate = date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });

        const currentDate = new Date();
        const birthDateObject = new Date(dt_nascimento);
        const age = currentDate.getFullYear() - birthDateObject.getFullYear();

        if(nr_cpf.length != 11){
            toast.error('O CPF deve ter 11 dígitos!', {
                position: "top-center",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

        } else if(age < 15){
            toast.error('Informe uma data de nascimento válida!', {
                position: "top-center",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        else{
            try{
                const response = await api.patch(`/user/?nr_cpf=${nr_cpf}`, {nm_usuario: `${nm_usuario}`, dt_nascimento: `${formattedDate}`})
                console.log(response)
                reset();
                toast.success('Senha alterada com sucesso!');
                navigate('/success');
            }
            catch(status:any){
                const erro = status.request.status
                const request = status.request
               
                console.log('ERRO:',erro)
                console.log(request)
   
                if(erro == 500){
                    reset();
                    navigate('/erro');
                } else if (erro == 404 || erro == 422) {
                    toast.error('Os dados informados não constam no sistema!', {
                       position: "top-center",
                       autoClose: 7000,
                       hideProgressBar: false,
                       closeOnClick: false,
                       pauseOnHover: true,
                       draggable: true,
                       progress: undefined,
                       theme: "colored",
                       });
                }
            }
        }  
     }

    return (
        <Container>
            <div className="main_back">
                <Container_mv>
                    <div className="card-meio">
                        <Logo>
                            <img src="src\image\logo_horizontal.png" alt="" width={70} />
                        </Logo>
                        <div className="titulo">
                            <h4>Reset de senha TASY</h4>
                        </div>
                        <Formulario>
                            <form onSubmit={handleSubmit(resetSenha)}>
                                <div className="main">
                                    <Inputs>
                                        <div className="user">
                                            <label htmlFor="usuario">Usuário</label>
                                            <input type="text" required placeholder="ex: pedro.alves" {...register("nm_usuario", {required: true})} value={nm_usuario} onChange={(event) => setNm_usuario(event.target.value)}/>
                                        </div>
                                        <div className="nascimento">
                                            <label htmlFor="nasc">Data de nascimento</label>
                                            <input type="date" value={dt_nascimento} required {...register("dt_nascimento", {required: true})} onChange={(event) => setDt_nascimento(event.target.value) }/>
                                        </div>
                                        <div className="cpf">
                                            <label htmlFor="cpf">CPF</label>
                                            <input type="text" required placeholder="Sem pontos e ifen" value={nr_cpf} {...register("nr_cpf", {required: true})} onChange={(event) => setNr_cpf(event.target.value) }/>
                                        </div>
                                    </Inputs>
                                    <Btn>
                                        <Enviar>
                                            <button type="submit">Enviar</button>
                                        </Enviar>
                                        <Voltar>                                           
                                            <button type="reset">Voltar</button>
                                        </Voltar>
                                    </Btn>
                                </div>
                            </form>
                        </Formulario>
                    </div>
                </Container_mv>
            </div>
            <Footer>
                <img src="src\image\ondas-2.jpg" alt="ondas" />
            </Footer>
        </Container> 
    )
}