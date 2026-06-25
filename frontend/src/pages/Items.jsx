import ItemCard from "../components/ItemCard";

function Items() {
  const items = [
    {
      id: 1,
      name: "Laptop Dell",
      category: "Elektronik",
      available: true,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },
    {
      id: 2,
      name: "Proyektor Epson",
      category: "Elektronik",
      available: false,
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    },
    {
      id: 3,
      name: "Kamera Canon",
      category: "Multimedia",
      available: true,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Daftar Inventaris
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </>
  );
}

export default Items;