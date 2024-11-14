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
            <img src="/img/libro1.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Spy x Family</h5>
              <p class="card-text">
                Tatsuya Endo
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 26.00</p>
              <a href="/spyxfamily" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro2.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Haikyu!!</h5>
              <p class="card-text">
                Haruichi Furudate
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 26.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro3.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Chainsawman</h5>
              <p class="card-text">
                Tatsuki Fujimoto
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 27.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro7.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Jujutsu Kaisen</h5>
              <p class="card-text">
                Gege Akutami
                <p class="card-text">
                  {" "}
                  Volumen 01
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
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro4.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Cardcaptor Sakura Edicion Deluxe</h5>
              <p class="card-text">
                CLAMP
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 47.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro5.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Nana</h5>
              <p class="card-text">
                Ai Yazawa
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 24.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro6.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Ao Haru Ride</h5>
              <p class="card-text">
                Io Sakisaka
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 27.00</p>
              <a href="#" class="btn btn-outline-success stretched-link">
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro8.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Your Lie in April</h5>
              <p class="card-text">
                Naoshi Arakawa
                <p class="card-text">
                  {" "}
                  Volumen 01
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 26.00</p>
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
            <a class="page-link" href="/Mangaspage2" aria-label="Next">
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
