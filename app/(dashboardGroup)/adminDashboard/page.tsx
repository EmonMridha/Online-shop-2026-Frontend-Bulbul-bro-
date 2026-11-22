
const stats = [
  { title: "Total Products", value: "24" },
  { title: "Total Orders", value: "58" },
  { title: "Pending Orders", value: "8" },
  { title: "Delivered Orders", value: "42" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome Back, Admin!
        </h2>
        <p className="mt-1 text-gray-500">
          Here is what is happening with your shop.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-gray-500">
              {stat.title}
            </p>

            <h3 className="mt-3 text-3xl font-bold text-gray-900">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">
          Quick Actions
        </h3>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="/admin/products/new"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
          >
            + Launch Product
          </a>

          <a
            href="/admin/orders"
            className="rounded-lg border px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Manage Orders
          </a>
        </div>
      </div>

    </div>
  );
}
