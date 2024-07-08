import { actionTypes } from "../actions/actionTypes"

const initialState = {
    products: [],
    categories: []
}
export const productReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case actionTypes.FETCH_PRODUCTS:
        // statement
        return{ ...state, products: payload}
        case actionTypes.FETCH_CATEGORIES:
        return {...state, categories: payload}
        default:
            return state
    }
}