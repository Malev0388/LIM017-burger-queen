import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function index(){
    return(
        <div className="border m-4 d-flex justify-content-center align-items-center ">
        <div className="position-absolute top-50 justify-content-space-between ">
        <Link to='/Mesero' className="btn btn-secondary">Mesero</Link>
        <Link to='/Chef' className="btn btn-secondary">Chef</Link>
        <Link to='/Admin' className="btn btn-success">Admin</Link>
        </div>
        </div>
    )   
}

/*
 <div className="border m-4 d-flex justify-content-center align-items-center ">
        <div className="position-absolute top-50 justify-content-space-between ">
        <Link to='/Mesero' className='btn btn-secondary '>Mesero</Link>
        <Link to='/Chef' className="btn btn-secondary">Chef</Link>
        <Link to='/Admin' className="btn btn-success">Admin</Link>
        </div>
        </div>
*/