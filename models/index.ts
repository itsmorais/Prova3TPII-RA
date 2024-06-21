import mongoose, { Schema } from "mongoose";
import { PessoaSchema } from "./PessoaModel";
import { EstudanteSchema } from "./EstudanteModel";
import { DisciplinaSchema } from "./DisciplinaModel";

const PessoaModel = mongoose.model("pessoa", PessoaSchema);
const EstudanteModel = mongoose.model("estudante", EstudanteSchema);
const DisciplinaModel = mongoose.model("disciplina", DisciplinaSchema);

export { PessoaModel, EstudanteModel, DisciplinaModel }