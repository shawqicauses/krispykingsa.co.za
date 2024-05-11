// DONE REVIEWING: GITHUB COMMIT 3️⃣

"use client"

import {Bars3Icon} from "@heroicons/react/24/outline"
import Link from "next/link"
import {useState} from "react"

const navigation = [
  {name: "Sauces", href: "/sauces"},
  {name: "Menu", href: "/menu"},
  {name: "Franchise", href: "/franchise"},
  {name: "Contact", href: "/contact"}
]

const Hero = function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-xl-7 items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="text-neutral-950 -m-1.5 p-1.5 text-lg font-semi-bold uppercase leading-none tracking-widest">
              <span className="text-red-600">Krispy</span> King.
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open Main Menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((element) => (
              <Link
                key={element.href}
                href={element.href}
                className="text-neutral-950 text-sm font-medium leading-none transition-all duration-300 ease-in-out hover:text-red-600">
                {element.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/order-now"
              className="text-neutral-950 text-sm font-medium leading-none transition-all duration-300 ease-in-out hover:text-red-600">
              Order Now
              <span aria-hidden="true" className="ml-2">
                &rarr;
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Hero
