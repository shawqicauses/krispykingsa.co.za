// DONE REVIEWING: GITHUB COMMIT 2️⃣
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
        </div>
      </div>
    </div>
  )
}

export default CTA
