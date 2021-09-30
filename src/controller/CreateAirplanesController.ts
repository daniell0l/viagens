import { Request, Response } from "express"
import { CreateAirplaneService } from "../sevices/CreateAirplaneService";

class CreateAirplanesController {
    async handle(request: Request, response: Response) {
        const {code, brand, model, year} = request.body;

        const createAirplaneService = new CreateAirplaneService();

        const Airplane = await createAirplaneService.execute({code, brand, model, year})

        return response.json(Airplane)
    }
}

export { CreateAirplanesController }