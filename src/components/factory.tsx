import React from "react"
import { typeMaterialFactory } from './typeFactory.hook'
interface FactoryProps {
  type: string
  material: any
}

const FactoryMaterials: React.FC<FactoryProps> = ({type, material}) => {
  const {addMaterial, getMaterial} = typeMaterialFactory()
  
  addMaterial(type, material)
  getMaterial(type)
  return (
    <div>
      {getMaterial(type)}
      <hr/>
    </div>
  )
}
export default FactoryMaterials