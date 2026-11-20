export const getAllProduct = async () => {
    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

    // GEtting all products from the backend API
    const res = await fetch(`${backendURL}/api/products`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json();
};