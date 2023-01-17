# projeto-rest-senha-hsc
Projeto Fullstack que permite usuários redefinirem suas senhas no RP da instituição 

![image](https://user-images.githubusercontent.com/105258182/212933058-79fabb7b-b8cb-48cb-84ea-4af83143cf7e.png)

# Explicação do projeto
O usuário informa alguns dados pessoais juntamente com o seu usuário do RP para reiniciar sua senha.
Ao clicar no botão, os dados informados são enviados para uma API que valida esses dados no banco de dados do sistema e retorna um status 200 se informações forem validas ou 400 caso os dados não sejam encontrados no banco.
Ao todo o projeto possui 3 telas, a tela principal, a tela de sucesso e a tela de erro de aplicação.

# Explicando a API
A API foi feita em Python com o framework Flask.
A API possui apenas uma rota que a cada requisição cria uma conexão com o banco de dados Oracle, e executa duas query, sendo a primeira um select com os dados informados pelo usuário, se o select trouxer resultado ele executa um update na tabela de usuários.

#Explicando o Front-end
Para a criação do front-end foi utilizado React com Typescript.
Para a comunicação com a API foi utilizado o método Axios.
E para evitar que haja muitas requisições no banco os erros de usuário foram todos tratados previamente no front-end, gerando notificações de erros utilizando a biblioteca react-toastfy.
 
