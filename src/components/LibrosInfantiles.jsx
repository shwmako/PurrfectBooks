import React from 'react'
import PropTypes from 'prop-types'

const LibrosInfantiles = props => {
  return (
    <div>
      <img src="/img/infantil.png" class="img-fluid" alt="..."></img>
      <nav class="p-5" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/Inicio">Inicio </a>
          </li>
          <li class="breadcrumb-item">
            <a href="/Catalogo">Catalogo</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Infantil
          </li>
        </ol>
      </nav>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro37.png" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Chimoc y los amigos de la Colina ¡al rescate!</h5>
              <p class="card-text">
              Claudia Paz
                <p class="card-text">
                  {" "}
                  Editorial: Planeta Junior
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 30.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro38.png" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">¡Feliz cumpleaños! Pollito</h5>
              <p class="card-text">
              Claudia Paz
                <p class="card-text">
                  {" "}
                  Editorial: Planeta Junior
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 30.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro39.png" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Conejo todo para Conejo</h5>
              <p class="card-text">
              Claudia Paz
                <p class="card-text">
                  {" "}
                  Editorial: Planeta Junior
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 30.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro40.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Marcus Pocus 1. Magia a domicilio</h5>
              <p class="card-text">
              Pedro Mañas | David Sierra Listón
                <p class="card-text">
                  {" "}
                  Editorial: Destino
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
            <img src="/img/libro41.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Las Princesas Rebeldes 1. El misterio de la virgulina inmortal</h5>
              <p class="card-text">
              Roberto Santiago | Ángela Armero
                <p class="card-text">
                  {" "}
                  Editorial: Destino
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
            <img src="/img/libro42.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Anna Kadabra 5. La Isla de las Mascotas</h5>
              <p class="card-text">
              Pedro Mañas | David Sierra Listón
                <p class="card-text">
                  {" "}
                  Editorial: Planeta Junior
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 49.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro43.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Las Ratitas 8. El bosque de las hadas luminosas</h5>
              <p class="card-text">
              Las Ratitas
                <p class="card-text">
                  {" "}
                  Editorial: Destino
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
            <img src="/img/libro44.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Las Ratitas 9. La cabaña embrujada</h5>
              <p class="card-text">
              Las Ratitas
                <p class="card-text">
                  {" "}
                  Editorial: Destino
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
  )
}

LibrosInfantiles.propTypes = {

}

export default LibrosInfantiles
