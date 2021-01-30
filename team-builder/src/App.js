import './App.css';
import React, {useState} from 'react';

function App() {

  const [team, setTeam] = useState({
    id: null, 
    name: '',
    email: '',
    role: ''
  });

  return (
    <div className="App">
      {console.log(team)}
      <h1>
        Team Builder App
      </h1>
    </div>
  );
}

export default App;
