// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {Fragment} from "react"
import {CTA, Header, Menu, Testimonial} from "../components"

const IndexPage = function IndexPage() {
  const menu = [
    {
      id: "id-01",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      name: "Cheese Burger",
      price: 9.98,
      rating: 5,
      reviewCount: 18
    },
    {
      id: "id-02",
      image: "https://images.unsplash.com/photo-1604467707321-70d5ac45adda",
      name: "Chicken Sandwich",
      price: 8.98,
      rating: 5,
      reviewCount: 25
    },
    {
      id: "id-03",
      image: "https://images.unsplash.com/photo-1547496502-affa22d38842",
      name: "Caesar Salad",
      price: 6.98,
      rating: 4,
      reviewCount: 32
    },
    {
      id: "id-04",
      image: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3",
      name: "Margarita Pizza",
      price: 12.98,
      rating: 5,
      reviewCount: 15
    }
  ]

  return (
    <Fragment>
      <Header />
      <CTA />
      <Menu menu={menu} />
      <Testimonial />
    </Fragment>
  )
}

export default IndexPage
