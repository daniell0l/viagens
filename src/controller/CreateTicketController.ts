import { Request, Response } from "express"
import { CreateTicketService } from "../sevices/CreateTicketService";

 class CreateTicktController {
     async handle(request: Request, response: Response) {

        const {code, data, hora, clients_id, airplanes_id} = request.body
        
        const createTicktService = new CreateTicketService();

        const ticke = await createTicktService.execute({code, data, hora, clients_id, airplanes_id});

        return response.json(ticke);

     }
 }

 export { CreateTicktController }