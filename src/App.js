import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const getDataUsers = async()=>{
    try {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
getDataUsers();
  },[]);
  console.log(users);
  return (
    <div style={{ backgroundColor:"lightgrey" }} className="App">
      {users.map((el) => (
        <Card key={el.id} style={{ width:"18rem", marginBottom:"1.4cm", marginTop:"1.4cm", marginLeft:"1.4cm", fontFamily:"inherit", fontSize:"0.46cm", fontWeight:"bold" }}>
          <Card.Body>
          <Card.Title>{el.id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.name}</Card.Subtitle>
        <Card.Text>
        {el.email}
        </Card.Text>
        <Card.Text>
          {el.company.name}
        </Card.Text>
            </Card.Body>
            </Card>
            ))}
            </div>
            );
      }

      export default App;