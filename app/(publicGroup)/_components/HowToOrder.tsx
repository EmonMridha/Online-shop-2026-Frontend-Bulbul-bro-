const steps = [
  {
    number: "01",
    title: "Browse & Select",
    description: "Explore our collections and add your favorite items to the cart.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Add to Cart",
    description: "Review your items, choose size and quantity, then proceed to checkout.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Secure Checkout",
    description: "Enter your shipping details and pay with your preferred method.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Fast Delivery",
    description: "Track your order and receive it at your doorstep within 2–5 days.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

export default function HowToOrder() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          How to Order
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Four simple steps from browsing to unboxing.
        </p>
      </div>

      {/* Steps */}
      <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Connecting line (desktop only) */}
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-gray-200 lg:block" />

        {steps.map((step) => (
          <div key={step.number} className="relative text-center">
            {/* Icon circle */}
            <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900">
              {step.icon}
            </div>

            {/* Number + Title */}
            <span className="mt-4 block text-xs font-semibold tracking-widest text-gray-400">
              STEP {step.number}
            </span>
            <h3 className="mt-1 text-base font-semibold text-gray-900">
              {step.title}
            </h3>
            <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-gray-500">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <a
          href="/shop"
          className="inline-block rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          Start Shopping
        </a>
      </div>
    </section>
  );
}