import React from "react";
import PropTypes from "prop-types";

const Navegacion = (props) => {
  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand mb-0 h1" href="/Inicio">
            <img src="/img/animal-shelter.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
            Purrfect Books
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link fs-5" aria-current="page" href="/Inicio">
                Inicio
              </a>
              <a class="nav-link fs-5" href="/Catalogo">
                Catalogo
              </a>
              <a class="nav-link fs-5" href="/Noticias">
                Noticias
              </a>
              <a class="nav-link fs-5" href="/Nosotros">
                Nosotros
              </a>
              <a class="nav-link fs-5" href="/Contactanos">
                Contactanos
              </a>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

Navegacion.propTypes = {};

export default Navegacion;
