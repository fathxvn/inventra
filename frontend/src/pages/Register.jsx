function Register() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">
            Register Inventra
          </h1>
  
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full border rounded-lg p-2"
            />
  
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-2"
            />
  
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg p-2"
            />
  
            <input
              type="password"
              placeholder="Konfirmasi Password"
              className="w-full border rounded-lg p-2"
            />
  
            <button
              type="submit"
              className="w-full bg-green-600 text-white rounded-lg p-2"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Register;