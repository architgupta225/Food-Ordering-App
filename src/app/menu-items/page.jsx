"use client"
import { useProfile } from "@/components/UserProfile"
import Right from "@/components/icons/Right"
import UserTabs from "@/components/layout/UserTabs"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function MenuItemsPage() {
    const { loading, data } = useProfile();

    const [menuItems, setMenuItems] = useState([])


    useEffect(() => {
        fetch('/api/menu-items').then(res => {
            res.json().then(menuItems => {
                setMenuItems(menuItems)
            })
        })
    }, [])

    if (loading) {
        return 'Loading user info...'
    }

    if (!(data?.admin)) {
        return 'Not an admin'
    }

    return (
        <section className="mt-8 max-w-2xl mx-auto">
            <UserTabs isAdmin={true} />
            <div className="mt-8">
                <Link className="button" href={'/menu-items/new'}>Create new menu item<Right /></Link>
            </div>
            <div>
                <h2 className="text-sm text-gray-500 mt-4">Edit menu items</h2>
                <div className="grid grid-cols-3 gap-2">
                    {menuItems?.length > 0 && menuItems.map(item => (
                        <Link
                        key={item._id}
                         href={'/menu-items/edit/' + item._id} 
                         className="bg-gray-300 rounded-lg p-4">
                            <div className="relative text-center">
                                <Image src={item.image} alt={''} width={200} height={200} className="rounded-md" />
                                <div className="text-center">
                                    {item.name}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}