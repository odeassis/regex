# :arrow_forward: Capítulo 1 - Introdução

## Apresentando as Expressões Regulares
  
- Uma expressão regular é um método formal de se especificar um padrão de texto.

- Mais detalhadamente, é uma composição de símbolos, caracteres com funções especiais, que, agrupados entre si e com caracteres literais, formam uma sequência, uma expressão. Essa expressão é interpretada como uma regra que indicará sucesso se uma entrada de dados qualquer casar com essa regra, ou seja, obedecer exatamente a todas as suas condições.

- Como o brinquedo LEGO, várias pecinhas diferentes, cada uma com sua característica, que juntas compõem estruturas completas e podem ser arranjadascom infinitas combinações diferentes.

## Para que servem?

- Basicamente servem para você dizer algo abrangente de forma específica. Defi nido seu padrão de busca, você tem uma lista (finita ou não) de possibilidades de casamento (match).

- Na prática, as expressões regulares servem para uma infinidade de tarefas. Elas são úteis sempre que você precisar buscar ou validar um padrão de texto que pode ser variável, como:

  - data
  - horário
  - número IP
  - nome de pessoa
  - endereço de e-mail
  - endereço de Internet
  - nome de usuário e senha
  - declaração de uma função()
  - dados na coluna N de um texto
  - dados que estão entre \<tags></ tags>
  - campos específicos de um texto tabulado
  - número de telefone, RG, CPF, cartão de crédito
  - dados que estão apenas no começo ou no fim da linha...
  
    E mais uma infinidade de outros padrões que não podem ser especificados
  com caracteres literais.
---

# Capítulo 2 - Os metacaracteres
- Aqui estão os metacaraccteres-padrão: 
  - **. ? * + ^ $ | [] {} () \\**

- Cada simbolo desses tem sua função específica, que pode mudar dependendo do contexto no qual está inserido, e podemos agregá-los uns com os outros, combinando suas funções e fazendo construções mais complexas.

- Além destes, temos outros metacaracteres estendidos que foram criados posteriormente, pois tarefas mais complexas requisitavam funções mais específicas ainda. E para terminar de complicar, sua sintaxe de utilização não é a mesma para todos os programas que suportam expressões regulares.

| Metacaractere | Nome           |
| :---:         |     :---:      |
| .             | Ponto          |
| []            | Lista          |
| [^]           | Lista Negada   |
| ?             | Opcional       |
| *             | Asterisco      |
| +             | Mais           |
| {}            | Chaves         |
| ^             | Circunflexo    |
| $             | Cifrão         |
| \b            | Borda          |
| \             | Escape         |
| \|            | Ou             |
| ()            | Grupo          |
| \1            | Retrovisor     |

**Eles estão divididos em quatro grupos distintos, de acordo com características comuns entre eles.**

## Representantes
| Metacaractere  | Nome        | Função                        |
| :---:          | :---:       | :---:                         |
| .              | Ponto       | Um caractere qualquer         |
| [...]          | Lista       | Lista de caractere permitidos |
| [^...]         | Lista Negada| Lista de caractere proibidos  |

## Quantificadores

| Metacaractere  | Nome        | Função                        |
| :---:          | :---:       | :---:                         |
| ?              | Opcional    | Zero ou um                    |
| *              | Asterisco   | Zero, um ou mais              |
| +              | Mais        | Um ou mais                    |
| {***n,m***}    | Chaves      | De ***n*** até ***m***        |

## Âncoras

| Metacaractere  | Nome        | Função                        |
| :---:          | :---:       | :---:                         |
| ^              | Cirunflexo  | Início da linha               |
| $              | Cifrão      | Fim da linha                  |
| \b             | Borda       | Início ou fim de palavra      |

## Outros

| Metacaractere  | Nome        | Função                           |
| :---:          | :---:       | :---:                            |
| \c             | Escape      | Torna literal o caractere ***c***|
| \|             | Ou          | Ou um ou outro                   |
| (...)          | Grupo       | Delimita um grupo                |
| \1...\9        | Retrovisor  | Texto casado nos grupos 1...9    |