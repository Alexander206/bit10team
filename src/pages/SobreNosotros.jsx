import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../components/Header.jsx";
import linea from "../assets/img/linea.png"
import fondo_jeison from "../assets/img/fondo_jeison.png"
import fondo_adriana from "../assets/img/fondo_adriana.png"
import fondo_wendy from "../assets/img/fondo_wendy.png"
import fondo_eleiza from "../assets/img/fondo_eleiza.png"
import Button from 'react-bootstrap/Button';
import '../styles/components/sobreNosotros.scss';

export const SobreNosotros = () => {
  return (
    <Container className="contenedor_completo">
      <Header />
      <section className="container">
        <div className="container_uno">
          <div className="row">
            <div className="col-lg-6">
              <div className="informacion">
                <h2 className="titulo_profesion">Web Developer FullStack</h2>
                <h1 className="nombre_programador">Jeisson Alexander <br /> Gavilan Murcia</h1>
                <figure>
                  <img className='img_linea' src={linea} alt='linea' />
                </figure>
                <p className="descripcion" >Soy entusiasta por aprender y usar nuevas tecnologías del desarrollo web, me apasiona el diseño, la programación y la creación de productos digitales. Al ser Licenciando en Diseño Técnológico, mis habilidades docente han fortalecido la comunicación, la dirección de grupos y la adaptabilidad.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <figure>
                <img className="img_jeison" src={fondo_jeison} alt="jeison" />
              </figure>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Button variant="light p-4 " href="https://alexander206.github.io/" className="btn_portafolio"> <ion-icon name="briefcase-outline"></ion-icon> Portafolio</Button>
              </div>
              <div className="col-lg-6">
                <Button variant="light p-4" href="https://github.com/Alexander206" className="btn_portafolio"><ion-icon name="person-add-outline"></ion-icon>GitHub</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="informacion">
                <h2 className="titulo_profesion">Fronted Developer</h2>
                <h1 className="nombre_programador">Adriana <br /> Moreno Gutierrez</h1>
                <figure>
                  <img className='img_linea' src={linea} alt='linea' />
                </figure>
                <p className="descripcion" >Desarrolladora Web Frontend junior, con conocimientos técnicos en: HTML, CSS, Javascript y React. Formación en Cloud computing, Azure, AWS, Analítica de datos, ISO 27001, Scrum y Lean six sigma. Experiencia en análisis, planeación y documentación de pruebas manuales, asegurando parametros de calidad del software. </p>
              </div>
            </div>
            <div className="col-lg-6">
              <figure>
                <img className="img_adriana" src={fondo_adriana} alt="adriana" />
              </figure>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Button variant="light p-4 " href="https://soyadrianamorenogutierrez.github.io/bit07me/" className="btn_portafolio_adriana"><ion-icon name="briefcase-outline"></ion-icon>Portafolio</Button>{' '}
              </div>
              <div className="col-lg-6">
                <Button variant="light p-4" href="https://github.com/soyadrianamorenogutierrez" className="btn_portafolio_adriana"><ion-icon name="person-add-outline"></ion-icon>GitHub</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="informacion">
                <h2 className="titulo_profesion">Diseñadora Gráfica, Desarrolladora frontend</h2>
                <h1 className="nombre_programador">Wendy Alejandra<br />Carlos Muñoz</h1>
                <figure>
                  <img className='img_linea' src={linea} alt='linea' />
                </figure>
                <p className="descripcion" >Soy una persona proactiva, me gusta trabajar en equipo y con toda la actitud de aprender día a día,con experiencia en el área de creación de contenido para redes sociales, audiovisual y fotografía. En busca de crecer de forma profesional y desarrollar nuevas habilidades creativas. La creación de páginas web y entusiasta para el seguimiento de la misma para poder fortalecer las habilidades necesarias para las creaciones digitales. Con las herramientas HTML, CSS, JavaScript.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <figure>
                <img className="img_wendy" src={fondo_wendy} alt="wendy" />
              </figure>
            </div>
            <div className="row">
              <div className="col-lg-6">
                {/* <Button variant="light p-4 " href="https://wenaleja.github.io/bit07me/" className="btn_portafolio_wendy"><ion-icon name="briefcase-outline"></ion-icon>Portafolio</Button> */}
              </div>
              <div className="col-lg-6">
                {/* <Button variant="light p-4" href="https://github.com/wenaleja" className="btn_portafolio_wendy"><ion-icon name="person-add-outline"></ion-icon>GitHub</Button> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="informacion">
                <h2 className="titulo_profesion">Ingeniera Mecánica | Desarrollador Web FrontEnd </h2>
                <h1 className="nombre_programador">Eleiza Esperanza<br />Caridad de Fucci</h1>
                <figure>
                  <img className='img_linea' src={linea} alt='linea' />
                </figure>
                <p className="descripcion" >Ingeniera Mecánica con una pasión por la tecnología y la resolución de problemas complejos. <br /> Con mi experiencia como Ingeniera y mi formación en el desarrollo web con énfasis en React, <br /> combino habilidades técnicas y creativas para ofrecer soluciones innovadoras. Me considero <br /> una futura desarrolladora web frontEnd apasionada y capaz de crear experiencias en <br /> línea intuitivas y atractivas para el usuario. </p>
              </div>
            </div>
            <div className="col-lg-6">
              <figure>
                <img className="img_eleiza" src={fondo_eleiza} alt="eleiza" />
              </figure>
            </div>
            <div className="row">
              <div className="col-lg-6">
                {/* <Button variant="light p-4 " href="https://www.linkedin.com/in/eleiza-caridad/" className="btn_portafolio_eleiza"><ion-icon name="briefcase-outline"></ion-icon>linkedin</Button>{' '} */}
              </div>
              <div className="col-lg-6">
                {/* <Button variant="light p-4" href="https://github.com/eleizac" className="btn_portafolio_eleiza"><ion-icon name="person-add-outline"></ion-icon>GitHub</Button>{' '} */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </Container>
  );
};
