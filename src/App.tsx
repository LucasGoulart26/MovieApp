import { useState } from "react";
import { filmes } from "./data/filmes";
import { novosfilmes } from "./data/novosFilmes";
import { RiMovie2Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import capa from "./assets/capa.png";

function App() {
  const[active, setActive] = useState("All");
  const[avaliacao] = useState(5);

  // Estrelas de avaliação
  const estrelaAvaliacao = (nota: number) => {
    const estrelas = [];
    for(let i = 1; i <= 5; i++) {
      if(i <= nota) {
        estrelas.push(<span className="text-2xl text-amber-300">★</span>);
      }else {
        estrelas.push(<span className="text-2xl text-amber-300">☆</span>);
      }
    }
    return estrelas
  }

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
  ];

  const filmesFiltrados = active === "All"
  ? filmes
  : filmes.filter((filme) => filme.categoria.toLowerCase().includes(active.toLowerCase()))
  return(
    <div className="w-full h-screen bg-zinc-800">
      <div className="w-full h-20 flex items-center justify-between p-5 bg-zinc-900">
        <h1 className="text-3xl text-amber-300">MovieApp</h1>
        <div className="w-96 h-11 flex items-center justify-center">
          <input type="text" placeholder="Search movies" className="w-full h-full outline-0 bg-zinc-700 border-2 border-zinc-600 p-3 text-white placeholder:text-white rounded-bl-lg rounded-tl-lg"/>
          <button className="w-16 h-full cursor-pointer rounded-br-lg rounded-tr-lg bg-amber-300 active:bg-amber-400 transition-all duration-300 flex items-center justify-center">
            <FaSearch className="text-2xl"/>
          </button>
        </div>
      </div>
      <div className="Principal w-full h-screen flex items-center justify-center p-5 gap-5">
        <img src={capa} alt="Capa" className="w-80 h-96 bg-zinc-800 rounded-2xl"/>
        <div className="Card w-2xl h-96 flex items-start justify-items-start flex-col gap-3">
          <h1 className="text-3xl text-white">Demon Slayer: Kimetsu no Yaiba - Castelo Infinito</h1>
          <h2 className="text-2xl text-white">2025 - Ação/Aventura</h2>
          <h3 className="text-2xl text-white">Avaliação: {estrelaAvaliacao(avaliacao)}</h3>
          <p className="text-white text-justify">Os Pilares agora enfrentam Muzan e decidem atacá-lo juntos. No entanto, eles são transportados para a Fortaleza Infinita antes que possam desferir um único golpe e, portanto, são separados.</p>
          <div className="flex items-center justify-center gap-3">
            <button className="w-28 p-2 cursor-pointer rounded-lg bg-amber-300 active:bg-amber-400 transition-all duration-300">Assistir</button>
            <button className="w-28 p-2 cursor-pointer rounded-lg bg-amber-300 active:bg-amber-400 transition-all duration-300">Trailer</button>
          </div>
        </div>
      </div>
      <div className="w-full p-5 flex items-center justify-center flex-col bg-zinc-900">
        <div className="w-[91%] flex items-center justify-items-start mb-3 border-b-2 border-b-amber-300">
          <h1 className="text-2xl text-amber-300">Gêneros dos filmes</h1>
        </div>
        <div className="w-full flex items-center justify-center flex-wrap gap-2">
          {buttons.map((btn) => (
            <button key={btn} onClick={() => setActive(btn)} className={`w-32 h-11 rounded-lg cursor-pointer transition-all duration-300 ${active === btn ? "bg-amber-300" : "bg-zinc-700 text-white"}`}>{btn}</button>
          ))}
        </div>
      </div>
      <div className="w-full p-5 flex items-center justify-center flex-wrap bg-zinc-800 gap-5">
        {filmesFiltrados.map((filme, index) => (
          <div key={index} className="w-80 rounded-2xl bg-zinc-950 hover:scale-105 transition-all duration-300">
            <img src={filme.imagem} alt="Capa" className="w-full h-96"/>
            <div className="w-full flex items-center justify-between p-3">
              <h1 className="text-zinc-200">{filme.ano}</h1>
              <h2 className="text-zinc-200">{filme.genero}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-screen flex items-center justify-center bg-zinc-900 gap-5 p-5">
        <div className="w-2xl flex items-center justify-center flex-col gap-5">
          <div className="w-full h-20 p-4 flex items-start justify-center flex-col border-l-2 border-l-amber-300">
            <h1 className="text-4xl text-amber-300">Novos Filmes</h1>
            <p className="text-zinc-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          {novosfilmes.map((novosfilme, index) => (
            <div key={index} className="w-full h-20 p-5 rounded-lg bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center gap-3 hover:border-amber-300 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-amber-300 flex items-center justify-center">
                <RiMovie2Line className="text-3xl"/>
              </div>
              <div className="w-full flex items-start justify-center flex-col">
                <div className="w-full flex items-center justify-between">
                  <h2 className="text-2xl text-zinc-200">{novosfilme.titulo}</h2>
                  <p className="w-24 text-center p-1 rounded-lg bg-amber-300">{novosfilme.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-96 h-96 bg-zinc-700 border-2 border-zinc-600 rounded-2xl"></div>
      </div>
    </div>
  );
}

export default App;
