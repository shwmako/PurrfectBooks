import React from "react";
import PropTypes from "prop-types";

const NoFiccion = (props) => {
  return (
    <div>
      <img src="/img/noficcion.png" class="img-fluid" alt="..."></img>
      <nav class="p-5" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/Inicio">Inicio </a>
          </li>
          <li class="breadcrumb-item">
            <a href="/Catalogo">Catalogo</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            No Ficcion
          </li>
        </ol>
      </nav>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro57.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">La revolución francesa</h5>
              <p class="card-text">
                Jean-Clément Martin
                <p class="card-text">
                  {" "}
                  Editorial: Crítica
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 180.00</p>
              <a href="/#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro58.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Espía y traidor</h5>
              <p class="card-text">
                Ben Macintyre
                <p class="card-text">
                  {" "}
                  Editorial: Crítica
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 135.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro59.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Génesis</h5>
              <p class="card-text">
                Edward O. Wilson
                <p class="card-text">
                  {" "}
                  Editorial: Crítica
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 137.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro60.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">La química de lo bello</h5>
              <p class="card-text">
                Deborah García Bello
                <p class="card-text">
                  {" "}
                  Editorial: Paidos
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 110.00</p>
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
            <img src="/img/libro61.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">La historia del mundo. Un atlas</h5>
              <p class="card-text">
                Christian Grataloup
                <p class="card-text">
                  {" "}
                  Editorial: Península
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 170.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro62.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Manual de campo del arqueólogo</h5>
              <p class="card-text">
                Heather Burke | Claire Smith | Inés Domingo Sanz
                <p class="card-text">
                  {" "}
                  Editorial: Ariel
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 160.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro64.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Eleva tu juego culinario</h5>
              <p class="card-text">
                Giacomo Bocchio
                <p class="card-text">
                  {" "}
                  Editorial: Planeta
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
            <img src="/img/libro63.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Pastelería sin sin</h5>
              <p class="card-text">
                Gabriela Marchesotti
                <p class="card-text">
                  {" "}
                  Editorial: Cúpula
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

NoFiccion.propTypes = {};

export default NoFiccion;
