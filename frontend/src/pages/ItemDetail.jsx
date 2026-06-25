function ItemDetail() {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
          alt="Laptop"
          className="w-full max-w-md rounded-lg"
        />
  
        <h1 className="text-3xl font-bold mt-4">
          Laptop Dell Latitude
        </h1>
  
        <p className="text-gray-600 mt-2">
          Laptop untuk kebutuhan akademik,
          presentasi, dan kegiatan kampus.
        </p>
  
        <div className="mt-4">
          <p>
            <strong>Kategori:</strong> Elektronik
          </p>
  
          <p>
            <strong>Kondisi:</strong> Baik
          </p>
  
          <p>
            <strong>Stok:</strong> 5 Unit
          </p>
        </div>
  
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">
          Ajukan Peminjaman
        </button>
      </div>
    );
  }
  
  export default ItemDetail;