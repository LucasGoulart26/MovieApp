import { useState } from "react";
import { filmes } from "../data/filmes";
import { novosFilmes } from "../data/novosFilmes";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Capa from "../assets/capa-do-filme.jpg";
import Cinema from "../assets/sala-de-cinema.jpg";

function Home() {
    const [avalicao] = useState(5);
    const [active, setActive] = useState("All");
    const buttons = ["All", "Ação", "Aventura", "Ficção", "Terror", "Comédia"]

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

    // Exibir o filme pela categoria
    const filmesFilter = active === "All"
    ? filmes
    : filmes.filter((filme) => filme.categoria.toLowerCase().includes(active.toLowerCase()))
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
            <div className="w-full flex items-center justify-center gap-5">
              <button className="w-full h-10 rounded-lg bg-red-600 text-white active:bg-red-700 transition-all duration-300 cursor-pointer">
                ASSISTIR
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center p-5 bg-zinc-900">
          <div className="w-full p-3 flex items-start justify-items-start flex-col gap-3 border-b-2 border-b-red-600">
            <h3 className="text-2xl text-white font-bold">Selecione:</h3>
            <div className="w-full flex items-center justify-center gap-2">
              {buttons.map((btn) => (
                <button key={btn} onClick={() => setActive(btn)} className={`w-full p-2 rounded-lg cursor-pointer transition-all duration-300 text-white ${active === btn ? "bg-red-600" : "bg-zinc-950"}`}>{btn}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center flex-wrap gap-5 p-5">
          {filmesFilter.map((filme, index) => (
            <div key={index} className="w-96 rounded-lg bg-zinc-800 border-2 border-zinc-700 overflow-hidden">
              <img src={filme.imagem} alt="Imagem" className="w-full h-96 bg-zinc-700"/>
              <div className="w-full p-3 flex items-center justify-between">
                <h3 className="text-white">{filme.genero}</h3>
                <h4 className="text-zinc-300">{filme.ano}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="NovosFilmes w-full h-screen flex items-center justify-center gap-5">
          <div className="Card w-2xl flex items-center justify-center flex-col gap-5">
            <div className="w-full h-20 p-3 flex items-center justify-items-start bg-zinc-800 rounded-lg border-l-4 border-l-red-600">
              <h1 className="text-2xl text-white font-bold">Novos filmes</h1>
            </div>
            {novosFilmes.map((novoFilme, index) => (
              <div key={index} className="w-full h-20 p-3 flex items-center justify-items-start bg-zinc-800 rounded-lg gap-3 border-2 border-zinc-700">
                <div className="w-11 h-11 rounded-lg bg-red-600 flex items-center justify-center">
                  <BiSolidCameraMovie className="text-4xl text-red-950"/>
                </div>
                <div className="flex items-start justify-items-start flex-col">
                  <h2 className="text-2xl text-white font-bold">{novoFilme.titulo}</h2>
                  <p className="text-zinc-400">{novoFilme.data}</p>
                </div>
              </div>
            ))}
          </div>
          <img src={Cinema} alt="Imagem" className="w-96 h-96 rounded-2xl bg-zinc-800 border-2 border-zinc-700"/>
        </div>
        <div className="w-full h-56 flex items-center justify-around bg-zinc-950">
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center">
              <BiSolidCameraMovie className="text-5xl text-red-950"/>
            </div>
            <div className="flex items-start justify-items-start flex-col">
              <h1 id="titulo" className="text-2xl text-white font-bold">MovieApp</h1>
              <p className="text-zinc-400">&copy;2026 - Copyright</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-700 cursor-pointer flex items-center justify-center text-white hover:text-red-600 transition-all duration-300">
              <FaInstagram className="text-3xl"/>
            </button>
            <button className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-700 cursor-pointer flex items-center justify-center text-white hover:text-red-600 transition-all duration-300">
              <FaFacebook className="text-3xl"/>
            </button>
            <button className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-700 cursor-pointer flex items-center justify-center text-white hover:text-red-600 transition-all duration-300">
              <FaYoutube className="text-3xl"/>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Home