<img width="223" height="263" alt="JSON" src="https://github.com/user-attachments/assets/ab012b15-6fb9-45a6-a690-bf098d647d51" />
<img width="223" height="263" alt="JSON" src="https://github.com/user-attachments/assets/6b6e7404-6c10-4d68-8fdc-2be8a4cb4736" />
# Consumo de API: ViaCEP

Atividade realizada por **Henrique Jean Köhler** e **Henrique Nunes Lopes Krieger** | **Turma:** DS M3/M6

Este projeto realiza a integração com uma API externa para consulta e validação de endereços brasileiros a partir do CEP.

---

## Sumário
1. [API Utilizada](#1-api-utilizada)
2. [O que a API Retorna](#2-o-que-a-api-retorna)
3. [Como Rodar](#3-como-rodar)
4. [Dificuldades Encontradas](#4-dificuldades-encontradas)
5. [Demonstração do Projeto](#6-demonstração-do-projeto)
6. [Endpoint e Exemplo de Requisição](#5-endpoint-e-exemplo-de-requisição)
   
---

## 1. API Utilizada

Utilizamos a API **ViaCEP**, um serviço gratuito e público para consulta de Códigos de Endereçamento Postal (CEP) do Brasil.
* **Gratuito:** Não exige chave de autenticação (API Key).
* **Documentação Oficial:** https://viacep.com.br/

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

## 3. Como Rodar

Para executar o projeto, é necessário ter os arquivos `index.html` e `script.js` na mesma pasta.

Depois, basta abrir o arquivo `index.html` no navegador ou utilizar a extensão Live Server no Visual Studio Code.

### Funcionamento
O projeto funciona seguindo estas etapas:
`Consumir API` → `fetch()` → `Receber JSON` → `Tratar os dados` → `Mostrar na tela`

---

## 4. Dificuldades Encontradas

Uma das dificuldades foi fazer a consulta funcionar corretamente e entender por que alguns CEPs não mostravam os dados.

O problema acontecia quando era digitado um CEP inválido ou que não existia. Para resolver, foi feita uma validação do CEP antes da consulta e também foi tratado o retorno de erro da API.

Outra dificuldade foi entender como o `fetch()` recebe os dados da API em formato JSON e como utilizar essas informações no HTML.

Depois disso, o projeto passou a buscar o CEP, receber os dados, tratar as informações e mostrar o endereço na tela.
---

## 5. Demonstração do Projeto

[JSON.webp](https://github.com/henriquekohler-cmyk/ATIV.CONSUMIR_API/blob/main/JSON.webp?raw=true)
[Print da tela funcionando.png](https://github.com/henriquekohler-cmyk/ATIV.CONSUMIR_API/blob/main/Print%20da%20tela%20funcionando.png?raw=true)

---

## 6. Endpoint e Exemplo de Requisição

Para buscar os dados, é realizada uma requisição HTTP do tipo **GET** enviando o CEP desejado e o formato de resposta esperado (`json`).

### Endpoint Chamado
`GET https://viacep.com.br/ws/01001000/json/`

### Exemplo de Resposta
```json
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


  "ddd": "11",
  "siafi": "7107"
}
