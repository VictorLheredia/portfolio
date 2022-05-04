import "../styles/Projects.css";
import { Container } from "react-bootstrap";
import Vcars from "../projects/Vcars";

export default function Projects() {
  return (
    <div id="Projects">
      <Container id="md">
        <div className="projects-container">
          <div className="title">Projetos</div>
          <Vcars></Vcars>
        </div>
      </Container>
    </div>
  );
}
