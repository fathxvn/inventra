import { useParams } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Item Detail Page</h1>
      <p>ID Barang: {id}</p>
    </div>
  );
}

export default ItemDetail;