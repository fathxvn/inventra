function AdminBorrowRequests() {
    const requests = [
      {
        id: 1,
        user: "Budi",
        item: "Laptop Dell",
        status: "Pending",
      },
      {
        id: 2,
        user: "Andi",
        item: "Proyektor Epson",
        status: "Pending",
      },
    ];
  
    return (
      <>
        <h1 className="text-3xl font-bold mb-6">
          Pengajuan Peminjaman
        </h1>
  
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">User</th>
                <th className="p-3 text-left">Barang</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Aksi</th>
              </tr>
            </thead>
  
            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td className="p-3">{req.user}</td>
                  <td className="p-3">{req.item}</td>
                  <td className="p-3">{req.status}</td>
                  <td className="p-3">
                    <button className="bg-green-600 text-white px-3 py-1 rounded mr-2">
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
      </>
    );
  }
  
  export default AdminBorrowRequests;