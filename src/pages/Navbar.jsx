import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false); // auto tutup menu kalo pindah halaman
  }, [pathname]);

  const active = (p) =>
    pathname === p
      ? "text-[#7ff0d0] border-b-2 border-[#7ff0d0]"
      : "text-gray-300 hover:text-white";

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    setIsOpen(false);
    navigate("/");
  };

  return (
    <nav className="w-full bg-[#15191f] border-b border-white/5 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* LOGO */}
      <Link
        to="/"
        className="flex items-center gap-2 font-bold text-sm tracking-wide shrink-0"
      >
        <span className="text-[#7ff0d0]">&lt;/&gt;</span>
        <span className="text-[#7ff0d0]">fendisetiawan</span>
      </Link>

      {/* MENU DESKTOP - cuma muncul di lg (laptop ke atas) */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-bold tracking-widest">
        <Link to="/" className={`${active("/")} pb-1`}>
          Home
        </Link>
        <Link to="/about" className={`${active("/about")} pb-1`}>
          About
        </Link>
        <Link to="/portfolio" className={`${active("/portfolio")} pb-1`}>
          Portfolio
        </Link>
        <Link to="/blog" className={`${active("/blog")} pb-1`}>
          Blog
        </Link>
        {isAdmin && (
          <Link
            to="/dashboard"
            className={`${active("/dashboard")} pb-1 text-yellow-300 hover:text-yellow-200`}
          >
            Dashboard
          </Link>
        )}
        <span className="text-gray-300 cursor-pointer pb-1">Pages ▼</span>
        {isAdmin && (
          <button
            onClick={handleLogout}
            className="text-red-400 hover:text-red-300 border border-red-400/20 px-3 py-1 rounded text-[10px]"
          >
            Logout
          </button>
        )}
        <a
          href="https://wa.me/6285718509645?text=Hi%20Fendi!%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#7ff0d0] text-black px-5 py-2 rounded-md hover:bg-[#6adfb9] transition"
        >
          Contact me
        </a>
      </div>

      {/* HAMBURGER BUTTON - muncul di tablet & mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white p-2 -mr-2"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <span className="text-[22px]">✕</span>
        ) : (
          <span className="text-[22px]">☰</span>
        )}
      </button>

      {/* MENU MOBILE & TABLET */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#15191f] border-t border-white/10 shadow-2xl lg:hidden animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-1 p-4 sm:p-6 text-[13px] font-bold tracking-widest">
            <Link
              to="/"
              className={`py-3 px-3 rounded-md ${pathname === "/" ? "bg-white/5 text-[#7ff0d0]" : "text-gray-300"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`py-3 px-3 rounded-md ${pathname === "/about" ? "bg-white/5 text-[#7ff0d0]" : "text-gray-300"}`}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={`py-3 px-3 rounded-md ${pathname === "/portfolio" ? "bg-white/5 text-[#7ff0d0]" : "text-gray-300"}`}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className={`py-3 px-3 rounded-md ${pathname === "/blog" ? "bg-white/5 text-[#7ff0d0]" : "text-gray-300"}`}
            >
              Blog
            </Link>

            {isAdmin && (
              <Link
                to="/dashboard"
                className={`py-3 px-3 rounded-md ${pathname === "/dashboard" ? "bg-yellow-500/10 text-yellow-300" : "text-yellow-300"}`}
              >
                Dashboard
              </Link>
            )}

            <div className="h-[1px] bg-white/10 my-2"></div>

            {isAdmin && (
              <button
                onClick={handleLogout}
                className="py-3 px-3 rounded-md text-left text-red-400 bg-red-500/5"
              >
                Logout
              </button>
            )}

            <a
              href="https://wa.me/6285718509645?text=Hi%20Fendi!%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7ff0d0] text-black px-5 py-4 rounded-md text-center mt-2 hover:bg-[#6adfb9] transition"
            >
              Contact me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
