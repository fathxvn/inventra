import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import { loginUser } from "../services/authService";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(form);

      // ==========================
      // SIMULASI LOGIN SEMENTARA
      // ==========================
      login({
        id: 1,
        name: "Arif",
        role: "user",
      });

      navigate("/dashboard");

      /*
      ===============================
      NANTI JIKA BACKEND SUDAH JADI
      ===============================

      const response = await loginUser(form);

      login(response.user);

      localStorage.setItem("token", response.token);

      navigate("/dashboard");
      */

    } catch (error) {
      console.error(error);
      alert("Login gagal");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-2">
          Inventra
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Sistem Peminjaman Inventaris Kampus
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Masukkan email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Masukkan password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">
          Belum punya akun?
          <Link
            to="/register"
            className="text-blue-600 ml-1 hover:underline"
          >
            Daftar
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;