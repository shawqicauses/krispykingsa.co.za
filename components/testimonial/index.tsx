// DONE REVIEWING: GITHUB COMMIT 2️⃣

type TestimonialSingle = {
  id: string
  user: {name: string; title: string}
  body: string
  rating: number
}

type TestimonialProps = {
  testimonials: TestimonialSingle[]
}

const Testimonial = function Testimonial({testimonials}: TestimonialProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-xl-7 px-6 lg:px-8">
        <div className="mx-auto grid max-w-xl-2 grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((element) => (
            <div key={element.id}>Testimonial</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
