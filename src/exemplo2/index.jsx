import { useEffect, useState } from "react";

export default function App() {
  
  const [Usuarios,setUsuario] = useState([]);

  useEffect(() => { 
    const buscarUsuario  = async () => {
        const Usuarios = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dados = await Usuarios.json();
        setUsuario(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
      {Usuarios.map(usuario => (
          <li key={usuario.userId}>
            <p>Id: {usuario.id}</p>
            <p>title: {usuario.title}</p>
            <p>completed: {usuario.completed}</p>
            <br></br>
          </li>
        ))}
      </ul>
    </>
  );
}
