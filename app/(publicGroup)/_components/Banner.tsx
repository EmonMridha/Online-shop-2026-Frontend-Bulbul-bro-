import Image from "next/image";

export default function HeroBanner() {
    return (
        <section className="relative w-full h-[500px] md:h-[600px]">
            {/* Background Image */}
            <Image
                src='/_images/pexels-olly-3775547.jpg'
                alt="Hero Banner"
                fill
                className="object-cover"
                priority
                sizes="100vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                <span className="mb-4 text-sm font-semibold tracking-widest text-white/80 uppercase">
                    New Collection
                </span>
                <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    Discover Your Perfect Style
                </h1>
                <p className="mt-4 max-w-md text-base text-white/80 md:text-lg">
                    Shop the latest trends with free shipping on orders over $50.
                </p>
                <a
                    href="/shop"
                    className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                    Shop Now
                </a>
            </div>
        </section>
    );
}