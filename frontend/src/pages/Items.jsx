import ItemCard from "../components/ItemCard";

function Items() {
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
      <h1 className="text-3xl font-bold mb-6">
        Daftar Barang
      </h1>

      <div className="my-6">
        <input
          type="text"
          placeholder="Cari barang..."
          className="w-full md:w-96 border rounded-lg p-3"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Items;