function MyRequests() {
  const requests = [
    {
      id: 1,
      item: "Laptop Asus VivoBook",
      date: "24 Juni 2026",
      status: "Menunggu",
    },
    {
      id: 2,
      item: "Proyektor Epson",
      date: "20 Juni 2026",
      status: "Disetujui",
    },
    {
      id: 3,
      item: "Kamera Canon",
      date: "18 Juni 2026",
      status: "Ditolak",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Disetujui":
        return "bg-green-100 text-green-700";
      case "Menunggu":
        return "bg-yellow-100 text-yellow-700";
      case "Ditolak":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Pengajuan Saya
      </h1>

      <div className="space-y-4">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-xl shadow p-5 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">
                {request.item}
              </h2>

              <p className="text-gray-500">
                Tanggal: {request.date}
              </p>
            </div>

            <span
              className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(
                request.status
              )}`}
            >
              {request.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyRequests;