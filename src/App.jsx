import React, { useContext } from 'react';
import { SkylabersContext } from './store/skylabersContext';
import './App.css';

function App() {
  const { skylabers } = useContext(SkylabersContext);
  return (
    <div className="App">
      <h1>
        Hola!
        {console.log(skylabers)}
      </h1>
    </div>
  );
}

export default App;
