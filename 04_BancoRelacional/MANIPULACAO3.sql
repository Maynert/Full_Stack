--- INTEGRIDADE --
-- primary key = a chave principal da tabela
-- unique = chave alternativa

-- Adicionando as propriedades de chave primaria e alterantiva
CREATE TABLE ALUNOS
(
nroMatricula VARCHAR(10) PRIMARY KEY,
cpf VARCHAR(20) UNIQUE,
email VARCHAR(100) UNIQUE,
nome VARCHAR(150) NOT NULL,
anoIngresso NUMBER(4) NOT NULL,
endereco VARCHAR(150) NULL,
sexo CHAR(1) NOT NULL
); 

-- Agora atribuindo usando CONSTRAINT
CREATE TABLE ALUNOS
(
nroMatricula VARCHAR(10) NOT NULL,
cpf VARCHAR(20) NOT NULL,
email VARCHAR(100) NOT NULL,
nome VARCHAR(150) NOT NULL,
anoIngresso NUMBER(4) NOT NULL,
endereco VARCHAR(150) NULL,
sexo CHAR(1) NOT NULL,
CONSTRAINT PK_ALUNOS PRIMARY KEY (nroMatricula),
CONSTRAINT AK1_ALUNOS UNIQUE (cpf),
CONSTRAINT AK2_ALUNOS UNIQUE (email)
);


--- RESTRIÇÃO DE INTEGRIDADE DE DOMÍNIO ---

    /*
        A integridade de domínio visa a garantir que os dados armazenados respeitem determinados valores permitidos.
        Podemos restringir o intervalo de dados permitido para um campo. Alguns exemplos de restrição de domínio
        são:
        • garantir que o preço de um produto não pode ser zero ou ter um valor negativo;
        • garantir que o campo status de um pedido tenha somente um dos seguintes valores: ‘ABERTO’,
        ‘PENDENTE’, ‘FECHADO’.
        • garantir que o campo sexo somente aceite os valores ‘M’ ou ‘F’.
        Esses casos podem ser garantidos usando a restrição CHECK. Por exemplo, vamos garantir que o campo
        ‘anoIngresso’ possua sempre um valor superior a 2000 e que o campo sexo permita apenas os valores ‘M’ ou ‘F’
        (em maiúsculas): 
    */

ALTER TABLE ALUNOS
ADD CONSTRAINT CK_AnoIngr CHECK (anoIngresso > 2000); -- O campo ingresso, permitirá dados apenas acima de 2000

ALTER TABLE ALUNOS
ADD CONSTRAINT CK_sexo CHECK (sexo IN ('M', 'F')); -- o campo sexo, aceitará ser M ou F

--- RESTRIÇÃO DE INTEGRIDADE REFERENCIAL --- CHAVE ESTRANGEIRA

-- Tendo em mente que temos uma tabela de estados, onde será cadastrado todas as UF's.

CREATE TABLE ESTADOS
(
uf CHAR(2) NOT NULL,
nome VARCHAR2(40) NOT NULL,
regiao CHAR(2) NOT NULL,
CONSTRAINT PK_ESTADOS PRIMARY KEY (uf)
); 

-- E aqui temos uma tabela de cidades, que contém um campo de UF. Desta forma, o campo UF não tem relação com a tabela estados
-- sendo possível cadastrar qualquer estados dentro da cidade, mesmo que não esteja cadastrado em ESTADOS.
-- Para que possa ser usado a tabela ESTADOS na tabela CIDADES no campo UF, faz-se a criação de uma chave estrangeira.

CREATE TABLE CIDADES
(
cod_cidade NUMBER(4) NOT NULL,
nome VARCHAR2(60) NOT NULL,
uf CHAR(2) NOT NULL,
CONSTRAINT PK_CIDADES PRIMARY KEY (cod_cidade)
); 

-- Criação da chave estrangeira 

ALTER TABLE CIDADES
ADD
(
    CONSTRAINT FK_EST_CID
    FOREIGN KEY (uf)  -- campo que terá a chave estrangeira
    REFERENCES ESTADOS (uf) -- campo e tabela que estão ligados como chave estrangeira na tabela cidades no campo UF
); 
/*
    Relacionamentos do tipo muitos-para-muitos
    Dizemos que o relacionamento existente entre as tabelas ESTADOS e CIDADES é do tipo um-para-muitos (ou 1-N).
    Em outras palavras, estamos dizendo que cada estado pode ter várias cidades, mas que cada cidade pertence a
    apenas um estado.
    No entanto, em alguns casos precisamos representar relacionamentos do tipo muitospara-muitos (ou N-N). Esse
    é o caso dos relacionamentos entre MEDICOS e PACIENTES ou então entre PESSOAS e PROJETOS, por exemplo.
    Infelizmente, não há como representar relacionamentos N-N entre (usando apenas) duas tabelas em um banco
    de dados relacional. No entanto, podemos resolver esse problema criando uma terceira tabela (ou seja, uma
    tabela intermediária entre as duas tabelas originais) e criando dois relacionamentos 1-N entre as tabelas:
*/

---- PRÁTICA ---
-- 1 - Criação da tabela de médicos
CREATE TABLE MEDICOS (
    crm           VARCHAR(20)  NOT NULL,
    nome          VARCHAR(100) NOT NULL,
    especialidade VARCHAR(60)  NOT NULL,
    CONSTRAINT PK_MEDICOS PRIMARY KEY (crm) -- 6 Definido a chave primária como o CRM
);
-- 2 - Criação da tabela de Pacientes
CREATE TABLE PACIENTES (
    cpf   CHAR(11)     NOT NULL,
    nome  VARCHAR(100) NOT NULL,
    sexo  CHAR(1)      NOT NULL,
    CONSTRAINT PK_PACIENTES PRIMARY KEY (cpf),
    CONSTRAINT CK_PACIENTES_SEXO CHECK (sexo IN ('M','F'))
);

-- 3 - Criação da tabela médicos pacientes
CREATE TABLE MEDICOSPACIENTES (
    crm VARCHAR(20) NOT NULL,
    cpf CHAR(11)    NOT NULL,

    CONSTRAINT PK_MEDICOSPACIENTES PRIMARY KEY (crm, cpf),
    -- 4 definido a FK (chave estrangeira) e pelo CRM 
    CONSTRAINT FK_MP_MEDICOS
        FOREIGN KEY (crm) REFERENCES MEDICOS (crm),
    -- 5 definido a FK (chave estrangeira) e pelo CPF 
    CONSTRAINT FK_MP_PACIENTES
        FOREIGN KEY (cpf) REFERENCES PACIENTES (cpf)
);


--- 7 Criação da tabela de consultas

CREATE TABLE CONSULTAS (
    crm           VARCHAR(20) NOT NULL,
    cpf           CHAR(11)    NOT NULL,
    data_consulta TIMESTAMP   NOT NULL,

    CONSTRAINT PK_CONSULTAS PRIMARY KEY (crm, cpf, data_consulta),

    CONSTRAINT FK_CONS_MEDICOS
        FOREIGN KEY (crm) REFERENCES MEDICOS (crm),

    CONSTRAINT FK_CONS_PACIENTES
        FOREIGN KEY (cpf) REFERENCES PACIENTES (cpf)
);
