import { getSingleProduct } from '@/lib/services/productService';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params

  const result = await getSingleProduct(id);
  const product = result.data

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

        {/* Product Image */}
        <div className="overflow-hidden rounded-2xl bg-gray-100">
          <img
            src={product.imageURL}
            alt={product.name}
            className="h-full max-h-[500px] w-full object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">

          <span className={`mb-4 w-fit rounded-full px-3 py-1 text-sm font-medium ${product.stock > 0
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
            }`}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>

          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {product.name}
          </h1>

          <p className="mb-6 text-2xl font-bold text-blue-600">
            ৳{Number(product.price).toLocaleString("en-BD")}
          </p>

          <div className="mb-6">
            <h2 className="mb-2 text-lg font-semibold">
              Product Description
            </h2>

            <p className="leading-7 text-gray-600">
              {product.description}
            </p>
          </div>

          <div className="mb-8 space-y-3 border-y border-gray-200 py-5">
            <div className="flex justify-between">
              <span className="text-gray-500">Availability</span>
              <span className="font-medium">
                {product.stock} pieces
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Product ID</span>
              <span className="text-sm text-gray-600">
                {product.id}
              </span>
            </div>
          </div>

          <button
            disabled={product.stock === 0}
            className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {product.stock > 0 ? "Order Now" : "Out of Stock"}
          </button>

        </div>
      </div>
    </section>
  )
}

export default page