import { Request, Response } from "express";

import { DisciplinaModel } from "../models";

class DisciplinaController {

    // create
    public async create(req: Request, res: Response): Promise<Response> {
        const { descricao, curso, semestre } = req.body;

        try {

            const disciplina = new DisciplinaModel({ descricao, curso, semestre });
            const resp = await disciplina.save();

            return res.json(resp);

        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    // list

    public async list(_: Request, res: Response): Promise<Response> {
        try {
            const disciplina = await DisciplinaModel.find().sort({ curso: "asc" });
            return res.json(disciplina);

        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    // delete

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id: _id } = req.body; // _id do registro a ser excluído
        try {
            const object = await DisciplinaModel.findByIdAndDelete(_id);
            if (object) {
                return res.json({ message: "Registro excluído com sucesso!" });
            } else {
                return res.json({ message: "Registro inexistente!" });
            }
        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    // update

    public async update(req: Request, res: Response): Promise<Response> {
        const { id,descricao, curso, semestre } = req.body;

        try {
            const disciplina = await DisciplinaModel.findById(id);
            if (!disciplina) {
                return res.json({ message: "Disciplina inexistente!" });
            }
            // atualiza os campos
            disciplina.descricao = descricao;
            disciplina.curso = curso;
            disciplina.semestre = semestre;

            // ao salvar serão aplicadas as validações do esquema
            const resp = await disciplina.save();
            return res.json(resp);

        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }


}

export default new DisciplinaController();