import React from 'react';
import '../styles/components/form.scss';
import { Container, Row, Col } from 'react-bootstrap';

export const Form = () => {
  return (
    <Container>
      <Row className='fila'>
        <Col>
          <img className='img_receta' src='https://i.blogs.es/d05ff1/lasana_bolonesa/1366_2000.jpg' alt='receta' />
        </Col>
        <Col>
          <label className='titulo_actualizar' htmlFor='actualizar'>
            Actualizar receta
          </label>
          <Row>
            <input type='text' className='form_control' id='actualizar'></input>
          </Row>
        </Col>
        <Col>
          <button type='button' className='btn_uno' data-toggle='modal' data-target='#exampleModal'>
            Actualizar
          </button>
          <button type='button' className='btn_dos' data-toggle='modal' data-target='#exampleModal'>
            Cancelar
          </button>
        </Col>
      </Row>
      {/* //Modal */}
      <div
        className='modal fade'
        id='exampleModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Actualización
              </h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <Row className='fila'>
                <Col>
                  <img
                    className='img_receta'
                    src='https://i.blogs.es/d05ff1/lasana_bolonesa/1366_2000.jpg'
                    alt='receta'
                  />
                </Col>
                <Col>
                  <label className='titulo_actualizar' htmlFor='actualizar'>
                    Actualizar receta
                  </label>
                  <Row>
                    <input type='text' className='form_control' id='actualizar'></input>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn-modal_uno' data-dismiss='modal'>
                Actualizar
              </button>
              <button type='button' className='btn-modal_dos'>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
