import React from "react"
import Article from "./ListFactoryComponents/Article"
import Video from "./ListFactoryComponents/Video"
import Quiz from "./ListFactoryComponents/Quiz"
import Other from "./ListFactoryComponents/Other"
import Default from "./ListFactoryComponents/Default"

interface FactoryProps {
  type: string
}
const FactoryMaterials: React.FC<FactoryProps> = () => {
  const Materials: any = {
    article: <Article />,
    video: <Video />,
    quiz: <Quiz />,
    other: <Other/>,
    default: <Default/>
  }

  return Materials || Materials.default
}
export default FactoryMaterials