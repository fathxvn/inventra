import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">
        Inventra Admin
      </h2>

      <nav className="flex flex-col gap-3">
        <Link
          to="/admin/dashboard"
          className="hover:bg-slate-700 p-2 rounded"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/items"
          className="hover:bg-slate-700 p-2 rounded"
        >
          Kelola Barang
        </Link>

        <Link
          to="/admin/borrow-requests"
          className="hover:bg-slate-700 p-2 rounded"
        >
          Pengajuan Peminjaman
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="mt-4 text-left hover:bg-slate-700 p-2 rounded"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
