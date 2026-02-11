import { Product } from "../types/product"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border p-4 rounded-xl shadow-md hover:scale-105 transition">
      <img
        src={product.images_path}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-500">{product.brand}</p>

      <p className="text-red-500 font-semibold">
        {product.price.toFixed(2)} บาท
      </p>
    </div>
  )
}
