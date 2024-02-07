import './Contacto.css';

function Contacto(){

    return(
        <div classname="container">
            <div classname="row">
                <div classname="col-md-12">
                    <div classname="well well-sm">
                        <form classname="form-horizontal" method="post">
                            <fieldset classname="flexCont">
                                <legend classname="text-center header">Contactanos</legend>
        
                                <div classname="form-group">
                                    <span classname="col-md-1 col-md-offset-2 text-center"><i classname="fa fa-user bigicon"></i></span>
                                    <div classname="col-md-8">
                                        <input id="fname" name="name" type="text" placeholder="Nombre" classname="form-control"/>
                                    </div>
                                </div>
                                <div classname="form-group">
                                    <span classname="col-md-1 col-md-offset-2 text-center"><i classname="fa fa-user bigicon"></i></span>
                                    <div classname="col-md-8">
                                        <input id="lname" name="name" type="text" placeholder="Apellido" classname="form-control"/>
                                    </div>
                                </div>
        
                                <div classname="form-group">
                                    <span classname="col-md-1 col-md-offset-2 text-center"><i classname="fa fa-envelope-o bigicon"></i></span>
                                    <div classname="col-md-8">
                                        <input id="email" name="email" type="text" placeholder="Email" classname="form-control"/>
                                    </div>
                                </div>
        
                                <div classname="form-group">
                                    <span classname="col-md-1 col-md-offset-2 text-center"><i classname="fa fa-phone-square bigicon"></i></span>
                                    <div classname="col-md-8">
                                        <input id="phone" name="phone" type="text" placeholder="Teléfono" classname="form-control"/>
                                    </div>
                                </div>
        
                                <div classname="form-group">
                                    <span classname="col-md-1 col-md-offset-2 text-center"><i classname="fa fa-pencil-square-o bigicon"></i></span>
                                    <div classname="col-md-8">
                                        <textarea classname="form-control" id="message" name="message" placeholder="Mensaje" rows="7"></textarea>
                                    </div>
                                </div>
        
                                <div classname="form-group">
                                    <div classname="col-md-12 text-center">
                                        <button type="submit" classname="btn btn-warning btn-lg">Enviar</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default Contacto;