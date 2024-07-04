import React, { useEffect, useState } from 'react'
import { fetchCategories, fileUploadToServer, insertProduct, updateProduct } from '../services/productAction'
import { useLocation } from 'react-router-dom'

export default function ProductForm({edit}) {

    // get data from navigation
    const location = useLocation()

    const [categories, setCategories] = useState([])
    const [source, setSource] = useState("")
    const [product, setProduct] = useState({
        id: 0,
        title: "",
        price: 0,
        description: "",
        categoryId: 1,
        images: [
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
        ]
    })

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setProduct(prevState => {
            return {
                ...prevState, // ... ដើម្បីcopy prevStateទុក
                [name]: value
            }
        } )
        console.log(product)
    }


    const onPreviewImage = (e) => { // e = event
        console.log(e.target.files)
        setSource(e.target.files[0])
    }

    const hendleOnSubmit = () => {
        console.log('on submit')

        // insertProduct(product)
        // .then(res => {
        //     if (res.status == 201){
        //         alert("Created")
        //     }
        // })
        // .then(resp => console.log(resp))

        // ----- Check condition whether create or update product -----

        if(edit){
            // soure is equal to "", it mean that user update with old image
            if(source == ""){
                console.log('product id when edit', product.id)
                if (source == "")
                updateProduct(product, product.id)
                .then(res => res.json())
                .then(res => console.log(res))
            }else{
                // User choose new image
                const image = new FormData()
                image.append("file", source)
                fileUploadToServer(image)
                .then(resp => {
                    product.images = [resp.data.location]
                    updateProduct(product, product.id)
                    .then(res => res.json())
                    .then(res => console.log(res))
                })
            }
        }else{
            // this will excecute when user insert new product
            // no need to check image old or new because user must be upload new image
            // create image object as form data
            const image = new FormData()
            image.append("file", source)
            // -----function to upload image data to server-----
            fileUploadToServer(image)
            .then(res => {
                product.images = [res.data.location]
                console.log(product.images)
                // -----insert product including image
                insertProduct(product)
                .then(res => res.json())
                .then(resp => {console.log(resp)})
            })
            // -----end function-----

        }
    }

    useEffect(() => {
        console.log(edit)
        if(edit){
            console.log(location.state)
            const {id, title, price, description, category, images} = location.state
            product.id = id
            product.title = title
            product.description = description
            product.price = price
            product.categoryId = category.id
            product.images = images

            console.log(product.images)
        }
        fetchCategories()
        .then(res => setCategories(res))
    }, [])

  return (
    <main className='container'>
        <div className="mb-3">
            <label for="title" className="form-label">Title</label>
            <input 
                type="text" 
                className="form-control" 
                name="title" 
                value={product.title}
                placeholder="Magic Mouse"
                onChange={onChangeHandler}
            />
        </div>
        <div className="mb-3">
            <label for="price" className="form-label">Price $</label>
            <input 
                type="text" 
                className="form-control" 
                value={product.price}
                name="price" 
                placeholder="300$"
                onChange={onChangeHandler}
            />
        </div>
        <div className="mb-3">
            <label for="category" className="form-label">Category</label>
            <select 
                className="form-select" 
                aria-label="Default select example"
                onChange={onChangeHandler}
                name='categoryId'
                value={product.categoryId}
            >
                <option selected>Choose Category</option>
                {
                    categories && categories.map(cat => (
                        <option value={cat.id}>{cat.name}</option>
                    ))
                }
                
            </select>
        </div>
        <div className="mb-3">
            <label for="description" className="form-label">Description</label>
            <textarea 
                className="form-control" 
                name="description" 
                rows="3"
                value={product.description}
                onChange={onChangeHandler}
            ></textarea>
        </div>
        {/* preview area */}
        <div className="mb-3 preview">
            <img 
                src={source == "" ? product.images[0] : URL.createObjectURL(source)} 
                alt='Preview Image' 
                style={{width: 100}}
            />
        </div>
        {/* choose file area */}
        <div className="mb-3">
            <input className="form-control" style={{width: 300}} type='file' onChange={onPreviewImage} />
        </div>
        <button 
            type="button" 
            className="btn btn-outline-primary"
            onClick={() => hendleOnSubmit()}
        >{edit ? "Update Product" : "Create Product"}</button>
    </main>
  )
}
