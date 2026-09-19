import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "fendi123") {
      localStorage.setItem("isAdmin", "true"); // INI KUNCINYA
      navigate("/dashboard");
    } else {
      alert("Username / password salah!");
    }
  };

  return (
    <div className="min-h-screen bg-[#e0f2fe] flex items-center justify-center px-4">
      <div className="w-full max-w-[380px] bg-[#1a1e28] p-8 rounded-2xl border border-white/10">
        <h1 className="text-white text-[28px] font-black text-center">
          FENDI ADMIN
        </h1>
        <p className="text-gray-400 text-[12px] text-center mt-2 tracking-widest">
          LOGIN TO DASHBOARD
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="text-[11px] tracking-widest text-gray-400">
              USERNAME
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className="w-full mt-2 bg-[#12151c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#3dd8b3]"
            />
          </div>
          <div>
            <label className="text-[11px] tracking-widest text-gray-400">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              className="w-full mt-2 bg-[#12151c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#3dd8b3]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3dd8b3] text-black font-black tracking-widest text-[12px] py-3 rounded-lg mt-2 hover:bg-[#2ec9a3] transition"
          >
            LOGIN
          </button>
        </form>

        <p className="text-gray-500 text-[11px] text-center mt-6">
          Demo: <span className="text-white">admin / fendi123</span>
        </p>
      </div>
    </div>
  );
}
