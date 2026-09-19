import { useState, useEffect } from "react";
import project3 from "../assets/Screenshot.png";
import project5 from "../assets/2.png";

const staticProjects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Web App / React",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    link: "#",
  },
  {
    id: 2,
    title: "Company Landing Page",
    category: "Landing Page / Tailwind",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    link: "#",
  },
  {
    id: 3,
    title: "Personal Portfolio v1",
    category: "Portfolio / Next.js",
    image: project3,
    link: "https://ehfend552.github.io/portfolio-tailwind-css/",
  },
  {
    id: 4,
    title: "Task Management App",
    category: "Productivity / Fullstack",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
    link: "#",
  },
  {
    id: 5,
    title: "Linktree Page Website",
    category: "Bio Link Website",
    image: project5,
    link: "https://linkbio-fendi.vercel.app/",
  },
];

export default function Portfolio() {
  // === INI TAMBAHAN BUAT NYAMBUNG KE DASHBOARD - CUMA 5 BARIS ===
  const [dynamicProjects, setDynamicProjects] = useState([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("projects") || "[]");
    setDynamicProjects(saved);
  }, []);
  // GABUNGIN PROJECT LAMA + BARU DARI DASHBOARD
  const allProjects = [...staticProjects, ...dynamicProjects];
  // ==============================================================

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-10 md:px-16 pt-32 pb-20">
      {/* HEADER */}
      <div className="max-w-[1600px] mx-auto flex justify-between items-end border-b border-zinc-800 pb-12 mb-16">
        <div>
          <div className="w-20 h-1 bg-sky-500 mb-8"></div>
          <h1 className="text-white text-[55px] md:text-[72px] leading-[0.9] font-bold">
            Selected
            <br />
            <span className="text-[#8FFFE0]">Work</span>
          </h1>
        </div>
        <p className="text-zinc-400 text-[13px] leading-[1.7] max-w-[320px] text-right hidden md:block">
          A collection of my recent work. <br />
          Focused on clean code and <br />
          modern user experience.
        </p>
      </div>

      {/* GRID PROJECT - SEKARANG PAKE allProjects */}
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-10">
        {allProjects.map((p) => (
          <a key={p.id} href={p.link} target="_blank" className="group">
            <div className="overflow-hidden bg-[#181b25] aspect-[16/10]">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
            <div className="flex justify-between items-start mt-5">
              <div>
                <h3 className="text-[20px] font-semibold group-hover:text-[#1754cf] transition">
                  {p.title}
                </h3>
                <p className="text-[11px] tracking-widest text-zinc-500 mt-1">
                  {p.category}
                </p>
              </div>
              <span className="text-[12px] border border-zinc-700 px-3 py-1 rounded-full group-hover:bg-white group-hover:text-black transition">
                2024 ↗
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-[1600px] mx-auto mt-24 text-center">
        <p className="text-zinc-500 text-[13px]">Want to see more?</p>
        <a
          href="https://github.com/ehfend552"
          target="_blank"
          className="text-[14px] font-bold tracking-widest border-b border-white pb-1 mt-3 inline-block"
        >
          VISIT MY GITHUB →
        </a>
      </div>
    </div>
  );
}
