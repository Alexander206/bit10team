import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../components/Header.jsx";
import linea from "../assets/img/linea.png";
import fondo_jeison from "../assets/img/fondo_jeison.png";
import fondo_adriana from "../assets/img/fondo_adriana.png";
import fondo_wendy from "../assets/img/fondo_wendy.png";
import fondo_eleiza from "../assets/img/fondo_eleiza.png";
import { TagetAbout } from "../components/TagetAbout.jsx";
import Button from "react-bootstrap/Button";
import "../styles/components/sobreNosotros.scss";

export const SobreNosotros = () => {
  return (
    <Container className="contenedor_completo">
      <Header />
      <section className="container">
        <div className="container_uno">
          <TagetAbout
            profesion="Web Developer FullStack"
            name="Jeisson Alexander"
            lastname="Gavilan Murcia"
            description="Soy entusiasta por aprender y usar nuevas tecnologías del desarrollo web, me apasiona el diseño, la
                  programación y la creación de productos digitales. Al ser Licenciando en Diseño Técnológico, mis
                  habilidades docente han fortalecido la comunicación, la dirección de grupos y la adaptabilidad."
            img={fondo_jeison}
            linkedin="https://alexander206.github.io/"
            github="https://github.com/Alexander206"
          />
          <TagetAbout
            profesion="Fronted Developer"
            name="Adriana"
            lastname="Moreno Gutierrez"
            description="Desarrolladora Web Frontend junior, con conocimientos técnicos en: HTML, CSS, Javascript y React.
                  Formación en Cloud computing, Azure, AWS, Analítica de datos, ISO 27001, Scrum y Lean six sigma.
                  Experiencia en análisis, planeación y documentación de pruebas manuales, asegurando parametros de
                  calidad del software."
            img={fondo_adriana}
            linkedin="https://soyadrianamorenogutierrez.github.io/bit07me/"
            github="https://github.com/soyadrianamorenogutierrez"
          />
          <TagetAbout
            profesion="Diseñadora Gráfica, Desarrolladora frontend"
            name="Wendy Alejandra"
            lastname="Carlos Muñoz"
            description="Soy una persona proactiva, me gusta trabajar en equipo, con experiencia en el área de creación de
                  contenido para redes sociales, audiovisual y fotografía. Busco crecer de forma profesional y
                  desarrollar nuevas habilidades creativas."
            img={fondo_wendy}
            linkedin="https://wenaleja.github.io/bit07me/"
            github="https://github.com/wenaleja"
          />
          <TagetAbout
            profesion="Ingeniera Mecánica | Desarrollador Web FrontEnd"
            name="Eleiza Esperanza"
            lastname="Caridad de Fucci"
            description="Pasión por la tecnología y la resolución de problemas complejos. Con mi experiencia como Ingeniera y
                  mi formación en el desarrollo web con énfasis en React, combino habilidades técnicas y creativas."
            img={fondo_eleiza}
            linkedin="https://www.linkedin.com/in/eleiza-caridad/"
            github="https://github.com/eleizac"
          />
        </div>
      </section>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </Container>
  );
};
