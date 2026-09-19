import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    category: "WEB DEVELOPMENT",
    date: "16 SEP 2026",
    title: "How to Build a Modern Portfolio with React & Tailwind",
    desc: "Tips and tricks buat bikin portfolio yang cepat, responsive, dan kelihatan pro.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
  },
  {
    id: 2,
    category: "UI/UX DESIGN",
    date: "12 SEP 2026",
    title: "5 Principles of Minimalist Design That Still Work",
    desc: "Kenapa design minimalis masih jadi raja di 2026, dan cara apply nya.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
  },
  {
    id: 3,
    category: "JAVASCRIPT",
    date: "10 SEP 2026",
    title: "Understanding React Router v6 for Beginners",
    desc: "Penjelasan lengkap React Router biar navigasi web lu ga blank putih lagi.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
  },
  {
    id: 4,
    category: "TUTORIAL",
    date: "05 SEP 2026",
    title: "Deploy Vite React to Vercel in 2 Minutes",
    desc: "Cara paling cepet deploy project portfolio-tailwind-css lu ke internet.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=600",
  },
  {
    id: 5,
    category: "CAREER",
    date: "01 SEP 2026",
    title: "My Journey as a Frontend Developer from Zero",
    desc: "Cerita gua dari ngoding otodidak sampe dapet client pertama.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
  },
  {
    id: 6,
    category: "TAILWIND CSS",
    date: "28 AUG 2026",
    title: "Why I Stopped Using Custom CSS and Moved to Tailwind",
    desc: "Alasan kenapa Tailwind bikin produktivitas naik 3x lipat.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600",
  },
];

export default function Blog() {
  return (
    <div className="bg-[#1a1010] min-h-screen text-white pt-24 pb-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        {/* HEADER - samain kayak Portfolio */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-1 bg-sky-500"></div>
            <p className="tracking-[0.3em] text-[11px] font-bold text-white/60">
              LATEST ARTICLES
            </p>
          </div>
          <h1 className="text-[50px] md:text-[90px] font-black leading-[0.85] tracking-tighter">
            My <span className="text-[#8FFFE0]">Blog</span>
          </h1>
          <p className="text-white/50 text-[14px] mt-6 max-w-xl leading-relaxed">
            I write about web development, design, and my journey as a
            developer. Sharing what I learn along the way.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-[#1c202c] border border-white/5 rounded-lg overflow-hidden hover:border-[#8FFFE0]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden h-[220px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[#8FFFE0] text-[10px] font-bold tracking-widest">
                    {blog.category}
                  </span>
                  <span className="text-white/30 text-[10px] tracking-widest">
                    {blog.date}
                  </span>
                </div>

                <h3 className="font-bold text-[18px] leading-tight mb-3 group-hover:text-[#8FFFE0] transition">
                  {blog.title}
                </h3>

                <p className="text-white/50 text-[13px] leading-relaxed line-clamp-2 mb-5">
                  {blog.desc}
                </p>

                <Link className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-white group-hover:text-[#8FFFE0] transition">
                  READ MORE <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
