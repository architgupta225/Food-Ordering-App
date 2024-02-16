"use client"
import EditableImage from "@/components/layout/EditableImage";
import UserForm from "@/components/layout/UserForm";
import UserTabs from "@/components/layout/UserTabs";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
    const session = useSession()
    console.log("🚀 ~ ProfilePage ~ session:", session)

    const [user, setUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [profileFetched, setProfileFetched] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isRedirect, setIsRedirect] = useState(false)

    useEffect(() => {
        if (session.status === 'authenticated') {
            fetch('api/profile').then(response => {
                response.json().then(data => {
                    setUser(data)
                    setIsAdmin(data.admin)
                    setProfileFetched(true)
                    setIsLoading(false)
                })
            });
        }
        if (session.status === 'loading') {
            setIsLoading(true)
        }

        if (session.status === 'unauthenticated') {
            console.log("hello")
            setIsRedirect(true)
        }
    }, [session.status])


    async function handleProfileInfoUpdate(ev, data) {
        ev.preventDefault();
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            if (response.ok)
                resolve();
            else
                reject()
        })
        await toast.promise(savingPromise, {
            loading: 'Saving',
            success: 'Profile Saved!',
            error: 'Error saving profile'
        })
    }

    if (isRedirect) {
        return redirect('/login');
    }

    if (isLoading || !profileFetched) {
        return <>Loading...</>
    }

    return (
        <section className="mt-8">
            <UserTabs isAdmin={isAdmin} />
            <div className="max-w-2xl mx-auto mt-8">
                <UserForm user={user} onSave={handleProfileInfoUpdate} />
            </div>
        </section>
    )
}