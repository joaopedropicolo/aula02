import { useEffect, useState } from "react";

export default function App() {
  
  const [dadosUsuario,setDadosUsuario] = useState([]);

  useEffect(() => { 
    const buscardados = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setDadosUsuario(dados.results);
    }
    buscardados();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
      {dadosUsuario.map((dados, index) => (
          <li key={index}>
          <h2>Nome: {dados.name.title} {dados.name.first} {dados.name.last}</h2>
          <p>Email: {dados.email}</p>
          <p>País: {dados.location.country}</p>
        </li>
        ))}
      </ul>
    </>
  );
}
