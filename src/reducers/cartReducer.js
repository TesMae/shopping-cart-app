import { CART_ADDED } from "../actions/actionTypes"


const initState = {
    addedItems : [],
    itemsCounter : null
}

const cartReducer = (state = initState, action) => {
    //INSIDE CATALOGUE COMPONENT
    if(action.type === CART_ADDED) {
        state.addedItems = [...state.addedItems, action.payload]
        console.log(state.addedItems)
        
        return {
            ...state,            
            itemsCounter: state.addedItems.length     
        }
        
        
        //console.log(action.payload.id)
        //state.addedItems.push(action.product)
    }

    return state
}


export default cartReducer