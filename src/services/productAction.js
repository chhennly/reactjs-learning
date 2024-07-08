import axios from "axios"
import { base_URL } from "../utils/constant"
import { type } from "@testing-library/user-event/dist/type"
import { actionTypes } from "../redux/actions/actionTypes"


export const fetchCategories = async () => { // export ដើម្បីយកទៅប្រើនៅកន្លែងផ្សេង
    let resp = await fetch(`${base_URL}categories`, {
        method: "GET"
    })
    return resp.json()
}

export const fetchProducts = async () => {
    let resp = await fetch(`${base_URL}products`)
   return resp.json()

  }
export const searchProduct = async (title) => {
    let resp = await fetch(`${base_URL}products?title=${title}`)
    return resp.json()
}

/// MARK: Create Function to Insert Product
export const insertProduct = async (product) => {
    let resp = await fetch(`${base_URL}products/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    
    return resp
}

/// MARK: Function to Insert file such as image or PDF, etc.
export const fileUploadToServer = async (image) => {
    let resp = await axios({
        method: "POST", // upload file
        headers: {
            "Content-Type": "multipart/form-data"
        },
        url: `${base_URL}files/upload`,
        data: image
    })
    return resp
}

// Update product by product id
export const updateProduct = async (product, id) => {
    let resp = await fetch(`${base_URL}products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    
    return resp
}
export const fetchAllCategories =  () => {
    return (dispatch) => {
        fetch(`${base_URL}categories`)
        .then(resp => resp.json())
        .then(resp => dispatch({
            type: actionTypes.FETCH_CATEGORIES,
            payload: resp
        }))
        .catch(er => console.log('failed to fetch: ', er))
    }
}
