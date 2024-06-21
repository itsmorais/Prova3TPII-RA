import { Router } from "express";
import DisciplinaController from "../controllers/DisciplinaController";
export const DisciplinaRoutes = Router();

DisciplinaRoutes.post("/disciplina", DisciplinaController.create);
DisciplinaRoutes.get("/disciplina", DisciplinaController.list);
DisciplinaRoutes.put("/disciplina", DisciplinaController.update);
DisciplinaRoutes.delete("/disciplina", DisciplinaController.delete);



export default DisciplinaRoutes;