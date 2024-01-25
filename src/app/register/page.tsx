"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [creatingUser, setCreatingUser] = useState(false)
    const [userCreated, setUserCreated] = useState(false)
    const [error, setError] = useState(false)

    async function handleSubmit(e: any) {
        e.preventDefault();
        setCreatingUser(true)
        setError(false)
        setUserCreated(false)
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ name, number, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            setUserCreated(true)
        }else{
            setError(true)
        }
        setCreatingUser(false)
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">Register</h1>
            {userCreated && (
                <div className="my-4 text-center">
                    User Created.<br /> Now you can{' '}
                    <Link href={"/login"} className="underline">Login &raquo;</Link>
                </div>
            )}
            {error && (
                <div className="my-4 text-center">
                    An error as occurred<br /> Please Try Again Later
                </div>
            )}
            <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
                <input type="text" placeholder="name" value={name} disabled={creatingUser} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="number" value={number} disabled={creatingUser} onChange={(e) => setNumber(e.target.value)} />
                <input type="email" placeholder="email" value={email} disabled={creatingUser} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} disabled={creatingUser} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" disabled={creatingUser}>Register</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button className="flex gap-4 justify-center" onClick={() => signIn('google', {callbackUrl: '/'})}>
                    <Image src={'/google.png'} alt='' width={24} height={24} />
                    Login with google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing Account? <Link className="underline" href={'/login'}>Login Here &raquo;</Link>
                </div>
            </form>
        </section>
    )
}