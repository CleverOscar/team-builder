import './App.css';
import React, {useState} from 'react';
import AddTeamMember from './Form';


function App() {

  const [team, setTeam] = useState([{
    id: 1, 
    name: 'Oscar Ortiz',
    email: 'oscarpa9188@gmail.com',
    role: 'Full-Stack Developer'
  },{
    id: 2, 
    name: 'Samantha Granda',
    email: 'Samg96@gmail.com',
    role: 'Vet Technician'
  },{
    id: 3, 
    name: 'Izzy Avitan',
    email: 'izzy429@gmail.com',
    role: 'Cannabis Specialist'
  }]);

  return (
    <div className="App">
      {console.log(team)}
      <h1>
        Team Builder App
      </h1>

      <div>
        Team 
        
          {team.map(member => 
            <div> 
              <h2>{member.name}</h2>
              <p>{member.email}</p>
              <p>{member.role}</p>
            </div>
          )}
      </div>

      <AddTeamMember />
    </div>
  );
}

export default App;
