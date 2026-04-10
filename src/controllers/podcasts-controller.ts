import { IncomingMessage, ServerResponse } from "http"; 
import { serviceListEpisodes } from '../services/list-episodes-service'
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/filter-podcast-model";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) =>{
    const content: PodcastTransferModel = await serviceListEpisodes()
    
    res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON}) // Content-Type: Tipo de Conteúdo 
    res.end(JSON.stringify(content.body))
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) =>{
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url)

    res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON}) // Content-Type: Tipo de Conteúdo 
    // writeHead(200, {"Content-Type": "aplication/json"}) = Escreve o cabeçalho da resposta, indicando que o status é 200 (OK) e que o tipo de conteúdo é JSON.
    res.end(JSON.stringify(content.body))
    // JSON.stringify(content) = Converte o conteúdo em uma string JSON para ser enviado na resposta.
}

//Pasta controllers: Pasta para controlar as requisições(controlar a entrada e saída e devolver 
// para outra coisa), nesse caso a requisição para listar os episódios dos podcasts.
