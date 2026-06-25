function AdminDashboard() {
    const stats = [
      {
        title: "Total Barang",
        value: 120,
      },
      {
        title: "Barang Dipinjam",
        value: 18,
      },
      {
        title: "Pengajuan Pending",
        value: 7,
      },
      {
        title: "User Aktif",
        value: 45,
      },
    ];
  
    return (
      <>
        <h1 className="text-3xl font-bold mb-6">
          Dashboard Admin
        </h1>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-gray-500">
                {item.title}
              </h2>
  
              <p className="text-3xl font-bold mt-2">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default AdminDashboard;