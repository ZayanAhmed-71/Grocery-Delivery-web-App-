import AppPromoBanner from "../component/Home/AppPromoBanner"
import Features from "../component/Home/Features"
import Hero from "../component/Home/Hero"
import HomeCategories from "../component/Home/HomeCategories"
import Newsletter from "../component/Home/Newsletter"
import PopularProducts from "../component/Home/PopularProducts"

const Home = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto sm:px-6 lg:px-8 py-12"> 
      <Hero/>
      <Features/>
      <HomeCategories/>
      <PopularProducts/>
      <AppPromoBanner/>
      <Newsletter/>
      
    </div>
  )
}

export default Home