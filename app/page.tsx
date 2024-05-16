// DONE REVIEWING: GITHUB COMMIT 6️⃣
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/outline"
import {Fragment} from "react"
import {CTA, Contact, Header, Menu, Testimonial} from "../components"

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

  const testimonials = [
    {
      id: "id-01",
      user: {
        image: "https://images.unsplash.com/photo-1715615245424-97d67b181c89",
        name: "John Doe",
        title: "Food Critic, Tasty Magazine"
      },
      body: "The food at Krispy King is absolutely delicious! From their perfectly seasoned fries to their juicy, flavorful burgers, I can't get enough of their mouth-watering dishes. Every bite is a symphony of flavors that keep me coming back for more.",
      rating: 5
    },
    {
      id: "id-02",
      user: {
        image: "https://images.unsplash.com/photo-1700172237293-875dd147b6dc",
        name: "Jane Smith",
        title: "Marketing Manager, Foodie Co."
      },
      body: "The service at Krispy King is absolutely top-notch. From the moment you walk in, the staff greets you with a warm smile and makes you feel right at home. They are incredibly friendly and always attentive to your needs, which truly makes every visit a genuine pleasure.",
      rating: 4
    }
  ]

  const contacts = [
    {
      icon: <EnvelopeIcon className="h-6 w-6 text-white" />,
      title: "Email",
      description: "Feel free to send us a mail at your earliest convenience.",
      link: {
        content: "hello@krispykingsa.co.za",
        href: "mailto:hello@krispykingsa.co.za"
      }
    },
    {
      icon: <PhoneIcon className="h-6 w-6 text-white" />,
      title: "Phone",
      description: "Feel free to give us a call at your earliest convenience.",
      link: {
        content: "+1 (234) 567 8910",
        href: "+12345678910"
      }
    },
    {
      icon: <MapPinIcon className="h-6 w-6 text-white" />,
      title: "Location",
      description: "27 Brain Road, College Road, Cape Town - Your Address Here",
      link: {
        content: "Get Directions",
        href: "https://maps.google.com"
      }
    }
  ]

  return (
    <Fragment>
      <Header />
      <Menu menu={menu} />
      <CTA />
      <Testimonial testimonials={testimonials} />
      <Contact contacts={contacts} />
    </Fragment>
  )
}

export default IndexPage
