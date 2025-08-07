# Projeto NPS API

API em .NET para gerenciamento de NPS (Net Promoter Score).

O NPS nada mais é do que uma forma de medir a satisfação dos clientes para alguma coisa (seja produtos, serviços e afins). Ele se da a partir de uma avaliação dos clientes quanto ao que queremos medir a avaliação, o calculo do mesmo segue os parametros abaixo

- Promotores: 4 - 5 (são os clientes que avaliaram de forma positiva)
- Neutros: 3 (clientes satisfeitos, mas que não viram um diferencial)
- Detratores 0 - 2 (clientes que não gostaram do produto ou serviço)

Com esses dados usamos a formula abaixo para fazer o calculo do NPS:

NPS = Promotores/Total - Detratores/Total

Sendo o total, a soma de todas as avaliações e não apenas dos Promotores e Detratores

---

## Tecnologias

- Dotnet
- NextJs
- Postgres
- Docker

---

## Requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop) - instalado e configurado
- [Postgres](https://www.postgresql.org/download/) - instalado e configurado
- [.Net 8.0 ou superior](https://dotnet.microsoft.com/en-us/download)

---

## Rodando local

1. Rode o front, seguindo os passos abaixo

```
  cd .\nps-frontend\
```

```
  npm install
```

```
  npm run dev 
```


2. Rode a api, seguindo os passos abaixo

Antes de tudo, garanta que o arquivo appsettings.json esteja com as informações corretar de usuário e senha do postgres

``` 
  cd .\NpsApi\ 
```

(Opcional - o codigo abaixo, rode se quiser fazer a sua propria migrations)
``` 
  dotnet ef migrations add MigrationsFinal
```

``` 
  dotnet ef database update
```

``` 
  dotnet run
```

---

## Rodando Docker (ainda não está operando a parte do banco de dados)

1. Garanta que as informações dos arquivos Dockerfile e docker-compose estejam corretas

2. Rode o comando abaixo na raiz do projeto

```
  docker-compose up --build
```
