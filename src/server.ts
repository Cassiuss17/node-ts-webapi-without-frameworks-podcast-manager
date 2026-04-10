import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller'
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";
import { app } from "./app";

const server = http.createServer(app) 

const port = process.env.PORT;

server.listen(port, ()=>{
    console.log(`servidor iniciado na porta ${port}`)
}) 

// listen(port, callback) = Inicia o servidor e escuta as requisições na porta especificada. 
// O callback é executado quando o servidor é iniciado com sucesso.

//3333 = Número de Porta(Port)

//? = antes do ? é o endpoint, depois do ? são os parâmetros de consulta (query parameters) 
// que podem ser usados para filtrar ou modificar a resposta da API.

//Query String: ?name=podcastName, onde name é o nome do parâmetro e 
// podcastName é o valor que queremos filtrar.