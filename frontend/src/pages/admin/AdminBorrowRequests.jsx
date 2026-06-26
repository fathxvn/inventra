function AdminBorrowRequests() {
  const requests = [
    {
      id: 1,
      borrower: "Budi Santoso",
      item: "Laptop Asus VivoBook",
      date: "2026-06-23",
      status: "Menunggu",
    },
    {
      id: 2,
      borrower: "Siti Aminah",
      item: "Proyektor Epson",
      date: "2026-06-22",
      status: "Disetujui",
    },
    {
      id: 3,
      borrower: "Andi Pratama",
      item: "Kamera Canon",
      date: "2026-06-21",
      status: "Ditolak",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Persetujuan Peminjaman
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-800 text-white">

            <tr>
              <th className="p-4 text-left">No</th>
              <th className="p-4 text-left">Peminjam</th>
              <th className="p-4 text-left">Barang</th>
              <th className="p-4 text-left">Tanggal</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>

          </thead>

          <tbody>

            {requests.map((request, index) => (

              <tr
                key={request.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  {index + 1}
                </td>

                <td className="p-4">
                  {request.borrower}
                </td>

                <td className="p-4">
                  {request.item}
                </td>

                <td className="p-4">
                  {request.date}
                </td>

                <td className="p-4">
                  {request.status}
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                    >
                      Approve
                    </button>

                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Reject
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default AdminBorrowRequests;