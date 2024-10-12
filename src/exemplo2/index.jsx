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

  const verificarCompleted = (completed) =>{
    if (completed == true){
      return "Completo."
    } else {
      return "Incompleto."
    }
  };

  return (
    <>
      <h1>Usuário</h1>
      <ul>
      {Usuarios.map(usuario => (
          <li key={usuario.id}>
            <p>Id: {usuario.id}</p>
            <p>title: {usuario.title}</p>
            <p>completed: {verificarCompleted(usuario.completed)}</p>
            <br></br>
          </li>
        ))}
      </ul>
    </>
  );
}
