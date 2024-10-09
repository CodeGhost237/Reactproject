import { useState } from 'react'
import './assets/app.css'
import {Card} from './assets/card/card'
import {Input} from './assets/input/input'
import { Value } from 'sass'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
      
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
            <a href="#" ><li className="list-group-item text-primary d-flex align-items-center justify-content-between rounded mb-2" id='btn'> Mes comptes <i class="fa-solid fa-arrow-right"></i></li></a>
            <a href="#" ><li className="list-group-item text-primary d-flex align-items-center justify-content-between rounded mb-2" id='btn'> <div>Sécurité<span className=' ms-2 text-danger rounded-circle' hidden>2</span></div>  <i class="fa-solid fa-arrow-right"></i></li></a>
            <a href="#" ><li className="list-group-item text-primary d-flex align-items-center justify-content-between rounded mb-2" id='btn'> Paramètres <i class="fa-solid fa-arrow-right"></i></li></a>
            <a href="#"><li className="list-group-item text-primary d-flex align-items-center justify-content-between rounded mb-2" id='btn'>
              <img src="img.jpg" alt="" className='rounded-circle' width={40} height={40}/> Ariel Banaken <div className=""></div></li></a>
          </ul>
        </div>
      </div>
    </>
  );
}

function Body() {
  const [cards, setCards] = useState([
  ]);

  const [showModal, setShowModal] = useState(false); // État pour gérer l'affichage du modal

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="p-3">
        <div className="container mt-3">
          <h1 className="mb-3">Mes Comptes</h1>

          <div className="mb-2 d-flex justify-content-between align-items-center">
            <div className="" id='otherp'>
              <button className='btn d-flex align-items-center fw-semibold' id='btn' onClick={handleShowModal}>
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
            <img src="./undraw.svg" alt="" width={400} height={250} />
            <h3 className='text-center mt-5 fs-1 fw-bold'>OUPS!</h3>
            <p className='fs-5' id='gray'>Vous n'avez pas de compte enregistrés pour le moment</p>
            <button className='btn' id='pink' onClick={handleShowModal}>Ajouter un compte</button>
          </div>
        ) : (
          cards.map((card, index) => (
            <div key={index} className="card-slide-in" style={{ animationDelay: `${index * 0.4}s` }}>
              <Card label={card.label} password={card.password} date={card.date} img={card.img} />
            </div>
          ))
        )}

        {/* Modal Bootstrap */}
        <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }} aria-labelledby="modalTitle" aria-hidden={!showModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fs-3" id="modalTitle">Ajouter un nouveau compte</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <Input type={"file"} Value={""}></Input>
                <Input type={"text"}  placeholder={"Entre le nom de site ou application"} Value={""}></Input>
                <Input type={"text"}  placeholder={"Entre l'URL de l'application ou du site"} Value={""}></Input>
                <Input type={"password"}  placeholder={"Entre ton mot de passe"} Value={""}></Input>
                <Input type={"password"}  placeholder={"Entre ton nom d'utilisateur"} Value={""}></Input>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary w-100 fs-5" onClick={handleCloseModal}>Ajouter</button>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop du modal */}
        {showModal && <div className="modal-backdrop fade show"></div>}
      </div>
    </>
  );
}

function Footer() {

  return (
    <footer className="bg-primary text-white py-4">
      <div className="container d-flex justify-content-between py-2">
        <div className="d-flex justify-content-left">
          <a href="#" className="footer-brand text-white fs-4 fw-semibold">DashDash</a>
        </div>
        <div className="d-flex">
          <a href="#" className="footer-brand text-white fs-4 fw-semibold me-4"><i className="fa-brands fa-tiktok"></i></a>
          <a href="#" className="footer-brand text-white fs-4 fw-semibold me-4"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#" className="footer-brand text-white fs-4 fw-semibold me-4"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="footer-brand text-white fs-4 fw-semibold me-4"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="footer-brand text-white fs-4 fw-semibold me-4"><i class="fa-brands fa-github"></i></a>
          <a href="#" className="footer-brand text-white fs-4 fw-semibold me-4"><i class="fa-brands fa-gitlab"></i></a>
        </div>
      </div>
      <hr className='text-white mx-5'/>
      <div className="py-2">
        <h1 className='fs-6 fw-medium'>Copyright@2024, tout droit reservés</h1>
      </div>
        
    </footer>
  );
  
}


export default App
