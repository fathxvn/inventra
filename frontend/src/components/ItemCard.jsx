import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition">

      <h2 className="text-xl font-semibold">
        {item.name}
      </h2>

      <p className="text-gray-600 mt-2">
        Kategori: {item.category}
      </p>

      <p className="text-gray-600">
        Stok: {item.stock}
      </p>

      <div className="flex gap-3 mt-5">

        <Link
          to={`/items/${item.id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Detail
        </Link>

        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Ajukan
        </button>

      </div>

    </div>
  );
}

export default ItemCard;