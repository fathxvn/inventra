import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Inventra
      </h1>

      <div className="flex gap-6 items-center">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/items">
          Barang
        </Link>

        <Link to="/my-requests">
          Pengajuan Saya
        </Link>

        <span>
          {user?.name}
        </span>

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="bg-red-500 px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;