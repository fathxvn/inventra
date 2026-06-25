import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2">
          Inventra
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Sistem Peminjaman Inventaris Kampus
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Masukkan email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Masukkan password"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6">
          Belum punya akun?
          <Link
            to="/register"
            className="text-blue-600 ml-1"
          >
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;