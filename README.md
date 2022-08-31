# 200Systems
Case para processo seletivo 200Systems

## Link da documentação
https://documenter.getpostman.com/view/20356729/VUxNSoe6

<br>

## Link da aplicação
https://lv-200Systems.surge.sh

<br>

## Sobre o projeto: 
Aplicação fullstack desenvolvida como teste técnico para a 200Systems. Uma empresa necessita de um sistema para apoiar seu programa de indicação. Esse programa funciona assim:

- Todos que fizerem uma compra, ganha um código de indicação.
- Uma pessoa (A) compra um produto, e como todos, recebe um código de indicação.
- Outra pessoa (B) compra um produto e usa o código de indicação recebido da pessoa (A).
- A pessoa (A) acumula 1 ponto de indicação.
- Pessoas que acumularem 10 pontos de indicação, ganha um prêmio X.

<br>

### postPurchase
Endpoint responsável por efetivar a compra. Cadastra o usuário, gera seu código de de indicação e, se tiver um código promocional de outro comprador, adiciona um ponto ao comprador que indicou. Quando um comprador atinge 10 pontos, ele recebe seu presente e seus pontos zeram.
O usuário precisa passar necessariamente os parâmetros "person_name" e "product_name". Já o parâmetro "indication_code" é opcional.

<br>

### getBuyers
Endpoint responsável por buscar todos os compradores. Retorna "person_code", "person_name", "indication_code" e "points".

<br>


### getBuyerIndications
Utilizando a mesma URL da getBuyers, este endpoint é capaz de buscar as indicações de determinado comprador se via body for passado o "person_code" do mesmo. Retorna "person_name" e as "indications".

<br>

## Melhorias
- ajustar a página "admin" para renderizar as indicações de cada comprador

## Tecnologias utilizadas:
- Node.js
- Typescript
- MYSQL
- Programação Orientada à Objetos
- Postman
- Git
<br>
<br>

## Linguagens e libs utilizadas:
- Typescript
- mysql
- dotenv
- express
- knex
- uuid

<br>
<br>

### Conhecimentos adquiridos durante o desenvolvimento do projeto:
- Integração com banco de dados e relações SQL.
- Requisições API Rest.

<br>
<br>

### Como rodar a aplicação:
- Clone o projeto no terminal utilizando o git clone;
- Na pasta do projeto, instale as dependências com o comando npm install;
- Crie um arquivo .env com as configurações do seu banco de dados(preferencialmente MySQL, que foi o banco de dados utilizado no projeto);
- No arquivo .env, deverá ficar dessa forma:

```
DB_HOST = seu_endereço_host
DB_USER = seu_usuário
DB_PASSWORD = sua_senha
DB_SCHEMA = seu_banco_de_dados
JWT_KEY = chave_jwt
ACCESS_TOKEN_EXPIRES_IN = "tempo_de_expiração_do_token"
BCRYPT_COST = custo_da_aplicação
```
- Por fim, execute a aplicação rodando o comando npm start, ou npm run start para deixar o projeto rodando o tempo todo.
OBSERVAÇÃO: você pode testar os endpoints em um arquivo request.rest ou através de um cliente HTTP (ex: postman), utilizando o endereço https://lv-200systems.herokuapp.com/ como URL padrão para as requisições. Para obter informações de cada endpoint, consulte a documentação.
<br>

## EXTRA

Tabelas criadas no MySQL Workbench para o desenvolvimento do projeto:

- Tabela de compradores
```
CREATE TABLE buyers_200systems (
person_code VARCHAR(255) PRIMARY KEY,
person_name VARCHAR(255) NOT NULL,
indication_code VARCHAR(255) NULL,
points INT
);
```

- Tabela de compras
```
CREATE TABLE purchase_200systems (
buyer_code VARCHAR(255) PRIMARY KEY,
person_code_indication VARCHAR(255) NULL,
product_name VARCHAR(255) NOT NULL,
dtBuy DATE NOT NULL,
indication_code VARCHAR(255) NULL,
FOREIGN KEY (buyer_code) REFERENCES buyers_200systems(person_code),
FOREIGN KEY (person_code_indication) REFERENCES buyers_200systems(person_code)
);
```
