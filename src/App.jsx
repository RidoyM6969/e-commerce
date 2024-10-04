import "slick-carousel/slick/slick.css";

import Home from "./pages/Homepage"
import Shope from "./pages/Shopepage"
import About from "./pages/Aboutpage"
import Contacts from "./pages/Contectpage"
import Journal from "./pages/Journalpage"
import {createBrowserRouter,RouterProvider,Route,Link, createRoutesFromElements} from "react-router-dom";
import Layout from "./components/Layout";
import ShopdetailPage from "./components/ShopdetailPage";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import Errorpage from "./pages/Errorpage";


function App() {

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shope" element={<Shope/>}></Route>
        <Route path="/shope/:id" element={<ShopdetailPage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path="/journal" element={<Journal/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="*" element={<Errorpage/>}></Route>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
