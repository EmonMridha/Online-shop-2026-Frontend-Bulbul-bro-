
'use client'

import { getAllProduct } from "@/lib/services/productService"
import { useEffect, useState } from "react"
import ProductCard from "./_components/ProductCard";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageURL: string;
  stock: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getAllProduct() // getting all products
        setProducts(result.data)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">All Products</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
