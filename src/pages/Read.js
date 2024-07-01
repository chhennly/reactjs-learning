import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Read() {
  let {id} = useParams() // useParams ប្រើសម្រាប់ចាប់dataចេញពីURL browser
  /// MARK: create a state to store product object
  /// set default value for state handle slow data load
  const [product, setProduct] = useState({
    title: "Defalt Title...",
    images: [
      "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
    ],
    description: "Description Loading...",
    price: "..."
  })

  let fetchDetailProduct = (id) => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then(resp => resp.json())
    .then(resp => setProduct(resp))
  }
  useEffect(() => {
    fetchDetailProduct(id)
  }, [])
  
  return (
    <main className='container'>
        <h2>
          {product.title}
        </h2>
        <img style={{width: 300}} src={product.images[0]} alt="image" />
        <h3 className="text-danger">
          {product.price + "$"}
        </h3>
        <p>
          {product.description}
        </p>
    </main>
  )
}
