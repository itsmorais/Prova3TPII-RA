import { Router } from "express";
import PessoaController from "../controllers/PessoaController";
export const PessoaRoutes = Router();

//aceita qualquer método HTTP ou URL
PessoaRoutes.post("/pessoa", PessoaController.create);
PessoaRoutes.get("/pessoa", PessoaController.list);
PessoaRoutes.put("/pessoa", PessoaController.update);
PessoaRoutes.delete("/pessoa", PessoaController.delete);



export default PessoaRoutes;