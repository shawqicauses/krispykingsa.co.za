// DINE REVIEWING: GITHUB COMMIT 2️⃣

import {StarIcon} from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import {classNames} from "../../helpers/lib"

type MenuSingle = {
  id: string
  image: string
  name: string
  price: number
  rating: number
  reviewCount: number
}

type MenuProps = {
  menu: MenuSingle[]
}

const Menu = function Menu({menu}: MenuProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl-7 overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Menu</h2>
        <div className="-mx-px grid grid-cols-1 gap-4 xs:grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {menu.map((element) => (
            <div
              key={element.id}
              className="group relative rounded-lg p-4 transition-all duration-300 ease-in-out odd:bg-yellow-50 even:bg-red-50 odd:hover:bg-yellow-500 even:hover:bg-red-600 sm:p-6">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-neutral-100 transition-all duration-300 ease-in-out group-hover:opacity-75">
                <Image
                  src={element.image}
                  alt={element.name}
                  fill
                  className="static h-full w-full object-cover"
                />
              </div>
              <div className="pb-4 pt-10 text-center">
                <h3 className="text-sm font-medium text-neutral-950 transition-all duration-300 ease-in-out group-hover:text-white">
                  <Link href={`/menu/${element.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {element.name}
                  </Link>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{element.rating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          element.rating > rating
                            ? "text-yellow-500 group-hover:text-white"
                            : "text-neutral-200 odd:group-hover:text-yellow-700 even:group-hover:text-red-700",
                          "h-5 w-5 flex-shrink-0 transition-all duration-300 ease-in-out"
                        )}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm transition-all duration-300 ease-in-out odd:text-yellow-700 even:text-red-700 group-hover:text-white">
                    {element.reviewCount} reviews
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-neutral-950 transition-all duration-300 ease-in-out group-hover:text-white">
                  ${element.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
