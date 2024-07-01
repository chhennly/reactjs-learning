import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchProducts } from '../services/productAction';

export default function Dashboard() {
    // declare state product
    const [products, setProducts] = useState([])

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => row.price + ' $',
            sortable: true
        },
        {
            name: 'Photos',
            selector: row => <img src={row.images[0]} alt="product" style={{width: '50px'}}/>
        },
        {
            name: 'Action',
            selector: row => <button type="button" class="btn btn-outline-secondary">Edit</button>
        }
    ];
    
   

    useEffect(() => {
        fetchProducts()
        .then(resp => setProducts(resp))
    }, [])
  return (
    <main className='container'>
        <DataTable 
            columns={columns}
            data={products}
            pagination
        />
    </main>
  )
}
