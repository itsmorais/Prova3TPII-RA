import { Request, Response } from "express";
import { EstudanteModel } from "../models";

class EstudanteController {

    // create
    public async create(req: Request, res: Response): Promise<Response> {
        const { ra, media, idPessoa } = req.body;

        try {
            const estudante = new EstudanteModel({ ra, media, pessoa: idPessoa });
            const resp = await estudante.save();

            return res.json(resp);

        } catch (error: any) {
            return res.json({ message: error.message });
        }

    }

    // list
    public async list(_: Request, res: Response): Promise<Response> {
        try {
            const estudantes = await EstudanteModel.find().sort({ media: "asc" });
            return res.json(estudantes);

        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    // delete

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id: _id } = req.body; // _id do registro a ser excluído
        try {
            const object = await EstudanteModel.findByIdAndDelete(_id);
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
        const { id, ra, media } = req.body;
        const usuario = await EstudanteModel.findById(id);

        try {
            if (!usuario) {
                return res.json({ message: "Estudante inexistente!" });
            }

            usuario.ra = ra;
            usuario.media = media;

            // ao salvar serão aplicadas as validações do esquema
            const resp = await usuario.save();
            return res.json(resp);

        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }
}

export default new EstudanteController();