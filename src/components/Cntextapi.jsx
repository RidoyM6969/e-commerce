import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

    const productApi = createContext();

const Cntextapi = ({children}) => {

    let [information , getInformation] = useState([])

    let newproduct = () => {
        axios.get("https://dummyjson.com/products").then((response) =>{
            getInformation(response.data.products);
        })
    }

    useEffect(()=> {
        newproduct()
    },[])

  return (
    <productApi.Provider value={information}>
        {children}
    </productApi.Provider>
  )
}

export  {Cntextapi , productApi}
