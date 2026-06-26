import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import Loading from "../components/Loading";

function Items() {
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [items] = useState([
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
  ]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Daftar Barang
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari barang..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border rounded-lg p-3"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.length === 0 ? (
          <div className="col-span-full text-center py-10 text-gray-500">
            Barang tidak ditemukan.
          </div>
        ) : (
          filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Items;