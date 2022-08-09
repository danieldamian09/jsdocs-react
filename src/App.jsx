import React, { useState } from 'react';
import { codificar, decodificar, normalizar } from '../helpers/stringMetodo';
import "./App.css";

export default function App() {

  const [titulo, setTitulo] = useState("");
  const [textoCodificado, setTextoCodificado] = useState("")
  const [textoDecodificado, setTextoDecodificado] = useState("")


  const modificarTitulo = (e) => setTitulo(normalizar(e.target.value));

  const codificarTexto = (e) => setTextoCodificado(codificar(e.target.value))

  const decodificarTexto = (e) => setTextoDecodificado(decodificar(e.target.value))
  
  return (
    <div className="App">
      <h1>
        Herramientas de texto{"  "}
        <span role="img" aria-label="pencil-hand">
          ✍️
        </span>
      </h1>
      <section>
        <h2>Formato de título</h2>
        <div>
          <label htmlFor="titulo">Texto</label>
          <input
            type="text"
            placeholder="Ingresa el texto aquí"
            id="titulo"
            onBlur={modificarTitulo}
          />
          <strong>
            Resultado: <span>{titulo}</span>
          </strong>
        </div>
      </section>
      <section>
        <h2>Codificar Texto</h2>
        <div>
          <label htmlFor="textoACodificar">Texto</label>
          <input
            type="text"
            placeholder="Ingresa el texto aquí"
            id="textoACodificar"
            onBlur={codificarTexto}
          />
          <strong>
            Resultado: <span>{textoCodificado}</span>
          </strong>
        </div>
      </section>
      <section>
        <h2>Decodificar Texto</h2>
        <div>
          <label htmlFor="textoADecodificar">Texto</label>
          <input
            type="text"
            placeholder="Ingresa el texto aquí"
            id="textoADecodificar"
            onBlur={decodificarTexto}
          />
          <strong>
            Resultado: <span>{textoDecodificado}</span>
          </strong>
        </div>
      </section>
    </div>
  );
}
