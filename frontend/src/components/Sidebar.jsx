import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-800 text-white p-6">

      <h1 className="text-2xl font-bold mb-8">
        Inventra Admin
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          to="/admin/dashboard"
          className="hover:bg-slate-700 p-3 rounded-lg"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/items"
          className="hover:bg-slate-700 p-3 rounded-lg"
        >
          Kelola Barang
        </Link>

        <Link
          to="/admin/borrow-requests"
          className="hover:bg-slate-700 p-3 rounded-lg"
        >
          Pengajuan
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;