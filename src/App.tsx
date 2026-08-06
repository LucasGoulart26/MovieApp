import { useState } from "react";
import { filmes } from "./data/filmes";
import capa from "./assets/capa.png";

function App() {
  const[active, setActive] = useState("All");

  const buttons = [
    "All",
    "Ação",
    "Aventura",
    "Ficção",
    "Comédia",
    "Drama",
    "Terror",
    "Romance",
    "Animação",
    "Documentário"
  ]
  return(
    <div className="w-full h-screen bg-zinc-800">
      <div className="w-full h-20 flex items-center justify-between p-3 bg-zinc-900">
        <h1 className="text-3xl text-amber-300">MovieApp</h1>
        <div className="w-96 h-11 flex items-center justify-center">
          <input type="text" placeholder="Search movies" className="w-full h-full outline-0 bg-zinc-800 border-2 border-zinc-700 p-3 text-white placeholder:text-white rounded-bl-2xl rounded-tl-2xl"/>
          <button className="w-20 h-full cursor-pointer rounded-br-lg rounded-tr-lg bg-amber-300 active:bg-amber-400 transition-all duration-300">Search</button>
        </div>
      </div>
      <div className="Principal w-full h-screen flex items-center justify-center p-5 gap-5">
        <img src={capa} alt="Capa" className="w-80 h-96 bg-zinc-800 rounded-2xl"/>
        <div className="Card w-2xl h-96 flex items-start justify-items-start flex-col gap-3">
          <h1 className="text-3xl text-white">Demon Slayer: Kimetsu no Yaiba - Castelo Infinito</h1>
          <h2 className="text-2xl text-white">2025 - Ação/Aventura</h2>
          <p className="text-white text-justify">Os Pilares agora enfrentam Muzan e decidem atacá-lo juntos. No entanto, eles são transportados para a Fortaleza Infinita antes que possam desferir um único golpe e, portanto, são separados.</p>
          <div className="flex items-center justify-center gap-3">
            <button className="w-28 p-2 cursor-pointer rounded-lg bg-amber-300 active:bg-amber-400 transition-all duration-300">Assistir</button>
            <button className="w-28 p-2 cursor-pointer rounded-lg bg-amber-300 active:bg-amber-400 transition-all duration-300">Trailer</button>
          </div>
        </div>
      </div>
      <div className="w-full p-5 flex items-center justify-center flex-col bg-zinc-900">
        <div className="w-full flex items-center justify-center flex-wrap gap-2">
          {buttons.map((btn) => (
            <button key={btn} onClick={() => setActive(btn)} className={`w-32 h-11 rounded-lg cursor-pointer transition-all duration-300 ${active === btn ? "bg-amber-300" : "bg-zinc-700 text-white"}`}>{btn}</button>
          ))}
        </div>
      </div>
      <div className="w-full p-5 flex items-center justify-center flex-wrap bg-zinc-800 gap-5">
        {filmes.map((filme, index) => (
          <div key={index} className="w-72 rounded-2xl bg-zinc-950">
            <img src={filme.imagem} alt="Capa" className="w-full h-80"/>
            <div className="w-full flex items-center justify-between p-3">
              <h1 className="text-zinc-200">{filme.ano}</h1>
              <h2 className="text-zinc-200">{filme.genero}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
