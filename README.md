# Atividade realizada por Henrique Jean Köhler e Henrique Nunes Lopes Krieger | Turma: DS M3/M6

# Consumo de API: ViaCEP

Este projeto realiza a integração com uma API externa para consulta e validação de endereços brasileiros a partir do CEP.

---

## Sumário
- [1. API Utilizada](#1-api-utilizada)
- [2. O que a API Retorna](#2-o-que-a-api-retorna)
- [3. Endpoint e Exemplo de Requisição](#3-endpoint-e-exemplo-de-requisição)

---

## 1. API Utilizada

Utilizamos a API **[ViaCEP](https://viacep.com.br/)**, um serviço gratuito e público para consulta de Códigos de Endereçamento Postal (CEP) do Brasil.

* **Gratuito:** Não exige chave de autenticação (API Key).
* **Documentação Oficial:** [https://viacep.com.br/](https://viacep.com.br/)

---

## 2. O que a API Retorna

A API retorna um objeto JSON com informações completas sobre o endereço correspondente. No projeto, as principais informações utilizadas foram:

* `cep`: Código de Endereçamento Postal formatado.
* `logradouro`: Nome da rua, avenida ou praça.
* `bairro`: Bairro do endereço.
* `localidade`: Cidade/Município.
* `uf`: Estado (Unidade da Federação).
* `regiao`: Região geográfica (Ex: Sudeste, Sul, etc.).

---

## 3. Endpoint e Exemplo de Requisição

Para buscar os dados, é realizada uma requisição HTTP do tipo **GET** enviando o CEP desejado e o formato de resposta esperado (`json`).

### Endpoint Chamado
```http
GET [https://viacep.com.br/ws/01001000/json/](https://viacep.com.br/ws/01001000/json/)
  "estado": "São Paulo",
  "Região": "Sudeste"
  }

{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "estado": "São Paulo",
  "regiao": "Sudeste",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
