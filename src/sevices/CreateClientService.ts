import { getCustomRepository } from "typeorm"
import { ClientsRepositories } from "../repositories/ClientsRepositories"

interface IClientResquest {
    name: string;
    cpf: string;
    age: string;
}

class CreateClientService {
    async execute({ name, cpf, age,} : IClientResquest ) {
        const clientsRepository = getCustomRepository(ClientsRepositories);

        if(!cpf) {
            throw new Error("cpf existing")
        }

        const clientAlreadyExiste = await clientsRepository.findOne({
            cpf
        });

        if(clientAlreadyExiste) {
            throw new Error("Client already existe")
        }

        const client = clientsRepository.create({
            name,
            cpf,
            age,
        });

        await clientsRepository.save(client);
        
        return client;
    }
}

export { CreateClientService }