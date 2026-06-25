function AdminItems() {
    const items = [
      {
        id: 1,
        name: "Laptop Dell",
        stock: 5,
      },
      {
        id: 2,
        name: "Proyektor Epson",
        stock: 2,
      },
    ];
  
    return (
      <>
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">
            Kelola Barang
          </h1>
  
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Tambah Barang
          </button>
        </div>
  
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Nama</th>
                <th className="p-3 text-left">Stok</th>
                <th className="p-3 text-left">Aksi</th>
              </tr>
            </thead>
  
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.stock}</td>
                  <td className="p-3">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
  
                    <button className="bg-red-600 text-white px-3 py-1 rounded">
                      Hapus
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
  
  export default AdminItems;