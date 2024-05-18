// DONE REVIEWING: GITHUB COMMIT 2️⃣

import Link from "next/link"
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs"

const navigation = {
  main: [
    {name: "Sauces", href: "/sauces"},
    {name: "Menu", href: "/menu"},
    {name: "Our Story", href: "/our-story"},
    {name: "Franchise", href: "/franchise"},
    {name: "Contact", href: "/contact"}
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: ({className}: {className: string}) => (
        <BsFacebook className={className} />
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: ({className}: {className: string}) => (
        <BsInstagram className={className} />
      )
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: ({className}: {className: string}) => (
        <BsTwitter className={className} />
      )
    }
  ]
}

const Footer = function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-xl-7 overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12">
          {navigation.main.map((element) => (
            <div key={element.name} className="pb-6">
              <Link
                href={element.href}
                className="text-sm font-medium leading-6 text-neutral-950 transition-all duration-300 ease-in-out hover:text-red-600">
                {element.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((element) => {
            return (
              <Link
                key={element.name}
                href={element.href}
                className="text-neutral-950 transition-all duration-300 ease-in-out hover:text-red-600">
                <span className="sr-only">{element.name}</span>
                <element.icon className="h-5 w-5" />
              </Link>
            )
          })}
        </div>
        <p className="mt-10 text-center text-sm leading-5 text-neutral-500">
          &copy; 2024{" "}
          <span className="font-medium text-neutral-950">Krispy King</span>,
          Inc. Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
