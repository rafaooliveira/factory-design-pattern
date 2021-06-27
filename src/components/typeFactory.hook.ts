export const typeMaterialFactory = () => {
  // Defini object literals vazio 
  let Material: any = {}
  
  const addMaterial = (type: string, material: any) => {
    // criando elemento
    const element = {
      typename: `${type.charAt(0).toUpperCase() + type.substring(1)}`,
      allProps: material
    }
    // destruct para pegar o nome do type a atribuir para os types do material
    const { typename } = element
    // atribuindo chave e valor para object Literal [type] -> key typename -> prop type com letra maiuscula no final
    Material[type] = typename
  }
  
  const getMaterial = (type: string) => (
    // retorna todos os materiais pelo type
    Material[type]
  )

  return {addMaterial, getMaterial};
};
