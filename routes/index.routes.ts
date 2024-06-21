import { Router, Request, Response } from "express";
import PessoaRoutes from "./pessoa.routes";
import EstudanteRoutes from "./estudante.routes";
import DisciplinaRoutes from "./disciplina.routes";
export const routes = Router();

routes.use(PessoaRoutes);
routes.use(EstudanteRoutes);
routes.use(DisciplinaRoutes);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;