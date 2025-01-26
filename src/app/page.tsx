import Hero from '@/components/Homepage-Comps/Hero'
import About from '@/components/Homepage-Comps/About'
import FoodCategory from '@/components/Homepage-Comps/FoodCategory'
import WhyChooseUs from '@/components/Homepage-Comps/WhyChooseUs'
import Statistics from '@/components/Homepage-Comps/Statistics'
import Menu from '@/components/Homepage-Comps/Menu'
import Chefs from '@/components/Homepage-Comps/Chefs'
import Testimonials from '@/components/Homepage-Comps/Testimonials'
import Process from '@/components/Homepage-Comps/Process'
import BlogPosts from '@/components/Homepage-Comps/BlogPosts'
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

