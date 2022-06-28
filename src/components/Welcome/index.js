import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function index(){
    return(
        <div>
            <Link to='/Mesero' className='button'>Mesero</Link> <br></br>
            <Link to='/Chef'>Chef</Link> <br></br>
            <Link to='/Admin'>Admin</Link>
        </div>
    )

}