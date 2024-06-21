import mongoose, { Schema } from "mongoose";
import { PessoaModel } from ".";


export const EstudanteSchema = new Schema({
    ra: { type: Number, required: true, unique: true, maxLength: [10, "max 10 caracteres"] },
    media: {
        type: Number, required: true, maxLength: [10, "max 10 caracteres"],
        validate: {
            validator: function (value: number) {
                return value >= 0 && value <= 10
            },
            message: (props: any) =>
                `${props.value} Não é um valor entre 0 e 10`,
        }
    },
    pessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pessoa',
        required: true,
        validate: {
            validator: async function (id: string) {
                const pessoa = await PessoaModel.findById(id); // verifica se id existe na coleção pessoa
                return !!pessoa; // true se a pessoa existir
            },
            message: 'A Pessoa fornecida não existe',
        }
    }
});

