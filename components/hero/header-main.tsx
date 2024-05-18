"use client"

// DONE REVIEWING: GITHUB COMMIT 4️⃣
import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {animations} from "../../helpers/lib"

const Header = function Header() {
  const id = "header-background-pattern"
  const classes = {
    image:
      "!static bg-neutral-950/5 aspect-[2/3] w-full rounded-xl object-cover shadow-lg",
    imageDiv:
      "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-neutral-50"
  }

  return (
    <main>
      <div className="relative isolate">
        {/* Built Using Tailwind CSS UI ✨ */}
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-neutral-200"
          style={{
            maskImage:
              "radial-gradient(32rem 32rem at center, white, transparent)"
          }}>
          <defs>
            <pattern
              id={id}
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse">
              <path fill="none" d="M.5 200V.5H200" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-neutral-50">
            <path
              strokeWidth={0}
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill={`url(#${id})`}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-xl-3 lg:ml-24 xl:ml-48">
          <div
            className="aspect-[800/1036] w-[50rem] bg-gradient-to-tr from-red-200 to-yellow-200 opacity-30"
            style={{
              clipPath:
                "polygon(63% 29%, 100% 17%, 76% 3%, 48% 0%, 44% 4%, 54% 25%, 59% 49%, 55% 57%, 44% 57%, 27% 47%, 35% 81%, 0% 97%, 39% 100%, 35% 81%, 97% 52%, 63% 29%)"
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-xl-7 px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-xl-2 gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-xl-2">
                <motion.h1
                  variants={animations.header.element(0)}
                  initial="hidden"
                  whileInView="visible"
                  className="text-xl-4 font-bold leading-tight tracking-tight text-neutral-950 sm:text-xl-5 lg:text-xl-6">
                  Delicious Food &{" "}
                  <span className="underline decoration-4 underline-offset-2">
                    Memorable
                  </span>{" "}
                  Dining Experience
                  <span className="text-red-600">.</span>
                </motion.h1>
                <motion.p
                  variants={animations.header.element(0.2)}
                  initial="hidden"
                  whileInView="visible"
                  className="mt-6 text-lg leading-8 text-neutral-600 sm:max-w-md lg:max-w-none">
                  Indulge in our mouth-watering dishes and savor the flavors of{" "}
                  <span className="font-semi-bold italic text-neutral-950">
                    Krispy King
                  </span>
                  . Whether you are craving our famous fried chicken or our
                  delectable sides, we guarantee a dining experience that will
                  leave you wanting more.
                </motion.p>
                <div className="mt-10 flex items-center gap-x-6">
                  <motion.div
                    variants={animations.header.element(0.4)}
                    initial="hidden"
                    whileInView="visible">
                    <Link
                      href="/menu"
                      className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                      Our Menu
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={animations.header.element(0.6)}
                    initial="hidden"
                    whileInView="visible">
                    <Link
                      href="/order-now"
                      className="text-sm font-medium leading-6 text-neutral-950">
                      Order Now <span aria-hidden="true">→</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <motion.div
                    variants={animations.header.element(0)}
                    initial="hidden"
                    whileInView="visible"
                    className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1593926364558-d0084b2cd09e"
                      alt="Food - 01"
                      fill
                      className={classes.image}
                    />
                    <div className={classes.imageDiv} />
                  </motion.div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <motion.div
                    variants={animations.header.element(0.2)}
                    initial="hidden"
                    whileInView="visible"
                    className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1607430986366-f9f767a9fc95"
                      alt="Food - 02"
                      fill
                      className={classes.image}
                    />
                    <div className={classes.imageDiv} />
                  </motion.div>
                  <motion.div
                    variants={animations.header.element(0.4)}
                    initial="hidden"
                    whileInView="visible"
                    className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1595483149986-ec5751f2fbbd"
                      alt="Food - 03"
                      fill
                      className={classes.image}
                    />
                    <div className={classes.imageDiv} />
                  </motion.div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <motion.div
                    variants={animations.header.element(0.6)}
                    initial="hidden"
                    whileInView="visible"
                    className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1608376156952-5e350ca26284"
                      alt="Food - 04"
                      fill
                      className={classes.image}
                    />
                    <div className={classes.imageDiv} />
                  </motion.div>
                  <motion.div
                    variants={animations.header.element(0.8)}
                    initial="hidden"
                    whileInView="visible"
                    className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1505932049984-db368d92fa63"
                      alt="Food - 05"
                      fill
                      className={classes.image}
                    />
                    <div className={classes.imageDiv} />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header
