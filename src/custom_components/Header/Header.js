import React from 'react'
import logo from '../assets/img/dzc_logo.png'

export default function Header() {
    
  return (
   <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="www.dzirecastle.in"><img src={logo} alt="dzirecastle" height="60px" width="120px"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mobiles</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Clothes
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Mens</a>
                <a className="dropdown-item" href="#">Womens</a>
                <div className="dropdown-divider" href="#">Kids</div>
                </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Laptops</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Grocesries</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Furnitures</a>
                <li className="nav-item">
                    <a className="nav-link" href="#">Accessories</a>
                  </li>
              </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search anything here" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
   </> )
}
