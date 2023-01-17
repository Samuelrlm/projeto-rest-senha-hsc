import cx_Oracle
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import os
import sentry_sdk
from flask import Flask
from sentry_sdk.integrations.flask import FlaskIntegration
load_dotenv()


#CHAMAR AS VARIAVEIS DE AMBIENTE DO BANCO
USER= os.getenv("USER")
PASS= os.getenv("PASS")
IP_CONNECT= os.getenv("IP_CONNECT")
PORT_DB= os.getenv("PORT_DB")
SID= os.getenv("SID")
DSN_SENTRY = os.getenv("DNS_SENTRY")

LD_LIBRARY_PATH = os.getenv("LD_LIBRARY_PATH ")

TASY_DS_TEC=os.getenv("TASY_DS_TEC")
TASY_DS_SENHA=os.getenv("TASY_DS_SENHA")

#CHAMAR VARIAVEIS DE AMBIENTE DA API
PORT_API = os.getenv("PORT_API")

# Configure a conexão com o banco de dados Oracle
lib = cx_Oracle.init_oracle_client(f"{LD_LIBRARY_PATH}")
dsn = cx_Oracle.makedsn("host", "port", "sid")

#Monitorar API com sentry
sentry_sdk.init(
    dsn=f"{DSN_SENTRY}",
    integrations=[
        FlaskIntegration(),
    ],
    traces_sample_rate=1.0
)

app = Flask(__name__)

@app.route('/user/', methods=['PATCH'])
def update_user():
    try:
        #Criar conexão
        connection = cx_Oracle.connect(f"{USER}/{PASS}@{IP_CONNECT}:{PORT_DB}/{SID}")

        # Obtém os dados da solicitação
        nr_cpf = request.args.get('nr_cpf')
        data = request.get_json()
        nm_usuario = data['nm_usuario'] 
        dt_nascimento = data['dt_nascimento']

        # Executa a consulta para selecionar o usuário com o ID especificado
        cursor = connection.cursor()
        
        cursor.execute(f"SELECT nvl(u.ds_login,  u.nm_usuario) nm_usuario, pf.dt_nascimento, pf.nr_cpf FROM tasy.usuario u INNER JOIN tasy.pessoa_fisica pf ON ( u.cd_pessoa_fisica = pf.cd_pessoa_fisica ) WHERE 1 = 1 AND (upper(u.nm_usuario) = upper('{nm_usuario}') OR UPPER(u.DS_LOGIN) = UPPER('{nm_usuario}')) AND to_char(pf.dt_nascimento, 'DD/MM/YYYY') = '{dt_nascimento}' AND pf.nr_cpf = '{nr_cpf}'")
        result = cursor.fetchone()

        # Verifica se o usuário foi encontrado
        if result is None:
            return jsonify({'message': 'User not found', 'status':'404'}), 404

        # Executa a consulta para atualizar o nome do usuário
        cursor.execute(f"UPDATE tasy.usuario SET ds_senha = '{TASY_DS_SENHA}', ds_tec = '{TASY_DS_TEC}', dt_alteracao_senha = null WHERE cd_pessoa_fisica = (SELECT u.cd_pessoa_fisica FROM tasy.usuario u INNER JOIN tasy.pessoa_fisica pf ON ( u.cd_pessoa_fisica = pf.cd_pessoa_fisica ) WHERE 1 = 1 AND (upper(u.nm_usuario) = upper('{nm_usuario}') OR UPPER(u.DS_LOGIN) = UPPER('{nm_usuario}')) AND to_char(pf.dt_nascimento,'DD/MM/YYYY') = '{dt_nascimento}' AND pf.nr_cpf = '{nr_cpf}')")
        connection.commit()

        #fecha a conexão
        cursor.close()
        connection.close()

        return jsonify({'message': 'User updated successfully'}), 200
    except Exception as e:
        sentry_sdk.capture_exception(e)
        return "An error occurred", 500
    return "Success", 200


CORS(app)
# Inicie a aplicação
if __name__ == "__main__":
    app.run(host='0.0.0.0', port= PORT_API)