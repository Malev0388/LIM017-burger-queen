import {useState} from 'react';
import BreakfastOverview from './BreakfastOverview.js'
import MenuOverview from './MenuOverview.js'

const ViewMesero = () => {

    return (
        <div className="mesero">
      <header className="header">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/burger-queen-d0e74.appspot.com/o/logo-bq.PNG?alt=media&token=ff5fc092-8e35-45fc-ab81-6b4a4a7efa45"
          alt="logo-bq"
          className="logo-bq"
        />
      </header>
      <ul>
        <li><a className="button-desayuno" href="#Desayuno">DESAYUNO</a></li>
        <li><a className="button-menu" href="#Menu">MENÚ</a></li>
        <li><a className="button-pedidos" href="#Pedidos">PEDIDOS LISTOS</a></li>
      </ul>
    </div>
    )
}

export default ViewMesero;