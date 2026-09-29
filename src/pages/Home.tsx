import { useState } from "react";
import Capa from "../assets/capa-do-filme.jpg";

function Home() {
    const [avalicao] = useState(5);

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
      </div>
    );
}

export default Home