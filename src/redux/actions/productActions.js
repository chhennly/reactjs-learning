import { base_URL } from "../../utils/constant"
import { actionTypes } from "./actionTypes"

export const fetchAllProducts = () => {
    return (dispatch) => {
        fetch(`${base_URL}products`)
        .then(res => res.json())
        .then(resp => dispatch({
            type: actionTypes.FETCH_PRODUCTS,
            payload: resp
        }))
        .catch(er => console.log('fetch product error: ', er))
    }
}