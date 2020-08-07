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

# :arrow_forward: Capítulo 2 - Os metacaracteres
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

***Os curingas usados na linha de comando para especificar nomes de arquivos, como \*.txt, relatorio.{txt, doc} e foto-??.html não são expressões regulares. São curingas específicos de nomes de arquivo.***

## Metacaracteres tipo Representante
O primeiro grupo de metacaracteres que veremos são os do tipo representante, ou seja, são metacaracteres cuja função é representar um ou mais caracteres.

***Todos os metacaracteres desse tipo casam a posição de um único caractere, e não mais que um.***

- ### Ponto
    - O ponto é nosso curinga solitário, que está sempre à procura de um casamento, não importa com quem seja. Pode se um número, uma letra, um Tab, um @.

      Suponhamos uma expressão regular com os caracteres "casa" e o metacaractectere ponto, assim: "casa." Na frase a seguir, essa regex casaria tudo o que está em negrito:

      " O **casa**l que estava no **casa**mento foram para **casa** juntos".

      Como exemplos de uso do ponto, em um texto normal em português,você pode procurar palavras que você não se lembra se acentuou ou não, que podem começar com maiúsculas ou não ou que foram escritas errado:
        
        |Expressão | Casa com                            |
        | :---:    | :---:                               |
        | n.o      | não, nao, ...                       |
        | .eclado  | teclado, Teclado, ...               |
        | e.tendido| estendido, extendido, eztendido, ...|
    
    - Resumo
      - O ponto casa com qualquer coisa.
      - O ponto casa com o ponto.
      - O ponto é um curinga para casar um caractere.

- ### Lista
  -  Bem mais exigente que o ponto, a lista, não casa com qualquer um. Ela guarda dentro de si os caracteres permitidos para casar, então algo como [aeiou] limita nosso casamento a letras vogais.

  - No exemplo anterior do ponto, sobre acentuação, tínhamos a regex **n.o**. Além dos casamentos desejados, ela é muito abrangente, e também casa coisas indesejáveis como **neo, n-o, n5o e n o**. Para que essa regex fique mais específica, trocamos o ponto pela lista, para casar apenas "não" e "nao", veja: 
     - n[ão]o
    
    Se colocarmos limites nas regex feitas anteriormente, termos:
        
    |Expressão     | Casa com             |
    | :---:        | :---:                |
    | n[ãa]o       | não, nao             |
    | [Tt]eclado   | teclado, Teclado     |
    | e[sx]tendido | estendido, extendido |
    | 12[:.]45     | 12:45, 12.45, 12 45  |

    ### ! dentro da lista, todo mundo é normal. Então aquele ponto é simplesmente um ponto normal, e não um metacaractere.

  - **Intervalos em listas**
    - "Tudo mundo dentro da lista é normal", mas existe execeção à regra. **Todo mundo, fora o traço.** Se tivermos um traço (-) entre dois caracteres, isso representa todo o intervalo entre eles. Assim:
      - [0123456789] é igual a [0-9].
    
      Simplis assim. O traço indica um intervalo, então 0-9 se lê: de zero a nove.

      Os intervalos respeitam a ordem numérica da tabela ASCII, então basta tê-la em mãos para ver que um intervalo como não pega somente as A-z maiúsculas e minúsculas, como era de se esperar.

      ### ! Não use o intervalo A-z, prefira A-Za-z.

   - **Caracteres acentuados (POSIX)**
     - Como para nós brasileiros se **a-z** não casar letras acentuadas não serve para muita coisa, para isso temos uns curingas para usar dentro de listas. Eles são chamados de classes de caracteres POSIX. São grupos definidos por tipo, e POSIX é um padrão internacional que define esse tipo de regra, como será sua sintaxe etc.

        | Classe POSIX | Similar                | Significa              |
        | :---:        | :---:                  | :---:                  |
        | [:upper:]    | [A-Z]                  | Letras maiúsculas      |
        | [:lower:]    | [a-z]                  | Letras minúsculas      |
        | [:alpha:]    | [A-Za-z]               | Maiúsculas/Minúsculas  |
        | [:alnum:]    | [A-Za-z0-9]            | Letras e números       |
        | [:digit:]    | [0-9]                  | Números                |
        | [:xdigit:]   | [0-9A-Fa-f]            | Números hexadecimais   |
        | [:punct:]    | [.' !?:...]            | Sinais de pontuação    |
        | [:blank:]    | [ \\t]                 | Espaço Tab             |
        | [:space:]    | [ \\t\\n\\r\\f \\ v]   | Caracteres brancos     |
        | [:cntr:]     |                        | Caracteres de controle |
        | [:graph:]    | [A \\t\\n\\r\\f\\v]    | Caracteres imprimíveis |
        | [:print:]    | [A\\ t \\ n\\ r\\f\\v] | Imprimíveis e o espaço |

        Note que os colchetes fazem parte da classe e não são os mesmos colchetes da lista. Para dizer maiúsculas, fica [[: upper:]] , ou seja, um [:upper:] dentro de uma lista [].

       ### ! O [[:upper:]] é uma classe Posrx dentro de uma lista.

        Então, em uma primeira olhada, [:upper:] é o mesmo que A- Z, letras maiúsculas. Mas a diferença é que essas classes POSIX levam em conta a localidade do sistema.

        Como estamos no Brasil, geralmente nossas máquinas estão configuradas para usar os números no formato nnn.nnn,nn, a data é no formato dd/mm/aaaa, medidas de distância são em centímetros e há outras coisinhas que são diferentes nos demais países.

        Entre outros, também está definido que áéíóú são caracteres válidos em nosso alfabeto, bem como ÁÉÍÓÚ. O [: upper:] leva isso em conta e inclui as letras acentuadas também na lista. O mesmo para o [:lower:], o [:alpha:] e o [:alnum:].

        Por isso, para nós, essas classes POSIX são importantíssimas, e sempre que você tiver de fazer uma regex que procurarão em textos em português, prefira [:alpha:] em vez de A-Za- z, sempre. 
      
        Então, refazendo a regex que casava maiúsculas, minúsculas e números, temos:
        - [[:upper:][:lower:][:digit:]]
              
          ou melhor:
        - [[:alpha:][:digit:]]
         
          ou melhor ainda:
        - [[:alnum:]]
      
          **Todas são equivalentes.**
    
    - Resumo
      -A lista casa com quem ela conhece e tem suas próprias regras.
      - Dentro da lista, todo mundo é normal.
      - Dentro da lista, traço indica intervalo.
      - Um - literal deve ser o último item da lista.
      - Um ] literal deve ser o primeiro item da lista.
      - Os intervalos respeitam a tabela ASCII (não use A-z).
      - [:classes POSIX:] incluem acentuação, A-Z não.
