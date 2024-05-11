// DONE REVIEWING: GITHUB COMMIT 5️⃣
const Header = function Header() {
  const id = "header-background-pattern"
  const classes = {
    "mask-image": `mask-image:radial-gradient(${[
      ["32rem", "32rem", "at", "center"].join("_"),
      "white",
      "transparent"
    ].join(",")})`
  }

  return (
    <main>
      <div className="relative isolate">
        {/* Built Using Tailwind CSS UI ✨ */}
        <svg
          aria-hidden="true"
          className={`absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-neutral-200 [${classes["mask-image"]}]`}>
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
      </div>
    </main>
  )
}

export default Header
