import { Request, Response } from "express";

import { PessoaModel } from "../models";

class PessoaControler {

    // create
    public async create(req: Request, res: Response): Promise<Response> {
        const { nome, idade, email, fone } = req.body;

        try {

            const pessoa = new PessoaModel({ nome, idade, email, fone });
            const resp = await pessoa.save();

            return res.json(resp);
        }
        catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    // list

    public async list(_: Request, res: Response): Promise<Response> {
        try {
            const pessoas = await PessoaModel.find().sort({ nome: "asc" });
            return res.json(pessoas);

        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }

    // delete

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id: _id } = req.body; // _id do registro a ser excluído
        try {
            const object = await PessoaModel.findByIdAndDelete(_id);
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
        const { id, nome, idade, email, fone } = req.body;
        try {
            const usuario = await PessoaModel.findById(id);
            if (!usuario) {
                return res.json({ message: "Pessoa inexistente!" });
            }
            // atualiza os campos
            usuario.nome = nome;
            usuario.idade = idade;
            usuario.email = email;
            usuario.fone = fone;

            // ao salvar serão aplicadas as validações do esquema
            const resp = await usuario.save();
            return res.json(resp);

        } catch (error: any) {
            return res.json({ message: error.message });
        }
    }


}

export default new PessoaControler();