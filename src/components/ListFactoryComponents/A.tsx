import React from "react"
interface AProps {
  alunoRico: {}
}
const A: React.FC<AProps> = ({alunoRico}) => {
  console.log('aluno rico', alunoRico)
  return(
    <>
      <ul>Aluno tipo rich</ul>
      <hr></hr>
    </>
  )
} 

export default A