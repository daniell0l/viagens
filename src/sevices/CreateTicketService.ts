import { getCustomRepository } from "typeorm"
import { ClientsRepositories } from "../repositories/ClientsRepositories";
import { TicketsRepositories } from "../repositories/TicketsRepositories";



interface ITicketRequest {
    code: string;
    data: string;
    hora: string;
    clients_id: string;
    airplanes_id: string;
}

class CreateTicketService {
    async execute( {code, data, hora, clients_id, airplanes_id}: ITicketRequest) {
        const ticketsRepositories =getCustomRepository(TicketsRepositories);
       
       
        const clientRepositories = getCustomRepository(ClientsRepositories);
        
        if(clients_id === airplanes_id) {
            throw new Error("Incorrect airplane!");

        }
       
        const airplanesExists = await clientRepositories.findOne(airplanes_id);
        
        if(!airplanesExists) {
            throw new Error("airplanes does not exists!");
        }

        const ticket  = ticketsRepositories.create({
            code,
            data,
            hora,
            clients_id,
            airplanes_id,
        
        });

        await ticketsRepositories.save(ticket)

        return ticket;


    }
}

export { CreateTicketService }