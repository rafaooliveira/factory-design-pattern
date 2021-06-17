import React, { useState } from 'react';
import './App.css';
import {usersList} from './components/users'
import FactoryAlunos from './components/factory';



function App() {
  const [data] = useState({usersList})

  const listTypes = data?.usersList.items.map(item => (
    <FactoryAlunos key={item.id} type={item.type} aluno={item}/>
  ))
  return (
    <div>
      {listTypes}
    </div>
  );
}

export default App;
