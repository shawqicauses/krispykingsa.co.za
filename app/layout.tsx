// DONE REVIEWING: GITHUB COMMIT 5️⃣
import {Poppins} from "next/font/google"
import {ReactNode} from "react"
import {Footer, Hero} from "../components"
import "../styles/globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
})

type LayoutProps = {
  children: ReactNode
}

const Layout = function Layout({children}: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-neutral-950`}>
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout
