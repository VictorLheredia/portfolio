import "../styles/Contact.css";
import { Container } from "react-bootstrap";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import email from "../img/new-message.svg";

export default function Contact() {
  return (
    <Container id="md">
      <div id="Contact">
        <div className="title">Contato</div>
        <div className="contact-body">
          <div className="contact-item">
            <div className="icon">
              <MdOutlineMarkEmailRead />
            </div>
            <div className="text">victorluizheredia@gmail.com</div>
          </div>
          <a
            href=" https://wa.me/5515998318850"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-item">
              <div className="icon">
                <FaWhatsapp />
              </div>
              <div className="text">(15) 99831-8850</div>
            </div>
          </a>
          <img src={email} alt="email" />
        </div>
      </div>
    </Container>
  );
}
