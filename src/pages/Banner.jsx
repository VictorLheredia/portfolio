import "../styles/Banner.css";
import { Container } from "react-bootstrap";
import photo from "../img/photo.jpeg";

export default function Banner() {
  return (
    <div id="Banner">
      <Container id="md">
        <div className="banner-container">
          <div className="photo">
            <img src={photo} alt="foto" />
          </div>
          <div className="info">
            <div className="name">Victor Luiz Heredia</div>
            <div className="title">Full Stack Developer</div>
            <div className="subtitle">
              Desenvolvedor Fullstack jr com foco em React -  estudante de
              análise e desenvolvimento de sistemas.
            </div>      
          </div>
        </div>
      </Container>
    </div>
  );
}
