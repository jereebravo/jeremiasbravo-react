import React from 'react'
import "./NavBar.css";
import * as images from "../../assets/img"
import {Carrito} from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header >
<nav className="navbar navbar-expand-lg bg-body-tertiary Header ">
  <div className="container-fluid">
    <Link to={"/"} className="navbar-brand" href="#"><img className="logo" src={images.logo} alt="" /> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-current="page" href="#">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to={"/category/osos"} className="nav-link" href="#">Osos</Link>
        </li>
        <li className="nav-item">
          <Link to={"category/mates"} className="nav-link" href="#">Mates</Link>
        </li>
        <li className="nav-item">
          <Link to={"/category/manteles"} className="nav-link" href="#">Manteles</Link>
        </li>
      </ul>
    </div>
    <div>
      <Carrito />
    </div>
  </div>
</nav>
</header> 
  )
}
