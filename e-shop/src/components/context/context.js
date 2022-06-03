import React, { createContext,useContext, useReducer } from "react"
import { CartReducer } from "./Reducer";
import data from "../data/db.json"

    const Cart = createContext()

function Context({ children }) {

    const products = data;

    const [state, dispatch] = useReducer(CartReducer, {
        products: products,
        cart: []
    })
    return  <Cart.Provider value={{ state, dispatch }}> {children}</Cart.Provider>
    
}

export default Context;

export const CartState = () => {
    return useContext(Cart)
}

