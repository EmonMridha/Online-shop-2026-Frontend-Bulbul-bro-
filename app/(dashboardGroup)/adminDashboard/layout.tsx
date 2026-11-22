
"use client";

import { getCurrentUser } from "@/app/(authGroup)/_actions/authAction";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export interface CurrentUser {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    role: "ADMIN" | "CUSTOMER";
    createdAt: string;
    updatedAt: string;
}

export interface CurrentUserResponse {
    success: boolean;
    message: string;
    data: CurrentUser;
}

const navigation = [
    {
        name: "Home",
        href: "/adminDashboard",
        icon: "⌂",
    },
    {
        name: "Launch Product",
        href: "/adminDashboard/launchProduct",
        icon: "+",
    },
    {
        name: "Products",
        href: "/adminDashboard/products",
        icon: "▣",
    },
    {
        name: "Orders",
        href: "/adminDashboard/orders",
        icon: "▤",
    },
    {
        name: "Inventory",
        href: "/adminDashboard/inventory",
        icon: "▦",
    },
    {
        name: "Customers",
        href: "/adminDashboard/customers",
        icon: "♙",
    },
];

const settingsNavigation = [
    {
        name: "Store Settings",
        href: "/adminDashboard/settings",
        icon: "⚙",
    },
];

export default function AdminLayout({ children }: { children: React.ReactNode; }) {

    const [user, setUser] = useState<CurrentUser | null>(null);

    const pathname = usePathname(); // this tells us which route the user is currently on
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isActive = (href: string) => {

        return href === pathname // checking if the current route matches the href of the button user clicked on.
    }

    const renderLinks = (items: typeof navigation) =>
        items.map((item) => {
            const active = isActive(item.href);

            return (
                <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${active
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                >
                    <span className="w-5 text-center text-lg">
                        {item.icon}
                    </span>

                    {item.name}
                </Link>
            );
        });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await getCurrentUser();
                setUser(result)

            } catch (error) {
                console.log(error);
            }
        }
        fetchUser()
    }, [])

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r bg-white transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Brand */}
                <div className="flex h-20 items-center justify-between border-b px-6">
                    <Link href="/admin" className="text-xl font-bold text-gray-900">
                        Bulbul Bhai Shop
                    </Link>

                    {/* close sidebar button */}
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-2xl text-gray-500 lg:hidden"
                        aria-label="Close menu"
                    >
                        &times;
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-7 overflow-y-auto p-4">

                    <div>
                        <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                            Main Menu
                        </p>

                        <div className="space-y-1">
                            {renderLinks(navigation)}
                        </div>
                    </div>

                    <div>
                        <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                            Preferences
                        </p>

                        <div className="space-y-1">
                            {renderLinks(settingsNavigation)}
                        </div>
                    </div>

                </nav>

                {/* Sidebar Footer */}
                <div className="border-t p-4">
                    <Link
                        href="/"
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
                    >
                        <span>↗</span>
                        Visit Store
                    </Link>
                </div>
            </aside>

            {/* Main Area */}
            <div className="min-h-screen lg:pl-72">

                {/* Topbar */}
                <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-white px-4 sm:px-6 lg:px-8">

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="rounded-lg p-2 text-2xl text-gray-600 hover:bg-gray-100 lg:hidden"
                            aria-label="Open menu"
                        >
                            ☰
                        </button>

                        <div>
                            <h1 className="text-lg font-semibold text-gray-900">
                                Admin Dashboard
                            </h1>
                            <p className="hidden text-xs text-gray-500 sm:block">
                                Manage your shop and orders
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3">
                            <div className="hidden text-right sm:block">
                                <p className="text-sm font-medium text-gray-900">
                                    {user?.name || "Loading..."}
                                </p>

                                <p className="text-xs text-gray-500">
                                    {user?.email || ""}
                                </p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                                {user?.name?.charAt(0).toUpperCase() || "A"}
                            </div>
                        </div>
                    </div>

                </header>

                {/* Page Content */}
                <main className="p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
