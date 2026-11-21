"use client";

export default function Sidebar({ active, setActive }) {
  const menu = ["Dashboard", "Students", "Add Student"];

  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-2xl font-bold text-purple-400 mb-10">
        StudentHub
      </h1>

      <nav className="space-y-3">
        {menu.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`w-full text-left px-4 py-3 rounded-lg ${
              active === item
                ? "bg-purple-600"
                : "hover:bg-slate-800"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <p className="text-slate-500 text-xs mt-16">
        Student Management System
      </p>
    </aside>
  );
}