
CREATE TABLE PRODS
(
codigo NUMERIC(3) NOT NULL,
nome VARCHAR(50) NOT NULL,
preco NUMERIC (5,2) NOT NULL,
tipo CHAR(1) NULL, -- [S]uprimento, [C]omponente, [P]eriférico
CONSTRAINT PK1 PRIMARY KEY (codigo)
); 

INSERT INTO PRODS VALUES( 10, 'HD' ,200 ,'C');
INSERT INTO PRODS VALUES( 11, 'Memoria' ,250 ,'C');
INSERT INTO PRODS VALUES( 12, 'Impressora' ,680 ,'P');
INSERT INTO PRODS VALUES( 13, 'Processador' ,600 ,'C');
INSERT INTO PRODS VALUES( 14, 'DVD-RW' ,2 ,'S');
INSERT INTO PRODS VALUES( 15, 'Papel A4' ,19 ,'S');
INSERT INTO PRODS VALUES( 16, 'Scanner' ,199 ,'P'); 

/*
a) Quantos produtos existem na tabela PRODS?
b) Quantos tipos de produtos existem na tabela PRODS?
c) Quantos produtos existem de cada tipo?
d) Qual a média de preço de todos os produtos?
e) Qual a média de preço dos suprimentos (tipo ‘S’)?
f) Qual a média de preço dos produtos de cada tipo?
*/ 

--A  CONTAGEM
Select count(*) from PRODS

-- B Quantos pordutos diferente tem
Select count(DISTINCT tipo)  from PRODS

-- C Quantos produtos tem de cada tipo
SELECT tipo, COUNT(*) AS quantidade FROM PRODS
GROUP BY tipo;

-- D Qual a média de preço de todos os produtos?
SELECT ROUND(AVG(preco)) From PRODS

-- E Qual a média de preço dos suprimentos (tipo ‘S’)?
SELECT ROUND(AVG(preco)) From PRODS
WHERE tipo = 'S'

-- F Qual a média de preço dos produtos de cada tipo?
SELECT tipo, COUNT(*) AS quantidade, ROUND(AVG(preco)) FROM PRODS
GROUP BY tipo;


--- GROUP BY com HAVING
/*
A cláusula HAVING é usada em conjunto com a cláusula GROUP BY. Ela determina as condições sobre as quais
será realizada a composição dos grupos. Em outras palavras a cláusula HAVING serve para decidir quais dos
grupos gerados farão parte do resultado final. Os grupos que não satisfizerem as condições da cláusula HAVING
são descartados.
*/

SELECT CID.nome, COUNT(*) QTD
FROM CIDADES CID JOIN ENDERECOS END
ON CID.cod_cidade = END.cod_cidade
GROUP BY CID.nome
HAVING COUNT(*) > 2;

/*
Exemplo:

Cidade	Endereço
Caxias	A
Caxias	B
Caxias	C
Bento	A

Com o Having, mesmo que Bento esteja dentro dos parâmetros, o Having solicita que somente traga endereços com mais de 2 registros apareçam.

*/

--- SUBCONSULTAS ---

/*
Na linguagem SQL, subconsultas são comandos SELECT aninhados dentro de outros
comandos SELECT, INSERT, UPDATE ou DELETE. Podemos ter, inclusive, subconsultas
dentro de outras subconsultas. O número de níveis permitido depende do SGBD.
Existem basicamente dois tipos de subconsultas:
1. Subconsultas que retornam um único valor; e
2. Subconsultas que retornam um conjunto de valores (ou registros).


*/
-- Consulta de retorno unico 
SELECT preco FROM produtos
WHERE cod_produto = 9

-- consulta de que pode gerar multiplo valor
SELECT titulo FROM produtos
WHERE preco > 179


-- UMA SUBCONSULTA
-- Nesse caso, ele ta usando a subconsulta como parâmetro para preço
-- Lista os títulos dos produtos que têm preço MAIOR do que o preço do produto de código 9.
-- Dessa forma acaba usando o produto cod_produto = 9 como referência de preço.
SELECT titulo FROM PRODUTOS
WHERE preco >
    (SELECT preco FROM PRODUTOS
    WHERE cod_produto = 9); 

-- Traz todos os titulos, que não importados, que tem o preço maior que o Maximo dos importados
SELECT titulo FROM PRODUTOS
WHERE importado = 'N' AND preco >
                                (SELECT MAX(preco)
                                FROM PRODUTOS
                                WHERE importado = 'S'); 

-- Traz o ano de lançamento + a média dos preços, ordenando por ano de lançamento, onde o Preço medio seja maior que(
-- o preço medio dos produtos lançados no ano atual de execução da Query)
SELECT ano_lançamento, AVG(preco) FROM PRODUTOS
GROUP BY ano_lancamento
HAVING AVG(preco) >
                (SELECT AVG(preco)
                FROM PRODUTOS
                WHERE ano_lancamento = trunc(sysdate, ‘YYYY’));


--- INSERT com SUBCONSULTAS

-- Inserir em PRODS os produtos nacionais, cujo título inicia com A, código maior que 2, limitando o nome e atribuindo um tipo fixo.
INSERT INTO PRODS (codigo, nome, preco, tipo)
SELECT cod_produto, SUBSTR(titulo, 1, 15), preco, 'L' FROM PRODUTOS
WHERE importado = 'N' AND titulo LIKE 'A%' AND cod_produto > 2;

--- UPDATE com Subconsulta
-- aplico 10% de desconto no preço dos produtos cujo prazo de entrega é maior que 30 dias.
UPDATE PRODUTOS SET preco = preco - (10/100 * preco)
WHERE cod_produto IN
( SELECT cod_produto
FROM PRODUTOS
WHERE prazo_entrega > 30 );

--- DELETE com Subconsultas
-- Deleta os produtos que são Nacionais e o titulo inicia com A e o código seja maior que 100
DELETE FROM PRODS 
WHERE codigo IN
    ( SELECT cod_produto FROM PRODUTOS
    WHERE importado = 'N'
    AND titulo LIKE 'A%'
    AND cod_produto > 100 );