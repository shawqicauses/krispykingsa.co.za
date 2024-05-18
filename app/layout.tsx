// DONE REVIEWING: GITHUB COMMIT 3️⃣
import {Poppins} from "next/font/google"
import Head from "next/head"
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
      <Head>
        <script
          defer
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        />
      </Head>
      <body className={poppins.className}>
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout
