// DONE REVIEWING: GITHUB COMMIT 5️⃣

"use client"

import {Dialog, DialogPanel} from "@headlessui/react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"
import Link from "next/link"
import {useState} from "react"

const navigation = [
  {name: "Sauces", href: "/sauces"},
  {name: "Menu", href: "/menu"},
  {name: "Franchise", href: "/franchise"},
  {name: "Contact", href: "/contact"}
]

const Logo = function Logo() {
  return (
    <Link
      href="/"
      className="text-neutral-950 -m-1.5 p-1.5 text-base font-semi-bold uppercase leading-none tracking-widest">
      <span className="text-red-600">Krispy</span> King.
    </Link>
  )
}

const Hero = function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const classes = {
    link: {
      base: "text-neutral-950 -mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-all duration-300 ease-in-out hover:bg-neutral-50",
      lg: "text-neutral-950 text-sm font-medium leading-none transition-all duration-300 ease-in-out hover:text-red-600"
    }
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-xl-7 items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-neutral-950 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
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
              className={classes.link.lg}>
              {element.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/order-now" className={classes.link.lg}>
            Order Now
            <span aria-hidden="true" className="ml-2">
              &rarr;
            </span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-100">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="text-neutral-950 -m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close Main Menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flw-root mt-6">
            <div className="-my-6 divide-y divide-neutral-100">
              <div className="space-y-2 py-6">
                {navigation.map((element) => (
                  <Link
                    key={element.href}
                    href={element.href}
                    className={classes.link.base}>
                    {element.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link href="/order-now" className={classes.link.base}>
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Hero
