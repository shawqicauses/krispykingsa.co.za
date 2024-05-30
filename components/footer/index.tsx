// DONE REVIEWING: GITHUB COMMIT 3️⃣

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
    <footer className="bg-neutral-900/25">
      <div className="mx-auto max-w-xl-7 overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {navigation.main.map((element) => (
            <div key={element.name}>
              <Link
                href={element.href}
                className="text-sm font-medium leading-6 text-white transition-all duration-300 ease-in-out hover:text-red-600">
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
                className="text-white transition-all duration-300 ease-in-out hover:text-red-600">
                <span className="sr-only">{element.name}</span>
                <element.icon className="h-5 w-5" />
              </Link>
            )
          })}
        </div>
        <p className="mt-10 text-center text-sm leading-5 text-neutral-400">
          &copy; 2024{" "}
          <span className="font-medium text-white">Krispy King</span>, Inc.
          Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
