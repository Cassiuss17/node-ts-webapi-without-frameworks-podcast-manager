import { repositoryPodcast } from "../data/podcasts-repository";
import { PodcastTransferModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

    //defino o contrato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //Busco os dados 
    const data = await repositoryPodcast();

    //Verifico o tipo de resposta
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }

    return responseFormat;
}

//Pasta Service: Processo de negócio, onde tem a lógica, nesse caso a lógica para listar os episódios dos podcasts,
//e acontece as verificações e regras de negócios.