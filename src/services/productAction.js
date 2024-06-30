export const fetchCategories = async () => { // export ដើម្បីយកទៅប្រើនៅកន្លែងផ្សេង
    let resp = await fetch('https://api.escuelajs.co/api/v1/categories', {
        method: "GET"
    })
    return resp.json()
}

export const fetchProducts = async () => {
    let resp = await fetch('https://api.escuelajs.co/api/v1/products')
   return resp.json()

  }

/// MARK: Create Function to Insert Product
export const insertProduct = async (product) => {
    let resp = await fetch('https://api.escuelajs.co/api/v1/products/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    
    return resp
}