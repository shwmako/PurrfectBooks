import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div>

      <div class="b-example-divider"></div>
      <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img src="/img/animal-shelter.png" alt="" srcset="" />
            </a>
            <span class="mb-3 mb-md-0 text-muted fs-5 fst-italic">
            Purrfect Books © 2024
            </span>
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3">
                <a class="text-muted" href="#"></a>
              </li>
              <li class="ms-3">
                <a class="text-muted" href="#"></a>
              </li>
              <li class="ms-3">
                <a class="text-muted" href="#"></a>
              </li>
            </ul>
          </div>
          <div class="col mb-3"></div>
          <div class="col mb-2">
            <h5>Sobre Nosotros</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/Nosotros" class="nav-link p-0 text-muted">
                  Sobre Nosotros
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/Contactanos" class="nav-link p-0 text-muted">
                  Contactanos
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/Suscribete" class="nav-link p-0 text-muted">
                  Suscríbete
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/Noticias" class="nav-link p-0 text-muted">
                  Noticias
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-2">
            <h5>Redes</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a
                  href="https://www.facebook.com/?locale=es_LA"
                  class="nav-link p-0 text-muted"
                >
                  <img
                    src="/img/facebook.png"
                    alt=""
                    class="d-inline-block align-text-top"
                  />
                  ㅤFacebook
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="https://www.instagram.com/"
                  class="nav-link p-0 text-muted"
                >
                  <img
                    src="/img/instagram.png"
                    alt=""
                    class="d-inline-block align-text-top"
                  />
                  ㅤInstagram
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="https://twitter.com/?lang=es"
                  class="nav-link p-0 text-muted"
                >
                  <img
                    src="/img/twitter.png"
                    alt=""
                    class="d-inline-block align-text-top"
                  />
                  ㅤTwitter
                </a>
              </li>

              <li class="nav-item mb-2">
                <a
                  href="https://www.youtube.com/"
                  class="nav-link p-0 text-muted"
                >
                  <img
                    src="/img/youtube.png"
                    alt=""
                    class="d-inline-block align-text-top"
                  />
                  ㅤYoutube
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
