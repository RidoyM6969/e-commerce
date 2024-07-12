import Arrivals from "./components/Arrivals"
import Banner from "./components/Banner"
import Furniture from "./components/Furniture"
import Menu from "./components/Menu"
import Phonesell from "./components/Phonesell"
import Search from "./components/Search"
import "slick-carousel/slick/slick.css";
function App() {
  return (
    <>
      <Menu/>
      <Search/>
      <Banner/>
      <Phonesell/>
      <Furniture/>
      <Arrivals/>
    </>
  )
}

export default App
