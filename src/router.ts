import { Router } from "express";
import { CreateClientController } from "./controller/CreateClientController";
import { CreateAirplanesController } from "./controller/CreateAirplanesController";
import { CreateTicktController } from "./controller/CreateTicketController";

const router = Router();

const createTicketCotroller = new CreateTicktController();
const createAirplanesController = new CreateAirplanesController();
const createClientController = new CreateClientController();

router.post("/tickets", createTicketCotroller.handle);
router.post("/airplanes", createAirplanesController.handle);
router.post("/clients", createClientController.handle);

export { router }
