import React, { useState } from 'react';
import {materialList} from './components/materials'
import FactoryMaterials from './components/factory';



function App() {
  const [data] = useState({materialList})

  const listTypes = data?.materialList.items.map(item => (
    <FactoryMaterials key={item.id} type={item.type}/>
  ))
  console.log('listTypes', listTypes)
  return (
    <div>
      {listTypes}
    </div>
  );
}

export default App;
