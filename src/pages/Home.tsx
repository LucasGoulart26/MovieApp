import { useState } from "react";
import { filmes } from "../data/filmes";
import Capa from "../assets/capa-do-filme.jpg";

function Home() {
    const [avalicao] = useState(5);
    const [active, setActive] = useState("All");
    const buttons = ["All", "Ação", "Aventura", "Drama", "Ficção", "Terror"]

    // Estrela de avaliação
    const estrelasAvaliacao = (nota: number) => {
        const estrelas = [];
        for(let i = 1; i <= 5; i++) {
            if(i <= nota) {
                estrelas.push(<span className="text-amber-300">★</span>)
            }else {
                estrelas.push(<span className="text-amber-300">☆</span>);
            }
        }
        return estrelas;
    }
    return (
      <div className="bg-zinc-900">
        <div className="Home w-full h-screen flex items-center justify-center gap-5">
          <img
            src={Capa}
            alt="Capa do filme"
            className="w-80 h-96 rounded-2xl bg-zinc-700"
          />
          <div className="w-96 flex items-start justify-items-start flex-col gap-5">
            <h1 className="text-4xl text-white font-bold">
              O Fim de Oak Street
            </h1>
            <h2 className="text-2xl text-white">2026 - Ficção cientifica/Aventura</h2>
            <h3 className="text-2xl text-white">
              Avaliação: {estrelasAvaliacao(avalicao)}
            </h3>
            <div className="flex items-center justify-center gap-5">
              <button className="w-36 h-10 rounded-lg bg-red-600 text-white cursor-pointer">
                ASSISTIR
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-48 flex items-center justify-center p-5 bg-zinc-900">
          <div className="w-full h-20 p-3 flex items-center justify-between border-b-2 border-b-red-600">
            <h3 className="text-2xl text-white font-bold">Selecione:</h3>
            <div className="flex items-center justify-center gap-2">
              {buttons.map((btn) => (
                <button key={btn} onClick={() => setActive(btn)} className={`w-28 p-2 rounded-lg cursor-pointer transition-all duration-300 text-white ${active === btn ? "bg-red-600" : "bg-zinc-950"}`}>{btn}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center p-5">
          {filmes.map((filme, index) => (
            <div key={index} className="w-96 rounded-2xl bg-zinc-800 border-2 border-zinc-700 overflow-hidden">
              <img src={filme.imagem} alt="Imagem" className="w-full h-80 bg-zinc-700"/>
              <div className="w-full p-3 flex items-center justify-between">
                <h3 className="text-white">{filme.genero}</h3>
                <h4 className="text-zinc-300">{filme.ano}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Home