import React, { useEffect, useState } from 'react' // shortcut (rfc)
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingView from '../components/LoadingView'

export default function Home() {
    // declare variable
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)

    const fetchProducts = () => {
      fetch('https://api.escuelajs.co/api/v1/products?limit=8&offset=0')
      .then(res => res.json())
      .then(resp => {
        setProducts(resp)
        setLoading(false)
      })

    }
    useEffect(() => {
      // call to api
      fetchProducts()
    }, [])

  return (
    <>
    {/* 
        condition ? express_1 : expression_2 
     */}
      <main className='container'>
        <h3>Products</h3>
        <div className='row g-5'>
          {
            isLoading ? 
            
            <>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <LoadingView />
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <LoadingView />
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <LoadingView />
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <LoadingView />
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <LoadingView />
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <LoadingView />
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <LoadingView />
              </div>
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <LoadingView />
              </div>
            </>
            
            : products.map((product) => (
              <div 
                key={product.id}
                className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <Card 
                  imageURL={product.images[0]}
                  price={product.price}
                  title={product.title}
                  desc={product.description}
                />
              </div>
            ))
          }
        </div>
      </main>
    </>
  )
}
