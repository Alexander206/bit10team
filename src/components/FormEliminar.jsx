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
            data-target="#exampleModalDos"
            >
                Eliminar
            </button>
            </Col>
        </Row>

        {/* //Modal */}
      <div
        className="modal fade"
        id="exampleModalDos"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Eliminación
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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
        </Row>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-modal_uno"
                data-dismiss="modal"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
