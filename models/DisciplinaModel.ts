import { Schema } from "mongoose";

export const DisciplinaSchema = new Schema({
    descricao: { type: String, required: true, maxLength: [60, "max 60 caracteres"] },
    curso: { type: String, required: true, maxLength: [45, "max 45 caracteres"] },
    semestre: {
        type: Number, required: true, maxLength: [2, "max 2 digitos"],
        validate: {
            validator: function (value: number) {
                return value >= 0 && value <= 10
            },
            message: (props: any) =>
                `${props.value} Não é um valor entre 0 e 10`,
        }
    },

});