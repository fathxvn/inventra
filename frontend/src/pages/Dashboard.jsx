function Dashboard() {
    const cards = [
      {
        title: "Total Barang",
        value: 120,
      },
      {
        title: "Barang Tersedia",
        value: 95,
      },
      {
        title: "Pengajuan Saya",
        value: 12,
      },
      {
        title: "Sedang Dipinjam",
        value: 8,
      },
    ];
  
    return (
      <>
        <h1 className="text-3xl font-bold mb-6">
          Dashboard
        </h1>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-gray-500">
                {card.title}
              </h2>
  
              <p className="text-3xl font-bold mt-2">
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default Dashboard;