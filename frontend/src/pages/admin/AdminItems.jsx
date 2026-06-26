function AdminItems() {
  const items = [
    {
      id: 1,
      name: "Laptop Asus",
      stock: 5,
    },
    {
      id: 2,
      name: "Proyektor Epson",
      stock: 2,
    },
    {
      id: 3,
      name: "Kamera Canon",
      stock: 4,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Kelola Barang
        </h1>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Tambah Barang
        </button>
      </div>

      <table className="w-full bg-white shadow rounded-xl overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">No</th>
            <th className="p-3 text-left">Nama Barang</th>
            <th className="p-3 text-left">Stok</th>
            <th className="p-3 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.id}
              className="border-t"
            >
              <td className="p-3">{index + 1}</td>

              <td className="p-3">
                {item.name}
              </td>

              <td className="p-3">
                {item.stock}
              </td>

              <td className="p-3 text-center space-x-2">
                <button className="bg-yellow-500 text-white px-3 py-1 rounded">
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
  );
}

export default AdminItems;