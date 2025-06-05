import React from 'react'
import Slider from '../components/Slider'
// import TrustLogos from '../components/TrustLogos'
import CarouselCards from '../components/CarouselCards'
import FeaturesSection from '../components/FeaturesSection'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  const courseItems = [
    { image:'/c1.jpg', title:'UX Analytics', subtitle:'Design', rating:4.8, reviews:'44k' },
    { image:'/c2.jpg', title:'UX Analytics', subtitle:'Design', rating:4.8, reviews:'44k' },
    { image:'/c3.jpg', title:'UX Analytics', subtitle:'Design', rating:4.8, reviews:'44k' },
    { image:'/c4.jpg', title:'UX Analytics', subtitle:'Design', rating:4.8, reviews:'44k' }
  ]

  return (
    <>
      <Slider />
      {/* <TrustLogos /> */}
      <CarouselCards items={courseItems} />
      <FeaturesSection />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  )
}
