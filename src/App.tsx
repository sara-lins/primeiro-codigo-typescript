import { useState } from "react";
import "./App.css";
import { Card } from "./Card/card";
import { Input } from "./Input/input";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState("");
  const [list, setList] = useState<Person[]>([]);

  interface Person {
    name: string;
    age: number;
    hobby: string;
  }

  function handleSubmit({ name, age, hobby }: Person) {
    const person = { name, age, hobby };
    setList([...list, person]);
  }

  return (
    <div className="App">
      <Input
        label="Name"
        type="text"
        placeholder="Digite aqui"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Age"
        placeholder="Digite aqui"
        type="number"
        onChange={(e) => setAge(+e.target.value)}
      />
      <Input
        label="Hobby"
        placeholder="Digite aqui"
        type="text"
        onChange={(e) => setHobby(e.target.value)}
      />
      <button onClick={() => handleSubmit({ name, age, hobby })}>Enviar</button>
      <ul>
        {list.map((person, index) => (
          <Card
            key={index}
            name={person.name}
            age={person.age}
            hobby={person.hobby}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
