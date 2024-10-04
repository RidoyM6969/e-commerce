import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { LuPlus, LuMinus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { productDcrement, productIncrement, removeProduct } from "./slice/productSlice";
import { IoMdArrowDropdown } from "react-icons/io";

const Cart = () => {
  let dispatch = useDispatch()
  let cartInfo = useSelector((state) => state.product.cartItems)

  let { totalPrice, totalQuantity } = cartInfo.reduce((acc , item) => {
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity += item.qun

    return acc
  },{totalPrice:0, totalQuantity:0})
  

  return (
    <div className="py-[150px]">
      <Container>
        <div className="">
          <h2 className="font-bold text-[45px]">cart</h2>
          <h5 className="capitalize text-xs font-normal py-5">
            <Link to="/">home</Link> &#62; cart
          </h5>
        </div>
        <div className="border">
          <div className="bg-[#F5F5F3]">
            <div className="flex justify-between items-center p-[20px] w-full mx-auto">
              <h5 className="w-[22%] text-center">product</h5>
              <h5 className="w-[22%] text-center">Price</h5>
              <h5 className="w-[22%] text-center">Quantity</h5>
              <h5 className="w-[22%] text-center">Total</h5>
            </div>
          </div>
          {cartInfo.map((itemss,i) => (
            <div className="py-8 p-[20px]  flex items-center  justify-between ">
              <div className="flex items-center gap-x-5 w-[22%]">
                <button onClick={()=>dispatch(removeProduct(i))}>
                <RxCross2 />
                </button>
              <img className="w-[30%] bg-[#F5F5F3]" src={itemss.thumbnail} alt="" />
              <p className="text-[16px] font-bold">{itemss.title}</p>
            </div>
            <div className="w-[22%] text-center text-[20px] font-bold">
              <h4>${itemss.price}</h4>
            </div>
            <div className="w-[22%]">
              <div className="">
                  <div className="flex items-center gap-x-4 py-1 px-3 justify-center ">
                    <button className="border" onClick={()=>dispatch(productDcrement(i))} > <LuMinus /></button>
                    <span>{itemss.qun}</span>
                    <button className="border" onClick={()=>dispatch(productIncrement(i))}> <LuPlus /> </button>
                  </div>
              </div>
            </div>
            <div className="w-[22%] text-center text-[20px] font-bold">
              <h4>${(itemss.price * itemss.qun).toFixed(2)}</h4>
            </div>
          </div>
          ))}
        </div>

        <div className="border py-[20px] px-[20px] flex items-center">
          <div className="w-[50%] flex items-center">
          <div className="w-[255px] flex items-center justify-between border px-3 py-2">
            <h6>size</h6>
            <p><IoMdArrowDropdown/></p>
          </div>
          <h4 className="ml-6">Apply coupon</h4>
          </div>
          <div className="w-[50%] flex justify-end">
            <button>Update cart</button>
          </div>
        </div>

        <div className="pt-[50px] flex justify-end ">
          <div className="w-[485px]">
          <h2 className="text-end text-[20px] font-bold py-9">Cart totals</h2>
            <table className="">
              <tr>
                <td className="border border-slate-900 px-24 py-1 text-[16px] font-[700]">Quantity</td>
                <td className="border border-slate-900 px-24 py-1 ">$ {totalQuantity} </td>
              </tr>
              <tr>
                <td className="border border-slate-900 px-24 py-1 text-[16px] font-[700]">Total</td>
                <td className="border border-slate-900 px-20 py-1 ">$ {totalPrice.toFixed(2)} </td>
              </tr>
              <tr></tr>
            </table>
            <div className="text-end pt-7">
              <Link to="/checkout">
              <button className=" text-white text-sm font-bold bg-[#262626] py-3 px-4">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
