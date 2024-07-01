import axios from "axios"
import { base_URL } from "../utils/constant"


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
export const fileUpload = async (image) => {
    let resp = await axios({
        method: "POST", // upload file
        headers: {
            "Conten-Type": "multipart/form-data"
        },
        url: `${base_URL}files/upload`,
        data: image
    })
    return resp
}
