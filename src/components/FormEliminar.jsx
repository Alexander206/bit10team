import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/components/formEliminar.scss";


export const FormEliminar = () => {
  return (
    <Container>
        <Row className='fila_eliminar' >
            <Col>
            <img className='img_eliminar' src='https://img.cocinarico.es/2020-10/rollitos-de-poll-con-jamon-y-queso-1.webp' alt='eliminar'></img>
            </Col>
            <Col>
            <label className='titulo_eliminar' htmlFor='eliminar'>Elimina tu receta</label>
            <Row>
            <input type="text" className="form_control_eliminar" id="eliminar"></input>
            </Row>
            </Col>
            <Col>
            <button
            type='button'
            className='btn_eliminar'
            data-toggle="modal"
            data-target="#exampleModal"
            >
                Eliminar
            </button>
            </Col>
        </Row>
    </Container>
  )
}
