import { FaGoogle, FaFacebook } from "react-icons/fa";

function Login() {
    return (
      <div className="Login w-full h-screen flex items-center justify-center bg-zinc-900">
        <div className="w-2xl rounded-2xl p-5 bg-zinc-800 border-2 border-zinc-700">
          <h1 className="text-3xl text-red-600 font-bold">Login</h1>
          <div className="w-full flex items-start justify-items-start flex-col mt-3">
            <span className="text-white font-bold">Username:</span>
            <input
              type="text"
              className="w-full h-11 outline-0 p-3 rounded-lg bg-zinc-700 border-2 border-zinc-600 text-white focus:ring-2 ring-red-600 transition-all duration-300"
            />
          </div>
          <div className="w-full flex items-start justify-items-start flex-col mt-3">
            <span className="text-white font-bold">Email:</span>
            <input
              type="email"
              className="w-full h-11 outline-0 p-3 rounded-lg bg-zinc-700 border-2 border-zinc-600 text-white focus:ring-2 ring-red-600 transition-all duration-300"
            />
          </div>
          <div className="w-full flex items-start justify-items-start flex-col mt-3">
            <span className="text-white font-bold">Password:</span>
            <input
              type="password"
              className="w-full h-11 outline-0 p-3 rounded-lg bg-zinc-700 border-2 border-zinc-600 text-white focus:ring-2 ring-red-600 transition-all duration-300"
            />
          </div>
          <button className="w-full h-11 mt-3 cursor-pointer bg-red-600 text-white rounded-lg active:bg-red-700 transition-all duration-300">Login</button>
          <div className="w-full flex items-center justify-center gap-2 mt-3">
            <button className="w-full h-11 rounded-lg cursor-pointer bg-white active:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2">
              <FaGoogle/>
              Google
            </button>
            <button className="w-full h-11 rounded-lg cursor-pointer bg-white active:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2">
              <FaFacebook/>
              Facebook
            </button>
          </div>
        </div>
      </div>
    );
}

export default Login