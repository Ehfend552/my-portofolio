import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "",
    link: "",
    image: "",
  });

  useEffect(() => {
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/fendi-admin");
    }
  }, [navigate]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("projects") || "[]");
    setProjects(saved);
  }, []);

  const saveProjects = (newProjects) => {
    setProjects(newProjects);
    localStorage.setItem("projects", JSON.stringify(newProjects));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.title) return alert("Judul wajib diisi!");
    if (!form.image) return alert("Upload gambar dulu bro!");
    const newProject = { id: Date.now(), ...form };
    saveProjects([...projects, newProject]);
    setForm({ title: "", category: "", link: "", image: "" });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (confirm("Yakin mau hapus project ini?")) {
      saveProjects(projects.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#070707] text-white p-4 sm:p-6 lg:p-10">
      {/* HEADER - INI YANG TADI KEGEDAN */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
        <div className="flex-1">
          <h1 className="text-[26px] sm:text-[32px] text-[#7ff0d0] font-black tracking-wider">
            DASHBOARD
          </h1>
          <p className="text-white text-[12px] sm:text-[13px] mt-2 max-w-[450px] leading-relaxed">
            Selamat datang Fendi! Project baru dari sini bakal otomatis muncul
            di halaman Portfolio.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#5ee9c1] text-black font-black px-5 py-3.5 rounded-md text-[12px] tracking-widest hover:bg-[#4bd6af] w-full sm:w-auto shrink-0"
        >
          + ADD NEW PROJECT
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-8">
        <div className="bg-[#131824] p-6 rounded-lg border border-white/5">
          <h3 className="text-[11px] tracking-widest text-gray-300">
            Total project statis
          </h3>
          <p className="text-[28px] font-bold mt-2 text-[#5ee9c1]">5</p>
          <p className="text-[10px] text-gray-500 mt-1">
            That are already in the Portfolio
          </p>
        </div>
        <div className="bg-[#131824] p-6 rounded-lg border border-white/5">
          <h3 className="text-[11px] tracking-widest text-gray-300">
            Total dynamic project
          </h3>
          <p className="text-[28px] font-bold mt-2 text-[#5ee9c1]">
            {projects.length}
          </p>
          <p className="text-[10px] text-gray-500 mt-1">From Dashboard</p>
        </div>
        <div className="bg-[#131824] p-6 rounded-lg border border-white/5 sm:col-span-2 lg:col-span-1">
          <h3 className="text-[11px] tracking-widest text-gray-300">
            All total
          </h3>
          <p className="text-[28px] font-bold mt-2 text-[#5ee9c1]">
            {5 + projects.length}
          </p>
          <p className="text-[10px] text-gray-500 mt-1">
            That appeared in public
          </p>
        </div>
      </div>

      <div className="mt-8 bg-[#131824] rounded-lg border border-white/5 p-4 sm:p-6">
        <h3 className="font-bold text-[#5ee9c1] tracking-widest text-[11px] sm:text-[12px] mb-6">
          LIST PROJECT FROM DASHBOARD
        </h3>
        {projects.length === 0 ? (
          <div className="bg-[#0a0e17] p-6 sm:p-8 rounded border border-dashed border-white/10 text-center">
            <p className="text-gray-400 text-[12px] sm:text-[13px]">
              No new project yet? CLICK + ADD new project above.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <div
                key={p.id}
                className="flex gap-3 sm:gap-4 bg-[#0a0e17] p-3 sm:p-4 rounded border border-white/5"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-[70px] h-[60px] sm:w-[90px] sm:h-[70px] object-cover rounded shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[13px] sm:text-[14px] truncate">
                    {p.title}
                  </p>
                  <p className="text-[11px] text-[#5ee9c1] truncate">
                    {p.category}
                  </p>
                  <p className="text-[10px] text-gray-500 truncate">{p.link}</p>
                </div>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="h-fit text-[10px] sm:text-[11px] text-red-400 hover:text-red-300 font-bold border border-red-400/20 px-2 sm:px-3 py-1 rounded shrink-0"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          {/* FIX MODAL KEGEDAN DI HP: w-full max-w-[450px] */}
          <div className="bg-[#131824] w-full max-w-[450px] p-5 sm:p-7 rounded-xl border border-white/10 max-h-[90vh] overflow-y-auto">
            <h2 className="font-black tracking-widest text-[14px] sm:text-base">
              Add New Project
            </h2>
            <p className="text-[11px] text-gray-400 mt-1">
              That appears on the portfolio page
            </p>
            <form onSubmit={handleAdd} className="mt-5 space-y-4">
              <div>
                <label className="text-[10px] tracking-widest text-gray-400">
                  Project title *
                </label>
                <input
                  type="text"
                  placeholder="examp: landing page"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full mt-1 bg-[#0a0e17] border border-white/10 rounded px-4 py-3 text-sm outline-none focus:border-[#5ee9c1]"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-widest text-gray-400">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Examp: React / Tailwind"
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                  className="w-full mt-1 bg-[#0a0e17] border border-white/10 rounded px-4 py-3 text-sm outline-none focus:border-[#5ee9c1]"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-widest text-gray-400">
                  Link project
                </label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                  className="w-full mt-1 bg-[#0a0e17] border border-white/10 rounded px-4 py-3 text-sm outline-none focus:border-[#5ee9c1]"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-widest text-gray-400">
                  Project image *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full mt-1 text-[12px] text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#5ee9c1] file:text-black file:font-bold file:text-[11px]"
                />
                {form.image && (
                  <img
                    src={form.image}
                    className="w-full h-[160px] sm:h-[180px] object-cover mt-3 rounded border border-white/10"
                  />
                )}
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-white/20 py-3 rounded text-[12px] font-bold"
                >
                  Cancelled
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#5ee9c1] text-black py-3 rounded text-[12px] font-black"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
