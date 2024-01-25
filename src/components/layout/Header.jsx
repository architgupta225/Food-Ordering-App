"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../AppContext";
import ShoppingCart from "../icons/ShoppingCart";
import Bars2 from "../icons/Bars2";

function AuthLinks({ status, userName }) {
  if (status === 'authenticated') {
    return (
      <>
        <Link href={"/profile"} className="whitespace-nowrap">Hello, {userName}</Link>
        <button onClick={() => signOut()} className='bg-primary text-white px-8 py-2 rounded-full' >Logout</button>
      </>
    )
  } else {
    return (
      <>
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'} className='bg-primary text-white px-8 py-2 rounded-full' >Register</Link>
      </>
    )
  }

}

export default function Header() {
  const session = useSession();
  const status = session.status;
  const userData = session.data?.user;

  const { cartProducts } = useContext(CartContext)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  let userName = userData?.name || userData?.email;

  if (userName && userName?.includes(' ')) {
    userName = userName.split(' ')[0]
  }

  return (
    <header >
      <div className="flex md:hidden justify-between">
        <Link className="text-primary font-semibold text-2xl" href="/">PIZZA BYTE</Link>
        <div className="flex gap-8 items-center">
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
            {cartProducts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-1 py-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
          <button className="p-1 border"
            onClick={() => setMobileNavOpen(prev => !prev)}>
            <Bars2 />
          </button>
        </div>
      </div>
      {mobileNavOpen &&
        (
          <div
            onClick={() => setMobileNavClose(false)}
            className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center">
            <Link href={'/'}>HOME</Link>
            <Link href={'/menu'}>MENU</Link>
            <Link href={'/#about'}>ABOUT</Link>
            <Link href={'/#contact'}>CONTACT</Link>
            <AuthLinks status={status} userName={userName} />

          </div>
        )
      }

      <div className='hidden md:flex items-center justify-between'>
        <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
          <Link href={'/'}>HOME</Link>
          <Link href={'/menu'}>MENU</Link>
          <Link href={'/#about'}>ABOUT</Link>
          <Link href={'/#contact'}>CONTACT</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <AuthLinks status={status} userName={userName} />
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
            {cartProducts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-1 py-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            )}
          </Link>
        </nav>
      </div>

    </header>
  )
}