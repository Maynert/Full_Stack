
--- JOIN ---

-- INNE JOIN

-- Só quem tem correspondência nas duas tabelas
SELECT EST.uf, EST.nome, CID.uf, CID.nome FROM ESTADOS EST 
INNER JOIN CIDADES CID ON EST.uf = CID.uf;   

-- Tudo da esquerda + correspondentes da direita
SELECT EST.uf, EST.nome, CID.uf, CID.nome FROM ESTADOS EST 
LEFT OUTER JOIN CIDADES CID ON EST.uf = CID.uf; 

-- Tudo da direita + correspondentes da esquerda
SELECT EST.uf, EST.nome, CID.uf, CID.nome FROM ESTADOS EST 
RIGHT OUTER JOIN CIDADES CID ON EST.uf = CID.uf; 

-- Traz tudo de ambas, mesmo que sem correspondência
SELECT EST.uf, EST.nome, CID.uf, CID.nome FROM ESTADOS EST 
FULL OUTER JOIN CIDADES CID ON EST.uf = CID.uf; 


--- JOIN ENCADEADO ---

-- trago o nome de autores e o titulo do produtos
SELECT AU.nome, PROD.titulo FROM AUTORES AU
JOIN AUTORES_PRODUTOS AP ON (AU.cod_autor = AP.cod_autor) -- entro no AUTORES_PRODUTOS buscando os dados de AU em AP
JOIN PRODUTOS PROD ON (AP.cod_produto = PROD.cod_produto); -- entro em PRODUTO, usando os dados de AP para buscar em PROD

