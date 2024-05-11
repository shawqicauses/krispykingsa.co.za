// DONE REVIEWING: GITHUB COMMIT 2️⃣

"use client"

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
        </nav>
      </header>
    </div>
  )
}

export default Hero
