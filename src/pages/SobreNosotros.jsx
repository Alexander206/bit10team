import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Header} from '../components/Header.jsx'
import {Footer} from '../components/Footer.jsx'
import "../styles/components/sobreNosotros.scss";


export const SobreNosotros = () => {
  return (
    <>
    <Header/> 
    <main>
    <Container className="section_Texto">
    <section >
      <Row>
        <Col className="col-md-6 text-left align-middle">
        <Row className="fila">
        <h3 className="texto_Profesion">Web Developer FullStack</h3>
        </Row>
        <Row>
        <h1 className="nombre_Programador">Jeisson Alexander Gavilan Murcia</h1>
        </Row>
        <Row>
        <h2>___________________________________</h2>
        </Row>
        <Row>
        <p className="descripcion_Perfil">Licenciado en Diseño Tecnológico con conocimientos de mecánica, diseño digital, dibujo técnico, programación y etiquetado. Apasionado por la programación y la resolución de problemas que incorporen aplicaciones digitales. </p>
        </Row>
        <Row>
        <Col>
        <a href='https://www.linkedin.com/in/jeisson-alexander/' target='_blank' class="button" className="btn_Linkedin">💻LinkedIn </a></Col>
        <Col>
        <a href='https://www.linkedin.com/in/jeisson-alexander/' target='_blank' class="button" className="btn_GitHub">💼GitHub </a></Col>
        </Row>
        </Col>
        <Col className="col-md-6 text-rigth">
      <img className="img_Foto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzIshTlgRJp_GGVwZzyxq7I9DAE6bSDxapg&usqp=CAU" alt="" srcset="" />
      </Col>
      </Row>
    </section>
    </Container>
    </main>
    <Footer/>  
    </> 
      )
    };

