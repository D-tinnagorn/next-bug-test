import { Product } from "../types/product"

const API_BASE_URL = "https://api-uat.onelifegroupholding.com"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  // const imageUrl = product.images_path.startsWith("https") // เช็คว่า string ขึ้นต้นด้วย "https" หรือไม่ ถ้าใช่เป็น true
  //   ? product.images_path
  //   : `${API_BASE_URL}${product.images_path}`
  //   console.log('imageUrl:', imageUrl)

  return (
    <div className="border p-4 rounded-xl shadow-md hover:scale-105 transition">
      <img
        src={`${API_BASE_URL}${product.images_path}`}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-auto object-cover rounded"
      />

      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-500">{product.brand}</p>

      <p className="text-red-500 font-semibold">
        {product.price.toFixed(2)} บาท
      </p>
    </div>
  )
}
