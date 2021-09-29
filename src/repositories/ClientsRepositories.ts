import { EntityRepository, Repository } from "typeorm";
import { Claint } from "../entities/Client";

@EntityRepository(Claint)
class ClientsRepositories extends Repository<Claint> {

}

export { ClientsRepositories }