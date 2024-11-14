import React from "react";
import PropTypes from "prop-types";

const Contactanos = (props) => {
  return (
    <div>
      <img src="/img/Contactanos.png" class="img-fluid" alt="..."></img>
      <p class="fs-1 text-center fw-semibold">Consultas y Sugerencias</p>
      <p class="text-center fw-normal fs-5">
        Déjanos tus consultas o sugerencias y nos pondremos en contacto contigo.
      </p>
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <img src="/img/abierto.png" class="img-fluid" alt="..."></img>
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
                E-mail
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                aria-describedby="inputGroupPrepend2" required
              ></input>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Celular
              </label>
              <input type="text" class="form-control" id="celular"></input>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Mensaje
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                required
              ></textarea>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                required
              ></input>
              <label class="form-check-label" for="flexCheckDefault" >
                He leído y autorizo el tratamiento de mis datos según la
                Política de Privacidad.
              </label>
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

Contactanos.propTypes = {};

export default Contactanos;
