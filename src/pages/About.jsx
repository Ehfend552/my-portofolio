import { Link } from "react-router-dom";
import fendi3 from "../assets/fendi3.png";

export default function About() {
  return (
    <div className="min-h-screen bg-[#12151c] text-white px-10 md:px-16 pt-32 pb-20">
      {/* HEADER */}
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-[1fr_1fr] gap-16 border-b border-zinc-800 pb-20">
        <div>
          <div className="w-.\[80px\] h-.\[4px\] bg-white mb-10"></div>
          <div className="w-20 h-1 bg-sky-500 mb-8"></div>
          <h1 className="text-[55px] text-white md:text-[72px] leading-[0.9] font-bold tracking-tight">
            About <br /> <span className="text-[#8FFFE0]">Me</span>
          </h1>
        </div>
        <div className="pt-6">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Hello! I am{" "}
              <span className="text-[#8FFFE0] font-bold">Fendi Setiawan</span>,
              a passionate and detail-oriented Web Developer based in Bogor,
              Indonesia.
            </p>
            <p>
              I specialize in modern web technologies, particularly{" "}
              <span className="text-sky-400">
                React.js, Tailwind CSS, and JavaScript
              </span>
              . With over 2 years of experience in web development, I enjoy
              building responsive, fast, and user-friendly websites that not
              only look great but also solve real-world problems. My focus is on
              writing clean, efficient code and creating seamless digital
              experiences.
            </p>
            <p>
              My goal with this portfolio is to showcase my journey and skills,
              and to demonstrate how I can help individuals and businesses bring
              their ideas to life on the web. I am always eager to learn new
              technologies and take on new challenges.
            </p>
          </div>
          <div className="flex gap-10 mt-10">
            <div>
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-[11px] tracking-widest text-zinc-500 mt-1">
                YEARS EXP
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">4+</h3>
              <p className="text-[11px] tracking-widest text-zinc-500 mt-1">
                PROJECTS
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-[11px] tracking-widest text-zinc-500 mt-1">
                PASSION
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT I DO + FOTO */}
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-16 mt-20 items-start">
        {/* KIRI - SKILLS */}
        <div className="space-y-14">
          <div>
            <h2 className="text-[13px] tracking-[0.2em] font-bold mb-8">
              WHAT I DO
            </h2>
            <div className="space-y-8">
              <div className="flex justify-between border-b border-zinc-800 pb-6">
                <h3 className="text-xl font-semibold">Frontend Development</h3>
                <span className="text-zinc-500 text-sm">
                  React / Next.js / Tailwind
                </span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-6">
                <h3 className="text-xl font-semibold">UI/UX Design</h3>
                <span className="text-zinc-500 text-sm">Figma / Framer</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-6">
                <h3 className="text-xl font-semibold">Web Performance</h3>
                <span className="text-zinc-500 text-sm">
                  Optimization / SEO
                </span>
              </div>
            </div>
          </div>

          <Link
            to="/portfolio"
            className="inline-block bg-[#01140f] px-8 py-4 text-dark text-[12px] tracking-widest font-bold hover:bg-[#055741] transition duration-500"
          >
            VIEW MY WORK →
          </Link>
        </div>

        {/* KANAN - FOTO */}
        <div className="relative bg-[#181b25] p-2">
          <img src={fendi3} alt="Fendi" className="w-full h-.\[500px\]" />
          <div className="absolute -bottom-6 -left-6 bg-white text-black p-6 max-w-.\[260px\]">
            <p className="text-[13px] leading-[1.6] font-medium">
              "Building digital products that people love to use."
            </p>
            <p className="text-[11px] tracking-widest mt-3 text-zinc-600">
              — FENDI, WEB DEV
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
