
export default function ProductCard({ nome, preco, imagem }) {
  return (
    <div className="border rounded p-4 max-w-xs">
      <img src={imagem} alt={nome} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-2">{nome}</h2>
      <p className="text-green-600 font-bold mt-1">R$ {preco}</p>
      <button className="mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-700 w-full">
        Comprar
      </button>
    </div>
  );
}