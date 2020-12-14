import  { CART_ADDED } from "./actionTypes"

//add cart action
export const addToCart= (item)=>{
    return{
        type: CART_ADDED,
        payload: item
    }
}