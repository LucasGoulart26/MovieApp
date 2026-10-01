import { Link } from "react-router-dom";
function Menu() {
    return(
        <div className="w-full h-20 fixed flex items-center justify-around bg-zinc-900/80 backdrop-blur-2xl">
            <h1 className="text-2xl font-bold text-red-600">
                <Link to="/">Logo</Link>
            </h1>
            <div className="flex items-center justify-center gap-5">
                <div className="Search w-96 h-10 flex items-center justify-center">
                    <input type="text" placeholder="Search movies" className="w-full h-full outline-0 p-3 text-white bg-zinc-800 border-2 border-zinc-700 rounded-bl-lg rounded-tl-lg"/>
                    <button className="w-14 h-full cursor-pointer bg-red-600 rounded-br-lg rounded-tr-lg"></button>
                </div>
                <button className="w-20 h-10 rounded-lg bg-red-600 cursor-pointer text-white active:bg-red-700 transition-all duration-300">
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
    );
}

export default Menu