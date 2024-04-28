// DONE REVIEWING: GITHUB COMMIT 🥊
import {ReactNode} from "react"

type LayoutProps = {
  children: ReactNode
}

const Layout = function Layout({children}: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <nav>Navigation</nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}

export default Layout
