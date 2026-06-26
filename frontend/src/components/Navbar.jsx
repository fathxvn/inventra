import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

function Navbar() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4 items-center">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/items">Barang</Link>
      <Link to="/my-requests">Pengajuan Saya</Link>
      <button
        type="button"
        onClick={handleLogout}
        className="ml-auto rounded bg-blue-700 px-3 py-1 hover:bg-blue-800"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
