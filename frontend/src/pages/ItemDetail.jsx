import { useParams, Link } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams();

  // Data dummy sementara
  const items = [
    {
      id: 1,
      name: "Laptop Asus VivoBook",
      category: "Elektronik",
      stock: 5,
      description: "Laptop untuk kegiatan perkuliahan dan presentasi.",
    },
    {
      id: 2,
      name: "Proyektor Epson",
      category: "Elektronik",
      stock: 2,
      description: "Proyektor untuk seminar dan rapat.",
    },
    {
      id: 3,
      name: "Kamera Canon",
      category: "Multimedia",
      stock: 4,
      description: "Kamera DSLR untuk dokumentasi kegiatan kampus.",
    },
  ];

  const item = items.find((barang) => barang.id === Number(id));

  if (!item) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">
          Barang tidak ditemukan
        </h2>

        <Link
          to="/items"
          className="mt-5 inline-block bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-8">

      <h1 className="text-3xl font-bold mb-6">
        Detail Barang
      </h1>

      <div className="space-y-4">

        <div>
          <strong>Nama Barang</strong>
          <p>{item.name}</p>
        </div>

        <div>
          <strong>Kategori</strong>
          <p>{item.category}</p>
        </div>

        <div>
          <strong>Stok</strong>
          <p>{item.stock}</p>
        </div>

        <div>
          <strong>Deskripsi</strong>
          <p>{item.description}</p>
        </div>

      </div>

      <div className="flex gap-3 mt-8">

        <button
          className="bg-green-600 text-white px-5 py-2 rounded-lg"
        >
          Ajukan Peminjaman
        </button>

        <Link
          to="/items"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg"
        >
          Kembali
        </Link>

      </div>

    </div>
  );
}

export default ItemDetail;