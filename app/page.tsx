"use client"

import { useEffect, useState } from "react"
import { getProducts } from "@/lib/api"
import ProductCard from "@/components/ProductCard"
import { Product } from "@/types/product"

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getProducts()
      .then((res) => {
        setProducts(res)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Product List</h1>

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-4 gap-4">
        {products.map((item, index) => (
          <ProductCard product={item} key={index} />
        ))}
      </div>
    </main>
  )
}
