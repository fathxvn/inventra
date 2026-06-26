function AdminItems() {
  const items = [
    {
      id: 1,
      name: "Laptop Asus VivoBook",
      category: "Elektronik",
      stock: 5,
    },
    {
      id: 2,
      name: "Proyektor Epson",
      category: "Elektronik",
      stock: 2,
    },
    {
      id: 3,
      name: "Kamera Canon",
      category: "Multimedia",
      stock: 4,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Kelola Barang
        </h1>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
          + Tambah Barang
        </button>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-800 text-white">

            <tr>
              <th className="p-4 text-left">No</th>
              <th className="p-4 text-left">Nama Barang</th>
              <th className="p-4 text-left">Kategori</th>
              <th className="p-4 text-left">Stok</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>

          </thead>

          <tbody>

            {items.map((item, index) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  {index + 1}
                </td>

                <td className="p-4">
                  {item.name}
                </td>

                <td className="p-4">
                  {item.category}
                </td>

                <td className="p-4">
                  {item.stock}
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Hapus
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

export default AdminItems;