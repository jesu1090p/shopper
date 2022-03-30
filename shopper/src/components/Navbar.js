import '../styles/navbar.css';
import 'bootstrap';

function Navbar(){
  return (
    <div className='container-fluid'>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="test">Lista de Compras</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Lista de Compras</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="test">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="test">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href='/' id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hist&oacute;rico
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a className="dropdown-item" href="test">2022</a></li>
                    <li><a className="dropdown-item" href="test">2021</a></li>
                    <li><a className="dropdown-item" href="test">2020</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;