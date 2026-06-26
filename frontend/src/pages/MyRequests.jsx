function MyRequests() {
  const requests = [
    {
      id: 1,
      item: "Laptop Asus",
      date: "2026-06-20",
      status: "Disetujui",
    },
    {
      id: 2,
      item: "Proyektor Epson",
      date: "2026-06-22",
      status: "Menunggu",
    },
    {
      id: 3,
      item: "Kamera Canon",
      date: "2026-06-23",
      status: "Ditolak",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Pengajuan Saya
      </h1>

      <table className="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">Barang</th>
            <th className="p-3 text-left">Tanggal</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => (
            <tr
              key={request.id}
              className="border-b"
            >
              <td className="p-3">{request.item}</td>
              <td className="p-3">{request.date}</td>
              <td className="p-3">{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyRequests;