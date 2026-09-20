import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import fendi2 from "../assets/fendi2.png";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0f0e0e] text-white overflow-hidden px-6 md:px-8 lg:px-12 py-8 lg:py-10">
      {/* === BACKDROP FS GEDE - FINAL VERSION === */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 w-[520px] xl:w-[580px] h-[85vh] z-0 pointer-events-none">
        {/* GLOW GEDE - INI YANG GANTIIN BG HITAM BIAR GA FLAT */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7ff0d0]/[0.18] rounded-full blur-[120px]" />
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2d9cdb]/[0.15] rounded-full blur-[80px]" />

        {/* LOGO FS BACKDROP GEDE - JADI BACKGROUND UTAMA */}
        <img
          src={`${import.meta.env.BASE_URL}fs-logo-transparent.png`}
          alt=""
          className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] object-contain opacity-[0.30] select-none mix-blend-screen border-0 outline-none bg-transparent"
        />

        {/* FOTO LU */}
        <img
          src={fendi2}
          alt="Fendi Setiawan"
          className="relative z-10 w-full h-full object-cover object-top drop-shadow-[0_0_60px_rgba(127,240,208,0.15)]"
        />
      </div>

      {/* WRAPPER */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start w-full max-w-7xl mx-auto gap-10 lg:gap-0">
        {/* KIRI */}
        <div className="w-full lg:w-[380px] pt-4 lg:pt-16">
          <div className="w-12 h-[3px] bg-[#3dd8b3] mb-8 lg:mb-10"></div>
          <h1 className="text-[42px] sm:text-[56px] lg:text-[64px] font-black leading-[0.9] tracking-tight">
            I'm <span className="text-[#a8f0d9]">Fendi</span>
            <br />
            <span className="text-[#a8f0d9]">Setiawan,</span> a<br />
            <span className="text-[#2d9cdb]">Web</span>
            <br />
            <span className="text-[#2d9cdb]">Developer</span>
          </h1>

          {/* FOTO VERSI HP */}
          <div className="lg:hidden w-full flex justify-center my-8 relative">
            {/* glow hp */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#7ff0d0]/20 rounded-full blur-[60px]" />
            {/* backdrop HP */}
            <img
              src={`${import.meta.env.BASE_URL}fs-logo.png`}
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] object-contain opacity-[0.20] pointer-events-none"
            />
            <img
              src={fendi2}
              alt="Fendi Setiawan"
              className="relative z-10 w-[280px] sm:w-[340px] h-auto object-cover rounded-2xl"
            />
          </div>

          <p className="text-[14px] text-gray-300 mt-6 leading-relaxed">
            I am a passionate{" "}
            <span className="text-[#2d9cdb] font-bold">Web Developer</span> with
            a focus on building modern, responsive, and user-friendly website.
            Dedicated to transforming ideas into functional and visually
            appealing digital experiences.
          </p>
          <div className="w-full h-[5px] bg-[#a8f0d9] mt-10 lg:mt-16 rounded-full"></div>
        </div>

        {/* KANAN */}
        <div className="w-full lg:w-[320px] space-y-8 text-[13px] lg:text-[11px] pt-2 lg:pt-8">
          <div>
            <h4 className="font-bold tracking-widest mb-3 text-white">
              ABOUT ME
            </h4>
            <p className="text-gray-300 leading-relaxed">
              I am a Web Developer based in Bogor,{" "}
              <span className="text-white font-bold">INDONESIA</span> I am
              passionate about creating clean, modern, and responsive websites
              using React and Tailwind CSS.
            </p>
            <Link
              to="/about"
              className="inline-block mt-4 font-bold border-b border-white pb-1 hover:text-[#a8f0d9] hover:border-[#a8f0d9] transition"
            >
              LEARN MORE →
            </Link>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h4 className="font-bold tracking-widest mb-3 text-white">
              MY WORK
            </h4>
            <p className="text-gray-300 leading-relaxed">
              I build fast and functional websites that help brands and
              businesses grow. My work focuses on clean code, good design, and
              great user experience.
            </p>
            <Link
              to="/portfolio"
              className="inline-block mt-4 font-bold border-b border-white pb-1 hover:text-[#a8f0d9] hover:border-[#a8f0d9] transition"
            >
              BROWSE PORTFOLIO →
            </Link>
          </div>

          <div className="border-t border-white/10 lg:border-0 lg:pt-0 pt-8">
            <h4 className="font-bold tracking-widest text-white">MY E-MAIL</h4>
            <p className="text-gray-200 mt-2 break-all">
              setiawanfendi518@gmail.com
            </p>
            <p className="flex items-center gap-2 text-gray-300 mt-3">
              <FaPhoneAlt className="text-gray-400 text-[11px]" />
              +6285718509645
            </p>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h4 className="font-bold tracking-widest mb-4 text-white">
              FOLLOW ME ON SOCIAL MEDIA
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/_fendikss"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#7ff0d0] hover:text-black hover:border-[#7ff0d0] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/Ehfend552"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#7ff0d0] hover:text-black hover:border-[#7ff0d0] transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/ehfend552"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#7ff0d0] hover:text-black hover:border-[#7ff0d0] transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100073862861298"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#7ff0d0] hover:text-black hover:border-[#7ff0d0] transition"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
