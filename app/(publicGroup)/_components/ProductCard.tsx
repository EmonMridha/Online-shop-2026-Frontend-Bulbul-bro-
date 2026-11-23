
'use client'
import { useEffect, useState } from "react";
import { Product } from "../product/page";
import Link from "next/link";
import { getCurrentUser } from "@/app/(authGroup)/_actions/authAction";
import { User } from "@/components/shared/Navbar";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            const res = await getCurrentUser();
            setUser(res)

        }
        fetchCurrentUser()
    }, [])

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            {/* Product Image */}
            <div className="relative aspect-square bg-gray-100">
                <img
                    src={product.imageURL}
                    alt={product.name}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Product Information */}
            <div className="space-y-3 p-4">

                <div className="flex items-center justify-between">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${product.stock > 0
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}>
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>

                    <span className="text-xs text-gray-500">
                        {product.stock} available
                    </span>
                </div>

                <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
                    {product.name}
                </h2>

                <p className="line-clamp-2 text-sm text-gray-600">
                    {product.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                    <p className="text-xl font-bold text-gray-900">
                        ৳{Number(product.price).toLocaleString("en-BD")}
                    </p>

                    {
                        user?.role === "ADMIN" ? (
                            <div className="flex p-2 w-full items-center gap-2">
                                {/* View */}
                                <Link
                                    href={`/product/${product.id}`}
                                    className="flex flex-1 items-center justify-center rounded-lg bg-blue-600 px-2 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                                    title="View Product"
                                >
                                    View
                                </Link>

                                {/* Edit */}
                                <Link
                                    href={`/adminDashboard/products/edit/${product.id}`}
                                    className="flex flex-1 items-center justify-center rounded-lg bg-amber-500 px-2 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
                                    title="Edit Product"
                                >
                                    Edit
                                </Link>

                                {/* Delete */}
                                <button
                                    onClick={() => console.log("Delete product:", product.id)}
                                    className="flex flex-1 items-center justify-center rounded-lg bg-red-600 px-2 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                                    title="Delete Product"
                                >
                                    Delete
                                </button>
                            </div>
                        ) : (
                            <Link
                                href={`/product/${product.id}`}
                                className="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                            >
                                View Details
                            </Link>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default ProductCard;
