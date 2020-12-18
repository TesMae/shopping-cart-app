import { CART_ADDED } from "../actions/actionTypes"
import { CART_REMOVED } from "../actions/actionTypes"


const initState = {
    addedItems: [],
    itemsCounter: null,
    totalPrice: 0
}

const cartReducer = (state = initState, action) => {

    // Add an item to the Cart
    if(action.type === CART_ADDED) {
        let existedItem = state.addedItems.find(item => item.id === action.payload.id)
        
        // If it did not exist, it will be added in the Cart
        if (existedItem === undefined) {
            state.addedItems = [...state.addedItems, action.payload]
            
            return {
                ...state,            
                itemsCounter: state.addedItems.length,
                totalPrice: state.totalPrice + action.payload.price
            }

        }

    }

    // Remove an item to the card 
    if(action.type === CART_REMOVED) {
        let foundedItem = state.addedItems.find(item => item.id === action.payload.id)
        let newItems = state.addedItems.filter(item => item !== foundedItem)

        return {
            ...state,
            addedItems: newItems,
            itemsCounter: newItems.length,
            totalPrice: state.totalPrice - action.payload.price
        }

    }

    return state
}


export default cartReducer