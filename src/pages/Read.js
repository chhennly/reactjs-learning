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
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={product.images[0]} class="img-fluid rounded-start" alt="Product Image"/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">{product.title}</h3>
              <h3 class="card-title text-danger">{product.price + "$"}</h3>
              <p class="card-text">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
