<table>
<tr>
<td>
<a href= "https://www.dell.com/pt-br"><img src="https://pt.wikipedia.org/wiki/Ficheiro:Dell_logo_2016.svg" alt="Dell" border="0" width="100%"></a>
</td>
<td><a href= "https://www.inteli.edu.br/"><img src="./docs/img/inteli-logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="30%"></a>
</td>
</tr>
</table>

# Introdução

Este é o repositório dos arquivos dos alunos do Módulo 6 do curso de Engenharia de Software do Inteli no 2º trimestre de 2023. Durante este trimperíodoestre está sendo desenvolvido um projeto em parceria com a Dell.

> Alunos do grupo: veja as [instruções para os alunos](LEIAME_aluno.md).

# Projeto: *APP Dispositivo Móvel*

# Grupo: *Dell Genius*

# Descrição

*Descrição_resumida_do_projeto*

# Descrição da Base de Dados

https://colab.research.google.com/drive/1npUzERwxbg_BF3yKIJqTGyTCdvzlhhj3?usp=sharing#scrollTo=rIlB2YClZFc6


Esse dataset teve como sua base o banco de dados público apresentado pelo professor neste link (https://www.kaggle.com/datasets/shubhammehta21/movie-lens-small-latest-dataset), usamos a tabela "ratings.csv" para extrairmos os dados e analisá-los.

Existem três colunas nesse arquivo csv (https://docs.google.com/spreadsheets/d/1MxirctwS0bSZLEa1V-GccaWkCSS9p6QDZQjOMd3-FqQ/edit?usp=sharing):


userId: a identificação do usuario dentro da plataforma;

Itemid: a identificação do item (post) dentro da plataforma;

classification: a classificação desse item dada pelo o tal usuario, a nota varia de 0 até 5.

Resumindo são três colunas com 100836 linhas, sem nenhum dado ausente, e esta balanceado e não possuem nenhum dado discrepante conforme mostra os dois gráficos presente no notebbok. As três classificações mais comum no dataset são:

- **4.0 com 26818**

- **3.0 com 20047**

- **5.0 com 13211**

- 3.5 com 13136

- 4.5 com 8551

- 2.0 com 7551

- 2.5 com 5550

- 1.0 com 2811

- 1.5 com 1791

- 0.5 com 1370

Com isso podemos ver que na coluna classification (nossa coluna alvo) não possue discrepâncias.

Depois da analise de dados, precisamos montar o modelo que é o iten-KNN que é um método que encontra itens semelhantes com base em suas características e histórico de preferências de outros usuários. Esse algoritmo é amplamente utilizado em sistemas de recomendação, onde o objetivo é oferecer aos usuários sugestões personalizadas de itens com base em seus interesses e preferências anteriores.

Então para podermos realizar esse método precisamos de outra tabela além de "ratings.csv", precisamos utilizar a tabela "movies.csv", para treinar o modelo.

Esse arquivo (https://docs.google.com/spreadsheets/d/1c6wHiD2ZODKa7ZFZ1h17kUdKJchhmLJ7uwspkDkA24c/edit?usp=sharing) tem duas colunas a primeira é "ItemId" que também tem na "ratings.csv", a segunda é "title" que são os nomes dos filmes. Lembrando que no momento mesmo os dados sendo nomes de filmes isso não tem relevância no momento do projeto, pois podemos trocar esses titulo de filmes por tags que se relacionam com a plataforma.

Por último nessa sprint 4 temos a parte de comunicação assíncrona, no momento usaremos o MQTT, que utiliza o mesmo paradigma publish-subscribe do Kafka. Com auxilio desse site (https://www.hivemq.com/demos/websocket-client/) para mostrar a comunicação da IA com a web.

<img  src="./img/colabrecomendacao.png">




# Documentação

Os arquivos da documentação deste projeto estão na pasta [/docs](/docs), e o seu conteúdo é publicado via GitHub Pages.
