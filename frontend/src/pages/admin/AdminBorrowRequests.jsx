function AdminBorrowRequests() {
  const requests = [
    {
      id: 1,
      user: "Arif",
      item: "Laptop Asus",
      status: "Menunggu",
    },
    {
      id: 2,
      user: "Budi",
      item: "Proyektor Epson",
      status: "Menunggu",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Persetujuan Peminjaman
      </h1>

      <table className="w-full bg-white shadow rounded-xl overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">No</th>
            <th className="p-3">Peminjam</th>
            <th className="p-3">Barang</th>
            <th className="p-3">Status</th>
            <th className="p-3">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request, index) => (
            <tr key={request.id} className="border-t">
              <td className="p-3">{index + 1}</td>

              <td className="p-3">{request.user}</td>

              <td className="p-3">{request.item}</td>

              <td className="p-3">{request.status}</td>

              <td className="p-3 space-x-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded">
                  Approve
                </button>

                <button className="bg-red-600 text-white px-3 py-1 rounded">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBorrowRequests;