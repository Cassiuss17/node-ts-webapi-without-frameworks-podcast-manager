import * as fs from "fs"; // FileSystem: Lê e escreve arquivos de sistemas (Lê arquivos txt, csv)
import * as path from "path"; // Ler tudo que esta dentro do diretório e Lê caminhos
import { PodcastModel } from "../models/podcast-model";

interface Podcast{
    podcastName: string,
    episode: string,
    videoId: string,
    category: string[];
}

const pathData = path.join(__dirname, "../data/podcasts.json");
// __dirname = constante para pegar o caminho dinâmicamente (Pega o diretório que ta o src)

export const repositoryPodcast = async (podcastName?: string): Promise<Podcast[]> => {
    const language = "utf-8";
    const rawdata = fs.readFileSync(pathData, language) //Lê arquivo os dados brutos.
    let jsonFile = JSON.parse(rawdata) // um dado bruto está sendo convertido em JSON

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
        // Se o nome do podcast for passado, ele filtra os dados para retornar apenas o podcast correspondente.
    }

    return jsonFile;
}

//Pasta Data: Pasta para guardar,ler e buscar os dados, nesse caso o arquivo podcasts.json