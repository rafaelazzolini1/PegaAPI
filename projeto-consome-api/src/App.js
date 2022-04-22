import './App.css';
import * as React from 'react'

function App() {

  const [users, setUsers] = React.useState([]); 
  const funcaoAssync = async () => { 
  const resultado = await fetch("https://reqres.in/api/users/"); 
  const json = await resultado.json(); 
  setUsers(json.data);   
}; 

funcaoAssync()

 {users.map((user) => {return(

      <div key={user.id}>
            <p><strong>{user.first_name}</strong></p>
            <p>{user.email}</p>
            <img key={user.avatar} src={user.avatar}/>
        </div>


   )
  }
 )
}


}

export default App;
