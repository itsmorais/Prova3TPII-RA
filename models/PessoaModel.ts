import { Schema } from "mongoose";

export const PessoaSchema = new Schema({
    nome: { type: String, required: true, maxLength: [50, "max 50 caracteres"] },
    idade: {
        type: Number, required: true,
        validate: {
            validator: function (value: number) {
                if (value < 14) {
                    return false
                }
                return true
            },

            message: (props: any) =>
                `Erro! idade menor que ${props.value}`,
        },
        maxLength: [3, "max 3 digitos"]
    },

    email: {
        type: String, maxLength: [100, "max 100 caracteres"],
        unique: true,
        required: [true, "O e-mail é obrigatório"],
        validate: {
            validator: function (value: string) {
                // expressão regular para validar o formato do e-mail
                const regex = /^[^\s@]+@(etec|fatec|cps)\.sp\.gov\.br$/;
                return regex.test(value);
            },
            message: (props: any) =>
                `${props.value} não é um formato de e-mail válido\n 
            Apenas e-mails @etec, @fatec, ou @cps  seguidos de .sp.gov.br serão aceitos!`,
        },
    },
    fone: {
        type: String, required: true, maxLength: [11, "max 11 caracteres"],
        validate: {
            validator: function (value: string) {
                const regex = /^[0-9]{10,11}$/;
                if (!regex.test(value)) {
                    return false;
                }
                const ddds = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42,
                    43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82,
                    83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99];

                const dddTeste: boolean = ddds.includes(parseInt(value.substring(0, 2)));

                return dddTeste;
            },
            message: (props: any) =>
                `${props.value} Não é um número de telefone válido`,
        },
    },
}, { timestamps: true });
