
'use client'

import ProductCard from "@/app/(publicGroup)/_components/ProductCard";
import { getAllOrders } from "@/lib/services/orderService";
import { getAllProduct } from "@/lib/services/productService"
import { useEffect, useState } from "react"
import OrderCard from "../_components/OrderCard";

export interface OrderItem {
    id: string;
    orderId: string;
    productId: string;
    quantity: number;
    price: string;
}

export interface Order {
    id: string;
    customerName: string;
    phone: string;
    address: string;
    total: string;
    status: "PENDING" | "CONFIRMED" | "SHIPPED" | "DELIVERED" | "CANCELLED";
    createdAt: string;
    updatedAt: string;
    items: OrderItem[];
}

const Orders = () => {
    const [orders, setOrders] = useState<Order[] | []>([])
    console.log('from orders page', orders);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true)

    const limit = 8;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const result = await getAllOrders(currentPage, limit) // getting all products
                console.log('from orders page1', result.data.data);
                setOrders(result.data)

            } catch (error) {
                console.error("Failed to fetch products:", error)
            }
        }

        fetchOrders()
    }, [currentPage])

    return (
        <div className="mx-auto max-w-7xl px-4 py-8">

            <h1 className="mb-6 text-3xl font-bold">
                All Orders: {orders.length}
            </h1>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                {orders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                ))}
            </div>

        </div>
    )


}

export default Orders
