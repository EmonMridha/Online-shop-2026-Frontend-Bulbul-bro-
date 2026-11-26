'use client'
import { getCurrentUser } from "@/app/(authGroup)/_actions/authAction";
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export type User = {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    role: string;
};

export function Nav() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getCurrentUser();
            setUser(userData || null);
        }
        fetchUser()
    }, [])
    return (

        <Navbar fluid rounded>
            <NavbarBrand href="/">
                {/* <img
                    src="/favicon.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Shop Logo"
                /> */} <p className="text-white">logo</p>
                <span className="self-center whitespace-nowrap text-xl text-green-700 font-semibold">
                    Bulbul Bhai Shop
                </span>
            </NavbarBrand>

            {/* Right side controls */}
            <div className="flex items-center gap-3 md:order-2">

                {user ? (
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt="User settings"
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded
                            />
                        }
                    >
                        <DropdownHeader>
                            <span className="block text-sm">
                                {user.name}
                            </span>

                            <span className="block truncate text-sm font-medium">
                                {user.email}
                            </span>
                        </DropdownHeader>

                        <DropdownItem>Dashboard</DropdownItem>
                        <DropdownItem>Settings</DropdownItem>
                        <DropdownDivider />
                        <DropdownItem>Sign out</DropdownItem>
                    </Dropdown>
                ) : (
                    <Link href={'/auth/login'}>
                        <Button className="bg-amber-50 text-black">Login</Button>
                    </Link>
                )}

                <NavbarToggle />
            </div>

            <NavbarCollapse>
                <NavbarLink href="/" active>
                    Home
                </NavbarLink>
                <NavbarLink href="/product">
                    Products
                </NavbarLink>
                <NavbarLink href="/adminDashboard">
                    Admin Dashboard
                </NavbarLink>
                <NavbarLink href="/contact">
                    Contact
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>

    );
}
