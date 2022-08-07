import React from 'react';
import "./App.css";


export default function App() {
  
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
          />
          <strong>
            Resultado: <span>{}</span>
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
          />
          <strong>
            Resultado: <span>{}</span>
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
          />
          <strong>
            Resultado: <span>{}</span>
          </strong>
        </div>
      </section>
    </div>
  );
}
