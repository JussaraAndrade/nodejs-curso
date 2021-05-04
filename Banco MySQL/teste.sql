CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios (nome, email, idade) VALUES(
    "Luis Silva",
    "email@teste22.com",
    28
);

INSERT INTO usuarios (idade, email, nome) VALUES(
    8,
    "email@teste22.com",
    "Maria Clara"
);