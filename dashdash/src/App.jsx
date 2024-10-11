import { useState } from 'react'
import './assets/app.css'
import { Card } from './assets/card/card'
import { Input } from './assets/input/input'
import { Navbar } from './assets/navbar/navbar'

function App() {

  return (
    <>
      <Body></Body>
      <Footer></Footer>

    </>
  )
}


function Body() {
  const [cards, setCards] = useState([
    { label: "Google", password: "ASrtHuIO2P30KN;KI", date: "08/10/2024", img: "google.png" },
    { label: "Facebook", password: "OudebFSSH12?IDE0", date: "08/10/2024", img: "facebook.png" },
    { label: "Netflix", password: "sayRETUJ42fdyèç:ùU", date: "09/10/2024", img: "netflix.png" },
    { label: "Hubb", password: "DTUoidedheu643,;:089Hg", date: "09/10/2024", img: "hubb.png" },
    { label: "Amazon", password: "SUjuin!cdeIJDEJI323", date: "11/10/2024", img: "sociale.png" },
    { label: "Dribble", password: "12IDEI9401BNujdfiro.", date: "11/10/2024", img: "dribble.png" },
    { label: "Spotify", password: "sde594'2GGDEUKOIKP", date: "11/10/2024", img: "spotify.png" },
    { label: "Tinder", password: "DTUoidedheu643,;:089Hg", date: "11/10/2024", img: "tinder.png" }
  ]);

  const [filteredCards, setFilteredCards] = useState(cards); // Nouvel état pour les cartes filtrées
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  const [cardsPerPage] = useState(4); // Nombre de cartes par page

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearch = (searchTerm) => {
    const filtered = cards.filter((card) =>
      card.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
    setCurrentPage(1); // Réinitialiser à la première page lors de la recherche
  };

  // Logique de pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar onSearch={handleSearch} />

      <div className="p-3">
        <div className="container mt-3">
          <h1 className="mb-3 fs-4">Mes Comptes</h1>

          <div className="mb-2 d-flex justify-content-between align-items-center">
            <button className="btn d-flex align-items-center option fw-semibold" id="btn" onClick={handleShowModal}>
              <i className="fa-solid fa-circle-plus fs-5 text-success me-2"></i>
              Ajouter un compte
            </button>

            <div className="d-flex align-items-center">
              <button className="btn p-2 border me-1 option" id="btn">Plus récent</button>
              <button className="btn p-2 border ms-1 option" id="btn">Plus ancien</button>
            </div>
          </div>
        </div>

        {currentCards.length === 0 ? (
          <div className="d-flex flex-column justify-content-center align-items-center mt-3">
            <img src="./undraw.svg" alt="" width={400} height={250} />
            <h3 className="text-center mt-5 fs-1 fw-bold">OUPS!</h3>
            <p className="fs-6" id="gray">Aucun compte trouvé pour le moment.</p>
            <button className="btn" id="pink" onClick={handleShowModal}>Ajouter un compte</button>
          </div>
        ) : (
          <>
            {currentCards.map((card, index) => (
              <div key={index} className="card-slide-in" style={{ animationDelay: `${index * 0.4}s` }}>
                <Card label={card.label} password={card.password} date={card.date} img={card.img} />
              </div>
            ))}

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-4">
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  {Array.from({ length: Math.ceil(filteredCards.length / cardsPerPage) }).map((_, index) => (
                    <li key={index + 1} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => paginate(index + 1)}>
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </>
        )}

        {/* Modal Bootstrap */}
        <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }} aria-labelledby="modalTitle" aria-hidden={!showModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fs-5" id="modalTitle">Ajouter un nouveau compte</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <Input type="file" Value="" />
                <Input type="text" placeholder="Entre le nom de site ou application" Value="" />
                <Input type="text" placeholder="Entre l'URL de l'application ou du site" Value="" />
                <Input type="password" placeholder="Entre ton mot de passe" Value="" />
                <Input type="password" placeholder="Entre ton nom d'utilisateur" Value="" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary w-100" onClick={handleCloseModal}>Ajouter</button>
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
    <>
      <footer className="bg-primary text-white py-4 position-relative">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <div className="d-flex justify-content-left">
            <a href="#" className="footer-brand text-white fw-semibold logo logo-footer">DashDash</a>
          </div>
          <div className="d-flex fs-4">
            <a href="#" className="footer-brand text-white  fw-semibold me-4 "><i className="fa-brands fa-tiktok"></i></a>
            <a href="#" className="footer-brand text-white  fw-semibold me-4 "><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className="footer-brand text-white  fw-semibold me-4 "><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="footer-brand text-white  fw-semibold me-4 "><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="footer-brand text-white  fw-semibold me-4 "><i class="fa-brands fa-github"></i></a>
            <a href="#" className="footer-brand text-white  fw-semibold me-4"><i class="fa-brands fa-gitlab"></i></a>
          </div>
        </div>
        <hr className='text-white mx-5' />
        <div className="d-flex justify-content-center font-footer">
          <div className="mentions d-flex align-items-center">
            <a href="#" className='text-white me-4'>Mentions légales</a>
            <a href="#" className='text-white me-4'>Politique de confidentialité</a>
            <a href="#" className='text-white me-4'>Contactez-nous</a>
          </div>
        </div>
      </footer>
    </>


  );

}


export default App
