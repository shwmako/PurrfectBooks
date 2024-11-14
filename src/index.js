import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from './components/Inicio';
import Catalogo from './components/Catalogo';
import Noticias from './components/Noticias';
import Nosotros from './components/Nosotros';
import Contactanos from './components/Contactanos';
import Navegacion from './components/Navegacion';
import Footer from './components/Footer';
import Suscribete from './components/Suscribete';
import Actualidad from './components/Actualidad';
import Bienestar from './components/Bienestar';
import Ficcion from './components/Ficcion';
import LibrosInfantiles from './components/LibrosInfantiles';
import LibrosJuveniles from './components/LibrosJuveniles';
import MangasComics from './components/MangasComics';
import NoFiccion from './components/NoFiccion';
import MangasComics2 from './components/MangasComics2';
import SpyxFamilyPage from './components/SpyxFamilyPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <div>Pagina no encontrada</div>
  },

  {
    path: "/inicio",
    element: <Inicio />,
  },
  {
    path: "/catalogo",
    element: <Catalogo />,
  },
  {
    path: "/noticias",
    element: <Noticias />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path: "/contactanos",
    element: <Contactanos />,
  },
  {
    path: "/suscribete",
    element: <Suscribete />,
  },

  {
    path: "/actualidad",
    element: <Actualidad />,
  },
  {
    path: "/bienestar",
    element: <Bienestar />,
  },
  {
    path: "/ficcion",
    element: <Ficcion />,
  },
  {
    path: "/librosinfantiles",
    element: <LibrosInfantiles />,
  },
  {
    path: "/librosjuveniles",
    element: <LibrosJuveniles />,
  },
  {
    path: "/mangas",
    element: <MangasComics />,
  },
  {
    path: "/noficcion",
    element: <NoFiccion />,
  },
  {
    path: "/mangaspage2",
    element: <MangasComics2 />,
  },
  {
    path: "/spyxfamily",
    element: <SpyxFamilyPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacion></Navegacion>
    <RouterProvider router={router}/>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
