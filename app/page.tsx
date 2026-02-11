"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/app/lib/api";
import ProductCard from "@/app/components/ProductCard";
import { Product } from "@/app/types/product";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await getProducts();
        setProducts(res);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          <p className="col-span-4 text-center">Loading...</p>
        ) : products.length > 0 ? (
          products.map((item) => <ProductCard product={item} key={item.name} />)
        ) : (
          <p className="col-span-4 text-center text-gray-500">ไม่พบสินค้า</p>
        )}
      </div>
    </main>
  );
}
