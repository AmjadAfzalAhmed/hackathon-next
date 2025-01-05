import Hero from '@/components/Hero'
import About from '@/components/About'
import FoodCategory from '@/components/FoodCategory'
import WhyChooseUs from '@/components/WhyChooseUs'
import Statistics from '@/components/Statistics'
import Menu from '@/components/Menu'
import Chefs from '@/components/Chefs'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import BlogPosts from '@/components/BlogPosts'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-white">
      <Hero />
      <About />
      <FoodCategory />
      <WhyChooseUs />
      <Statistics />
      <Menu />
      <Chefs />
      <Testimonials />
      <Process />
      <BlogPosts />
      <Footer />
    </main>
  )
}

