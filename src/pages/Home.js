import React, { useEffect, useState } from 'react' // shortcut (rfc)
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingView from '../components/LoadingView'
import { Link } from 'react-router-dom'
import { fetchAllCategories, fetchProducts } from '../services/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/actions/productActions'

export default function Home() {

  const dispatch = useDispatch()
  const {products} = useSelector(state => state.prodReducer)
  const {categories} = useSelector(state => state.prodReducer)

    // declare local state
    // const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
      // subscribe to store

      dispatch(fetchAllProducts())
      dispatch(fetchAllCategories())

      // call to api
   
      // fetchProducts()
      // .then(resp => {
      //   setLoading(false)
      //   setProducts(resp)
      // })

    }, [])

  return (
    <>
    {/* 
        condition ? express_1 : expression_2 
     */}
      <main className='container'>
        <h3>Products</h3>
        {
          console.log(products && products)
        }
        {
          console.log(categories)
        }
        {/* <div className='row g-3'>
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
                <Link 
                  to={`/read/${product.id}`}
                  className='text-decoration-none'
                >
                  <Card 
                    imageURL={product.images[0]}
                    price={product.price}
                    title={product.title}
                    // desc={product.description}
                  />
                </Link>
              </div>
            ))
          }
        </div> */}
      </main>
    </>
  )
}
