export const getAllProduct = async (page: number, limit: number) => {
    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL; // accessing the backend url from .env

    // GEtting all products from the database
    const res = await fetch(`${backendURL}/api/products?page=${page}&limit=${limit}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json();
};

export const getSingleProduct = async (id: string) => {
    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL; // accessing the backend url from .env

    // GEtting single product for db
    const res = await fetch(`${backendURL}/api/products/${id}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed to fetch single product");
    }

    return res.json();
}