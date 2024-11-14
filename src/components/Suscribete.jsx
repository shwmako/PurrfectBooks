import React from "react";
import PropTypes from "prop-types";

const Suscribete = (props) => {
  return (
    <div>
      <img src="/img/suscribete.png" class="img-fluid" alt="..."></img>
      <p class="fs-1 text-center fw-semibold">
        Suscríbete y obten un 15% OFF en tu próxima compra.
      </p>
      <p class="fs-3 text-center fw-semibold">ㅤ</p>

      <div class="container">
        <div class="row align-items-center">
          <div class="col p-3">
            <img src="/img/suscribete1.png" class="img-fluid" alt="..."></img>
          </div>
          <div class="col">
            <form action="">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Nombre
                </label>
                <input type="text" class="form-control" id="name" required></input>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Apellidos
                </label>
                <input type="text" class="form-control" id="apellidos" required></input>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  DNI
                </label>
                <input type="text" class="form-control" id="name" required></input>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                ></input>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Celular
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="celular"
                  required
                ></input>
              </div>
              <div class="mb-3">
                <p>Selecciona tus categorias favoritas</p>
                <label for="exampleFormControlInput1" class="form-label" >
                  Opcion 1
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  required
                >
                  <option selected disabled value="">Seleccione</option>
                  <option value="1">Mangas</option>
                  <option value="2">No Ficcion</option>
                  <option value="3">Actualidad y Empresa</option>
                  <option value="4">Ficcion</option>
                  <option value="5">Bienestar y Salud</option>
                  <option value="6">Libros Juveniles</option>
                  <option value="6">Libros Infantiles</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Opcion 2
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected disabled value="">Seleccione</option>
                  <option value="1">Mangas</option>
                  <option value="2">No Ficcion</option>
                  <option value="3">Actualidad y Empresa</option>
                  <option value="4">Ficcion</option>
                  <option value="5">Bienestar y Salud</option>
                  <option value="6">Libros Juveniles</option>
                  <option value="6">Libros Infantiles</option>
                </select>
              </div>

              <div class="mb-3 p-3">
                <button type="submit" class="btn btn-success">
                  Aceptar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Suscribete.propTypes = {};

export default Suscribete;
