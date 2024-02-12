import './Carrusel';
import carru1 from '../../assets/imgKing/carru2.jpg'; //comento
import carru2 from '../../assets/imgKing/carrruu2.jpg'; //comento
import carru3 from '../../assets/imgKing/carru1.gif'; //comento
import Carousel from 'react-bootstrap/Carousel';




function Carrusel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carru1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carru2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carru3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;

