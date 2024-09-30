import { useEffect, useState } from "react";

export default function App() {
  
  const [dadosUsuario,setDadosUsuario] = useState([]);

  useEffect(() => { 

    const buscardados = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setDadosUsuario(dados);
    }
    buscardados();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
      {dadosUsuario.map(dados => (
          <li key={dados.id}>
            <h2>{dados.title}</h2>
            <p>{dados.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
