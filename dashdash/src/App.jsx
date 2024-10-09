import { useState } from 'react'
import './assets/app.css'
import {Card} from './assets/card/card'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Body></Body>
      
    </>
  )
}
function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar navbar-expand-lg">
        <div className="container-fluid mx-5">
          <div className="logo navbar-brand">
            <a href="#" className="text-primary" title="logo">DashDash</a>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <form className="d-flex search-form" role="search">
              <input className="form-control me-2" type="search" placeholder="Gagne en temps avec la recherche..." aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          {/* Sidebar trigger button */}
          <button className="btn btn-primary menu position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" aria-controls="sidebarOffcanvas">
            Options
            <span className='circle rounded-circle' hidden></span>
          </button>
        </div>

        <style jsx>{`
          @media (min-width: 992px) {
            .search-form {
              width: 60%;
            }
          }
          @media (max-width: 992px) {
            .menu {
              margin-top: 10px;
              width: 100%;
            }
          }
        `}</style>
      </div>

      {/* Sidebar */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="sidebarOffcanvas" aria-labelledby="sidebarOffcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarOffcanvasLabel">Options</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            <a href="#" ><li className="list-group-item text-primary d-flex align-items-center justify-content-between rounded mb-2"> Mes comptes <i class="fa-solid fa-arrow-right"></i></li></a>
            <a href="#" ><li className="list-group-item text-primary d-flex align-items-center justify-content-between rounded mb-2"> <div>Sécurité<span className=' ms-2 text-danger rounded-circle' hidden>2</span></div>  <i class="fa-solid fa-arrow-right"></i></li></a>
            <a href="#" ><li className="list-group-item text-primary d-flex align-items-center justify-content-between rounded mb-2"> Paramètres <i class="fa-solid fa-arrow-right"></i></li></a>
            <a href="#"><li className="list-group-item text-primary d-flex align-items-center justify-content-between rounded mb-2">
              <img src="img.jpg" alt="" className='rounded-circle' width={40} height={40}/> Ariel Banaken <div className=""></div></li></a>
          </ul>
        </div>
      </div>
    </>
  );
}

function Body(){

    const [cards, setcards] = useState([
      {label:"Google", password:"ASrtHuIO2P30KN;KI", date:"08/10/2024", img:"google.png"},
      {label:"Facebook", password:"OudebFSSH12?IDE0", date:"08/10/2024", img:"facebook.png"},
      {label:"Netflix", password:"sayRETUJ42fdyèç:ùU", date:"09/10/2024", img:"Netflix.jpg"}
    ])

  return(
    <>
      <div className="pt-3">
        <div className="container mt-3">
          <h1 class="mb-3">Mes Comptes</h1>

          <div className="mb-2 d-flex justify-content-between align-items-center">
            <div className="" id='otherp'>
              <button className='btn d-flex align-items-center fw-semibold' id='btn'>
              <i className="fa-solid fa-circle-plus fs-4 text-success me-2"></i>
              Ajouter un compte
              </button>
            </div>

            <div className="d-flex align-items-center">
              <button className='btn p-2 border me-1' id='btn'>Plus récent</button>
              <button className='btn p-2 border ms-1' id='btn'>Plus ancien</button>
            </div>
          </div>


        </div>

        {cards.length === 0 ? (
          <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <img src="./undraw.svg" alt="" width={400} height={250}/>
              <h3 className='text-center mt-5 fs-1 fw-bold'>OUPS!</h3>
              <p className='fs-5' id='gray'>Vous n'avez pas de compte enregistrés pour le moment</p>
              <button className='btn' id='pink'>Ajouter un compte</button>
          </div>
        ) : (
          cards.map((card, index) => (
          <div key={index} className="card-slide-in" style={{ animationDelay: `${index * 0.4}s` }}>
            <Card label={card.label} password={card.password} date={card.date} img={card.img} />
          </div>
          ))
        )}

      </div>
    </>
  )
}



export default App
