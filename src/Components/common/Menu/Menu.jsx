import "./Menu.css";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Gestor App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usuarios">
                  Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gastos">
                  Gastos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categorias">
                  Categorias
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/metodosPagos">
                  MetodoPago
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/listausuarios">
                  Lista usarios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listagastos">
                  Lista gastos
                </Link>  
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/listacategorias">
                  Lista categorias
                </Link>  
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to="/listametodosPagos">
                  Lista metodoPago
                </Link>  
              </li>      
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
