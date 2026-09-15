# ATIV.CONSUMIR_API

##1 Qual API  Você Usou 

Nos Usamos a API **ViaCEP**

A API e de Graça para Todo mundo Usar e para Consultar os Endereços do CEP dO Brasil.

Aqui está o Link da  API 
https://viacep.com.br/

##2 O que ela devolve

Ela devolve Informações Relacionadas ao CEP Consultado, como:

-CEP
-Bairro
-Estado
-Região
-Cidade

São os mais comuns de se ver e Também Foi o que a Gente mais Usou.

##3 O endereço que Você Chamou 

A URL que Nos Utilizamos no Projeto foi:
https://viacep.com.br/ws/01001000/json/

Dai Usamos um dos CEP mais Comum que Tem que e o '01001000' que retorna os dados em formato JSON.

Um exemplo da Resposta

'''Json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairo": "Sé",
  "localidade"; "São Paulo",
  "uf": "SP",
  "estado": "São Paulo",
  "Região": "Sudeste"
  }
