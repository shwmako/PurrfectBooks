import React from "react";
import PropTypes from "prop-types";
import Banner from "./Banner";

const Inicio = (props) => {
  return (
    <div>
      <Banner></Banner>
      <p class="fs-1 text-center fw-semibold">Más vistos</p>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro17.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Cómo hacer que te pasen cosas buena</h5>
              <p class="card-text">
                Uniendo el punto de vista científico, psicológico y humano, la
                autora nos ofrece una reflexión profunda, consejos, acerca de la
                aplicación de nuestras propias capacidades al empeño de
                procurarnos una existencia plena y feliz.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro18.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">En Agosto nos vemos TD</h5>
              <p class="card-text">
                Cada mes de agosto Ana Magdalena Bach toma el transbordador
                hasta la isla donde está enterrada su madre para visitar la
                tumba en la que yace. Esas visitas acaban suponiendo una
                irresistible invitación a convertirse en una persona distinta
                durante una noche al año.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro19.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Enfócate</h5>
              <p class="card-text">
                Es un libro que le ayuda al lector a conseguir la concentración
                en tareas exigentes no solo de la vida diaria sino también en el
                trabajo. Contiene una serie de tips y ayudas para que en un
                mundo lleno de distracciones, el multitasking pueda lograrse con
                efectividad, responsabilidad y sin estrés.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro20.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Cortejo</h5>
              <p class="card-text">
                Simona, una mujer en la mitad de sus cuarenta, sufre la muerte
                de su madre, una figura tutelar en su vida que, hasta cierto
                punto, era determinante para la construcción de su identidad.
                Este suceso coincide con la llegada de un amor inesperado a su
                vida. Nora, una fotógrafa de clase acomodada, hace tambalear sus
                certezas y la fortaleza que Simona creía tener.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro1.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Spy x Family</h5>
              <p class="card-text">
                Una historia acerca de una peculiar familia formada nada menos
                que por un espía, una asesina, ¡y una pequeña y adorable
                huérfana con poderes telepáticos!
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro2.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Haikyuu!</h5>
              <p class="card-text">
                Shoyo Hinata es un estudiante que se fanatiza con el vóley
                después de ver un partido en el que la rompía un jugador petiso
                como él. Esto lo inspira a seguir sus pasos y convertirse en un
                as aunque tenga que arrancar bien de abajo.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro3.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Chainsawman</h5>
              <p class="card-text">
                La vida de pobreza de Denji cambia para siempre cuando con su
                nueva mascota... ¡Pochita! una mezcla de perro y sierra
                mecánica. Ahora vive en la gran ciudad y es oficialmente un
                cazador de demonios.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card w-100 p-5 border-0">
            <img src="/img/libro4.jpg" class="card mx-auto" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Cardcaptor Sakura</h5>
              <p class="card-text">
                Sakura Kinomoto, una niña de diez años, accidentalmente ha
                liberado las Cartas Clow". Ahora, con la ayuda de sus amigos
                Tomoyo, Shaoran y el guardián Kerberos, hará todo por obtenerlas
                mientras vive grandes aventuras.
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#">
              Ver mas ➜ 
            </a>
          </li>
        </ul>
      </nav>
      <p class="fs-1 text-center fw-semibold">ㅤ</p>

      <img src="/img/Participa.png" class="img-fluid" alt="..."></img>

      <p class="fs-1 text-center fw-semibold">ㅤ</p>
      <p class="fs-1 text-center fw-semibold">Suscríbete</p>
      <p class="fs-4 text-center fw-semibold">
        Para recibir nuestras noticias, novedades y acceder a nuestros
        beneficios
      </p>
      <div class="row">
        <form action="" method="">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="micorreo@mail.com"
                  required
                />
                <span class="input-group-btn">
                  <button type="button" class="btn btn btn-success">
                    Aceptar
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <p class="fs-1 text-center fw-semibold">ㅤ</p>
    </div>
  );
};

Inicio.propTypes = {};

export default Inicio;
