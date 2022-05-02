import "../styles/Header.css";
import { Link } from "react-scroll";
import { Container } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Header() {
  return (
    <div id="Header">
      <Container id="md">
        <div className="header-container">
          <div className="links">
            <a
              href="https://github.com/VictorLheredia/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-icon">
                <BsGithub />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/victor-luiz-heredia-153a7b227/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-icon">
                <BsLinkedin />
              </div>
            </a>
          </div>
          <div className="nav-items">
            <Link
              className="nav-item"
              activeClass="active"
              to="Banner"
              spy={true}
              smooth={false}
            >
              Home
            </Link>
            <Link
              className="nav-item"
              activeClass="active"
              to="Stacks"
              spy={true}
              smooth={false}
              offset={-100}
            >
              Conhecimentos
            </Link>
            <Link
              className="nav-item"
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={false}
              offset={-100}
            >
              Projetos
            </Link>
            <Link
              className="nav-item"
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={false}
            >
              Contato
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
