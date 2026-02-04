--- DEFINIÇÃO DE OBRIGATORIEDADE 
--- NOT NULL indica que o campo é obrigatório
--- NULL indica que o campo não é obrigatório

CREATE TABLE PESSOAS
(
    cpf VARCHAR(20) NOT NULL,
    nome VARCHAR(150) NOT NULL,
    idade NUMBER(3) NULL,
    endereco VARCHAR(150) -- o campo endereço é NULL implicitamente
);

-- ordem normal das colunas:
INSERT INTO PESSOAS (cpf, nome, idade, endereco)
VALUES ('32809', 'Maria', '25', 'Rua A, 20');
-- outra ordem qualquer das colunas:
INSERT INTO PESSOAS (idade, endereco, cpf, nome)
VALUES ('25', 'Rua A, 20', '30599', 'Pedro');
-- valores nulos:
INSERT INTO PESSOAS (cpf, nome, idade, endereco)
VALUES ('29385', 'Carlos', NULL, NULL);
INSERT INTO PESSOAS (cpf, nome, idade, endereco)
VALUES ('39582', 'Alice', '80', NULL);
INSERT INTO PESSOAS (cpf, nome, idade, endereco)
VALUES ('78838', 'Antonio', NULL, 'Rua B, 80');

INSERT INTO PESSOAS (cpf, nome)
VALUES ('90038', 'Ana Paula');
INSERT INTO PESSOAS (cpf, nome, idade)
VALUES ('23487', 'Patricia', '18');
INSERT INTO PESSOAS (cpf, nome, endereco)
VALUES ('23363', 'Jose', 'Rua C, 50');

SELECT *
FROM PESSOAS
WHERE idade IS NULL;
--- is NOT NULL indica que o campo ta preenchido
--- IS NULL indica que o campo não foi preenchido
SELECT *
FROM PESSOAS
WHERE endereco IS NOT NULL;


--- LIKE e IN ---

-- Pessoas com nomes iniciando com a letra 'A':
SELECT *
FROM PESSOAS
WHERE nome LIKE 'A%';
-- Pessoas com nomes iniciando com 'Ana':
SELECT *
FROM PESSOAS
WHERE nome LIKE 'Ana%';
-- Pessoas com nomes que terminam com 'Silva':
SELECT *
FROM PESSOAS
WHERE nome LIKE '%Silva';
-- Pessoas com nomes que contenham 'Carlos':
SELECT *
FROM PESSOAS
WHERE nome LIKE '%Carlos%';

-- Pode corresponder a Maria ou Mario:
SELECT *
FROM PESSOAS
WHERE nome LIKE 'Mari_ da Silva'; -- O símbolo ‘_’ substitui exatamente um caractere.

-- Pessoas que tenham 25, 30 ou 40 anos de idade:
SELECT *
FROM PESSOAS
WHERE idade IN (25, 30, 40);


--- REMOVENDO E ADICIONANDO COLUNAS EM TABELAS ---

ALTER TABLE PESSOAS -- Estou abrindo a aletração da tabela
DROP COLUMN idade; -- e retirando a coluna idade com DROP COLUMN

ALTER TABLE PESSOAS -- Estou abrindo a aletração da tabela
ADD sexo CHAR(1); -- e inserindo uma nova coluna com ADD

--- DATE ---

-- Alteramos a tabela PESSOA, retirando idade e adicionando a Data de Nascimento

ALTER TABLE PESSOAS
DROP COLUMN idade;

ALTER TABLE PESSOAS
ADD datanasc DATE NULL;

CREATE TABLE PESSOAS
(
cpf VARCHAR(20) NOT NULL,
nome VARCHAR(150) NOT NULL,
datanasc DATE NULL, -- alterado!
endereco VARCHAR(150) NULL
);

-- supondo que a regra da data nesse caso é DD-MON-YYYY: Ex: 03-FEB-1980

INSERT INTO PESSOAS (cpf, nome, datanasc, endereco)
VALUES ('29048', 'Roberto', '03-FEB-1980', 'Rua D, 80');

INSERT INTO PESSOAS (cpf, nome, datanasc, endereco)
VALUES ('29048', 'Roberto', DATE '1980-02-03', 'Rua D, 80');

--- CONVERSÃO DE DATAS ---

-- As funções TO_CHAR()e TO_DATE() convertem uma data/horário em uma string e vice-versa.
-- A sintaxe geral é TO_CHAR(x [, formato]) e TO_DATE(x [, formato]) .
-- O elemento SYSDATE captura data e horas atuais.

SELECT TO_CHAR(SYSDATE, 'MONTH, DD, YYYY
HH24:MI:SS')
FROM DUAL;

-- DUAL é uma tabela interna do Oracle usada com o comando SELECT quando não precisamos de uma tabela real do banco de dados.

SELECT nome, TO_CHAR(datanasc, 'MONTH, DD, YYYY') -- transformando a data de nascimento que era DATE em string
FROM PESSOAS;

-- inserindo uma nova pessoa, onde passo os dados de data em caracter
INSERT INTO PESSOAS (cpf, nome,
datanasc, endereco)
VALUES (
'29920',
'Beto',
TO_DATE('25-FEB-1979 21:36:28', -- dados em caracter, que serão transformados em data com TO_DATE
'DD-MON-YYYY HH24:MI:SS'), -- FORMATO
'Rua E, 80'
);


--- ARITMETICA DE DATAS ---

-- Aritmeticas possíveis em sql
-- DATE + NUMBER = DATE
-- DATE - NUMBER = DATE
-- DATE – DATE = número de dias entre as datas

SELECT SYSDATE + 1 -- resultado seria o dia da tabela + 1 dia.
FROM DUAL

