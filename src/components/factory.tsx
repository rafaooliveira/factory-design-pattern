import { normalize } from "path"
import React from "react"
import A from "./ListFactoryComponents/A"
import B from "./ListFactoryComponents/B"
import C from "./ListFactoryComponents/C"

interface FactoryProps {
  aluno: {}
  type: string
}
const FactoryAlunos: React.FC<FactoryProps> = ({type, aluno}) => {
  const Alunos: any = {
    rich: <A alunoRico={aluno}/>,
    normal: <B />,
    poor: <C />,
    nothing: 'This User is Nothing',
    default: 'Ops, this guy doesn\'t have user profile'
  }

  return Alunos[type] || Alunos.default
}
export default FactoryAlunos