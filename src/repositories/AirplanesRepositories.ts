import { EntityRepository, Repository } from "typeorm";
import { Airplane } from "../entities/Airplane";

@EntityRepository(Airplane)
class AirplanesRopositories extends Repository<Airplane> {

}

export { AirplanesRopositories }