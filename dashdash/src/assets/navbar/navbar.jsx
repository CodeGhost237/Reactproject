import { useState } from 'react'

export function Navbar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
      onSearch(e.target.value); // Appeler la fonction onSearch pour filtrer les résultats
    };
  
    return (
      <>
        {/* Navbar */}
        <div className="navbar navbar-expand-lg">
          <div className="container-fluid mx-5">
            <div className="logo navbar-brand">
              <a href="#" className="text-primary logo" title="logo">DashDash</a>
            </div>
  
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              {/* Formulaire de recherche */}
              <form className="d-flex search-form" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Gagne en temps avec la recherche..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  id='search'
                />
                <button className="btn btn-outline-success" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
  
            {/* Sidebar trigger button */}
            <button className="btn btn-primary menu position-relative option" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" aria-controls="sidebarOffcanvas">
              Options
              <span className="circle rounded-circle" hidden></span>
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

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="sidebarOffcanvas" aria-labelledby="sidebarOffcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarOffcanvasLabel">Options</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group option">
            <a href="#" className=''><li className="list-group-item text-primary d-flex align-items-center justify-content-between rounded mb-2 active-option" id='btn'> Mes comptes <i className="fa-solid fa-arrow-right"></i></li></a>
            <a href="#"><li className="list-group-item text-primary d-flex align-items-center justify-content-between rounded mb-2" id='btn'> Sécurité <i className="fa-solid fa-arrow-right"></i></li></a>
            <a href="#"><li className="list-group-item text-primary d-flex align-items-center justify-content-between rounded mb-2" id='btn'> Paramètres <i className="fa-solid fa-arrow-right"></i></li></a>
            <a href="#"><li className="list-group-item text-primary d-flex align-items-center justify-content-between rounded mb-2" id='btn'><img src="img.jpg" alt="" className="rounded-circle" width={40} height={40}/> Ariel Banaken<div className=""></div></li></a>
          </ul>
        </div>
      </div>
    </>
    );
  }