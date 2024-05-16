// DONE REVIEWING: GITHUB COMMIT 3️⃣

import {StarIcon} from "@heroicons/react/24/solid"
import Image from "next/image"
import {classNames} from "../../helpers/lib"

type TestimonialSingle = {
  id: string
  user: {
    image: string
    name: string
    title: string
  }
  body: string
  rating: number
}

type TestimonialProps = {
  testimonials: TestimonialSingle[]
}

const Testimonial = function Testimonial({testimonials}: TestimonialProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-xl-7 px-6 lg:px-8">
        <div className="mx-auto grid max-w-xl-2 grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((element) => (
            <div
              key={element.id}
              className="flex flex-col odd:pb-10 even:border-t even:border-neutral-950/10 even:pt-10 sm:odd:pb-16 sm:even:pt-16 lg:odd:pb-0 lg:odd:pr-8 lg:even:border-l lg:even:border-t-0 lg:even:pl-8 lg:even:pt-0 xl:odd:pr-20 xl:even:pl-20">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    aria-hidden="true"
                    className={classNames(
                      element.rating > rating
                        ? "text-yellow-500"
                        : "text-neutral-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                  />
                ))}
              </div>
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-950">
                  <p>{element.body}</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image
                    src={element.user.image}
                    alt={element.user.name}
                    fill
                    className="!static !h-14 !w-14 rounded-full bg-neutral-50 object-cover object-top"
                  />
                  <div className="flex flex-col">
                    <div className="text-base font-medium leading-none text-neutral-950">
                      {element.user.name}
                    </div>
                    <div className="mt-2 text-sm leading-none text-neutral-500">
                      {element.user.title}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
