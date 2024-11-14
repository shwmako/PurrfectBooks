import React from "react";
import PropTypes from "prop-types";

const Bienestar = (props) => {
  return (
    <div>
      <img src="/img/salud.png" class="img-fluid" alt="..."></img>
      <nav class="p-5" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/Inicio">Inicio </a>
          </li>
          <li class="breadcrumb-item">
            <a href="/Catalogo">Catalogo</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Bienestar y Salud
          </li>
        </ol>
      </nav>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro45.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">
                Recupera tu mente, reconquista tu vida
              </h5>
              <p class="card-text">
                Marian Rojas Estapé
                <p class="card-text">
                  {" "}
                  Editorial: Espasa
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 90.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro46.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Comprende tus emociones</h5>
              <p class="card-text">
                Enrique Rojas
                <p class="card-text">
                  {" "}
                  Editorial: Espasa
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 70.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro47.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Enfócate</h5>
              <p class="card-text">
                Cal Newport
                <p class="card-text">
                  {" "}
                  Editorial: Paidos
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 80.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro48.png" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">¿Amor o adicción?</h5>
              <p class="card-text">
                Silvia Congost
                <p class="card-text">
                  {" "}
                  Editorial: Diana
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 70.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro49.png" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">El poder de los 5 segundos</h5>
              <p class="card-text">
                Mel Robbins
                <p class="card-text">
                  {" "}
                  Editorial: Paidos
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 100.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro50.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">La nueva ciencia de la atención</h5>
              <p class="card-text">
                Amishi Jha
                <p class="card-text">
                  {" "}
                  Editorial: Paidos
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 130.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro51.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Cómo detectar mentiras</h5>
              <p class="card-text">
                Paul Ekman
                <p class="card-text">
                  {" "}
                  Editorial: Paidos
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 100.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro52.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Decir sí a la vida</h5>
              <p class="card-text">
                Joan Garriga
                <p class="card-text">
                  {" "}
                  Editorial: Destino
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 95.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Bienestar.propTypes = {};

export default Bienestar;
