import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h2 className="text-lg font-semibold mt-4">
        {item.name}
      </h2>

      <p className="text-gray-500 text-sm">
        {item.category}
      </p>

      <div className="mt-2">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            item.available
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {item.available ? "Tersedia" : "Dipinjam"}
        </span>
      </div>

      <Link
        to={`/items/${item.id}`}
        className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700"
      >
        Detail
      </Link>
    </div>
  );
}

export default ItemCard;