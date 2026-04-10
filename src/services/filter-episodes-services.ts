import { IncomingMessage} from "http";
import { repositoryPodcast } from "../data/podcasts-repository"
import { PodcastTransferModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined):Promise<PodcastTransferModel> => {

    //definir a interface de retorno 
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //buscando os bados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //Verificação se tem conteúdo

    //responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    //OU
    /*if(data.length !== 0){
        responseFormat.statusCode = StatusCode.OK;
    }else{
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }
        */

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }

    return responseFormat;
}

//http://localhost:3333/api/episode?p=flow
//[ http://localhost:3333/api/episode  0] ?p=[flow 1] posições