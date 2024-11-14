import React from "react";
import PropTypes from "prop-types";

const Catalogo = (props) => {
  return (
    <div>
      <img src="/img/Catalogo.png" class="img-fluid" alt="..."></img>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-5">
        <div class="col-sm-6">
          <div class="card border border-success-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
            <div class="card-body">
              <h5 class="card-title">Mangas</h5>
              <p class="card-text">
                Sumérgete en la magia del dibujo y la narrativa!
              </p>
              <a href="/Mangas" class="btn btn-success">
                Ver Catálogo
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card border border-success-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
            <div class="card-body">
              <h5 class="card-title">Libros Juvenil</h5>
              <p class="card-text">
                ¿Listo para embarcarte en una increíble travesia literaria?
              </p>
              <a href="/LibrosJuveniles" class="btn btn-success">
                Ver Catálogo
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card border border-success-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
            <div class="card-body">
              <h5 class="card-title">Ficción</h5>
              <p class="card-text">
                Mundos imaginarios donde cada página es una aventura por
                descubrir
              </p>
              <a href="/Ficcion" class="btn btn-success">
                Ver Catálogo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-4 g-4 p-5">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card border border-success-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
            <div class="card-body">
              <h5 class="card-title">Libros Infantiles</h5>
              <p class="card-text">
                Literatura que sea disfrutada por los niños. Lánzate a la
                aventura!
              </p>
              <a href="LibrosInfantiles" class="btn btn-success">
                Ver Catálogo
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card border border-success-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
            <div class="card-body">
              <h5 class="card-title">Bienestar y Salud</h5>
              <p class="card-text">
                Descubre el camino hacia una vida plena y saludable entre
                nuestras páginas
              </p>
              <a href="/Bienestar" class="btn btn-success">
                Ver Catálogo
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card border border-success-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
            <div class="card-body">
              <h5 class="card-title">Actualidad Y Empresa</h5>
              <p class="card-text">
                Emprende el camino hacia el éxito con conocimiento actualizado
              </p>
              <a href="/Actualidad" class="btn btn-success">
                Ver Catálogo
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card border border-success-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
            <div class="card-body">
              <h5 class="card-title">No Ficción</h5>
              <p class="card-text">
                Sumérgete en el conocimiento profundo y las historias reales que
                desafían la imaginación
              </p>
              <a href="/NoFiccion" class="btn btn-success">
                Ver Catálogo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Catalogo.propTypes = {};

export default Catalogo;
