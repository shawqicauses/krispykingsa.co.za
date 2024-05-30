// DONE REVIEWING: GITHUB COMMIT 5️⃣

import {ChevronRightIcon} from "@heroicons/react/24/outline"
import Link from "next/link"
import {ReactNode} from "react"

type ContactSingle = {
  icon: ReactNode
  title: string
  description: string
  link: {
    content: string
    href: string
  }
}

type ContactProps = {
  contacts: ContactSingle[]
}

const Contact = function Contact({contacts}: ContactProps) {
  return (
    <div className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-xl-7 px-6 lg:px-8">
        <div className="mx-auto max-w-xl-2 lg:mx-0">
          <h2 className="text-xl-3 font-bold leading-tight tracking-tight text-white sm:text-xl-4">
            Contact <span className="text-yellow-500">Us</span>.
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Do you have any questions or need assistance with our services?
            Please do not hesitate to contact us today!
          </p>
        </div>
        <div className="-mx-px mt-20 grid grid-cols-1 gap-4 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((element) => (
            <div className="group flex gap-x-6 rounded-lg border border-neutral-800 bg-neutral-900 p-4 sm:p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600">
                {element.icon}
              </div>
              <div>
                <h3 className="text-base font-semi-bold leading-none text-white sm:text-lg">
                  {element.title}
                </h3>
                <p className="mt-3 text-sm leading-normal text-neutral-400">
                  {element.description}
                </p>
                <p className="mt-6">
                  <Link
                    href={element.link.href}
                    className="flex items-center gap-3 text-sm font-semi-bold leading-none text-red-500"
                    style={{wordBreak: "break-word"}}>
                    {element.link.content}
                    <ChevronRightIcon
                      strokeWidth={1.5}
                      className="h-4 w-4 text-current"
                    />
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
