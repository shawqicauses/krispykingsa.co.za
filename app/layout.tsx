// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {Poppins} from "next/font/google"
import {ReactNode} from "react"
import {Hero} from "../components"
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
      <body className={poppins.className}>
        <Hero />
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}

export default Layout
