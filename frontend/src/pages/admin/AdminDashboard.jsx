function AdminDashboard() {
  const stats = [
    {
      title: "Total Barang",
      value: 120,
      color: "bg-blue-500",
    },
    {
      title: "Total Pengguna",
      value: 75,
      color: "bg-green-500",
    },
    {
      title: "Peminjaman Aktif",
      value: 18,
      color: "bg-yellow-500",
    },
    {
      title: "Menunggu Persetujuan",
      value: 6,
      color: "bg-red-500",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard Admin
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-5"
          >
            <div
              className={`w-12 h-12 rounded-lg ${stat.color} mb-4`}
            ></div>

            <h2 className="text-gray-500">
              {stat.title}
            </h2>

            <p className="text-3xl font-bold mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;