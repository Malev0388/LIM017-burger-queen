import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function index(){
    return(
        
        <div className='container'>
            <div className='welcome'>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/burger-queen-d0e74.appspot.com/o/principal-logo-bq.png?alt=media&token=ea01a330-0188-476e-a965-7f382f9a002b"
                    alt="principal-logo-bq"
                    className="principal-logo-bq" />
            </div>
            <div className='welcomeButtons'>
                <Link to='/Mesero' className='btn btn-welcome'>MESERO</Link>
                <Link to='/Chef' className='btn btn-welcome'>CHEF</Link>
                <Link to='/Admin' className='btn btn-welcome'>ADMIN</Link>               
            </div>
        </div>
    )
}