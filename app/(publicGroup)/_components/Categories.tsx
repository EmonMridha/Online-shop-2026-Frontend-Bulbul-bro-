import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        name: "Women",
        slug: "women",
        image: "/_images/pexels-a-darmel-8989592.jpg",
        count: 128,
    },
    {
        name: "Men",
        slug: "men",
        image: "/_images/pexels-maide-arslan-128712163-28452448.jpg",
        count: 96,
    },
    {
        name: "Accessories",
        slug: "accessories",
        image: "/_images/pexels-27-1-418919857-15735139.jpg",
        count: 54,
    },
    {
        name: "Footwear",
        slug: "footwear",
        image: "/_images/pexels-rainpexels-7887198.jpg",
        count: 72,
    },
];

export default function CategoriesSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
            {/* Header */}
            <div className="mb-10 flex items-end justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                        Shop by Category
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Find exactly what you are looking for
                    </p>
                </div>

            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                {categories.map((category) => (
                    <Link
                        key={category.slug}
                        href={`/categories/${category.slug}`}
                        className="group relative aspect-[3/4] overflow-hidden rounded-xl"
                    >
                        <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover transition duration-500 group-hover:scale-105"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Text */}
                        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                            <h3 className="text-base font-semibold text-white md:text-lg">
                                {category.name}
                            </h3>
                            <p className="mt-0.5 text-xs text-white/70">
                                {category.count} products
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}