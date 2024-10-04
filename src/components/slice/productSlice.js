import { createSlice } from '@reduxjs/toolkit'

export const  productSlice = createSlice({
  name: 'counter',
  initialState: {
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  },
  reducers: {
    addTocart: (state , action) => {
      let fountProduct = state.cartItems.findIndex((item) => item.id == action.payload.id)
      if (fountProduct !== -1) {
        state.cartItems[fountProduct].qun += 1
        localStorage.setItem("cart" , JSON.stringify(state.cartItems))
      } else {
        state.cartItems = [...state.cartItems , action.payload]
        localStorage.setItem("cart" , JSON.stringify(state.cartItems))
      }
    },

    productIncrement: (state, action) => {
      state.cartItems[action.payload].qun += 1
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },

    productDcrement: (state , action) => {
      if (state.cartItems[action.payload].qun > 1) {
        state.cartItems[action.payload].qun -= 1
        localStorage.setItem("cart", JSON.stringify(state.cartItems))
      }
    },

    removeProduct: (state, action) => {
      state.cartItems.splice(action.payload, 1)
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    }


  }
})

// Action creators are generated for each case reducer function
export const { addTocart, productIncrement, productDcrement, removeProduct } = productSlice.actions

export default productSlice.reducer