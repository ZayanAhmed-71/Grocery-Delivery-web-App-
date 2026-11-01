import { Outlet } from "react-router-dom"
import Banner from "../component/Banner"
import Navber from "../component/Navber"

const Applayout = () => {
  return (
    <>
    <Banner/>
    <Navber/>

    <main className="min-h-screen">
      <Outlet/>
    </main>

    <p>footer</p>
    <p>cartsidebar</p>
    </>
  )
}

export default Applayout