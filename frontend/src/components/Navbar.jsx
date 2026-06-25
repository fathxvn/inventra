import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/items">Barang</Link>
      <Link to="/my-requests">Pengajuan Saya</Link>
    </nav>
  );
}

export default Navbar;