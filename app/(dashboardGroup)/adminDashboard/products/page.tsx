
'use client'

import ProductCard from "@/app/(publicGroup)/_components/ProductCard";
import { getAllProduct } from "@/lib/services/productService"
import { useEffect, useState } from "react"

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
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true)

    const limit = 8;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await getAllProduct(currentPage, limit) // getting all products
                setProducts(result.data.data)
                setTotalPages(result.data.meta.totalPages)
                setLoading(false)
            } catch (error) {
                console.error("Failed to fetch products:", error)
            }
        }

        fetchProducts()
    }, [currentPage])

    return (
        <div className="mx-auto max-w-7xl px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">
                All Products
            </h1>

            {loading ? (
                <p className="text-center py-10">Loading products...</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {products.length === 0 && (
                        <p className="py-10 text-center">No products found.</p>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-10 flex items-center justify-center gap-3">

                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((prev) => prev - 1)}
                                className="rounded border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                Previous
                            </button>

                            {/* Array.from creates a new array from an iterable or array-like object. Here the array.from() takes an array-like object and creates a new array. then a map will run in the array. For more details see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from or use ChatGPT */}
                            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`rounded border px-4 py-2 ${currentPage === page
                                        ? "bg-black text-white"
                                        : "bg-white text-black"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((prev) => prev + 1)}
                                className="rounded border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                Next
                            </button>

                        </div>
                    )}
                </>
            )}
        </div>
    )


}

export default Products
