# Projeto NPS API

API em .NET para gerenciamento de NPS (Net Promoter Score).

---

## Requisitos

- Windows (PowerShell)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado e configurado
- .NET SDK 9.0 instalado localmente (opcional, mas útil para testes locais)

---

## Rodando local

1. Rode o front, seguindo os passos abaixo

```
  cd .\nps-frontend\
```

```
  npm run dev 
```


2. Rode a api, seguindo os passos abaixo

``` 
  cd .\NpsApi\ 
```

Garanta que o arquivo appsettings.json esteja com as informações corretar de usuário e senha do postgres

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

## Rodando Docker (ainda não está operando a parte do banco de dados)

1. Garanta que as informações dos arquivos Dockerfile e docker-compose estejam corretas

2. Rode o comando abaixo na raiz do projeto

```
  docker-compose up --build
```