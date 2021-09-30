import {Request, Response } from "express";
import { CreateClientService } from "../sevices/CreateClientService";



class CreateClientController {
    async handle(request: Request, response: Response) {
        const { name, cpf, age } = request.body;

        const createClienteService = new CreateClientService();

        const client = await createClienteService.execute({name, cpf, age});

        return response.json(client);
    }
}

export { CreateClientController }