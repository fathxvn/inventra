import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password dan Konfirmasi Password tidak sama!");
      return;
    }

    console.log(form);

    // Simulasi register
    alert("Registrasi berhasil!");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2">
          Register Inventra
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Buat akun baru
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Nama Lengkap"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Konfirmasi Password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg p-3"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6">
          Sudah punya akun?
          <Link to="/login" className="text-blue-600 ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;