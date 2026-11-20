import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Oversized Wool Coat",
    price: 189.0,
    originalPrice: 240.0,
    image: "/products/coat.jpg",
    badge: "Sale",
  },
  {
    id: 2,
    name: "Classic Leather Tote",
    price: 145.0,
    image: "/products/tote.jpg",
    badge: "New",
  },
  {
    id: 3,
    name: "Knit Crewneck Sweater",
    price: 78.0,
    image: "/products/sweater.jpg",
  },
  {
    id: 4,
    name: "Minimalist Sneakers",
    price: 110.0,
    originalPrice: 130.0,
    image: "/products/sneakers.jpg",
    badge: "Sale",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Featured Products
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Handpicked favorites from our latest collection
          </p>
        </div>
        <Link
          href="/shop"
          className="hidden text-sm font-semibold text-gray-900 underline-offset-4 hover:underline md:block"
        >
          View all
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Badge */}
              {product.badge && (
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
                    product.badge === "Sale"
                      ? "bg-red-600 text-white"
                      : "bg-gray-900 text-white"
                  }`}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="mt-3">
              <h3 className="text-sm font-medium text-gray-900 transition group-hover:text-gray-600">
                {product.name}
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile "View all" */}
      <div className="mt-8 text-center md:hidden">
        <Link
          href="/shop"
          className="inline-block rounded-full border border-gray-900 px-6 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
        >
          View all products
        </Link>
      </div>
    </section>
  );
}