import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";

function Menu() {
    return(
        <div className="w-full h-20 fixed flex items-center justify-around bg-zinc-900/80 backdrop-blur-2xl">
            <h1 id="titulo" className="text-3xl font-bold text-red-600">
                <Link to="/">MovieApp</Link>
            </h1>
            <div className="flex items-center justify-center gap-3">
                <div className="Search w-96 h-10 flex items-center justify-center">
                    <input type="text" placeholder="Search movies" className="w-full h-full outline-0 p-3 text-white bg-zinc-800 border-2 border-zinc-700 rounded-bl-lg rounded-tl-lg"/>
                    <button className="w-14 h-full cursor-pointer bg-red-600 rounded-br-lg rounded-tr-lg flex items-center justify-center">
                        <FaSearch className="text-white text-2xl"/>
                    </button>
                </div>
                <button className="w-10 h-10 rounded-full bg-red-600 cursor-pointer text-white active:bg-red-700 transition-all duration-300 flex items-center justify-center">
                    <Link to="/login"><FaUserCircle className="text-2xl"/></Link>
                </button>
            </div>
        </div>
    );
}

export default Menu