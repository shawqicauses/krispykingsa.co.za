// DONE REVIEWING: GITHUB COMMIT 4️⃣
import Image from "next/image"
import Link from "next/link"

const CTA = function CTA() {
  const id = "cta-background-pattern"
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl-7 py-24 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-neutral-950 px-6 pt-16 shadow-xl-2 sm:rounded-xl-3 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            style={{
              maskImage: "radial-gradient(closest-side, white, transparent)"
            }}>
            <circle
              cx={512}
              cy={512}
              r={512}
              fill={`url(#${id})`}
              fillOpacity="0.75"
            />
            <defs>
              <radialGradient id={id}>
                <stop className="cta-stop-color-1" />
                <stop offset={1} className="cta-stop-color-2" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-xl-3 font-bold leading-tight tracking-tight text-white sm:text-xl-4">
              Discover Our Delicious Menu Now
              <span className="text-yellow-500">.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Indulge in our mouth-watering dishes made with the finest
              ingredients.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/menu"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-medium text-neutral-950 shadow-sm transition-all duration-300 ease-in-out hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                Our Menu
              </Link>
              <Link
                href="/order-now"
                className="text-sm font-medium leading-6 text-white">
                Order Now <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              src="https://images.unsplash.com/photo-1551489186-c892fa1428c9"
              alt="Food Menu"
              className="absolute left-0 top-0 w-[40rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 grayscale"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
