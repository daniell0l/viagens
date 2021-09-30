import { getCustomRepository } from "typeorm"
import { AirplanesRopositories } from "../repositories/AirplanesRepositories";

interface IAirplaneResquest {
    code: string;
    brand: string;
    model: string;
    year: string;
}

class CreateAirplaneService {
    async execute({code, brand, model, year} : IAirplaneResquest ) {
        const airplanesRepository = getCustomRepository(AirplanesRopositories);

        if(!code) {
            throw new Error("code not existing")
        }

        const airplaneAlreadyExiste = await airplanesRepository.findOne({
            brand
        });

        if(airplaneAlreadyExiste) {
            throw new Error("Airplane already existe")
        }

        const airplane = airplanesRepository.create({
            code,
            brand,
            model,
            year,
        });

        await airplanesRepository.save(airplane);
        
        return airplane;
    }
}

export { CreateAirplaneService }