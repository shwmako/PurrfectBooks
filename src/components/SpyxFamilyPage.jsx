import React from "react";
import PropTypes from "prop-types";

const SpyxFamilyPage = (props) => {
  return (
    <div>

      <nav class="p-5" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/mangas">⇠ Volver</a>
          </li>
        </ol>
      </nav>
      <div class="container border border-success p-2 mb-2 border-opacity-25 shadow p-3 mb-5bg-body-tertiary rounded ">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <img src="/img/libro1.jpg" class="card mx-auto" alt="..."></img>
              <ul class="list-group list-group-flush text-center p-3">
                <li class="list-group-item">SKU: 45199</li>
                <li class="list-group-item">ISBN: 9788418271236</li>
                <li class="list-group-item">Autor: Tatsuya Endo</li>
                <li class="list-group-item">Editorial: Ivrea Argentina</li>
                <li class="list-group-item">Páginas: 212</li>
                <li class="list-group-item">Peso: 0.209Kg</li>
                <li class="list-group-item">Ancho: 13cm</li>
                <li class="list-group-item">Alto: 18cm</li>
              </ul>
            </div>
            <div class="col-sm-8 p-5">
              <div class="row align-items-center">
                <div class="col fs-1">SPY X FAMILY 01</div>
                <p>POR: TATSUYA ENDO</p>
                <p>
                  <div class="col fs-5">★★★★★ 4.9</div>
                </p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-outline-success" type="button">
                    Comprar
                  </button>
                </div>
                <p class="fs-3">Reseña</p>
                <p>
                  Los países de westalis y os tan i a libran desde hace años una
                  guerra Fria donde el espionaje y los asesinatos son moneda
                  corriente. El inigualado espía conocido como Twilight es el
                  mejor agente de Westalis que tiene por objetivo encargarse del
                  poderoso Donovan Desmond. El problema es que Desmond es un
                  ermitaño Antisocial cuyas únicas apariciones públicas son en
                  los actos escolares de su hijo. Twilight deberá acercaron al
                  objetivo lo suficiente como para desbaratar su agenda secreta.
                  Para ello, sólo deberá simular que es un hombre de familia.
                  Con el pequeño detalle de que sólo tiene 7 días para conseguir
                  la familia ideal. Es por eso que bajo la identidad del
                  psiquiatra Loid Forger, Twilight reclutará a Yor Briar, una
                  civil Ostaniana que quiere tener bajo perfil y Anya, una
                  huerfanita que sólo busca una familia cariñosa, para hacer las
                  partes de esposa e hija respectivamente. Pero resulta que este
                  par tampoco es nada normal, especialmente si tenemos en cuenta
                  que Yor es una asesina profesional buscada por ambos bandos y
                  Anya es una prófuga de un laboratorio secreto donde consiguen
                  poderes telepáticos. ¡Nota! La cubierta puede variar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="fs-5 text-center fw-semibold">ㅤ</p>
      <p class="fs-1 text-center fw-semibold">Relacionados</p>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/spy2.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Spy x Family</h5>
              <p class="card-text">
                Tatsuya Endo
                <p class="card-text">
                  {" "}
                  Volumen 02
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 26.00</p>
              <a
                href="/spyxfamily"
                class="btn btn-outline-success stretched-link"
              >
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/spy3.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Spy x Family</h5>
              <p class="card-text">
                Tatsuya Endo
                <p class="card-text">
                  {" "}
                  Volumen 03
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 26.00</p>
              <a
                href="/spyxfamily"
                class="btn btn-outline-success stretched-link"
              >
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/spy4.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Spy x Family</h5>
              <p class="card-text">
                Tatsuya Endo
                <p class="card-text">
                  {" "}
                  Volumen 04
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 26.00</p>
              <a
                href="/spyxfamily"
                class="btn btn-outline-success stretched-link"
              >
                Comprar
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/spy5.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title fs-3">Spy x Family</h5>
              <p class="card-text">
                Tatsuya Endo
                <p class="card-text">
                  {" "}
                  Volumen 05
                  <p class="card-text fs-6"> Disponible</p>
                </p>
              </p>
              <p class="card-text fw-semibold fs-4">S/ 26.00</p>
              <a
                href="/spyxfamily"
                class="btn btn-outline-success stretched-link"
              >
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SpyxFamilyPage.propTypes = {};

export default SpyxFamilyPage;
