import Carousel from "react-bootstrap/Carousel";
import imgOne from "./img/carousel-1.jpg";
import imgTwo from "./img/carousel-2.jpg";
import imgThree from "./img/carousel-3.jpg";
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid imgslider"
          src={imgOne}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="Title_Slide">Cardiology</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid imgslider"
          src={imgTwo}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="Title_Slide">Neurology</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid imgslider"
          src={imgThree}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="Title_Slide">Pulmonary</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
