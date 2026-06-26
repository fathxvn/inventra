import { useParams } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams();

  // Data dummy sementara
  const item = {
    id,
    name: "Laptop Asus VivoBook",
    category: "Elektronik",
    stock: 5,
    available: 3,
    description:
      "Laptop digunakan untuk kegiatan praktikum mahasiswa di laboratorium komputer.",
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-8">

      <h1 className="text-3xl font-bold mb-6">
        Detail Barang
      </h1>

      <div className="space-y-4">

        <div>
          <h2 className="font-semibold text-gray-700">
            Nama Barang
          </h2>

          <p>{item.name}</p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-700">
            Kategori
          </h2>

          <p>{item.category}</p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-700">
            Total Stok
          </h2>

          <p>{item.stock}</p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-700">
            Stok Tersedia
          </h2>

          <p>{item.available}</p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-700">
            Deskripsi
          </h2>

          <p>{item.description}</p>
        </div>

      </div>

      <button
        className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Ajukan Peminjaman
      </button>

    </div>
  );
}

export default ItemDetail;