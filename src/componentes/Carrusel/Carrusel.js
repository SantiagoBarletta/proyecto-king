import './Carrusel';
import carru1 from '../../assets/imgKing/carru2.jpg'; //comento
import carru2 from '../../assets/imgKing/carrruu2.jpg'; //comento
import carru3 from '../../assets/imgKing/carru1.gif'; //comento



function Carrusel() {

    return(

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carru1} className="d-block w-100" alt="Imágen portada libro 'You Like it Darker'"/>
          </div>
          <div className="carousel-item">
            <img src={carru2} className="d-block w-100" alt="Imágen portada libro 'Holly'"/>
          </div>
          <div className="carousel-item">
            <img src={carru3} className="d-block w-100" alt="Gif de la portada del libro 'Fairy Tale'"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

    </div>

    )



}


export default Carrusel;