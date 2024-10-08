import { useState } from 'react'
import './App.css'
import './predefined.css'
import Header from './assets/video/video'

function App() {

  return (
    <div>
      <Navbar/>
      <Header/>
    </div>
  )
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-5">
      <div className="container-fluid">
        <a className="logo" href="#">DIGIBRAND</a>

        {/* Button for small screens */}
        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i>
        </button>

        {/* Menu items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link mx-3 linkhover" href="#">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3 linkhover" href="#">Nos services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3 linkhover" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-3 linkhover" href="#">Qui sommes nous?</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

}

export default App
