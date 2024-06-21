import { Router } from "express";
import EstudanteController from "../controllers/EstudanteController";
export const EstudanteRoutes = Router();

EstudanteRoutes.post("/estudante", EstudanteController.create);
EstudanteRoutes.get("/estudante", EstudanteController.list);
EstudanteRoutes.put("/estudante", EstudanteController.update);
EstudanteRoutes.delete("/estudante", EstudanteController.delete);



export default EstudanteRoutes;