# Nome do Aplicativo
Podcast Manager

# Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódios podcasts separados por categoria

# Domínio 
Podcast feitos em vídeo

# Features (Funcionalidades)
- Listar os episódios podcasts em sessões de categorias:
  - [saúde, fitness, mentalidade, humor]

- Filtrar episódios por nome de podcast

### Como vou implementar: 
GET: retorna lista de episódios
// GET: SELECIONA OS DADOS

response: 
```js
[
{
    podcastName: "flow"
    episode: "CBUM - Flow 319",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    category: ["saúde", "bodybuilder", "esporte"]
},
{
    podcastName: "flow"
    episode: "RUBENS BARRICHELLO - Flow 339",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/masresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    category: ["corrida", "esporte"]
}
]

```

GET: Retorna a Lista de episódios baseado em um parametro enviado pelo cliente do nome podcast