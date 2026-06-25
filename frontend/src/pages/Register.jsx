import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Registrasi
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Konfirmasi Password"
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="w-full bg-green-600 text-white p-3 rounded-lg"
          >
            Daftar
          </button>
        </form>

        <p className="text-center mt-4">
          Sudah punya akun?
          <Link
            to="/login"
            className="text-blue-600 ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;