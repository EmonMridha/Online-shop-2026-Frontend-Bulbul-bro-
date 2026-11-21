
import Image from "next/image";
import { Product } from "../product/page";
import Link from "next/link";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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

                    <Link href={`/product/${product.id}`}>
                        <button
                            disabled={product.stock === 0}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                        >
                            View Details
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;
