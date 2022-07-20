import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function index(){
    return(
        
        <div className='container'>
            <div>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/burger-queen-d0e74.appspot.com/o/principal-logo-bq.png?alt=media&token=ea01a330-0188-476e-a965-7f382f9a002b"
                    alt="viewLogoBurgerQueenq"
                    className="viewLogoBurgerQueen" />
            </div>
            <div>
                <Link to='/Mesero' className='btn buttonMenuView'>MESERO</Link>
                <Link to='/Chef' className='btn buttonMenuView'>CHEF</Link>
                <Link to='/Admin' className='btn buttonMenuView'>ADMIN</Link>               
            </div>
        </div>
    )
}