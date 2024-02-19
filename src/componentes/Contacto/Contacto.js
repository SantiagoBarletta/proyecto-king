import './Contacto.css';

import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


function Contacto() {
  return (
    
    <div id='mainContacto'>
    <Form>

        <div className='flexCont'>

        <div className='tituloContacto'> 
        <h1>Contactanos</h1>
        </div>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Dirección de Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Acepto términos y condiciones" />
      </Form.Group>

      <div className='botonFlex'>
      <Button className="boton" variant="primary" type="submit">
        Enviar
      </Button>
      </div>
      </div>
    </Form>
    </div>
  );
}

export default Contacto;

/*function Contacto(){

    return(

        <main className = "mainContacto">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <form className="form-horizontal" method="post">
                            <fieldset className="flexCont">
                                <legend className="text-center header">Contactanos</legend> 

                            <div className="formulario">

                                <div className="form-group">
                                    <span className="col-md-1 text-center"><i className="fa fa-user bigicon"></i></span>
                                    <div>
                                        <input id="fname" name="name" type="text" placeholder="Nombre" className="form-control"/>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                    <div>
                                        <input id="lname" name="name" type="text" placeholder="Apellido" className="form-control"/>
                                    </div>
                                </div>
        
                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                                    <div>
                                        <input id="email" name="email" type="text" placeholder="Email" className="form-control"/>
                                    </div>
                                </div>
        
                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-phone-square bigicon"></i></span>
                                    <div>
                                        <input id="phone" name="phone" type="text" placeholder="Teléfono" className="form-control"/>
                                    </div>
                                </div>
        
                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                    <div>
                                        <textarea className="form-control" id="message" name="message" placeholder="Mensaje" rows="7"></textarea>
                                    </div>
                                </div>

                            </div>
        
                                <div className="form-group">
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="btn btn-warning btn-lg">Enviar</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </main>

    )


}

export default Contacto;*/