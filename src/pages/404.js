import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
  return (
    <main>
        <div className="p-5 text-center rounded-3">
          <div>
            <img src='https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png' 
            className="col-12 col-sm-12 col-md-12 col-lg-11 col-xl-8 col-xxl-8 mx-auto fs-5" 
            alt='Page NotFound'/>
          </div>
          <div className="mt-5">
            <button 
                onClick={() => navigate("/")}
                className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                BACK TO HOME
            </button>
          </div>
        </div>
    </main>
  )
}
