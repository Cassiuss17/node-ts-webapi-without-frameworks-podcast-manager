import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controller'
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //QueryString
    //http://localhost:3333/api/episode?p=flow
    const[baseUrl, queryString] = request.url?.split("?") ?? ["", ""]; 
    // split: para separar a URL base dos parâmetros de consulta (query string)

    //listar podcasts 
    if(request.method === HttpMethods.GET && baseUrl === Routes.LIST){
    await getListEpisodes(request, response);
}

    if(request.method === HttpMethods.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(request, response);

}
} // Servidor criado com o módulo HTTP (Protocolo HTTP)