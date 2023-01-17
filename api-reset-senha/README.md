# Reset de senha TASY
Api para realizar o reset de senha na aplicação TASY

## Grants do banco
O usuário do banco precisa ter os seguintes acessos:

- Tabela ``tasy.usuario`` -> Grant de Leitura e Update
- Tabela ``tasy.pessoa_fisica`` -> Grant de Leitura

## Variáveis de ambiente
Criar arquivo .env na raiz e configurar as váriaveis:

- USER -> Usuário do banco de dados
- PASS -> Senha do banco de dados
- IP_CONNECT -> Ip do banco (10.10.0.1)
- PORT_DB -> Porta do banco (1521)
- SID -> Sid
- DSN_SENTRY -> Dns de conexão Sentry caso queira monitorar a api

## Baixe a lib de conexão oracle no link a baixo e inforeme o diretorio da pasta que você baixou.
- LD_LIBRARY_PATH ->  [Lib de conexão Oracle](https://oracle.github.io/node-oracledb/INSTALL.html#-3-node-oracledb-installation-instructions) 

Para obter as próximas informações é necessário alterar a senha de um usuário para a senha desejada e buscar os campos ***DS_TEC*** E ***DS_SENHA*** dentro do TASY, tabela USUARIO.

- TASY_DS_TEC -> Ds técnica do Tasy
- TASY_DS_SENHA -> Ds senha do Tasy

- PORT_API -> Porta da aplicação

By [Samuelrlm](https://github.com/Samuelrlm)