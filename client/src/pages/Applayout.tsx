import { Outlet } from "react-router-dom"
import Banner from "../component/Banner"
import Navber from "../component/Navber"
import Footer from "../component/Home/Footer"
import CartSidebar from "../component/CartSidebar"

const Applayout = () => {
  return (
    <>
    <Banner/>
    <Navber/>

    <main className="min-h-screen">
      <Outlet/>
    </main>
    <Footer/>
    <CartSidebar/>
    </>
  )
}

export default Applayout