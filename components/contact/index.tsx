// DONE REVIEWING: GITHUB COMMIT 2️⃣

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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-xl-7 px-6 lg:px-8">
        <div className="mx-auto max-w-xl-2 lg:mx-0">
          <h2 className="text-xl-3 font-bold leading-tight tracking-tight text-neutral-950 sm:text-xl-4">
            Contact <span className="text-yellow-500">Us</span>.
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Do you have any questions or need assistance with our services?
            Please do not hesitate to contact us today!
          </p>
        </div>
        <div className="mx-auto mt-20 max-w-lg space-y-16">
          {contacts.map((element) => (
            <div>Contact Element</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
