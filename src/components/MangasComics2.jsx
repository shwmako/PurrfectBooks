import React from "react";
import PropTypes from "prop-types";

const MangasComics = (props) => {
  return (
    <div>
      <img src="/img/Mangas.png" class="img-fluid" alt="..."></img>
      <nav class="p-5" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/Inicio">Inicio </a>
          </li>
          <li class="breadcrumb-item">
            <a href="/Catalogo">Catalogo</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Mangas
          </li>
        </ol>
      </nav>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro9.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">
                Wotakoi: Qué difícil es el amor para los otaku
              </h5>
              <p class="card-text">
                Fujita
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 30.00</p>
              <a href="#" class="btn btn-outline-success">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro10.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Horimiya</h5>
              <p class="card-text">
                HERO, Daisuke Hagiwara
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 32.00</p>
              <a href="#" class="btn btn-outline-success">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro11.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Oyasumi Punpun</h5>
              <p class="card-text">
                Inio Asano
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 29.00</p>
              <a href="#" class="btn btn-outline-success">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro12.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">The Promised Neverland</h5>
              <p class="card-text">
                Kaiu Shirai
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 26.00</p>
              <a href="#" class="btn btn-outline-success">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro13.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">You are in the blue summer</h5>
              <p class="card-text">
                Nagisa Furuya
                <p class="card-text">
                  {" "}
                  Tomo Unico
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 29.00</p>
              <a href="#" class="btn btn-outline-success">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro14.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">The Blue Summer and You</h5>
              <p class="card-text">
                Nagisa Furuya
                <p class="card-text">
                  {" "}
                  Tomo Unico
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 29.00</p>
              <a href="#" class="btn btn-outline-success">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro15.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Blue Period</h5>
              <p class="card-text">
                Tsubasa Yamaguchi
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 29.00</p>
              <a href="#" class="btn btn-outline-success">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro16.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Blue Lock</h5>
              <p class="card-text">
                Muneyuki Kaneshiro, Yusuke Nomura
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 26.00</p>
              <a href="#" class="btn btn-outline-success">
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
            <a class="page-link" href="/Mangas">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/Mangaspage2">
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

MangasComics.propTypes = {};

export default MangasComics;
