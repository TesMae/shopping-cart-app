import  { CART_ADDED } from "./actionTypes"
import { CART_REMOVED } from "./actionTypes"

// add cart action
export const addToCart=(item)=>{
    return{
        type: CART_ADDED,
        payload: item
    }
}

// remove from cart action
export const removeFromCart=(item)=>{
    return{
        type: CART_REMOVED,
        payload: item
    }
}
