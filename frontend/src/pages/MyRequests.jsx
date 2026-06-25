function MyRequests() {
    const requests = [
      {
        id: 1,
        item: "Laptop Dell",
        date: "24 Juni 2026",
        status: "Pending",
      },
      {
        id: 2,
        item: "Proyektor Epson",
        date: "20 Juni 2026",
        status: "Disetujui",
      },
    ];
  
    return (
      <>
        <h1 className="text-3xl font-bold mb-6">
          Pengajuan Saya
        </h1>
  
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Barang</th>
                <th className="p-3 text-left">Tanggal</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
  
            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td className="p-3">{req.item}</td>
                  <td className="p-3">{req.date}</td>
                  <td className="p-3">{req.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  
  export default MyRequests;