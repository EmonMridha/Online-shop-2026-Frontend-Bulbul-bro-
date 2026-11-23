export const getAllOrders = async (page: number, limit: number) => {
    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL; // accessing the backend url from .env

    // Getting all orders from the database
    const res = await fetch(`${backendURL}/api/orders?page=${page}&limit=${limit}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed to fetch orders");
    }

    const result = await res.json();

    console.log('from orderService', result.data);

    return result.data
}
