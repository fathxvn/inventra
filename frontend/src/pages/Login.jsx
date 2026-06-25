function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-5xl text-red-500 text-center mb-6">
            Login Inventra
          </h1>
  
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full border rounded-lg p-2"
              />
            </div>
  
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full border rounded-lg p-2"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg p-2"
            >
              Masuk
            </button>
          </form>
  
          <p className="text-center mt-4">
            Belum punya akun?{" "}
            <a href="/register" className="text-blue-600">
              Daftar
            </a>
          </p>
        </div>
      </div>
    );
  }
  
  export default Login;