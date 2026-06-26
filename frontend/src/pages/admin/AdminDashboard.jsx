function AdminDashboard() {
  const cards = [
    {
      title: "Total Barang",
      value: 120,
      color: "bg-blue-600",
    },
    {
      title: "Total Pengguna",
      value: 45,
      color: "bg-green-600",
    },
    {
      title: "Peminjaman Aktif",
      value: 18,
      color: "bg-yellow-500",
    },
    {
      title: "Menunggu Persetujuan",
      value: 6,
      color: "bg-red-600",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard Admin
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.color} text-white rounded-xl p-6 shadow`}
          >
            <h2 className="text-lg">{card.title}</h2>

            <p className="text-4xl font-bold mt-4">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;