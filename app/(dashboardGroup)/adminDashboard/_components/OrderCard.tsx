import { Order } from "../orders/page";


interface OrderCardProps {
    order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {

    const statusStyles: Record<Order["status"], string> = {
        PENDING: "bg-yellow-100 text-yellow-700",
        CONFIRMED: "bg-blue-100 text-blue-700",
        SHIPPED: "bg-purple-100 text-purple-700",
        DELIVERED: "bg-green-100 text-green-700",
        CANCELLED: "bg-red-100 text-red-700",
    };

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition font-sans text-xl hover:shadow-md">

            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4">
                <div>
                    <p className="text-xs text-gray-500">Order ID</p>
                    <h2 className="font-semibold text-gray-900">
                        #{order.id.slice(-8).toUpperCase()}
                    </h2>
                </div>

                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[order.status]}`}>
                    {order.status}
                </span>
            </div>

            {/* Customer Information */}
            <div className="space-y-2 border-b py-4">
                <h3 className="font-semibold text-gray-800">
                    Customer Information
                </h3>

                <p className="text-sm text-gray-700">
                    <span className="font-medium">Name:</span> {order.customerName}
                </p>

                <p className="text-sm text-gray-700">
                    <span className="font-medium">Phone:</span> {order.phone}
                </p>

                <p className="text-sm text-gray-700">
                    <span className="font-medium">Address:</span> {order.address}
                </p>
            </div>

            {/* Order Items */}
            <div className="border-b py-4">
                <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">
                        Order Items
                    </h3>

                    <span className="text-xs text-gray-500">
                        {order.items.length} different products
                    </span>
                </div>

                <div className="space-y-3">
                    {order.items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between gap-3 text-sm"
                        >
                            <div>
                                <p className="font-medium text-gray-800">
                                    Product ID: {item.productId.slice(-8)}
                                </p>
                                <p className="text-xs text-gray-500">
                                    Quantity: {item.quantity}
                                </p>
                            </div>

                            <p className="font-medium text-gray-900">
                                ৳{(Number(item.price) * item.quantity).toLocaleString("en-BD")}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
                <div>
                    <p className="text-xs text-gray-500">Order Total</p>
                    <p className="text-xl font-bold text-gray-900">
                        ৳{Number(order.total).toLocaleString("en-BD")}
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-xs text-gray-500">Order Date</p>
                    <p className="text-sm font-medium text-gray-700">
                        {new Date(order.createdAt).toLocaleDateString("en-BD")}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default OrderCard;
