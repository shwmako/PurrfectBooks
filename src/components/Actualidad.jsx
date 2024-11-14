import React from "react";
import PropTypes from "prop-types";

const Actualidad = (props) => {
  return (
    <div>
      <img src="/img/empresa.png" class="img-fluid" alt="..."></img>
      <nav class="p-5" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/Inicio">Inicio </a>
          </li>
          <li class="breadcrumb-item">
            <a href="/Catalogo">Catalogo</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Actualidad y Empresa
          </li>
        </ol>
      </nav>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro53.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">El libro negro de Vladímir Putin</h5>
              <p class="card-text">
                Traductor: Anna Ocaña
                <p class="card-text">
                  {" "}
                  Editorial: Espasa
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 140.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro54.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Auge y caída del orden neoliberal</h5>
              <p class="card-text">
                Gary Gerstle
                <p class="card-text">
                  {" "}
                  Editorial: Península
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
            <img src="/img/libro55.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">
                Enamórate del problema no de la solución
              </h5>
              <p class="card-text">
                Uri Levine
                <p class="card-text">
                  {" "}
                  Editorial: Paidos
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
            <img src="/img/libro56.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">
                Finanzas descentralizadas: la nueva y definitiva libertad
                económica
              </h5>
              <p class="card-text">
                Pepe Díaz
                <p class="card-text">
                  {" "}
                  Editorial: Deusto
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 36.00</p>
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

Actualidad.propTypes = {};

export default Actualidad;
