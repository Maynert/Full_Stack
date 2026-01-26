-- db/init.sql
-- Este script roda apenas na PRIMEIRA inicialização do MySQL (quando ainda não existe volume com dados).

CREATE DATABASE IF NOT EXISTS tcc;
USE tcc;

-- Cria a tabela `user` se ela ainda não existir
CREATE TABLE IF NOT EXISTS `user` (
  id INT NOT NULL,
  username VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);

-- Insere registros iniciais, mas só se o ID não existir ainda (evita duplicar)
INSERT INTO `user` (id, username)
VALUES (1, 'Maynert'), (2, 'Robervaldo')
ON DUPLICATE KEY UPDATE
  username = VALUES(username);
